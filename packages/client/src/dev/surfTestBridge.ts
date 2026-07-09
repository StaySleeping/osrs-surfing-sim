import type {
  GameSimulation,
  HeadingIndex,
  SimulationSnapshot,
  SpeedState,
  TrickPrepareSlot,
} from '@osrs-surfing/engine';

export interface SurfTestControls {
  pause: () => void;
  resume: () => void;
  renderFrame: () => void;
  getDisplayPosition?: () => { x: number; y: number };
  getTickBlend?: () => number;
  setTickBlend?: (blend: number) => void;
  setOrbit?: (yaw: number, pitch: number, distance?: number) => void;
  snapFocus?: (tileX: number, tileY: number) => void;
  onSimulationTick?: (before: SimulationSnapshot, after: SimulationSnapshot) => void;
  afterTick?: () => void;
  resetTickBlendTimer?: () => void;
}

export interface SurfTestApi {
  clickWorld: (x: number, y: number) => void;
  setSpeedState: (state: SpeedState) => void;
  prepareTrick: (slot: TrickPrepareSlot) => void;
  clearTrickPrepare: () => void;
  forceStartTrickAnimation: (
    zoneId: string,
    entry?: { x: number; y: number },
    heading?: HeadingIndex,
  ) => boolean;
  advanceTicks: (count?: number) => void;
  getSnapshot: () => SimulationSnapshot;
  consumeDialogue: () => string[];
  tickMs: number;
  pause: () => void;
  resume: () => void;
  setTideFrozen: (frozen: boolean) => void;
  setMovementFrozen: (frozen: boolean) => void;
  renderFrame: () => void;
  getDisplayPosition: () => { x: number; y: number };
  getTickBlend: () => number;
  /** Scrub display interpolation within the current tick (0–1). Dev/test only. */
  setTickBlend: (blend: number) => void;
  /** Set orbit camera yaw/pitch/distance. Dev/test only. */
  setOrbit: (yaw: number, pitch: number, distance?: number) => void;
  /** Snap camera focus to a tile without glide. Dev/test only. */
  snapFocus: (tileX: number, tileY: number) => void;
}

declare global {
  interface Window {
    __surfTest?: SurfTestApi;
  }
}

export function installSurfTestBridge(
  simulation: GameSimulation,
  controls: SurfTestControls,
): void {
  if (!import.meta.env.DEV) {
    return;
  }

  window.__surfTest = {
    clickWorld: (x, y) => simulation.clickWorld(x, y),
    setSpeedState: (state) => simulation.setSpeedState(state),
    prepareTrick: (slot) => simulation.prepareTrick(slot),
    clearTrickPrepare: () => simulation.clearTrickPrepare(),
    forceStartTrickAnimation: (zoneId, entry, heading) => {
      const before = simulation.getSnapshot();
      const ok = simulation.forceStartTrickAnimation(zoneId, entry, heading);
      if (ok) {
        const after = simulation.getSnapshot();
        controls.onSimulationTick?.(before, after);
        controls.resetTickBlendTimer?.();
        controls.snapFocus?.(after.surfboard.position.x, after.surfboard.position.y);
        controls.renderFrame();
      }
      return ok;
    },
    advanceTicks: (count = 1) => {
      for (let i = 0; i < count; i += 1) {
        const before = simulation.getSnapshot();
        simulation.tick();
        const after = simulation.getSnapshot();
        controls.onSimulationTick?.(before, after);
        controls.afterTick?.();
      }
      controls.resetTickBlendTimer?.();
    },
    getSnapshot: () => simulation.getSnapshot(),
    consumeDialogue: () => simulation.consumeDialogue(),
    tickMs: simulation.tickMs,
    pause: controls.pause,
    resume: controls.resume,
    setTideFrozen: (frozen) => simulation.setTideFrozen(frozen),
    setMovementFrozen: (frozen) => simulation.setMovementFrozen(frozen),
    renderFrame: controls.renderFrame,
    getDisplayPosition: () =>
      controls.getDisplayPosition?.() ?? simulation.getSnapshot().surfboard.position,
    getTickBlend: () => controls.getTickBlend?.() ?? 0,
    setTickBlend: (blend) => {
      controls.setTickBlend?.(blend);
      controls.renderFrame();
    },
    setOrbit: (yaw, pitch, distance) => {
      controls.setOrbit?.(yaw, pitch, distance);
      controls.renderFrame();
    },
    snapFocus: (tileX, tileY) => {
      controls.snapFocus?.(tileX, tileY);
      controls.renderFrame();
    },
  };
}
