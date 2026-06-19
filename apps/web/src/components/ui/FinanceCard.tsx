import { LucideIcon } from 'lucide-react';

interface FinanceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FinanceCard({
  icon: Icon,
  title,
  description,
}: FinanceCardProps) {
  return (
    <div className="finance-card">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon size={18} className="text-gold" />
        </div>
        <div>
          <h3 className="text-[0.93rem] font-display font-700 text-navy mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-[0.82rem] text-smoke leading-[1.68]">{description}</p>
        </div>
      </div>
    </div>
  );
}
