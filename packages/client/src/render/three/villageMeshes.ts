import {
  CORAL_PARK_ISLAND_CX,
  CORAL_PARK_ISLAND_CY,
  coralParkGrassRadius,
  coralParkLandSurfaceY,
} from '@osrs-surfing/engine';
import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
} from 'three';

import { tileToWorld3 } from './worldCoords.js';

const THATCH = 0x9b7c3c;
const THATCH_RIDGE = 0x7a5c28;
const POST_WOOD = 0x6b4a2a;
const PLATFORM_WOOD = 0xb89468;

/** Decorative fale spots: polar angle and how far out along the grass radius. */
const HUT_SPOTS = [
  { angle: Math.PI / 2 - 0.35, distanceShare: 0.55, footprint: 5, facing: Math.PI / 2 },
  { angle: Math.PI / 2 + 0.55, distanceShare: 0.6, footprint: 3.6, facing: Math.PI / 2 + 0.6 },
  { angle: -2.7, distanceShare: 0.58, footprint: 4.2, facing: -2.7 },
  { angle: -0.2, distanceShare: 0.5, footprint: 3.2, facing: -0.2 },
] as const;

function flatMaterial(color: number): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness: 0.9, flatShading: true });
}

/** Open-walled Polynesian fale: raised platform, corner posts, hipped thatch roof. */
function makeFale(footprint: number): Group {
  const group = new Group();
  const platformHeight = footprint * 0.05;
  const postHeight = footprint * 0.24;
  const roofHeight = footprint * 0.38;
  const halfX = footprint * 0.5;
  const halfZ = footprint * 0.36;

  const platform = new Mesh(
    new BoxGeometry(halfX * 2.2, platformHeight, halfZ * 2.3),
    flatMaterial(PLATFORM_WOOD),
  );
  platform.position.y = platformHeight / 2;
  group.add(platform);

  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const post = new Mesh(
        new CylinderGeometry(footprint * 0.035, footprint * 0.045, postHeight, 5),
        flatMaterial(POST_WOOD),
      );
      post.position.set(sx * halfX * 0.85, platformHeight + postHeight / 2, sz * halfZ * 0.85);
      group.add(post);
    }
  }

  const roofBaseY = platformHeight + postHeight;
  const roof = new Mesh(new ConeGeometry(footprint * 0.78, roofHeight, 4), flatMaterial(THATCH));
  roof.scale.set(1.25, 1, 0.95);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = roofBaseY + roofHeight / 2;
  group.add(roof);

  const ridge = new Mesh(
    new ConeGeometry(footprint * 0.16, roofHeight * 0.28, 4),
    flatMaterial(THATCH_RIDGE),
  );
  ridge.rotation.y = Math.PI / 4;
  ridge.position.y = roofBaseY + roofHeight + roofHeight * 0.1;
  group.add(ridge);

  return group;
}

/** Static decorative village on the island grass — not interactive. */
export function buildVillage(): Group {
  const village = new Group();

  for (const spot of HUT_SPOTS) {
    const radius = coralParkGrassRadius(spot.angle) * spot.distanceShare;
    const tileX = CORAL_PARK_ISLAND_CX + Math.cos(spot.angle) * radius;
    const tileY = CORAL_PARK_ISLAND_CY + Math.sin(spot.angle) * radius;
    const surfaceY = coralParkLandSurfaceY(tileX, tileY, 'grass');

    const fale = makeFale(spot.footprint);
    const world = tileToWorld3(tileX, tileY);
    fale.position.set(world.x, surfaceY, world.z);
    fale.rotation.y = -spot.facing + Math.PI / 2;
    village.add(fale);
  }

  return village;
}

export function disposeVillage(village: Group): void {
  village.traverse((node) => {
    if (node instanceof Mesh) {
      node.geometry.dispose();
      (node.material as MeshStandardMaterial).dispose();
    }
  });
}
