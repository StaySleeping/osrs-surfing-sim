import { describe, expect, it } from 'vitest';

import { comboTierName, comboTierProgress, comboXpMultiplier } from './combo.js';
import {
  awardTrick,
  canPurchaseUnlock,
  createProgressionState,
  deserializeProgressionState,
  purchaseUnlock,
  rollCoralTokenDrop,
  serializeProgressionState,
} from './progression.js';
import { UNLOCK_REGISTRY } from './types.js';

describe('progression', () => {
  it('awards base xp until combo reaches 10, then scales at each decade', () => {
    let state = createProgressionState();

    for (let i = 1; i <= 9; i += 1) {
      const result = awardTrick(state, () => 1);
      state = result.state;
      expect(result.xpGained.agility).toBe(45);
      expect(result.xpGained.sailing).toBe(35);
      expect(result.state.session.combo).toBe(i);
    }

    const atTen = awardTrick(state, () => 1);
    expect(atTen.xpGained.agility).toBe(90);
    expect(atTen.xpGained.sailing).toBe(70);
    expect(atTen.state.session.combo).toBe(10);
  });

  it('caps xp multiplier at dragon tier', () => {
    let state = createProgressionState();
    for (let i = 0; i < 69; i += 1) {
      state = awardTrick(state, () => 1).state;
    }
    const dragon = awardTrick(state, () => 1);
    expect(dragon.state.session.combo).toBe(70);
    expect(comboXpMultiplier(70)).toBe(7);
    expect(dragon.xpGained.agility).toBe(45 * 7);
    expect(comboTierName(70)).toBe('Dragon');
  });

  it('awards coral tokens on a 1/10 roll only', () => {
    const state = createProgressionState();
    const miss = awardTrick(state, () => 0.5);
    expect(miss.tokensGained).toBe(0);

    const hit = awardTrick(state, () => 0);
    expect(hit.tokensGained).toBeGreaterThanOrEqual(6);
    expect(hit.tokensGained).toBeLessThanOrEqual(10);
  });

  it('rolls coral tokens in the 6–10 range when drop succeeds', () => {
    expect(rollCoralTokenDrop(() => 0)).toBe(6);
    expect(rollCoralTokenDrop(() => 0.09)).toBe(10);
    expect(rollCoralTokenDrop(() => 0.1)).toBe(0);
  });

  it('tracks combo tier progress within each decade', () => {
    expect(comboTierProgress(5)).toBe(5);
    expect(comboTierProgress(10)).toBe(10);
    expect(comboTierProgress(23)).toBe(3);
    expect(comboTierName(23)).toBe('Steel');
  });

  it('purchases unlock when requirements met', () => {
    const state = {
      ...createProgressionState(),
      coralTokens: 500,
      xp: { agility: 0, sailing: 200_000 },
    };
    const unlock = UNLOCK_REGISTRY.find((entry) => entry.id === 'taiura_blessing');
    expect(unlock).toBeDefined();
    expect(canPurchaseUnlock(state, unlock!).ok).toBe(true);

    const result = purchaseUnlock(state, 'taiura_blessing');
    expect(result.success).toBe(true);
    expect(result.state.unlocked.has('taiura_blessing')).toBe(true);
  });

  it('blocks earn-only unlock purchases', () => {
    const state = { ...createProgressionState(), coralTokens: 9999 };
    const unlock = UNLOCK_REGISTRY.find((entry) => entry.id === 'teeny_tai');
    expect(canPurchaseUnlock(state, unlock!).ok).toBe(false);
  });

  it('round-trips progression through serialization', () => {
    const state = awardTrick(
      {
        ...createProgressionState(),
        coralTokens: 42,
        unlocked: new Set(['coral_rail_cosmetic']),
        session: { tricksLanded: 7, combo: 3, maxCombo: 12 },
      },
      () => 1,
    ).state;

    const restored = deserializeProgressionState(serializeProgressionState(state));
    expect(restored).toEqual(state);
  });

  it('rejects invalid serialized progression', () => {
    expect(deserializeProgressionState(null)).toBeNull();
    expect(deserializeProgressionState({ xp: { agility: -1, sailing: 0 } })).toBeNull();
    expect(
      deserializeProgressionState({
        xp: { agility: 10, sailing: 20 },
        coralTokens: 5,
        unlocked: ['not_a_real_unlock'],
        session: { tricksLanded: 1, combo: 1, maxCombo: 1 },
      }),
    ).toBeNull();
  });
});
