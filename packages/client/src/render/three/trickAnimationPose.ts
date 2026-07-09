import {
  headingToDegrees,
  snapAngleToHeading,
  TIDE_REEF_RIDE_SURFACE_Y,
  TRICK_ANIMATION_ALIGN_PROGRESS,
  trickAnimationPositionAtProgress,
} from '@osrs-surfing/engine';

import type { DisplayTrickAnimation } from '../visualSnapshot.js';

/**
 * Visual offsets in engine tile space (x = east, y = south).
 * Angles are in the board's local frame: pitch is nose-up positive, roll banks
 * about the length axis, riderLean is the rider's forward pitch.
 *
 * Lift is added on top of the water/reef ride surface. Feature meshes sit at
 * group Y = 0 when there is no tide, so surface-following poses subtract
 * TIDE_REEF_RIDE_SURFACE_Y when converting mesh height into lift.
 */
export interface TrickBoardPose {
  liftY: number;
  pitch: number;
  roll: number;
  yawOffset: number;
  /** Exact tile-plane travel yaw during the trick; null falls back to entity heading. */
  travelYawRadians: number | null;
  offsetX: number;
  offsetY: number;
  /** Rider pitch relative to the deck — the rider inherits board attitude from the rig. */
  riderLean: number;
  /** 0–1 squash of the rider for ducking/tucking poses. */
  riderCrouch: number;
}

type TrickPoseOffsets = Omit<TrickBoardPose, 'travelYawRadians'>;

/** Share of the timeline spent easing into/out of the boardslide on rails. */
const RAIL_SLIDE_RAMP = 0.22;
/** Final share of the timeline spent settling onto the snapped exit heading. */
const EXIT_BLEND_START = 0.85;

/** Board deck half-thickness — keep the underside clear of mesh surfaces. */
const BOARD_HALF_THICKNESS = 0.035;
/** Clearance between board underside and the feature surface being ridden. */
const FEATURE_SURFACE_CLEARANCE = 0.1;

/** Rail bar centre / thickness — keep in sync with buildRailGroup. */
const RAIL_BAR_Y_FACTOR = 0.24;
const RAIL_BAR_HEIGHT_FACTOR = 0.08;
const RAIL_GRIND_POP_FACTOR = 0.045;

/** Brain coral core — keep in sync with buildBrainCoralGroup. */
const BRAIN_CORE_RADIUS_FACTOR = 0.55;
const BRAIN_CORE_Y_FACTOR = 0.32;
const BRAIN_CORE_Y_SCALE = 0.8;
const BRAIN_BUMPS: ReadonlyArray<{ along: number; y: number; radius: number }> = [
  { along: 0.25, y: 0.48, radius: 0.3 },
  { along: -0.28, y: 0.42, radius: 0.2 },
];
/** Board half-length along the nose–tail axis (matches surfboardDeckGeometry). */
const BOARD_HALF_LENGTH = 0.68;
/** Samples along the ride axis used to keep the full deck clear of curved meshes. */
const BOARD_SURFACE_SAMPLE_OFFSETS = [-1, -0.5, 0, 0.5, 1] as const;
const BRAIN_MAX_PITCH = 0.48;

/** Wall face stand-off — keep in sync with buildWallRideGroup (use crest width). */
const WALL_THICKNESS_FACTOR = 0.34;
const WALL_BOARD_HALF_WIDTH = 0.22;
const WALL_FACE_CLEARANCE = 0.16;
const WALL_BASE_LIFT_FACTOR = 0.18;
const WALL_PEAK_LIFT_FACTOR = 0.52;
const WALL_EXIT_LATERAL_START = 0.82;

/** Jump ramp — keep in sync with trickFeatureMeshes jump constants. */
const JUMP_PEAK_FACTOR = 0.55;
const JUMP_RAMP_RUN_FACTOR = 1;
const JUMP_RAMP_LIP_BELOW_SURFACE_FACTOR = 0.12;
const JUMP_AIR_ARC_FACTOR = 0.38;
const JUMP_CLIMB_PITCH = Math.atan2(
  JUMP_PEAK_FACTOR + JUMP_RAMP_LIP_BELOW_SURFACE_FACTOR,
  JUMP_RAMP_RUN_FACTOR,
);

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function easeInOutSine(t: number): number {
  const x = clamp01(t);
  return 0.5 - 0.5 * Math.cos(Math.PI * x);
}

function yawOfDelta(dx: number, dy: number): number | null {
  if (Math.hypot(dx, dy) < 1e-6) {
    return null;
  }
  return Math.atan2(dy, dx);
}

function lerpAngle(from: number, to: number, t: number): number {
  const tau = Math.PI * 2;
  let delta = (to - from) % tau;
  if (delta > Math.PI) {
    delta -= tau;
  }
  if (delta < -Math.PI) {
    delta += tau;
  }
  return from + delta * clamp01(t);
}

function rideYawRadians(animation: DisplayTrickAnimation): number | null {
  return (
    yawOfDelta(animation.end.x - animation.start.x, animation.end.y - animation.start.y) ??
    yawOfDelta(animation.start.x - animation.entry.x, animation.start.y - animation.entry.y)
  );
}

/**
 * Board yaw through the trick: ease from the entry direction onto the exact
 * ride line, hold it, then settle onto the snapped 16-way exit heading.
 */
function trickTravelYaw(animation: DisplayTrickAnimation, progress: number): number | null {
  const rideYaw = rideYawRadians(animation);
  if (rideYaw === null) {
    return null;
  }
  const entryYaw =
    yawOfDelta(animation.start.x - animation.entry.x, animation.start.y - animation.entry.y) ??
    rideYaw;

  if (progress <= TRICK_ANIMATION_ALIGN_PROGRESS) {
    return lerpAngle(entryYaw, rideYaw, easeInOutSine(progress / TRICK_ANIMATION_ALIGN_PROGRESS));
  }
  if (progress >= EXIT_BLEND_START) {
    const exitYaw = (headingToDegrees(snapAngleToHeading(rideYaw)) * Math.PI) / 180;
    return lerpAngle(rideYaw, exitYaw, (progress - EXIT_BLEND_START) / (1 - EXIT_BLEND_START));
  }
  return rideYaw;
}

/** Distance along the locked ride axis from zone centre at this progress. */
function rideAlongFromCenter(animation: DisplayTrickAnimation, progress: number): number {
  const rideDx = animation.end.x - animation.start.x;
  const rideDy = animation.end.y - animation.start.y;
  const rideLen = Math.hypot(rideDx, rideDy);
  if (rideLen < 1e-6) {
    return 0;
  }
  const rideX = rideDx / rideLen;
  const rideY = rideDy / rideLen;
  const startAlong =
    (animation.start.x - animation.zoneCenter.x) * rideX +
    (animation.start.y - animation.zoneCenter.y) * rideY;
  const endAlong =
    (animation.end.x - animation.zoneCenter.x) * rideX +
    (animation.end.y - animation.zoneCenter.y) * rideY;

  if (progress <= TRICK_ANIMATION_ALIGN_PROGRESS) {
    return startAlong;
  }
  const rideT = (progress - TRICK_ANIMATION_ALIGN_PROGRESS) / (1 - TRICK_ANIMATION_ALIGN_PROGRESS);
  return startAlong + (endAlong - startAlong) * rideT;
}

/** Convert a feature-mesh world Y into board lift above the ride surface. */
function liftFromMeshY(meshY: number, clearance = FEATURE_SURFACE_CLEARANCE): number {
  return Math.max(0, meshY - TIDE_REEF_RIDE_SURFACE_Y + BOARD_HALF_THICKNESS + clearance);
}

/** Highest mesh Y under the board footprint along the ride axis. */
function maxMeshYAlongBoard(surfaceAt: (along: number) => number, along: number): number {
  let maxY = 0;
  for (const offset of BOARD_SURFACE_SAMPLE_OFFSETS) {
    maxY = Math.max(maxY, surfaceAt(along + offset * BOARD_HALF_LENGTH));
  }
  return maxY;
}

function railPose(animation: DisplayTrickAnimation, progress: number): TrickPoseOffsets {
  const radius = animation.zoneRadius;
  const railTop = radius * (RAIL_BAR_Y_FACTOR + RAIL_BAR_HEIGHT_FACTOR * 0.5);
  const grind = Math.sin(progress * Math.PI);
  const slide =
    easeInOutSine(progress / RAIL_SLIDE_RAMP) * easeInOutSine((1 - progress) / RAIL_SLIDE_RAMP);
  const baseLift = liftFromMeshY(railTop, FEATURE_SURFACE_CLEARANCE);

  return {
    liftY: baseLift + grind * radius * RAIL_GRIND_POP_FACTOR,
    pitch: 0,
    roll: animation.rideSide * slide * 0.1,
    yawOffset: animation.rideSide * slide * (Math.PI / 2),
    offsetX: 0,
    offsetY: 0,
    riderLean: -slide * 0.1,
    riderCrouch: slide * 0.18,
  };
}

function brainCoralSurfaceY(radius: number, along: number): number {
  const coreR = radius * BRAIN_CORE_RADIUS_FACTOR;
  const coreY = radius * BRAIN_CORE_Y_FACTOR;
  const coreRy = coreR * BRAIN_CORE_Y_SCALE;
  let surface = 0;

  const coreX = along / coreR;
  if (Math.abs(coreX) <= 1) {
    surface = Math.max(surface, coreY + coreRy * Math.sqrt(1 - coreX * coreX));
  }

  for (const bump of BRAIN_BUMPS) {
    const dx = along - radius * bump.along;
    const bumpR = radius * bump.radius;
    if (Math.abs(dx) < bumpR) {
      surface = Math.max(surface, radius * bump.y + Math.sqrt(bumpR * bumpR - dx * dx));
    }
  }

  return surface;
}

function brainCoralPose(animation: DisplayTrickAnimation, progress: number): TrickPoseOffsets {
  const radius = animation.zoneRadius;
  const along = rideAlongFromCenter(animation, progress);
  const sample = radius * 0.08;
  const surfaceAt = (a: number) => brainCoralSurfaceY(radius, a);
  const slope = (surfaceAt(along + sample) - surfaceAt(along - sample)) / (2 * sample);
  const rawPitch = Math.atan(slope);
  const pitch = Math.max(-BRAIN_MAX_PITCH, Math.min(BRAIN_MAX_PITCH, rawPitch));

  // Clear the tallest point under the full deck, then add a little for pitch tip drop.
  const footprintY = maxMeshYAlongBoard(surfaceAt, along);
  let lift = liftFromMeshY(footprintY) + Math.abs(Math.sin(pitch)) * BOARD_HALF_LENGTH * 0.35;

  if (progress < TRICK_ANIMATION_ALIGN_PROGRESS) {
    const startAlong = rideAlongFromCenter(animation, TRICK_ANIMATION_ALIGN_PROGRESS);
    const startLift =
      liftFromMeshY(maxMeshYAlongBoard(surfaceAt, startAlong)) +
      Math.abs(Math.sin(pitch)) * BOARD_HALF_LENGTH * 0.35;
    lift = easeInOutSine(progress / TRICK_ANIMATION_ALIGN_PROGRESS) * startLift;
  }

  return {
    liftY: lift,
    pitch,
    roll: 0,
    yawOffset: 0,
    offsetX: 0,
    offsetY: 0,
    riderLean: pitch * 0.18,
    riderCrouch: Math.abs(pitch) * 0.1,
  };
}

function tunnelPose(animation: DisplayTrickAnimation, progress: number): TrickPoseOffsets {
  void animation;
  const duck = Math.sin(progress * Math.PI);

  return {
    liftY: 0,
    pitch: 0,
    roll: 0,
    yawOffset: 0,
    offsetX: 0,
    offsetY: 0,
    riderLean: -duck * 0.32,
    riderCrouch: duck * 0.4,
  };
}

function wallRidePose(animation: DisplayTrickAnimation, progress: number): TrickPoseOffsets {
  const radius = animation.zoneRadius;
  const arc = Math.sin(progress * Math.PI);
  const rideYaw = rideYawRadians(animation) ?? animation.rotationRadians;
  const normal = { x: -Math.sin(rideYaw), y: Math.cos(rideYaw) };
  const side = animation.rideSide;
  const standOff =
    radius * WALL_THICKNESS_FACTOR * 0.5 + WALL_BOARD_HALF_WIDTH + WALL_FACE_CLEARANCE;

  // Target lateral from the centreline eases off only at exit; during the grind we
  // stay a full stand-off clear of the wall face.
  const targetLateral =
    progress < WALL_EXIT_LATERAL_START
      ? standOff
      : standOff * (1 - (progress - WALL_EXIT_LATERAL_START) / (1 - WALL_EXIT_LATERAL_START));

  // Path already carries some lateral during align (entry → centreline). Only add
  // the remaining offset so the board does not jump sideways on trick start.
  const pathPos = trickAnimationPositionAtProgress(animation, progress);
  const pathLateral =
    (pathPos.x - animation.zoneCenter.x) * normal.x +
    (pathPos.y - animation.zoneCenter.y) * normal.y;
  const offsetAlongNormal = side * targetLateral - pathLateral;

  const lift =
    radius * WALL_BASE_LIFT_FACTOR + arc * radius * (WALL_PEAK_LIFT_FACTOR - WALL_BASE_LIFT_FACTOR);

  return {
    liftY: lift,
    pitch: 0,
    roll: side * (0.42 + arc * 0.1),
    yawOffset: 0,
    offsetX: normal.x * offsetAlongNormal,
    offsetY: normal.y * offsetAlongNormal,
    riderLean: -arc * 0.14,
    riderCrouch: arc * 0.16,
  };
}

function jumpRampSurfaceY(radius: number, along: number): number {
  const run = radius * JUMP_RAMP_RUN_FACTOR;
  const peak = radius * JUMP_PEAK_FACTOR;
  const lipBelow = radius * JUMP_RAMP_LIP_BELOW_SURFACE_FACTOR;
  const rise = peak + lipBelow;

  if (along >= -run && along <= 0) {
    return -lipBelow + ((along + run) / run) * rise;
  }
  if (along > 0 && along <= run) {
    return peak - (along / run) * rise;
  }
  return 0;
}

function jumpTakeOffProgress(animation: DisplayTrickAnimation): number {
  const startAlong = rideAlongFromCenter(animation, TRICK_ANIMATION_ALIGN_PROGRESS);
  const endAlong = rideAlongFromCenter(animation, 1);
  if (Math.abs(endAlong - startAlong) < 1e-6) {
    return 0.5 * (TRICK_ANIMATION_ALIGN_PROGRESS + 1);
  }
  // Pop at the geometric lip (along = 0); fall back to mid-ride on a partial path.
  const t = (0 - startAlong) / (endAlong - startAlong);
  if (t <= 0 || t >= 1) {
    return TRICK_ANIMATION_ALIGN_PROGRESS + 0.5 * (1 - TRICK_ANIMATION_ALIGN_PROGRESS);
  }
  return TRICK_ANIMATION_ALIGN_PROGRESS + t * (1 - TRICK_ANIMATION_ALIGN_PROGRESS);
}

function jumpPose(animation: DisplayTrickAnimation, progress: number): TrickPoseOffsets {
  const radius = animation.zoneRadius;
  const takeOff = jumpTakeOffProgress(animation);
  const along = rideAlongFromCenter(animation, progress);
  const climbPitch = JUMP_CLIMB_PITCH;

  let lift: number;
  let pitch: number;
  let crouch = 0;

  if (progress < TRICK_ANIMATION_ALIGN_PROGRESS) {
    const startAlong = rideAlongFromCenter(animation, TRICK_ANIMATION_ALIGN_PROGRESS);
    const startLift =
      liftFromMeshY(maxMeshYAlongBoard((a) => jumpRampSurfaceY(radius, a), startAlong)) +
      Math.abs(Math.sin(climbPitch)) * BOARD_HALF_LENGTH * 0.25;
    const t = progress / TRICK_ANIMATION_ALIGN_PROGRESS;
    lift = easeInOutSine(t) * startLift;
    pitch = climbPitch * easeInOutSine(t);
  } else if (progress < takeOff) {
    const footprintY = maxMeshYAlongBoard((a) => jumpRampSurfaceY(radius, a), along);
    lift = liftFromMeshY(footprintY) + Math.abs(Math.sin(climbPitch)) * BOARD_HALF_LENGTH * 0.25;
    pitch = climbPitch;
  } else {
    const t = (progress - takeOff) / (1 - takeOff);
    const peakLift = liftFromMeshY(radius * JUMP_PEAK_FACTOR);
    lift = peakLift * (1 - easeInOutSine(t)) + radius * JUMP_AIR_ARC_FACTOR * Math.sin(Math.PI * t);
    const flip = easeInOutSine(Math.min(1, t / 0.94));
    pitch = climbPitch - flip * (Math.PI * 2 + climbPitch);
    crouch = Math.sin(Math.PI * t) * 0.48;
  }

  return {
    liftY: lift,
    pitch,
    roll: 0,
    yawOffset: 0,
    offsetX: 0,
    offsetY: 0,
    riderLean: 0,
    riderCrouch: crouch,
  };
}

export function tideSpinBoardPose(progress: number): TrickBoardPose {
  const spin = clamp01(progress) * Math.PI * 2;
  return {
    liftY: 0.06 + Math.sin(progress * Math.PI) * 0.1,
    pitch: Math.sin(spin) * 0.06,
    roll: Math.sin(spin) * 0.35,
    yawOffset: spin * 0.12,
    travelYawRadians: null,
    offsetX: 0,
    offsetY: 0,
    riderLean: Math.cos(spin) * 0.12,
    riderCrouch: 0.2,
  };
}

export function trickBoardPose(animation: DisplayTrickAnimation): TrickBoardPose {
  const progress = clamp01(animation.progress);

  const offsets = ((): TrickPoseOffsets => {
    switch (animation.type) {
      case 'rail':
        return railPose(animation, progress);
      case 'brain_coral':
        return brainCoralPose(animation, progress);
      case 'tunnel':
        return tunnelPose(animation, progress);
      case 'wall_ride':
        return wallRidePose(animation, progress);
      case 'jump':
        return jumpPose(animation, progress);
      default:
        return {
          liftY: 0,
          pitch: 0,
          roll: 0,
          yawOffset: 0,
          offsetX: 0,
          offsetY: 0,
          riderLean: 0,
          riderCrouch: 0,
        };
    }
  })();

  return { ...offsets, travelYawRadians: trickTravelYaw(animation, progress) };
}
