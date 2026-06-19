interface SectionLabelProps {
  children: string;
  variant?: 'gold' | 'blue' | 'blend';
}

export default function SectionLabel({
  children,
  variant = 'gold',
}: SectionLabelProps) {
  const colorMap = {
    gold: 'text-gold',
    blue: 'text-brand',
    blend: '',
  };

  if (variant === 'blend') {
    return (
      <p
        className="section-label"
        style={{
          background: 'linear-gradient(135deg, #A87818, #1D50C8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {children}
      </p>
    );
  }

  return (
    <p className={`section-label ${colorMap[variant]}`}>{children}</p>
  );
}
