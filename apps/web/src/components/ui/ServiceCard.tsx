import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <div className="edge-card group h-full">
      <div className="flex items-start justify-between mb-7">
        <Icon
          size={22}
          strokeWidth={1.4}
          className="text-ink2 transition-colors group-hover:text-gold"
        />
        {index !== undefined && (
          <span className="font-mono text-[0.68rem] text-muted tracking-widest">
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="font-serif font-normal text-[1.35rem] leading-tight text-ink2 mb-3">
        {title}
      </h3>
      <p className="text-[0.88rem] text-smoke leading-[1.75]">{description}</p>
    </div>
  );
}
