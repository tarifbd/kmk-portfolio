import {
  Zap,
  BarChart3,
  FileText,
  Cpu,
  Database,
  Layers,
  TrendingUp,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';
import ServiceCard from '@/components/ui/ServiceCard';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Zap, title: 'Accounting Process Automation', description: 'Automate manual accounting — data entry, reconciliation, journal posting — with modern software and AI.' },
  { icon: BarChart3, title: 'Finance Dashboard Development', description: 'Real-time dashboards for cash flow, P&L, compliance status, VAT tracking and KPI monitoring.' },
  { icon: FileText, title: 'Digital Tax & VAT Tools', description: 'Software to automate tax calculations, VAT return filing and compliance reporting workflows.' },
  { icon: Cpu, title: 'AI-assisted Financial Analysis', description: 'Apply AI to analyze financial data, detect anomalies and generate decision-ready insights.' },
  { icon: Database, title: 'ERP & Accounting System Advisory', description: 'Evaluate, select, configure and integrate accounting software — QuickBooks, Tally, SAP or custom ERP.' },
  { icon: Layers, title: 'Compliance Software Planning', description: 'Design software for regulatory compliance tracking, audit trails and automated reporting.' },
  { icon: TrendingUp, title: 'Business Intelligence & Reporting', description: 'Transform operational and financial data into actionable intelligence for better decisions.' },
  { icon: Globe, title: 'Business Process Digitization', description: 'Convert paper-based finance and compliance processes into efficient, auditable digital workflows.' },
];

export default function BlendSection() {
  return (
    <>
      {/* Cinematic navy separator */}
      <div className="relative overflow-hidden bg-navy text-cream">
        <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
        <div className="absolute -left-20 top-0 h-64 w-64 glow-gold opacity-30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 glow-blue opacity-30 blur-3xl" />
        <div className="container-x relative py-28 text-center md:py-36">
          {/* two lines meeting at a centre icon */}
          <div className="mx-auto mb-10 flex max-w-md items-center justify-center gap-4">
            <span
              className="h-px flex-1"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gold">
              <Zap size={18} strokeWidth={1.6} />
            </span>
            <span
              className="h-px flex-1"
              style={{ background: 'linear-gradient(90deg, #3B82F6, transparent)' }}
            />
          </div>
          <p className="eyebrow justify-center text-white/55">
            Where Finance Meets Technology
          </p>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl font-light text-cream">
            Unique services, only possible when deep financial expertise meets{' '}
            <span className="grad-text-blend italic">modern technology.</span>
          </h2>
        </div>
      </div>

      {/* Blend cards */}
      <section id="integrated" className="section-pad bg-paper">
        <div className="container-x">
          <SectionHeader
            index="06"
            label="Integrated Services"
            accent="blend"
            title={[
              <>
                Business <span className="grad-text-blend italic">×</span> Technology.
              </>,
            ]}
            intro="The intersection of accounting, compliance and digital transformation — solving the problems generalist consultants and developers can't, tailored to what the business actually needs."
          />

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <RevealOnView key={card.title} delay={(i % 4) * 0.06}>
                <ServiceCard {...card} index={i + 1} accent="blend" />
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
