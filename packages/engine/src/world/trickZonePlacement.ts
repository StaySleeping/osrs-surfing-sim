import { getTile, type WorldMap } from './collision.js';
import {
  CORAL_PARK_ISLAND_CX,
  CORAL_PARK_ISLAND_CY,
  coralParkReefInnerRadius,
  coralParkReefOuterRadius,
} from './coralParkCoast.js';
import type { TrickZone } from './features.js';

export const CORAL_PARK_TRICK_ZONE_RADIUS = 4;
export const MIN_TRICK_CENTER_GAP = 12;
const TRICK_RING_POSITIONS = [0.32, 0.62, 0.88];
const RELOCATE_MAX_ATTEMPTS = 40;
const COUNTER_RIDE_CHANCE = 0.2;

/** Clockwise reef ride tangent at a given polar angle. */
export function clockwiseTangent(angle: number): number {
  return angle - Math.PI / 2;
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

/** Pick a new rideable reef spot when a feature resurfaces after the swell. */
export function relocateTrickZoneOnReef(
  zone: TrickZone,
  map: WorldMap,
  otherZones: TrickZone[],
  random: () => number = Math.random,
): TrickZone {
  const others = otherZones.filter((entry) => entry.id !== zone.id);

  for (let attempt = 0; attempt < RELOCATE_MAX_ATTEMPTS; attempt += 1) {
    const positionAngle = random() * Math.PI * 2;
    const ringIndex = Math.floor(random() * TRICK_RING_POSITIONS.length);
    const ringT = TRICK_RING_POSITIONS[ringIndex];
    const center = reefCenterAtAngle(map, positionAngle, ringT);
    if (!center || !isFarEnoughFromZones(center, others)) {
      continue;
    }

    const counterRide = random() < COUNTER_RIDE_CHANCE;
    const rotationRadians = counterRide
      ? positionAngle + Math.PI / 2
      : clockwiseTangent(positionAngle);

    return {
      ...zone,
      center,
      rotationRadians,
      tricked: false,
    };
  }

  return { ...zone, tricked: false };
}
