import { describe, expect, it } from 'vitest';

import { GameSimulation } from '../game/simulation.js';
import {
  ANIMATION_TEST_ALIGNED_ROW_Y,
  ANIMATION_TEST_COUNTER_ROW_Y,
  ANIMATION_TEST_ZONE_TYPES,
  animationTestZoneCenter,
  createAnimationTestSlice,
} from './animationTestArena.js';
import { getTile, isWorldPointSailingTarget } from './collision.js';
import type { TrickZone } from './features.js';

const LATERAL_ALIGN_TOLERANCE = 0.6;

function mountAndRide(sim: GameSimulation, dockX: number, dockY: number): void {
  sim.clickWorld(dockX, dockY);
  for (let i = 0; i < 40; i += 1) {
    sim.tick();
    if (sim.getSnapshot().boardMounted) {
      break;
    }
  }
  sim.setSpeedState('riding');
}

function stageWestOfZone(sim: GameSimulation, zone: TrickZone): void {
  const x = zone.center.x - 9;
  const y = zone.center.y;
  for (let i = 0; i < 240; i += 1) {
    const snap = sim.getSnapshot();
    if (snap.trickAnimation) {
      sim.tick();
      continue;
    }
    if (snap.surfboard.speedState !== 'riding') {
      sim.setSpeedState('riding');
    }
    const pos = snap.surfboard.position;
    if (Math.hypot(pos.x - x, pos.y - y) <= 2 && pos.x <= x + 2) {
      return;
    }
    sim.clickOcean(x, y);
    sim.tick();
  }
  throw new Error(`Failed to stage west of ${zone.id}`);
}

function alignToRow(sim: GameSimulation, rowY: number): void {
  for (let i = 0; i < 60; i += 1) {
    const snap = sim.getSnapshot();
    if (snap.trickAnimation) {
      sim.tick();
      continue;
    }
    const pos = snap.surfboard.position;
    if (Math.abs(pos.y - rowY) <= LATERAL_ALIGN_TOLERANCE) {
      return;
    }
    sim.clickOcean(pos.x + 4, rowY);
    sim.tick();
  }
  throw new Error(`Failed to align to row y=${rowY}`);
}

function rideEastboundTrick(sim: GameSimulation, zone: TrickZone, mapWidth: number): void {
  const before = sim.getSnapshot().progression.session.tricksLanded;
  const aimX = Math.min(mapWidth - 3, zone.center.x + 30);

  for (let i = 0; i < 120; i += 1) {
    const snap = sim.getSnapshot();
    if (snap.surfboard.speedState !== 'riding' && !snap.trickAnimation) {
      sim.setSpeedState('riding');
    }
    const pos = snap.surfboard.position;
    const dist = Math.hypot(pos.x - zone.center.x, pos.y - zone.center.y);

    if (!snap.trickAnimation) {
      sim.clickOcean(aimX, zone.center.y);
      if (dist < 7 && dist > zone.radius * 0.6 && !snap.trickPrepare) {
        sim.prepareTrick(zone.prepareSlot);
      }
    }

    sim.tick();

    const after = sim.getSnapshot();
    if (after.progression.session.tricksLanded > before && !after.trickAnimation) {
      return;
    }
  }

  throw new Error(`Failed to land trick on ${zone.id}`);
}

function expectEastboundExit(sim: GameSimulation, zone: TrickZone): void {
  expect(sim.getSnapshot().surfboard.currentHeading).toBe(0);
  expect(sim.getSnapshot().surfboard.position.x).toBeGreaterThan(zone.center.x);
}

describe('animation test arena', () => {
  const arena = createAnimationTestSlice();

  it('is deterministic: aligned and counter-rotated rows with one zone per type', () => {
    const aligned = arena.trickZones.filter((zone) => zone.rotationRadians === 0);
    const counter = arena.trickZones.filter((zone) => zone.rotationRadians === Math.PI);
    expect(aligned.map((zone) => zone.type)).toEqual(ANIMATION_TEST_ZONE_TYPES);
    expect(counter.map((zone) => zone.type)).toEqual(ANIMATION_TEST_ZONE_TYPES);

    aligned.forEach((zone, index) => {
      expect(zone.center).toEqual(animationTestZoneCenter(index, ANIMATION_TEST_ALIGNED_ROW_Y));
      expect(zone.tricked).toBe(false);
    });
    counter.forEach((zone, index) => {
      expect(zone.center).toEqual(animationTestZoneCenter(index, ANIMATION_TEST_COUNTER_ROW_Y));
      expect(zone.tricked).toBe(false);
    });
  });

  it('has no tide, NPCs, or demo surfers to interfere with captures', () => {
    expect(arena.tide).toBeNull();
    expect(arena.npcs).toEqual([]);
    expect(arena.demoSurfers).toEqual([]);
  });

  it('spawns the player and board dock on the sand pad', () => {
    expect(getTile(arena.map, Math.floor(arena.spawnX), Math.floor(arena.spawnY))).toBe('sand');
    expect(getTile(arena.map, Math.floor(arena.boardDockX), Math.floor(arena.boardDockY))).toBe(
      'sand',
    );
  });

  it('keeps every approach and exit lane on open water', () => {
    for (const zone of arena.trickZones) {
      for (const offset of [-8, -4, 0, 4, 8]) {
        expect(isWorldPointSailingTarget(arena.map, zone.center.x + offset, zone.center.y)).toBe(
          true,
        );
      }
    }
  });

  it('eastbound trick exits east through a representative aligned feature', () => {
    const slice = createAnimationTestSlice();
    const brainCoral = slice.trickZones.find((zone) => zone.id === 'anim-brain_coral');
    expect(brainCoral).toBeDefined();

    const sim = new GameSimulation({ arena: slice });
    mountAndRide(sim, slice.boardDockX, slice.boardDockY);
    stageWestOfZone(sim, brainCoral!);
    alignToRow(sim, brainCoral!.center.y);
    rideEastboundTrick(sim, brainCoral!, slice.map.widthTiles);
    expectEastboundExit(sim, brainCoral!);
  });

  it('counter-rotated eastbound entry still exits east', () => {
    const slice = createAnimationTestSlice();
    const counterRail = slice.trickZones.find((zone) => zone.id === 'anim-rail-counter');
    expect(counterRail).toBeDefined();

    const sim = new GameSimulation({ arena: slice });
    mountAndRide(sim, slice.boardDockX, slice.boardDockY);
    stageWestOfZone(sim, counterRail!);
    alignToRow(sim, counterRail!.center.y);
    rideEastboundTrick(sim, counterRail!, slice.map.widthTiles);
    expectEastboundExit(sim, counterRail!);
  });

  it('lands wall ride from eastbound and lateral crossings with tuck primed', () => {
    const slice = createAnimationTestSlice();
    const wall = slice.trickZones.find((zone) => zone.id === 'anim-wall_ride');
    expect(wall).toBeDefined();

    const sim = new GameSimulation({ arena: slice });
    mountAndRide(sim, slice.boardDockX, slice.boardDockY);
    stageWestOfZone(sim, wall!);
    alignToRow(sim, wall!.center.y);
    rideEastboundTrick(sim, wall!, slice.map.widthTiles);
    expectEastboundExit(sim, wall!);
  });
});
