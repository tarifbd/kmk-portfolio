interface SectionLabelProps {
  children: string;
  index?: string;
  light?: boolean;
}

export default function SectionLabel({
  children,
  index,
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`eyebrow ${light ? 'text-white/50' : ''}`}
    >
      {index && <span className={light ? 'text-white/70' : 'text-ink2'}>({index})</span>}
      <span
        className={`h-px w-8 ${light ? 'bg-white/25' : 'bg-line'}`}
      />
      {children}
    </div>
  );
}
