import {
  coralParkLandElevationKey,
  coralParkLandSurfaceY,
  TIDE_LEADING_WASH_HEIGHT,
  tideReefYOffset,
  tideWaveSurfaceY,
  type TideState,
  type TileType,
  type WorldMap,
} from '@osrs-surfing/engine';
import { Color, Group, Mesh, MeshStandardMaterial, PlaneGeometry } from 'three';

import { renderVariantColor } from '../tileAppearance.js';
import { TILE_PALETTE } from '../tilePalette.js';
import { paletteHex } from './hexColor.js';
import { TideEdgeLayer } from './tideVisualMeshes.js';
import {
  buildHeightfieldMesh,
  type HeightfieldMesh,
  type HeightfieldTile,
} from './tileHeightfield.js';

/** Reef overlay tile top in world Y at low tide. */
const OVERLAY_TILE_HEIGHT = 0.06;
/** Skip water quads flatter than this above sea level. */
const WATER_HEIGHT_EPSILON = 0.04;
/** Flood share where coral flips to its submerged colour. */
const CORAL_SUBMERGE_FLOOD = 0.35;
/** Skip reef height updates below this delta. */
const REEF_SINK_EPSILON = 0.01;

const CORAL_EXPOSED_COLOR = new Color(paletteHex(TILE_PALETTE.reefExposed));
const CORAL_SUBMERGED_COLOR = new Color(paletteHex(TILE_PALETTE.reefSubmerged));

type TileCoord = { tx: number; ty: number };

function collectTiles(map: WorldMap, predicate: (tile: TileType) => boolean): TileCoord[] {
  const tiles: TileCoord[] = [];
  for (let ty = 0; ty < map.heightTiles; ty += 1) {
    for (let tx = 0; tx < map.widthTiles; tx += 1) {
      if (predicate(map.tiles[ty][tx])) {
        tiles.push({ tx, ty });
      }
    }
  }
  return tiles;
}

/** Shared corner height so grass/sand meshes meet without a vertical seam. */
function landCornerHeight(map: WorldMap, cx: number, cy: number): number {
  let hasGrass = false;
  let hasSand = false;
  for (const [dx, dy] of [
    [0, 0],
    [-1, 0],
    [0, -1],
    [-1, -1],
  ] as const) {
    const tx = cx + dx;
    const ty = cy + dy;
    if (tx < 0 || ty < 0 || tx >= map.widthTiles || ty >= map.heightTiles) {
      continue;
    }
    const tile = map.tiles[ty][tx];
    if (tile === 'grass') {
      hasGrass = true;
    } else if (tile === 'sand') {
      hasSand = true;
    }
  }
  if (hasGrass) {
    return coralParkLandSurfaceY(cx, cy, 'grass');
  }
  if (hasSand) {
    return coralParkLandSurfaceY(cx, cy, 'sand');
  }
  return 0;
}

function disposeHeightfields(fields: HeightfieldMesh[]): void {
  for (const field of fields) {
    field.dispose();
  }
}

export class MapMeshBuilder {
  readonly root = new Group();
  readonly tideEdges = new TideEdgeLayer();
  private water: Mesh | null = null;
  private landFields: HeightfieldMesh[] = [];
  private shallowField: HeightfieldMesh | null = null;
  private coralField: HeightfieldMesh | null = null;
  private solidField: HeightfieldMesh | null = null;
  private tideZoneField: HeightfieldMesh | null = null;
  private waterField: HeightfieldMesh | null = null;
  private coralTiles: TileCoord[] = [];
  private coralSubmerged: Uint8Array = new Uint8Array(0);
  private reefTiles: TileCoord[] = [];
  private lastTidePhase = Number.NaN;
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

    this.buildLand(map);
    this.rebuildOverlay(map, tide);
    this.mapKey = nextKey;
  }

  private buildLand(map: WorldMap): void {
    for (const landType of ['grass', 'sand'] as const) {
      const tiles = collectTiles(map, (tile) => tile === landType).map(
        (tile): HeightfieldTile => tile,
      );
      if (tiles.length === 0) {
        continue;
      }
      const field = buildHeightfieldMesh(tiles, (cx, cy) => landCornerHeight(map, cx, cy), {
        color: paletteHex(renderVariantColor(landType)),
        skirts: true,
        skirtBottom: 0,
        roughness: 0.92,
        flatShading: true,
      });
      this.landFields.push(field);
      this.root.add(field.mesh);
    }
  }

  rebuildOverlay(map: WorldMap, tide: TideState | null): void {
    this.clearOverlay();

    const shallowTiles = collectTiles(map, (tile) => tile === 'shallow');
    if (shallowTiles.length > 0) {
      this.shallowField = buildHeightfieldMesh(shallowTiles, () => OVERLAY_TILE_HEIGHT, {
        color: paletteHex(TILE_PALETTE.shallow),
        skirts: true,
        skirtBottom: 0,
        roughness: 0.85,
        flatShading: true,
      });
      this.root.add(this.shallowField.mesh);
    }

    const solidTiles = collectTiles(map, (tile) => tile === 'coral_solid');
    if (solidTiles.length > 0) {
      this.solidField = buildHeightfieldMesh(solidTiles, () => OVERLAY_TILE_HEIGHT, {
        color: paletteHex(TILE_PALETTE.coralSolid),
        skirts: true,
        skirtBottom: 0,
        roughness: 0.9,
        flatShading: true,
      });
      this.root.add(this.solidField.mesh);
    }

    const tideZoneTiles = collectTiles(map, (tile) => tile === 'tide_zone');
    if (tideZoneTiles.length > 0) {
      this.tideZoneField = buildHeightfieldMesh(tideZoneTiles, () => OVERLAY_TILE_HEIGHT, {
        color: paletteHex(TILE_PALETTE.tideZone),
        skirts: true,
        skirtBottom: 0,
        roughness: 0.85,
        flatShading: true,
      });
      this.root.add(this.tideZoneField.mesh);
    }

    this.coralTiles = collectTiles(map, (tile) => tile === 'coral_rideable');
    this.coralSubmerged = new Uint8Array(this.coralTiles.length).fill(255);
    if (this.coralTiles.length > 0) {
      this.coralField = buildHeightfieldMesh(
        this.coralTiles.map((tile) => ({ ...tile, color: CORAL_EXPOSED_COLOR.clone() })),
        () => OVERLAY_TILE_HEIGHT,
        {
          vertexColors: true,
          skirts: true,
          skirtBottom: 0,
          roughness: 0.85,
          flatShading: true,
        },
      );
      this.root.add(this.coralField.mesh);
    }

    this.reefTiles = [...shallowTiles, ...this.coralTiles];
    this.lastTidePhase = Number.NaN;
    this.updateTideVisuals(map, tide);
  }

  private clearWaterField(): void {
    if (this.waterField) {
      this.root.remove(this.waterField.mesh);
      this.waterField.dispose();
      this.waterField = null;
    }
  }

  private clearOverlay(): void {
    if (this.shallowField) {
      this.root.remove(this.shallowField.mesh);
      this.shallowField.dispose();
      this.shallowField = null;
    }
    if (this.coralField) {
      this.root.remove(this.coralField.mesh);
      this.coralField.dispose();
      this.coralField = null;
    }
    if (this.solidField) {
      this.root.remove(this.solidField.mesh);
      this.solidField.dispose();
      this.solidField = null;
    }
    if (this.tideZoneField) {
      this.root.remove(this.tideZoneField.mesh);
      this.tideZoneField.dispose();
      this.tideZoneField = null;
    }
    this.clearWaterField();
    this.coralTiles = [];
    this.coralSubmerged = new Uint8Array(0);
    this.reefTiles = [];
    this.lastTidePhase = Number.NaN;
  }

  /** Tiles with any corner above sea level — edge tiles slope down to y=0. */
  private collectWetTiles(tide: TideState): TileCoord[] {
    const wet: TileCoord[] = [];
    for (const tile of this.reefTiles) {
      const { tx, ty } = tile;
      const corners = [
        tideWaveSurfaceY(tx, ty, tide),
        tideWaveSurfaceY(tx + 1, ty, tide),
        tideWaveSurfaceY(tx, ty + 1, tide),
        tideWaveSurfaceY(tx + 1, ty + 1, tide),
      ];
      if (corners.some((y) => y > WATER_HEIGHT_EPSILON)) {
        wet.push(tile);
      }
    }
    return wet;
  }

  private syncWaterField(tide: TideState | null): void {
    this.clearWaterField();
    if (!tide) {
      return;
    }
    const wetTiles = this.collectWetTiles(tide);
    if (wetTiles.length === 0) {
      return;
    }
    this.waterField = buildHeightfieldMesh(wetTiles, (cx, cy) => tideWaveSurfaceY(cx, cy, tide), {
      color: paletteHex(TILE_PALETTE.shallow),
      transparent: true,
      opacity: 0.62,
      roughness: 0.35,
      metalness: 0.1,
      flatShading: true,
      skirts: false,
    });
    this.root.add(this.waterField.mesh);
  }

  updateTideVisuals(map: WorldMap, tide: TideState | null): void {
    void map;

    const phase = tide?.phaseRadians ?? -1;
    const phaseChanged =
      Number.isNaN(this.lastTidePhase) || Math.abs(phase - this.lastTidePhase) >= REEF_SINK_EPSILON;
    if (phaseChanged) {
      this.lastTidePhase = phase;
      const reefHeight = (cx: number, cy: number): number =>
        OVERLAY_TILE_HEIGHT + (tide ? tideReefYOffset(cx, cy, tide) : 0);
      this.shallowField?.setCornerHeights(reefHeight);
      this.coralField?.setCornerHeights(reefHeight);
      this.syncWaterField(tide);
    }

    if (this.coralField && this.coralTiles.length > 0) {
      let colorDirty = false;
      for (let i = 0; i < this.coralTiles.length; i += 1) {
        const { tx, ty } = this.coralTiles[i];
        const waveY = tide ? tideWaveSurfaceY(tx + 0.5, ty + 0.5, tide) : 0;
        const flood = TIDE_LEADING_WASH_HEIGHT > 0 ? waveY / TIDE_LEADING_WASH_HEIGHT : 0;
        const submerged = flood > CORAL_SUBMERGE_FLOOD ? 1 : 0;
        if (this.coralSubmerged[i] !== submerged) {
          this.coralSubmerged[i] = submerged;
          colorDirty = true;
        }
      }
      if (colorDirty) {
        const submergedByTile = new Map<string, boolean>();
        for (let i = 0; i < this.coralTiles.length; i += 1) {
          const { tx, ty } = this.coralTiles[i];
          submergedByTile.set(`${tx},${ty}`, this.coralSubmerged[i] === 1);
        }
        this.coralField.setTileColors((tx, ty) =>
          submergedByTile.get(`${tx},${ty}`) ? CORAL_SUBMERGED_COLOR : CORAL_EXPOSED_COLOR,
        );
      }
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
    for (const field of this.landFields) {
      this.root.remove(field.mesh);
    }
    disposeHeightfields(this.landFields);
    this.landFields = [];
    this.clearOverlay();
    this.tideEdges.sync(null);
    this.mapKey = null;
  }
}
