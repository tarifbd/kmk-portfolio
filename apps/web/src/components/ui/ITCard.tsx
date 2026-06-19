import { LucideIcon } from 'lucide-react';

interface ITCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ITCard({ icon: Icon, title, description }: ITCardProps) {
  return (
    <div className="it-card">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon size={18} className="text-brand" />
        </div>
        <div>
          <h3 className="text-[0.93rem] font-display font-bold text-navy mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-[0.82rem] text-smoke leading-[1.68]">{description}</p>
        </div>
      </div>
    </div>
  );
}
