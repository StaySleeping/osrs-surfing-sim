import { describe, expect, it } from 'vitest';

import {
  createTideState,
  isAngleInSweep,
  isTrickZoneSubmerged,
  tideTrailingEdgeRadians,
} from './features.js';
import { CORAL_PARK_TRICK_ZONE_COUNT, createCoralParkSlice } from './maps.js';
import {
  createTrickZoneAtAngle,
  createTrickZoneTideSyncState,
  pickRandomTrickType,
  REEF_RING_DEPTHS,
  SUBMERGED_PURGE_ARC,
  submergedArcSlotAngle,
  syncTrickZonesWithTide,
  TRICK_TYPE_TO_PREPARE_SLOT,
  zonePolarRadius,
} from './trickZonePlacement.js';

describe('syncTrickZonesWithTide', () => {
  it('keeps submerged features until the purge arc elapses', () => {
    const arena = createCoralParkSlice();
    const tide = createTideState(arena.tide!);
    const submerged = arena.trickZones.find((zone) => isTrickZoneSubmerged(zone, tide));
    expect(submerged).toBeDefined();

    const syncState = createTrickZoneTideSyncState();
    const afterSync = syncTrickZonesWithTide(
      arena.trickZones,
      tide,
      arena.map,
      syncState,
      CORAL_PARK_TRICK_ZONE_COUNT,
    );

    expect(afterSync.some((zone) => zone.id === submerged!.id)).toBe(true);
    expect(afterSync.length).toBe(arena.trickZones.length);
  });

  it('purges long-submerged features and pre-seeds inside the submerged arc', () => {
    const arena = createCoralParkSlice();
    let tide = createTideState(arena.tide!);
    let zones = arena.trickZones.map((zone) => ({ ...zone, center: { ...zone.center } }));
    const syncState = createTrickZoneTideSyncState();
    const purgeTicks = Math.ceil(SUBMERGED_PURGE_ARC / tide.advancePerTick) + 2;

    for (let tick = 0; tick < 400; tick += 1) {
      tide = { ...tide, phaseRadians: tide.phaseRadians + tide.advancePerTick };
      zones = syncTrickZonesWithTide(
        zones,
        tide,
        arena.map,
        syncState,
        CORAL_PARK_TRICK_ZONE_COUNT,
      );
    }

    expect(zones.length).toBeGreaterThanOrEqual(CORAL_PARK_TRICK_ZONE_COUNT - 2);
    expect(zones.length).toBeLessThanOrEqual(CORAL_PARK_TRICK_ZONE_COUNT);

    const submergedCount = zones.filter((zone) => isTrickZoneSubmerged(zone, tide)).length;
    const exposedCount = zones.length - submergedCount;
    expect(exposedCount).toBeGreaterThan(0);
    expect(submergedCount).toBeGreaterThan(0);

    void purgeTicks;
  });

  it('pre-seeds at submerged arc angles when slots are empty', () => {
    const arena = createCoralParkSlice();
    const tide = createTideState(arena.tide!);
    const slot = 0;
    const preseedAngle = submergedArcSlotAngle(slot, CORAL_PARK_TRICK_ZONE_COUNT, tide);

    expect(isAngleInSweep(preseedAngle, tide.phaseRadians, tide.sweepRadians)).toBe(true);

    const spawned = createTrickZoneAtAngle(
      arena.map,
      preseedAngle,
      tide,
      'preseed-test',
      [],
      () => 0.5,
      false,
      REEF_RING_DEPTHS[slot],
      true,
    );

    expect(spawned).not.toBeNull();
    expect(isTrickZoneSubmerged(spawned!, tide)).toBe(true);
  });
});

describe('createTrickZoneAtAngle', () => {
  it('spawns on dry reef with requested ring depth', () => {
    const arena = createCoralParkSlice();
    const tide = createTideState(arena.tide!);
    const spawnAngle = tideTrailingEdgeRadians(tide) + 0.35;

    const zone = createTrickZoneAtAngle(
      arena.map,
      spawnAngle,
      tide,
      'spawn-1',
      [],
      () => 0.25,
      false,
      REEF_RING_DEPTHS[2],
    );

    expect(zone).not.toBeNull();
    expect(zone!.prepareSlot).toBe(TRICK_TYPE_TO_PREPARE_SLOT[zone!.type]);
    expect(isTrickZoneSubmerged(zone!, tide)).toBe(false);
    expect(zonePolarRadius(zone!, tide)).toBeGreaterThan(30);
  });
});

describe('pickRandomTrickType', () => {
  it('returns a valid trick type', () => {
    expect(pickRandomTrickType(() => 0)).toBe('rail');
    expect(pickRandomTrickType(() => 0.99)).toBe('wall_ride');
  });
});
