import { HULL_SPEED_CAMPHOR_TILES_PER_TICK } from './movement.js';
import { CORAL_PARK_REEF_INNER_MEAN, CORAL_PARK_REEF_OUTER_MEAN } from '../world/coralParkCoast.js';

/** Prepare must land 1–5 ticks before riding through the matching feature. */
export const TRICK_PREPARE_MIN_TICKS = 1;
export const TRICK_PREPARE_MAX_TICKS = 5;

/** Ride speed multiplier granted after a successful trick. */
export const TRICK_SPEED_BOOST_MULTIPLIER = 1.5;

/** Reef trick slots — keep in sync with CORAL_PARK_TRICK_ZONE_COUNT in maps.ts */
const CORAL_PARK_TRICK_SLOT_COUNT = 14;

const TAU = Math.PI * 2;
const MEAN_REEF_RADIUS = (CORAL_PARK_REEF_INNER_MEAN + CORAL_PARK_REEF_OUTER_MEAN) / 2;

/** Boost lasts ~35% longer than base-speed travel to the next adjacent reef slot. */
export const TRICK_SPEED_BOOST_DURATION_FACTOR = 1.35;

const ADJACENT_SLOT_ARC_TILES = MEAN_REEF_RADIUS * (TAU / CORAL_PARK_TRICK_SLOT_COUNT);
const TICKS_TO_ADJACENT_SLOT_AT_BASE_SPEED =
  ADJACENT_SLOT_ARC_TILES / HULL_SPEED_CAMPHOR_TILES_PER_TICK;

export const TRICK_SPEED_BOOST_DURATION_TICKS = Math.ceil(
  TICKS_TO_ADJACENT_SLOT_AT_BASE_SPEED * TRICK_SPEED_BOOST_DURATION_FACTOR,
);

export type TrickPrepareSlot = 0 | 1 | 2;

export const TRICK_PREPARE_SLOT_COUNT = 3;

export const TRICK_STANCE_NAMES = ['Grind', 'Tuck', 'Air'] as const;

export type TrickStanceName = (typeof TRICK_STANCE_NAMES)[number];

export function trickStanceName(slot: TrickPrepareSlot): TrickStanceName {
  return TRICK_STANCE_NAMES[slot];
}
