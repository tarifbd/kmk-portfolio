/**
 * Tiny external store for normalized page scroll progress (0..1) and velocity.
 * Updated by the SmoothScroll provider; read imperatively by the 3D scene
 * inside useFrame (no React re-renders). Safe before hydration: defaults to 0.
 */
export interface ScrollState {
  progress: number;
  velocity: number;
}

const state: ScrollState = { progress: 0, velocity: 0 };
const listeners = new Set<() => void>();

export const scrollStore = {
  get: (): ScrollState => state,
  set: (next: Partial<ScrollState>) => {
    if (next.progress !== undefined) state.progress = next.progress;
    if (next.velocity !== undefined) state.velocity = next.velocity;
    listeners.forEach((l) => l());
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};
