interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Infinite horizontal marquee (CSS-only). The item list is duplicated and the
 * track translates -50%, so it loops seamlessly. Pauses under reduced motion.
 */
export default function Marquee({ items, className = '' }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted"
          >
            {item}
            <span className="text-gold/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
