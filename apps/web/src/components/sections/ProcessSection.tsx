import {
  Search,
  Map,
  PenTool,
  Boxes,
  Workflow,
  Gauge,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';

interface Step {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const steps: Step[] = [
  { icon: Search, title: 'Diagnose', detail: 'Understand the business, the numbers and the real bottleneck — not the symptom.' },
  { icon: Map, title: 'Map Systems', detail: 'Document how work, data and compliance actually flow today.' },
  { icon: PenTool, title: 'Design Architecture', detail: 'Design the target system — tools, data model, controls and integrations.' },
  { icon: Boxes, title: 'Build MVP', detail: 'Ship the smallest version that delivers real value, fast.' },
  { icon: Workflow, title: 'Automate', detail: 'Remove manual steps with workflows, AI and integrations.' },
  { icon: Gauge, title: 'Optimize', detail: 'Measure, tune and harden for accuracy, speed and reliability.' },
  { icon: Rocket, title: 'Scale', detail: 'Extend the system across teams and processes as the business grows.' },
];

/** Accent shifts gold (finance) → blue (technology) across the pipeline. */
function accentColor(i: number, total: number) {
  const t = i / (total - 1);
  return t < 0.34 ? '#A87818' : t < 0.67 ? '#9A6E4A' : '#1D50C8';
}

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeader
          index="07"
          label="How I Work"
          accent="blend"
          title={[
            <>
              From problem to{' '}
              <span className="grad-text-blend italic">running system.</span>
            </>,
          ]}
          intro="A repeatable path from diagnosis to scale — the same discipline whether the deliverable is a compliance fix or a full automation platform."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const color = accentColor(i, steps.length);
            const Icon = step.icon;
            return (
              <RevealOnView key={step.title} delay={(i % 4) * 0.05}>
                <div className="zone-card group h-full overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] opacity-60"
                    style={{ background: color }}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className="font-serif text-[2.4rem] font-light leading-none"
                      style={{ color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={20} strokeWidth={1.5} style={{ color }} />
                  </div>
                  <h3 className="mt-6 font-serif text-[1.3rem] leading-tight text-ink2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-[1.7] text-smoke">
                    {step.detail}
                  </p>
                </div>
              </RevealOnView>
            );
          })}

          {/* closing tile */}
          <RevealOnView delay={0.15}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-navy p-6 text-cream">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/45">
                The result
              </p>
              <p className="mt-3 font-serif text-[1.3rem] font-light leading-snug">
                Fewer manual hours. Cleaner compliance. Decisions backed by real data.
              </p>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
