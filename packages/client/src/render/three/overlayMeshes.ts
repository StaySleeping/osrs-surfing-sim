import {
  coralParkLandSurfaceY,
  getTile,
  headingToDegrees,
  normalizeAngle,
  tideRideSurfaceY,
  type SimulationSnapshot,
  type WorldMap,
} from '@osrs-surfing/engine';
import {
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  TorusGeometry,
} from 'three';

import type { DisplaySimulationSnapshot } from '../visualSnapshot.js';

import { tileToWorld3 } from './worldCoords.js';

const OVERLAY_Y = 0.2;
const CLICK_ARROW_RADIUS_TILES = 1.4;
const ARROW_ORBIT_RADIUS_TILES = 0.9;

const TRUE_TILE_COLOR = 0x00c8b4;
const TRUE_TILE_FILL_OPACITY = 0.3;
const TRUE_TILE_BORDER_OPACITY = 0.9;
/** Lift above the surface to avoid z-fighting with water and sand. */
const TRUE_TILE_LIFT_Y = 0.07;

function buildTrueTileMarker(): Group {
  const group = new Group();

  const fill = new Mesh(
    new PlaneGeometry(1, 1),
    new MeshBasicMaterial({
      color: TRUE_TILE_COLOR,
      transparent: true,
      opacity: TRUE_TILE_FILL_OPACITY,
      side: DoubleSide,
      depthWrite: false,
    }),
  );
  fill.rotation.x = -Math.PI / 2;

  const half = 0.5;
  const borderGeometry = new BufferGeometry();
  borderGeometry.setAttribute(
    'position',
    new Float32BufferAttribute([-half, 0, -half, half, 0, -half, half, 0, half, -half, 0, half], 3),
  );
  const border = new LineLoop(
    borderGeometry,
    new LineBasicMaterial({
      color: TRUE_TILE_COLOR,
      transparent: true,
      opacity: TRUE_TILE_BORDER_OPACITY,
    }),
  );

  group.add(fill, border);
  group.visible = false;
  return group;
}

function makeLine(points: number[], color: number, opacity = 1): Line {
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
  return new Line(geometry, new LineBasicMaterial({ color, transparent: opacity < 1, opacity }));
}

export class OverlayLayer {
  readonly root = new Group();
  private readonly walkClick = new Group();
  private readonly tide = new Group();
  private readonly facing = new Group();
  private readonly headingArrow = new Group();
  private readonly intendedGhost = new Group();
  private readonly trueTile = buildTrueTileMarker();
  private trueTileEnabled = false;
  private lines: Line[] = [];

  constructor() {
    this.root.add(
      this.walkClick,
      this.tide,
      this.facing,
      this.headingArrow,
      this.intendedGhost,
      this.trueTile,
    );
  }

  sync(snapshot: DisplaySimulationSnapshot, map: WorldMap): void {
    this.clearDynamic();

    this.drawWalkClick(snapshot);
    this.drawTide(snapshot);
    this.drawFacing(snapshot, map);
    this.drawHeadingArrow(snapshot);
    this.drawIntendedGhost(snapshot);
    this.updateTrueTile(snapshot, map);
  }

  setTrueTileVisible(visible: boolean): void {
    this.trueTileEnabled = visible;
    this.trueTile.visible = visible;
  }

  private updateTrueTile(snapshot: DisplaySimulationSnapshot, map: WorldMap): void {
    if (!this.trueTileEnabled) {
      return;
    }
    const tx = Math.floor(snapshot.simulationPosition.x);
    const ty = Math.floor(snapshot.simulationPosition.y);
    const tile = getTile(map, tx, ty);
    const surfaceY =
      tile === 'grass' || tile === 'sand'
        ? coralParkLandSurfaceY(tx + 0.5, ty + 0.5, tile)
        : tideRideSurfaceY(tx + 0.5, ty + 0.5, snapshot.tide);
    this.trueTile.position.set(tx + 0.5, surfaceY + TRUE_TILE_LIFT_Y, ty + 0.5);
  }

  private clearDynamic(): void {
    for (const line of this.lines) {
      line.geometry.dispose();
      (line.material as LineBasicMaterial).dispose();
      line.removeFromParent();
    }
    this.lines = [];
    this.walkClick.clear();
    this.tide.clear();
    this.facing.clear();
    this.headingArrow.clear();
    this.intendedGhost.clear();
  }

  private addLine(parent: Group, points: number[], color: number, opacity = 1): void {
    const line = makeLine(points, color, opacity);
    parent.add(line);
    this.lines.push(line);
  }

  private drawWalkClick(snapshot: SimulationSnapshot): void {
    if (snapshot.boardMounted || snapshot.walkTargetTx === null || snapshot.walkTargetTy === null) {
      return;
    }

    const tx = snapshot.walkTargetTx;
    const ty = snapshot.walkTargetTy;
    const color = snapshot.walkClickValid ? 0xffff00 : 0xff4444;
    const pad = 0.15;

    this.addLine(
      this.walkClick,
      [tx + pad, OVERLAY_Y, ty + pad, tx + 1 - pad, OVERLAY_Y, ty + 1 - pad],
      color,
    );
    this.addLine(
      this.walkClick,
      [tx + 1 - pad, OVERLAY_Y, ty + pad, tx + pad, OVERLAY_Y, ty + 1 - pad],
      color,
    );
  }

  private drawTide(snapshot: SimulationSnapshot): void {
    const tide = snapshot.tide;
    if (!tide) {
      return;
    }

    const pos = tileToWorld3(tide.centerX, tide.centerY);
    const edges = [tide.phaseRadians, normalizeAngle(tide.phaseRadians + tide.sweepRadians)];
    const spread = 0.12;
    const arcSteps = 36;

    for (const edgeAngle of edges) {
      for (const radius of [tide.innerRadius, tide.outerRadius]) {
        const points: number[] = [];
        for (let i = 0; i <= arcSteps; i += 1) {
          const t = edgeAngle + spread * (i / arcSteps - 0.5);
          points.push(pos.x + Math.cos(t) * radius, OVERLAY_Y * 0.5, pos.z + Math.sin(t) * radius);
        }
        this.addLine(this.tide, points, 0xb8e8ff, 0.55);
      }
    }
  }

  private drawFacing(snapshot: SimulationSnapshot, map: WorldMap): void {
    const pos = tileToWorld3(snapshot.surfboard.position.x, snapshot.surfboard.position.y);
    let angle: number;

    if (!snapshot.boardMounted) {
      angle = (headingToDegrees(snapshot.surfboard.currentHeading) * Math.PI) / 180;
      const len = 0.35;
      const originY = pos.y + 0.35;
      this.addLine(
        this.facing,
        [
          pos.x,
          originY,
          pos.z,
          pos.x + Math.cos(angle) * len,
          originY,
          pos.z + Math.sin(angle) * len,
        ],
        0xffffff,
      );
      return;
    }

    const tile = getTile(
      map,
      Math.floor(snapshot.surfboard.position.x),
      Math.floor(snapshot.surfboard.position.y),
    );
    const beached = snapshot.surfboard.speedState === 'seated' && tile === 'sand';
    angle = beached ? 0 : (headingToDegrees(snapshot.surfboard.currentHeading) * Math.PI) / 180;
    const len = 0.55;
    const tipX = pos.x + Math.cos(angle) * len;
    const tipZ = pos.z + Math.sin(angle) * len;

    this.addLine(this.facing, [pos.x, pos.y + 0.15, pos.z, tipX, pos.y + 0.15, tipZ], 0xffffff);

    const head = new Mesh(
      new TorusGeometry(0.01, 0.08, 4, 12),
      new MeshBasicMaterial({ color: 0xffffff }),
    );
    head.position.set(tipX, pos.y + 0.15, tipZ);
    head.rotation.x = Math.PI / 2;
    this.facing.add(head);
  }

  private drawHeadingArrow(snapshot: SimulationSnapshot): void {
    if (
      !snapshot.boardMounted ||
      snapshot.hoverHeading === null ||
      snapshot.cursorWorldX === null ||
      snapshot.cursorWorldY === null
    ) {
      return;
    }

    const pos = tileToWorld3(snapshot.surfboard.position.x, snapshot.surfboard.position.y);
    const hoverAngle = (headingToDegrees(snapshot.hoverHeading) * Math.PI) / 180;
    const orbitX = pos.x + Math.cos(hoverAngle) * ARROW_ORBIT_RADIUS_TILES;
    const orbitZ = pos.z + Math.sin(hoverAngle) * ARROW_ORBIT_RADIUS_TILES;
    const color = snapshot.clickValid ? 0xffffff : 0xff4444;

    this.addLine(
      this.headingArrow,
      [pos.x, pos.y + 0.18, pos.z, orbitX, pos.y + 0.18, orbitZ],
      color,
      0.5,
    );

    const arrowLen = CLICK_ARROW_RADIUS_TILES * 0.5;
    const tipX = orbitX + Math.cos(hoverAngle) * arrowLen;
    const tipZ = orbitZ + Math.sin(hoverAngle) * arrowLen;
    this.addLine(
      this.headingArrow,
      [orbitX, pos.y + 0.18, orbitZ, tipX, pos.y + 0.18, tipZ],
      color,
    );
  }

  private drawIntendedGhost(snapshot: SimulationSnapshot): void {
    if (
      !snapshot.boardMounted ||
      snapshot.surfboard.currentHeading === snapshot.surfboard.intendedHeading
    ) {
      return;
    }

    const pos = tileToWorld3(snapshot.surfboard.position.x, snapshot.surfboard.position.y);
    const targetAngle = (headingToDegrees(snapshot.surfboard.intendedHeading) * Math.PI) / 180;
    const len = 0.45;

    this.addLine(
      this.intendedGhost,
      [
        pos.x,
        pos.y + 0.16,
        pos.z,
        pos.x + Math.cos(targetAngle) * len,
        pos.y + 0.16,
        pos.z + Math.sin(targetAngle) * len,
      ],
      0xaaccff,
      0.6,
    );
  }

  dispose(): void {
    this.clearDynamic();
    for (const child of this.trueTile.children) {
      if (child instanceof Mesh || child instanceof Line) {
        child.geometry.dispose();
        (child.material as MeshBasicMaterial | LineBasicMaterial).dispose();
      }
    }
    this.trueTile.clear();
  }
}
