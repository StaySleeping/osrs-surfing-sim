import {
  TRICK_SPEED_BOOST_DURATION_TICKS,
  TRICK_SPEED_BOOST_MULTIPLIER,
} from '../constants/tricks.js';
import type { SurfboardStats } from './surfboard.js';

export interface TrickSpeedBoostState {
  ticksRemaining: number;
}

export function createTrickSpeedBoost(): TrickSpeedBoostState {
  return { ticksRemaining: TRICK_SPEED_BOOST_DURATION_TICKS };
}

export function refreshTrickSpeedBoost(): TrickSpeedBoostState {
  return createTrickSpeedBoost();
}

export function applyTrickSpeedBoost(
  stats: SurfboardStats,
  boost: TrickSpeedBoostState | null,
): SurfboardStats {
  if (!boost || boost.ticksRemaining <= 0) {
    return stats;
  }
  return {
    ...stats,
    speedRide: stats.speedRide * TRICK_SPEED_BOOST_MULTIPLIER,
  };
}

export function advanceTrickSpeedBoost(
  boost: TrickSpeedBoostState,
  consumed: boolean,
): TrickSpeedBoostState | null {
  if (!consumed) {
    return boost;
  }
  const ticksRemaining = boost.ticksRemaining - 1;
  return ticksRemaining > 0 ? { ticksRemaining } : null;
}
