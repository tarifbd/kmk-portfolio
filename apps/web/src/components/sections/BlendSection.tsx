'use client';

import { Zap, BarChart3, FileText, Cpu, Database, Layers, TrendingUp, Globe } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import BlendCard from '@/components/ui/BlendCard';
import { LucideIcon } from 'lucide-react';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: 'Accounting Process Automation',
    description:
      'Automate manual accounting workflows — data entry, reconciliation, journal posting — using modern software and AI tools.',
  },
  {
    icon: BarChart3,
    title: 'Finance Dashboard Development',
    description:
      'Real-time dashboards for cash flow, P&L, compliance status, VAT tracking, and business KPI monitoring.',
  },
  {
    icon: FileText,
    title: 'Digital Tax & VAT Management Tools',
    description:
      'Software solutions to automate tax calculations, VAT return filing, and compliance reporting workflows.',
  },
  {
    icon: Cpu,
    title: 'AI-assisted Financial Analysis',
    description:
      'Apply AI tools to analyze financial data, detect anomalies, identify cost-saving opportunities, and generate business insights.',
  },
  {
    icon: Database,
    title: 'ERP & Accounting System Advisory',
    description:
      'Evaluate, select, configure, and integrate accounting software — QuickBooks, Tally, SAP, or custom ERP systems.',
  },
  {
    icon: Layers,
    title: 'Compliance Software Planning',
    description:
      'Design and implement software for regulatory compliance tracking, audit trails, and automated compliance reporting.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence & Reporting',
    description:
      'Transform operational and financial data into actionable intelligence for better business decisions.',
  },
  {
    icon: Globe,
    title: 'Business Process Digitization',
    description:
      'Convert paper-based and manual finance/compliance processes into efficient, auditable digital workflows.',
  },
];

export default function BlendSection() {
  return (
    <>
      {/* Blend Header Block */}
      <div
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: '#0B1527' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-0 mb-8">
            <div
              className="h-[2px] flex-1 max-w-[160px]"
              style={{ background: 'linear-gradient(90deg, transparent, #A87818)' }}
            />
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-4">
              <Zap size={20} className="text-gold" />
            </div>
            <div
              className="h-[2px] flex-1 max-w-[160px]"
              style={{ background: 'linear-gradient(90deg, #1D50C8, transparent)' }}
            />
          </div>
          <h2
            className="font-display font-extrabold text-white mb-4 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Where Finance Meets Technology
          </h2>
          <p className="text-white/60 text-[0.95rem] leading-relaxed">
            Unique services only possible when deep business and financial expertise combine
            with modern IT, AI, and automation capabilities.
          </p>
        </div>
      </div>

      {/* Blend Services */}
      <section id="integrated" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionLabel variant="blend">Integrated Services</SectionLabel>
            <h2
              className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Business × Technology Services
            </h2>
            <p className="text-smoke text-[0.95rem] mb-12 max-w-2xl">
              The intersection of accounting, compliance, and digital transformation —
              solving problems that generalist consultants and developers can&apos;t.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.06}>
                <BlendCard {...card} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
