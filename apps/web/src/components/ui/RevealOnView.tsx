import type { ReactNode } from 'react';

interface RevealOnViewProps {
  children: ReactNode;
  className?: string;
  /** Seconds of entrance delay (use for simple staggered grids). */
  delay?: number;
}

/**
 * Entrance reveal wrapper. Uses the pure-CSS `.reveal-up` animation whose
 * resting state is visible (opacity:1) — so content can never get stuck
 * invisible in screenshots, crawlers or capture renderers, and it degrades
 * cleanly under prefers-reduced-motion. Motion is purely additive.
 */
export default function RevealOnView({
  children,
  className,
  delay = 0,
}: RevealOnViewProps) {
  return (
    <div
      className={`reveal-up${className ? ` ${className}` : ''}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
