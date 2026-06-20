import { createElement, type ElementType, type ReactNode } from 'react';

interface AnimatedTextProps {
  /** Each entry becomes one masked, upward-revealing line. */
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** Seconds before the first line starts. */
  delay?: number;
  /** Seconds between successive lines. */
  stagger?: number;
}

/**
 * Masked, staggered line reveal (pure CSS, mount-based). The resting state is
 * visible — the animation only plays the entrance — so it is safe for
 * screenshots, crawlers and reduced motion.
 */
export default function AnimatedText({
  lines,
  as = 'span',
  className,
  delay = 0,
  stagger = 0.09,
}: AnimatedTextProps) {
  return createElement(
    as,
    { className },
    lines.map((line, i) => (
      <span key={i} className="line-mask">
        <span
          className="line-inner"
          style={{ animationDelay: `${delay + i * stagger}s` }}
        >
          {line}
        </span>
      </span>
    )),
  );
}
