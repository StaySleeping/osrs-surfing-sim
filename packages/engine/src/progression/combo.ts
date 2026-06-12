export const COMBO_TIERS = [
  'Bronze',
  'Iron',
  'Steel',
  'Mithril',
  'Adamant',
  'Rune',
  'Dragon',
] as const;

export type ComboTierName = (typeof COMBO_TIERS)[number];

/** Combo count per tier (Bronze 1–9, Iron 10–19, Steel 20–29, …). */
export const COMBO_TIER_SIZE = 10;

/** XP multiplier steps up at each multiple of 10; capped at Dragon (7×). */
export function comboXpMultiplier(combo: number): number {
  if (combo <= 0) {
    return 1;
  }
  return Math.min(COMBO_TIERS.length, Math.floor(combo / COMBO_TIER_SIZE) + 1);
}

/** Tier name for the current combo count (Bronze at 1–9, Iron at 10–19, …). */
export function comboTierIndex(combo: number): number {
  if (combo <= 0) {
    return 0;
  }
  return Math.min(COMBO_TIERS.length - 1, Math.floor(combo / COMBO_TIER_SIZE));
}

export function comboTierName(combo: number): ComboTierName {
  return COMBO_TIERS[comboTierIndex(combo)];
}

/** Progress toward the next tier (1–10 within the current decade). */
export function comboTierProgress(combo: number): number {
  if (combo <= 0) {
    return 0;
  }
  const inTier = combo % COMBO_TIER_SIZE;
  return inTier === 0 ? COMBO_TIER_SIZE : inTier;
}

/** Combo after bailing — drops to the previous tier's start (e.g. Steel 25→Iron 10, Iron 15→Bronze 0). */
export function comboAfterBail(combo: number): number {
  if (combo <= 0) {
    return 0;
  }
  // Past Dragon (60+), tier stays capped so 85× still bails to Rune at 50×.
  const tierIndex = comboTierIndex(combo);
  return Math.max(0, (tierIndex - 1) * COMBO_TIER_SIZE);
}
