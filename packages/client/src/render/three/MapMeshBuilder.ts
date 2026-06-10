import {
  coralParkLandElevationKey,
  coralParkLandSurfaceY,
  TIDE_LEADING_WASH_HEIGHT,
  TIDE_REEF_SINK_Y,
  tideWaveSurfaceAtAngle,
  type TideState,
  type TileType,
  type WorldMap,
} from '@osrs-surfing/engine';
import {
  BoxGeometry,
  Color,
  Group,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
} from 'three';

import { renderVariantColor, resolveRenderTileVariant } from '../tileAppearance.js';
import { TILE_PALETTE } from '../tilePalette.js';
import { paletteHex } from './hexColor.js';
import { TideEdgeLayer } from './tideVisualMeshes.js';

const OVERLAY_TILE_HEIGHT = 0.06;
const OVERLAY_TILE_CENTER_Y = OVERLAY_TILE_HEIGHT / 2;
const TIDE_WATER_COLUMN_MIN_HEIGHT = 0.35;

const MATRIX = new Matrix4();

type TileInstance = { tx: number; ty: number };

interface TideAnimInstance {
  tx: number;
  ty: number;
  mesh: InstancedMesh;
  index: number;
  baseCenterY: number;
  tileHeight: number;
  /** Polar angle around the tide centre; filled lazily on first tide update. */
  angle: number;
  /** Whether the tile sits inside the reef-ring radial band the wave affects. */
  inRing: boolean;
  /** Last applied wave height — instances are skipped when unchanged. */
  lastWave: number;
}

/** Wave-height change below this is invisible; skip the instance update. */
const WAVE_EPSILON = 0.01;
/** Existing cap visibility threshold from the legacy per-frame rebuild. */
const CAP_MIN_WAVE_TOP = 0.08;
/** Flood share where coral flips to its submerged colour (resolveRenderTileVariant). */
const CORAL_SUBMERGE_FLOOD = 0.35;

const ZERO_SCALE_MATRIX = new Matrix4().makeScale(0, 0, 0);

const TIDE_ANIM_TILES: ReadonlySet<TileType> = new Set(['coral_rideable', 'shallow']);

const CORAL_EXPOSED_COLOR = new Color(paletteHex(TILE_PALETTE.reefExposed));
const CORAL_SUBMERGED_COLOR = new Color(paletteHex(TILE_PALETTE.reefSubmerged));

/**
 * Coral tiles flip between exposed/submerged colors with the tide, so they get
 * their own instanced mesh with per-instance colors; everything else is static.
 */
function groupInstancesByColor(map: WorldMap, includeLand: boolean): Map<number, TileInstance[]> {
  const groups = new Map<number, TileInstance[]>();

  for (let ty = 0; ty < map.heightTiles; ty += 1) {
    for (let tx = 0; tx < map.widthTiles; tx += 1) {
      const tile = map.tiles[ty][tx];
      let color: number | null = null;

      if (includeLand && (tile === 'grass' || tile === 'sand')) {
        color = renderVariantColor(tile);
      } else if (
        !includeLand &&
        tile !== 'deep_water' &&
        tile !== 'grass' &&
        tile !== 'sand' &&
        tile !== 'coral_rideable'
      ) {
        const variant = resolveRenderTileVariant(tile, tx + 0.5, ty + 0.5, null);
        color = renderVariantColor(variant);
      }

      if (color === null) {
        continue;
      }

      const list = groups.get(color) ?? [];
      list.push({ tx, ty });
      groups.set(color, list);
    }
  }

  return groups;
}

function collectCoralTiles(map: WorldMap): TileInstance[] {
  const tiles: TileInstance[] = [];
  for (let ty = 0; ty < map.heightTiles; ty += 1) {
    for (let tx = 0; tx < map.widthTiles; tx += 1) {
      if (map.tiles[ty][tx] === 'coral_rideable') {
        tiles.push({ tx, ty });
      }
    }
  }
  return tiles;
}

function landTileSurfaceY(tx: number, ty: number, tile: TileType): number {
  if (tile === 'grass' || tile === 'sand') {
    return coralParkLandSurfaceY(tx + 0.5, ty + 0.5, tile);
  }
  return OVERLAY_TILE_HEIGHT;
}

function buildInstancedLayer(
  groups: Map<number, TileInstance[]>,
  map: WorldMap,
  tideAnimInstances: TideAnimInstance[],
  options: { landElevation: boolean; flatHeight: number; flatCenterY: number },
): InstancedMesh[] {
  const meshes: InstancedMesh[] = [];

  for (const [color, instances] of groups) {
    const mesh = new InstancedMesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: paletteHex(color) }),
      instances.length,
    );
    mesh.castShadow = false;
    mesh.receiveShadow = false;

    for (let i = 0; i < instances.length; i += 1) {
      const { tx, ty } = instances[i];
      const tile = map.tiles[ty][tx];
      const tileHeight = options.landElevation
        ? landTileSurfaceY(tx, ty, tile)
        : options.flatHeight;
      const centerY = options.landElevation ? tileHeight / 2 : options.flatCenterY;
      MATRIX.makeScale(1, tileHeight, 1);
      MATRIX.setPosition(tx + 0.5, centerY, ty + 0.5);
      mesh.setMatrixAt(i, MATRIX);

      if (TIDE_ANIM_TILES.has(tile)) {
        tideAnimInstances.push({
          tx,
          ty,
          mesh,
          index: i,
          baseCenterY: centerY,
          tileHeight,
          angle: 0,
          inRing: true,
          lastWave: Number.NaN,
        });
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    meshes.push(mesh);
  }

  return meshes;
}

function disposeMeshes(meshes: InstancedMesh[]): void {
  for (const mesh of meshes) {
    mesh.geometry.dispose();
    (mesh.material as MeshStandardMaterial).dispose();
  }
}

export class MapMeshBuilder {
  readonly root = new Group();
  readonly tideEdges = new TideEdgeLayer();
  private water: Mesh | null = null;
  private landMeshes: InstancedMesh[] = [];
  private overlayMeshes: InstancedMesh[] = [];
  private tideAnimInstances: TideAnimInstance[] = [];
  private waterCaps: InstancedMesh | null = null;
  private coralMesh: InstancedMesh | null = null;
  private coralTiles: TileInstance[] = [];
  private coralSubmerged: Uint8Array = new Uint8Array(0);
  private polarReady = false;
  private mapKey: string | null = null;

  constructor() {
    this.root.add(this.tideEdges.root);
  }

  build(map: WorldMap, tide: TideState | null): void {
    const nextKey = `${map.widthTiles}x${map.heightTiles}:${coralParkLandElevationKey()}`;
    if (this.mapKey === nextKey) {
      return;
    }
    this.destroy();

    const waterMaterial = new MeshStandardMaterial({
      color: paletteHex(TILE_PALETTE.deepWater),
      roughness: 0.85,
      metalness: 0.05,
    });
    this.water = new Mesh(new PlaneGeometry(map.widthTiles, map.heightTiles), waterMaterial);
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.set(map.widthTiles / 2, 0, map.heightTiles / 2);
    this.water.receiveShadow = true;
    this.root.add(this.water);

    const landGroups = groupInstancesByColor(map, true);
    this.landMeshes = buildInstancedLayer(landGroups, map, [], {
      landElevation: true,
      flatHeight: OVERLAY_TILE_HEIGHT,
      flatCenterY: OVERLAY_TILE_CENTER_Y,
    });
    for (const mesh of this.landMeshes) {
      this.root.add(mesh);
    }

    this.rebuildOverlay(map, tide);
    this.mapKey = nextKey;
  }

  rebuildOverlay(map: WorldMap, tide: TideState | null): void {
    for (const mesh of this.overlayMeshes) {
      this.root.remove(mesh);
    }
    disposeMeshes(this.overlayMeshes);
    this.overlayMeshes = [];

    if (this.waterCaps) {
      this.root.remove(this.waterCaps);
      this.waterCaps.geometry.dispose();
      (this.waterCaps.material as MeshStandardMaterial).dispose();
      this.waterCaps = null;
    }
    if (this.coralMesh) {
      this.root.remove(this.coralMesh);
      this.coralMesh.geometry.dispose();
      (this.coralMesh.material as MeshStandardMaterial).dispose();
      this.coralMesh = null;
    }

    this.tideAnimInstances = [];
    const overlayGroups = groupInstancesByColor(map, false);
    this.overlayMeshes = buildInstancedLayer(overlayGroups, map, this.tideAnimInstances, {
      landElevation: false,
      flatHeight: OVERLAY_TILE_HEIGHT,
      flatCenterY: OVERLAY_TILE_CENTER_Y,
    });
    for (const mesh of this.overlayMeshes) {
      this.root.add(mesh);
    }

    this.buildCoralMesh(map);

    if (this.tideAnimInstances.length > 0) {
      this.waterCaps = new InstancedMesh(
        new BoxGeometry(1, 1, 1),
        new MeshStandardMaterial({
          color: paletteHex(TILE_PALETTE.shallow),
          transparent: true,
          opacity: 0.62,
          roughness: 0.35,
          metalness: 0.1,
        }),
        this.tideAnimInstances.length,
      );
      // Caps keep one stable slot per tide instance; hidden slots are zero-scaled.
      for (let i = 0; i < this.tideAnimInstances.length; i += 1) {
        this.waterCaps.setMatrixAt(i, ZERO_SCALE_MATRIX);
      }
      this.waterCaps.instanceMatrix.needsUpdate = true;
      this.root.add(this.waterCaps);
    }

    this.polarReady = false;
    this.updateTideVisuals(map, tide);
  }

  private buildCoralMesh(map: WorldMap): void {
    this.coralTiles = collectCoralTiles(map);
    this.coralSubmerged = new Uint8Array(this.coralTiles.length).fill(255);
    if (this.coralTiles.length === 0) {
      return;
    }

    const mesh = new InstancedMesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({ color: 0xffffff }),
      this.coralTiles.length,
    );
    mesh.castShadow = false;
    mesh.receiveShadow = false;

    for (let i = 0; i < this.coralTiles.length; i += 1) {
      const { tx, ty } = this.coralTiles[i];
      MATRIX.makeScale(1, OVERLAY_TILE_HEIGHT, 1);
      MATRIX.setPosition(tx + 0.5, OVERLAY_TILE_CENTER_Y, ty + 0.5);
      mesh.setMatrixAt(i, MATRIX);
      mesh.setColorAt(i, CORAL_EXPOSED_COLOR);
      this.tideAnimInstances.push({
        tx,
        ty,
        mesh,
        index: i,
        baseCenterY: OVERLAY_TILE_CENTER_Y,
        tileHeight: OVERLAY_TILE_HEIGHT,
        angle: 0,
        inRing: true,
        lastWave: Number.NaN,
      });
    }
    mesh.instanceMatrix.needsUpdate = true;

    this.coralMesh = mesh;
    this.root.add(mesh);
  }

  /** Polar coords are static per tile; cache them once the tide centre is known. */
  private initPolarCache(tide: TideState): void {
    for (const ref of this.tideAnimInstances) {
      const dx = ref.tx + 0.5 - tide.centerX;
      const dy = ref.ty + 0.5 - tide.centerY;
      const dist = Math.hypot(dx, dy);
      ref.angle = Math.atan2(dy, dx);
      const innerR = tide.innerRadiusAtAngle?.(ref.angle) ?? tide.innerRadius;
      const outerR = tide.outerRadiusAtAngle?.(ref.angle) ?? tide.outerRadius;
      ref.inRing = dist >= innerR - 0.5 && dist <= outerR + 0.5;
      ref.lastWave = Number.NaN;
    }
    this.polarReady = true;
  }

  updateTideVisuals(map: WorldMap, tide: TideState | null): void {
    void map;

    if (tide && !this.polarReady) {
      this.initPolarCache(tide);
    }

    const touched = new Set<InstancedMesh>();
    let capsDirty = false;
    let colorDirty = false;

    for (let i = 0; i < this.tideAnimInstances.length; i += 1) {
      const ref = this.tideAnimInstances[i];
      const waveTop = tide && ref.inRing ? tideWaveSurfaceAtAngle(ref.angle, tide) : 0;
      if (Math.abs(waveTop - ref.lastWave) < WAVE_EPSILON) {
        continue;
      }
      ref.lastWave = waveTop;
      const floodFactor = TIDE_LEADING_WASH_HEIGHT > 0 ? waveTop / TIDE_LEADING_WASH_HEIGHT : 0;

      const centerY = ref.baseCenterY - floodFactor * TIDE_REEF_SINK_Y;
      MATRIX.makeScale(1, ref.tileHeight, 1);
      MATRIX.setPosition(ref.tx + 0.5, centerY, ref.ty + 0.5);
      ref.mesh.setMatrixAt(ref.index, MATRIX);
      touched.add(ref.mesh);

      if (this.waterCaps) {
        if (waveTop < CAP_MIN_WAVE_TOP) {
          this.waterCaps.setMatrixAt(i, ZERO_SCALE_MATRIX);
        } else {
          const reefBottom = ref.baseCenterY - ref.tileHeight / 2 - floodFactor * TIDE_REEF_SINK_Y;
          const columnHeight = Math.max(TIDE_WATER_COLUMN_MIN_HEIGHT, waveTop - reefBottom);
          MATRIX.makeScale(1, columnHeight, 1);
          MATRIX.setPosition(ref.tx + 0.5, reefBottom + columnHeight / 2, ref.ty + 0.5);
          this.waterCaps.setMatrixAt(i, MATRIX);
        }
        capsDirty = true;
      }

      if (this.coralMesh && ref.mesh === this.coralMesh) {
        const submerged = floodFactor > CORAL_SUBMERGE_FLOOD ? 1 : 0;
        if (this.coralSubmerged[ref.index] !== submerged) {
          this.coralSubmerged[ref.index] = submerged;
          this.coralMesh.setColorAt(
            ref.index,
            submerged ? CORAL_SUBMERGED_COLOR : CORAL_EXPOSED_COLOR,
          );
          colorDirty = true;
        }
      }
    }

    for (const mesh of touched) {
      mesh.instanceMatrix.needsUpdate = true;
    }
    if (capsDirty && this.waterCaps) {
      this.waterCaps.instanceMatrix.needsUpdate = true;
    }
    if (colorDirty && this.coralMesh?.instanceColor) {
      this.coralMesh.instanceColor.needsUpdate = true;
    }

    this.tideEdges.sync(tide);
  }

  setWaterScroll(scrollX: number, scrollY: number): void {
    if (!this.water) {
      return;
    }
    const material = this.water.material as MeshStandardMaterial;
    material.map = null;
    void scrollX;
    void scrollY;
  }

  destroy(): void {
    if (this.water) {
      this.water.geometry.dispose();
      (this.water.material as MeshStandardMaterial).dispose();
      this.root.remove(this.water);
      this.water = null;
    }
    for (const mesh of this.landMeshes) {
      this.root.remove(mesh);
    }
    disposeMeshes(this.landMeshes);
    this.landMeshes = [];
    for (const mesh of this.overlayMeshes) {
      this.root.remove(mesh);
    }
    disposeMeshes(this.overlayMeshes);
    this.overlayMeshes = [];
    if (this.waterCaps) {
      this.root.remove(this.waterCaps);
      this.waterCaps.geometry.dispose();
      (this.waterCaps.material as MeshStandardMaterial).dispose();
      this.waterCaps = null;
    }
    if (this.coralMesh) {
      this.root.remove(this.coralMesh);
      this.coralMesh.geometry.dispose();
      (this.coralMesh.material as MeshStandardMaterial).dispose();
      this.coralMesh = null;
    }
    this.coralTiles = [];
    this.coralSubmerged = new Uint8Array(0);
    this.tideAnimInstances = [];
    this.polarReady = false;
    this.tideEdges.sync(null);
    this.mapKey = null;
  }
}
