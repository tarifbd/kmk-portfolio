import type { LucideIcon } from 'lucide-react';
import TiltCard from './TiltCard';

type Accent = 'gold' | 'blue' | 'blend';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  accent?: Accent;
}

const iconWrap: Record<Accent, string> = {
  gold: 'bg-gold-light text-gold border-gold-border/50',
  blue: 'bg-brand-light text-brand border-brand-border/60',
  blend: 'bg-white text-ink2 border-line',
};

const hoverTitle: Record<Accent, string> = {
  gold: 'group-hover:text-gold',
  blue: 'group-hover:text-brand',
  blend: 'group-hover:grad-text-blend',
};

/** Premium zone-coloured capability card with a subtle pointer tilt. */
export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  accent = 'gold',
}: ServiceCardProps) {
  return (
    <TiltCard className={`zone-card zone-card--${accent} group h-full`}>
      <div className="flex items-start justify-between mb-7">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${iconWrap[accent]}`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </span>
        {index !== undefined && (
          <span className="font-mono text-[0.66rem] text-muted tracking-widest">
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3
        className={`font-serif font-normal text-[1.3rem] leading-tight text-ink2 mb-3 transition-colors ${hoverTitle[accent]}`}
      >
        {title}
      </h3>
      <p className="text-[0.88rem] text-smoke leading-[1.75]">{description}</p>
    </TiltCard>
  );
}
