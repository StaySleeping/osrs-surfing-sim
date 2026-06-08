import type { TrickPrepareSlot } from '../constants/tricks.js';
import { getTile, type WorldMap } from './collision.js';
import {
  CORAL_PARK_ISLAND_CX,
  CORAL_PARK_ISLAND_CY,
  coralParkReefInnerRadius,
  coralParkReefOuterRadius,
} from './coralParkCoast.js';
import {
  isAngleInSweep,
  isPointInTideSweep,
  isTrickZoneSubmerged,
  TRICK_SUBMERGE_FADE_TICKS,
  type TideState,
  type TrickFeatureType,
  type TrickZone,
} from './features.js';

export const CORAL_PARK_TRICK_ZONE_RADIUS = 4;
export const MIN_TRICK_CENTER_GAP = 12;

/** Tide travel while submerged before a feature is removed (radians). */
export const SUBMERGED_PURGE_ARC = 0.42;

export const TRICK_FEATURE_TYPES: TrickFeatureType[] = [
  'rail',
  'tunnel',
  'jump',
  'brain_coral',
  'wall_ride',
];

export const TRICK_TYPE_TO_PREPARE_SLOT: Record<TrickFeatureType, TrickPrepareSlot> = {
  rail: 0,
  tunnel: 1,
  jump: 2,
  brain_coral: 0,
  wall_ride: 1,
};

/** Matches initial buildTrickZones offset in maps.ts. */
export const TRICK_SLOT_OFFSET = 0.22;

/** Radial depth along the reef ring (0 = inner edge, 1 = outer edge). */
export const REEF_RING_DEPTHS = [0.32, 0.62, 0.88];

const COUNTER_RIDE_CHANCE = 0.2;
const TAU = Math.PI * 2;

export interface TrickZoneTideSyncState {
  nextZoneId: number;
  submergedTicks: Map<string, number>;
  emergedTicks: Map<string, number>;
}

/** Clockwise reef ride tangent at a given polar angle. */
export function clockwiseTangent(angle: number): number {
  return angle - Math.PI / 2;
}

export function createTrickZoneTideSyncState(): TrickZoneTideSyncState {
  return {
    nextZoneId: 1000,
    submergedTicks: new Map(),
    emergedTicks: new Map(),
  };
}

export function trickSlotAngle(slot: number, targetCount: number): number {
  return normalizeSpawnAngle(TRICK_SLOT_OFFSET + slot * (TAU / targetCount));
}

/** Sample angle inside the current submerged arc for pre-seeding a slot. */
export function submergedArcSlotAngle(slot: number, targetCount: number, tide: TideState): number {
  const spacing = tide.sweepRadians / targetCount;
  return normalizeSpawnAngle(tide.phaseRadians + spacing * (slot + 0.5));
}

export function zonePolarAngle(zone: TrickZone, tide: TideState): number {
  return Math.atan2(zone.center.y - tide.centerY, zone.center.x - tide.centerX);
}

export function zonePolarRadius(zone: TrickZone, tide: TideState): number {
  return Math.hypot(zone.center.x - tide.centerX, zone.center.y - tide.centerY);
}

export function reefCenterAtAngle(
  map: WorldMap,
  positionAngle: number,
  ringT: number,
): { x: number; y: number } | null {
  const inner = coralParkReefInnerRadius(positionAngle);
  const outer = coralParkReefOuterRadius(positionAngle);
  for (let t = ringT; t >= 0.18; t -= 0.04) {
    const radius = inner + (outer - inner) * t;
    const x = CORAL_PARK_ISLAND_CX + Math.cos(positionAngle) * radius;
    const y = CORAL_PARK_ISLAND_CY + Math.sin(positionAngle) * radius;
    const tile = getTile(map, Math.floor(x), Math.floor(y));
    if (tile === 'coral_rideable') {
      return { x, y };
    }
  }
  return null;
}

export function isFarEnoughFromZones(
  center: { x: number; y: number },
  zones: TrickZone[],
): boolean {
  for (const zone of zones) {
    const gap =
      Math.hypot(center.x - zone.center.x, center.y - zone.center.y) -
      CORAL_PARK_TRICK_ZONE_RADIUS * 2;
    if (gap < MIN_TRICK_CENTER_GAP) {
      return false;
    }
  }
  return true;
}

export function pickRandomTrickType(random: () => number = Math.random): TrickFeatureType {
  return TRICK_FEATURE_TYPES[Math.floor(random() * TRICK_FEATURE_TYPES.length)];
}

/** Spawn a trick feature on the reef ring at the given polar angle. */
export function createTrickZoneAtAngle(
  map: WorldMap,
  positionAngle: number,
  tide: TideState,
  id: string,
  existingZones: TrickZone[],
  random: () => number = Math.random,
  enforceGap = true,
  preferredRingDepth?: number,
  allowSubmerged = false,
): TrickZone | null {
  const ringDepths =
    preferredRingDepth !== undefined
      ? [preferredRingDepth, ...REEF_RING_DEPTHS.filter((depth) => depth !== preferredRingDepth)]
      : REEF_RING_DEPTHS;

  for (const ringT of ringDepths) {
    const center = reefCenterAtAngle(map, positionAngle, ringT);
    if (!center || (enforceGap && !isFarEnoughFromZones(center, existingZones))) {
      continue;
    }
    if (!allowSubmerged && isPointInTideSweep(center.x, center.y, tide)) {
      continue;
    }

    const type = pickRandomTrickType(random);
    const counterRide = random() < COUNTER_RIDE_CHANCE;
    const rotationRadians = counterRide
      ? positionAngle + Math.PI / 2
      : clockwiseTangent(positionAngle);

    return {
      id,
      type,
      prepareSlot: TRICK_TYPE_TO_PREPARE_SLOT[type],
      center,
      radius: CORAL_PARK_TRICK_ZONE_RADIUS,
      rotationRadians,
      tricked: false,
    };
  }

  return null;
}

/**
 * Keep submerged features visible-but-disabled, purge after a short submerged arc,
 * and pre-seed replacements inside the submerged band at fixed slot angles.
 */
export function syncTrickZonesWithTide(
  zones: TrickZone[],
  tide: TideState,
  map: WorldMap,
  state: TrickZoneTideSyncState,
  targetCount: number,
  random: () => number = Math.random,
): TrickZone[] {
  const slotTolerance = (TAU / targetCount) * 0.35;
  const active: TrickZone[] = [];

  for (const zone of zones) {
    const submerged = isTrickZoneSubmerged(zone, tide);
    if (!submerged) {
      state.submergedTicks.delete(zone.id);
      const emerged = (state.emergedTicks.get(zone.id) ?? 0) + 1;
      if (emerged <= TRICK_SUBMERGE_FADE_TICKS) {
        state.emergedTicks.set(zone.id, emerged);
        active.push({ ...zone, emergedRenderTicks: emerged, submergedRenderTicks: undefined });
      } else {
        state.emergedTicks.delete(zone.id);
        active.push({ ...zone, emergedRenderTicks: undefined, submergedRenderTicks: undefined });
      }
      continue;
    }

    state.emergedTicks.delete(zone.id);
    const ticks = (state.submergedTicks.get(zone.id) ?? 0) + 1;
    state.submergedTicks.set(zone.id, ticks);
    const submergedArc = ticks * tide.advancePerTick;
    if (submergedArc >= SUBMERGED_PURGE_ARC) {
      state.submergedTicks.delete(zone.id);
      continue;
    }

    const renderTicks = Math.max(
      zone.submergedRenderTicks ?? 0,
      Math.min(TRICK_SUBMERGE_FADE_TICKS, ticks),
    );
    active.push({
      ...zone,
      submergedRenderTicks: renderTicks,
      emergedRenderTicks: undefined,
    });
  }

  for (let slot = 0; slot < targetCount; slot += 1) {
    if (active.length >= targetCount) {
      break;
    }

    if (isSlotOccupied(active, tide, slot, targetCount, slotTolerance)) {
      continue;
    }

    const slotAngle = trickSlotAngle(slot, targetCount);

    const preseedAngle = submergedArcSlotAngle(slot, targetCount, tide);
    const inSubmergedBand = isAngleInSweep(preseedAngle, tide.phaseRadians, tide.sweepRadians);
    const spawnAngle = inSubmergedBand ? preseedAngle : slotAngle;

    const spawned = createTrickZoneAtAngle(
      map,
      spawnAngle,
      tide,
      `feature-${state.nextZoneId}`,
      active,
      random,
      false,
      REEF_RING_DEPTHS[slot % REEF_RING_DEPTHS.length],
      true,
    );

    if (!spawned) {
      continue;
    }

    state.nextZoneId += 1;
    if (isTrickZoneSubmerged(spawned, tide)) {
      state.submergedTicks.set(spawned.id, 0);
      active.push({
        ...spawned,
        submergedRenderTicks: TRICK_SUBMERGE_FADE_TICKS,
        emergedRenderTicks: undefined,
      });
    } else {
      active.push(spawned);
    }
  }

  return active;
}

function isSlotOccupied(
  zones: TrickZone[],
  tide: TideState,
  slot: number,
  targetCount: number,
  tolerance: number,
): boolean {
  const slotAngle = trickSlotAngle(slot, targetCount);
  const preseedAngle = submergedArcSlotAngle(slot, targetCount, tide);
  return zones.some((zone) => {
    const zoneAngle = zonePolarAngle(zone, tide);
    return (
      angleNear(zoneAngle, slotAngle, tolerance) || angleNear(zoneAngle, preseedAngle, tolerance)
    );
  });
}

function angleNear(a: number, b: number, tolerance: number): boolean {
  let diff = Math.abs(normalizeSpawnAngle(a - b));
  if (diff > Math.PI) {
    diff = TAU - diff;
  }
  return diff <= tolerance;
}

function normalizeSpawnAngle(radians: number): number {
  const wrapped = radians % TAU;
  return wrapped < 0 ? wrapped + TAU : wrapped;
}
