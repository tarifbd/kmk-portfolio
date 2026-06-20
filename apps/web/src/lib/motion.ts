import type { Variants, Transition } from 'framer-motion';

/** Premium easing — the same curve used across CSS reveals. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.4, 0, 0.2, 1] as const;

export const DUR = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.2,
} as const;

/** Standard in-view viewport — fire once, a little before fully in frame. */
export const VIEWPORT = { once: true, amount: 0.25, margin: '0px 0px -10% 0px' } as const;

const baseTransition: Transition = { duration: DUR.base, ease: EASE };

/**
 * Reveal variants. The `show` state is always the natural, visible resting
 * state — so if the in-view trigger never fires (screenshots, crawlers,
 * reduced motion) content is fully visible. Motion is purely additive.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: baseTransition },
};

/** Stagger container — children use the variants above. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Word/line reveal used by AnimatedText. */
export const lineReveal: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: DUR.slow, ease: EASE } },
};
