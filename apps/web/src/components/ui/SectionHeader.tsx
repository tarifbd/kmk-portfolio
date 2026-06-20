import type { ReactNode } from 'react';
import AnimatedText from './AnimatedText';

interface SectionHeaderProps {
  index: string;
  label: string;
  /** Heading content, supplied as one or more lines for the masked reveal. */
  title: ReactNode[];
  intro?: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
  /** Accent for the eyebrow rule + index. */
  accent?: 'gold' | 'blue' | 'blend' | 'ink';
  className?: string;
}

const accentText: Record<string, string> = {
  gold: 'text-gold',
  blue: 'text-brand',
  blend: 'grad-text-blend',
  ink: 'text-ink2',
};

/** Standardised eyebrow + masked display heading + optional intro. */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  light = false,
  align = 'left',
  accent = 'gold',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center';
  return (
    <div
      className={`${centered ? 'mx-auto text-center' : ''} ${className ?? ''}`}
    >
      <div
        className={`eyebrow ${centered ? 'justify-center' : ''} ${
          light ? 'text-white/55' : ''
        }`}
      >
        <span className={light ? 'text-white/75' : accentText[accent]}>
          ({index})
        </span>
        <span
          className={`h-px w-8 ${
            light ? 'bg-white/25' : 'bg-line'
          }`}
        />
        {label}
      </div>

      <AnimatedText
        as="h2"
        lines={title}
        delay={0.05}
        className={`display-lg mt-8 ${light ? 'text-cream' : 'text-ink2'} ${
          centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'
        }`}
      />

      {intro && (
        <p
          className={`reveal-up mt-6 text-[0.98rem] leading-[1.85] ${
            centered ? 'mx-auto' : ''
          } max-w-xl ${light ? 'text-white/60' : 'text-smoke'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
