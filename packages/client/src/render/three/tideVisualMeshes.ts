import {
  TIDE_LEADING_WASH_HEIGHT,
  TIDE_WATER_RISE_Y,
  normalizeAngle,
  tideVisualDepthAtAngle,
  tideWaveSurfaceAtProgress,
  type TideState,
} from '@osrs-surfing/engine';
import { BoxGeometry, Group, InstancedMesh, Matrix4, MeshStandardMaterial } from 'three';

import { tileToWorld3 } from './worldCoords.js';

const TAU = Math.PI * 2;
const MATRIX = new Matrix4();
const EDGE_ARC_STEPS = 28;
const EDGE_INSET = 0.08;
/** Light crest accent only — bulky wash body removed for the smooth water heightfield. */
const CREST_ARC_STEPS = 36;
const CREST_ARC_SPREAD = 0.22;
const CREST_RADIAL_SAMPLES = 3;

function radiusAtAngle(tide: TideState, angle: number, outer: boolean): number {
  if (outer) {
    return tide.outerRadiusAtAngle?.(angle) ?? tide.outerRadius;
  }
  return tide.innerRadiusAtAngle?.(angle) ?? tide.innerRadius;
}

function reefRadiusAtAngle(tide: TideState, angle: number, radialT: number): number {
  const inner = radiusAtAngle(tide, angle, false);
  const outer = radiusAtAngle(tide, angle, true);
  return inner + (outer - inner) * radialT;
}

function edgeDepth(tide: TideState, edgeAngle: number, isLeading: boolean): number {
  const probe = isLeading ? normalizeAngle(edgeAngle + 0.04) : normalizeAngle(edgeAngle - 0.04);
  return tideVisualDepthAtAngle(probe, tide);
}

export class TideEdgeLayer {
  readonly root = new Group();
  private leading: InstancedMesh | null = null;
  private trailing: InstancedMesh | null = null;
  private washCrest: InstancedMesh | null = null;
  private capacity = 0;
  private crestCapacity = 0;

  constructor() {
    const foamMaterial = new MeshStandardMaterial({
      color: 0xe8f8ff,
      transparent: true,
      opacity: 0.75,
      roughness: 0.3,
      metalness: 0.05,
    });
    const washMaterial = new MeshStandardMaterial({
      color: 0x8ec8e0,
      transparent: true,
      opacity: 0.45,
      roughness: 0.5,
      metalness: 0.05,
    });
    const crestMaterial = new MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.82,
      roughness: 0.1,
      metalness: 0.04,
      emissive: 0xffffff,
      emissiveIntensity: 0.14,
    });

    this.capacity = EDGE_ARC_STEPS * 4;
    const edgeHeight = Math.max(0.35, TIDE_WATER_RISE_Y * 0.08);
    this.leading = new InstancedMesh(
      new BoxGeometry(1, edgeHeight, 0.08),
      foamMaterial,
      this.capacity,
    );
    this.trailing = new InstancedMesh(
      new BoxGeometry(1, edgeHeight, 0.08),
      washMaterial,
      this.capacity,
    );

    this.crestCapacity = CREST_ARC_STEPS * CREST_RADIAL_SAMPLES;
    this.washCrest = new InstancedMesh(new BoxGeometry(1, 1, 1), crestMaterial, this.crestCapacity);

    for (const mesh of [this.leading, this.trailing, this.washCrest]) {
      mesh.visible = false;
      // Instances follow the tide around the island; the bounding sphere three.js
      // computes on first render goes stale and culls them once the camera turns.
      mesh.frustumCulled = false;
    }
    this.root.add(this.leading, this.trailing, this.washCrest);
  }

  sync(tide: TideState | null): void {
    if (!tide || !this.leading || !this.trailing || !this.washCrest) {
      for (const mesh of [this.leading, this.trailing, this.washCrest]) {
        if (mesh) {
          mesh.visible = false;
        }
      }
      return;
    }

    const center = tileToWorld3(tide.centerX, tide.centerY);
    const edgeHeight = Math.max(0.35, TIDE_WATER_RISE_Y * 0.08);
    const edges: Array<{ angle: number; leading: boolean }> = [
      { angle: tide.phaseRadians, leading: true },
      { angle: normalizeAngle(tide.phaseRadians + tide.sweepRadians), leading: false },
    ];

    let leadingCount = 0;
    let trailingCount = 0;

    for (const edge of edges) {
      const depth = edgeDepth(tide, edge.angle, edge.leading);
      const spread = edge.leading ? 0.18 : 0.14;
      const mesh = edge.leading ? this.leading : this.trailing;
      let count = edge.leading ? leadingCount : trailingCount;

      for (const outer of [false, true]) {
        const baseRadius = radiusAtAngle(tide, edge.angle, outer);
        for (let i = 0; i <= EDGE_ARC_STEPS; i += 1) {
          if (count >= this.capacity) {
            break;
          }
          const t = edge.angle + spread * (i / EDGE_ARC_STEPS - 0.5);
          const radius = baseRadius + (outer ? EDGE_INSET : -EDGE_INSET);
          const x = center.x + Math.cos(t) * radius;
          const z = center.z + Math.sin(t) * radius;
          const waterY = tideWaveSurfaceAtProgress(edge.leading ? 0.04 : 0.96);
          const scale = edge.leading ? 0.75 + depth * 0.9 : 0.45 + depth * 0.55;

          if (scale < 0.05) {
            MATRIX.makeScale(0, 0, 0);
          } else {
            MATRIX.makeScale(scale, edgeHeight * (0.8 + depth * 1.1), scale * 0.65);
          }
          MATRIX.setPosition(x, waterY + edgeHeight * 0.45, z);
          mesh.setMatrixAt(count, MATRIX);
          count += 1;
        }
      }

      if (edge.leading) {
        leadingCount = count;
      } else {
        trailingCount = count;
      }
    }

    this.leading.count = leadingCount;
    this.leading.instanceMatrix.needsUpdate = true;
    this.leading.visible = leadingCount > 0;

    this.trailing.count = trailingCount;
    this.trailing.instanceMatrix.needsUpdate = true;
    this.trailing.visible = trailingCount > 0;

    this.syncCrestAccent(tide, center);
  }

  /** Thin trailing-edge foam line on top of the smooth water heightfield. */
  private syncCrestAccent(tide: TideState, center: { x: number; y: number; z: number }): void {
    if (!this.washCrest) {
      return;
    }

    const curlAngle = normalizeAngle(tide.phaseRadians + tide.sweepRadians);
    const washHeight = TIDE_LEADING_WASH_HEIGHT;
    let crestCount = 0;

    for (let i = 0; i <= CREST_ARC_STEPS; i += 1) {
      const arcT = curlAngle + CREST_ARC_SPREAD * (i / CREST_ARC_STEPS - 0.5);
      const arcBlend = 1 - Math.abs(i / CREST_ARC_STEPS - 0.5) * 1.4;

      for (let r = 0; r < CREST_RADIAL_SAMPLES; r += 1) {
        if (crestCount >= this.crestCapacity) {
          break;
        }

        const radialT = (r + 0.5) / CREST_RADIAL_SAMPLES;
        const radius = reefRadiusAtAngle(tide, arcT, radialT);
        const crestHeight = washHeight * 0.12 * arcBlend;
        const crestLift = washHeight * 0.92;
        const x = center.x + Math.cos(arcT) * radius;
        const z = center.z + Math.sin(arcT) * radius;
        const width = 1.2 + radialT * 0.6;
        const depth = 0.45 + radialT * 0.2;

        MATRIX.makeScale(width, crestHeight, depth);
        MATRIX.setPosition(x, crestLift + crestHeight * 0.4, z);
        this.washCrest.setMatrixAt(crestCount, MATRIX);
        crestCount += 1;
      }
    }

    this.washCrest.count = crestCount;
    this.washCrest.instanceMatrix.needsUpdate = true;
    this.washCrest.visible = crestCount > 0;
  }

  dispose(): void {
    for (const mesh of [this.leading, this.trailing, this.washCrest]) {
      if (!mesh) {
        continue;
      }
      mesh.geometry.dispose();
      (mesh.material as MeshStandardMaterial).dispose();
      mesh.removeFromParent();
    }
    this.leading = null;
    this.trailing = null;
    this.washCrest = null;
    void TAU;
  }
}
