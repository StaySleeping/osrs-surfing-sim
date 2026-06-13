import {
  Group,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  CylinderGeometry,
  BoxGeometry,
} from 'three';

const PET_FOLLOW_LERP = 0.12;
const PET_BOB_AMPLITUDE = 0.06;
const PET_BOB_SPEED = 0.003;
const BUBBLE_RADIUS = 0.35;
const JELLY_BELL_COLOR = 0xf4a7c8;
const JELLY_TENTACLE_COLOR = 0xe878a8;
const BUBBLE_COLOR = 0x88c8f0;

function flatMaterial(color: number, roughness = 0.9): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, flatShading: true });
}

function makeJellyfishMesh(): Group {
  const group = new Group();
  const bell = new Mesh(
    new CylinderGeometry(0.12, 0.16, 0.1, 8),
    flatMaterial(JELLY_BELL_COLOR, 0.7),
  );
  bell.position.y = 0.05;
  group.add(bell);

  const tentacleOffsets = [-0.08, -0.04, 0, 0.04, 0.08];
  for (const offset of tentacleOffsets) {
    const tentacle = new Mesh(
      new BoxGeometry(0.03, 0.14, 0.03),
      flatMaterial(JELLY_TENTACLE_COLOR, 0.85),
    );
    tentacle.position.set(offset, -0.08, 0);
    group.add(tentacle);
  }

  return group;
}

export class PetFollower {
  readonly root = new Group();
  private readonly bubble: Mesh;
  private currentX = 0;
  private currentY = 0;
  private currentZ = 0;
  private initialized = false;

  constructor() {
    const jellyfish = makeJellyfishMesh();
    this.bubble = new Mesh(
      new SphereGeometry(BUBBLE_RADIUS, 12, 10),
      new MeshStandardMaterial({
        color: BUBBLE_COLOR,
        transparent: true,
        opacity: 0.28,
        roughness: 0.15,
        metalness: 0.05,
        flatShading: true,
      }),
    );
    this.root.add(this.bubble, jellyfish);
    this.root.visible = false;
  }

  sync(
    visible: boolean,
    targetX: number,
    targetY: number,
    targetZ: number,
    visualTimeMs: number,
  ): void {
    this.root.visible = visible;
    if (!visible) {
      return;
    }

    if (!this.initialized) {
      this.currentX = targetX;
      this.currentY = targetY;
      this.currentZ = targetZ;
      this.initialized = true;
    }

    this.currentX += (targetX - this.currentX) * PET_FOLLOW_LERP;
    this.currentY += (targetY - this.currentY) * PET_FOLLOW_LERP;
    this.currentZ += (targetZ - this.currentZ) * PET_FOLLOW_LERP;

    const bob = Math.sin(visualTimeMs * PET_BOB_SPEED) * PET_BOB_AMPLITUDE;
    this.root.position.set(this.currentX, this.currentY + bob, this.currentZ);
    this.root.rotation.y = visualTimeMs * 0.0004;
  }

  dispose(): void {
    this.root.traverse((child) => {
      if (child instanceof Mesh) {
        child.geometry.dispose();
        (child.material as MeshStandardMaterial).dispose();
      }
    });
  }
}
