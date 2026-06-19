import { LucideIcon } from 'lucide-react';

interface BlendCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BlendCard({
  icon: Icon,
  title,
  description,
}: BlendCardProps) {
  return (
    <div className="blend-card">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: 'linear-gradient(135deg, #FEFAEE, #EFF6FF)' }}
      >
        <Icon
          size={18}
          style={{
            background: 'linear-gradient(135deg, #A87818, #1D50C8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        />
      </div>
      <h3 className="text-[0.93rem] font-display font-bold text-navy mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[0.82rem] text-smoke leading-[1.68]">{description}</p>
    </div>
  );
}
