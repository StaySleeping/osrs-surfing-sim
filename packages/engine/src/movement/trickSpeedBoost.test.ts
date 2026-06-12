import { describe, expect, it } from 'vitest';

import {
  TRICK_SPEED_BOOST_DURATION_FACTOR,
  TRICK_SPEED_BOOST_DURATION_TICKS,
  TRICK_SPEED_BOOST_MULTIPLIER,
} from '../constants/tricks.js';
import {
  DEFAULT_SURFBOARD_STATS,
  HULL_SPEED_CAMPHOR_TILES_PER_TICK,
} from '../constants/movement.js';
import { CORAL_PARK_REEF_INNER_MEAN, CORAL_PARK_REEF_OUTER_MEAN } from '../world/coralParkCoast.js';
import {
  advanceTrickSpeedBoost,
  applyTrickSpeedBoost,
  createTrickSpeedBoost,
  refreshTrickSpeedBoost,
} from './trickSpeedBoost.js';

describe('trick speed boost', () => {
  it('multiplies ride speed only when boost is active', () => {
    const boost = createTrickSpeedBoost();
    const boosted = applyTrickSpeedBoost(DEFAULT_SURFBOARD_STATS, boost);
    expect(boosted.speedRide).toBeCloseTo(
      DEFAULT_SURFBOARD_STATS.speedRide * TRICK_SPEED_BOOST_MULTIPLIER,
    );
    expect(boosted.speedPaddle).toBe(DEFAULT_SURFBOARD_STATS.speedPaddle);
    expect(boosted.turnRateDegPerTick).toBe(DEFAULT_SURFBOARD_STATS.turnRateDegPerTick);
  });

  it('returns base stats when boost is null or expired', () => {
    expect(applyTrickSpeedBoost(DEFAULT_SURFBOARD_STATS, null)).toEqual(DEFAULT_SURFBOARD_STATS);
    expect(applyTrickSpeedBoost(DEFAULT_SURFBOARD_STATS, { ticksRemaining: 0 })).toEqual(
      DEFAULT_SURFBOARD_STATS,
    );
  });

  it('creates and refreshes boost with configured duration', () => {
    expect(createTrickSpeedBoost().ticksRemaining).toBe(TRICK_SPEED_BOOST_DURATION_TICKS);
    expect(refreshTrickSpeedBoost().ticksRemaining).toBe(TRICK_SPEED_BOOST_DURATION_TICKS);
  });

  it('decrements boost only when consumed', () => {
    const boost = { ticksRemaining: 2 };
    expect(advanceTrickSpeedBoost(boost, false)).toEqual(boost);
    expect(advanceTrickSpeedBoost(boost, true)).toEqual({ ticksRemaining: 1 });
    expect(advanceTrickSpeedBoost({ ticksRemaining: 1 }, true)).toBeNull();
  });

  it('lasts longer than base-speed travel to the next adjacent reef slot', () => {
    const meanReefRadius = (CORAL_PARK_REEF_INNER_MEAN + CORAL_PARK_REEF_OUTER_MEAN) / 2;
    const adjacentSlotArcTiles = meanReefRadius * ((Math.PI * 2) / 14);
    const ticksToAdjacentSlot = adjacentSlotArcTiles / HULL_SPEED_CAMPHOR_TILES_PER_TICK;
    expect(TRICK_SPEED_BOOST_DURATION_TICKS).toBeGreaterThan(Math.ceil(ticksToAdjacentSlot));
    expect(TRICK_SPEED_BOOST_DURATION_TICKS).toBe(
      Math.ceil(ticksToAdjacentSlot * TRICK_SPEED_BOOST_DURATION_FACTOR),
    );
  });
});
