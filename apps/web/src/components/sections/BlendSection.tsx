'use client';

import { Zap, BarChart3, FileText, Cpu, Database, Layers, TrendingUp, Globe, LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceCard from '@/components/ui/ServiceCard';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Zap, title: 'Accounting Process Automation', description: 'Automate manual accounting workflows — data entry, reconciliation, journal posting — with modern software and AI.' },
  { icon: BarChart3, title: 'Finance Dashboard Development', description: 'Real-time dashboards for cash flow, P&L, compliance status, VAT tracking and KPI monitoring.' },
  { icon: FileText, title: 'Digital Tax & VAT Tools', description: 'Software to automate tax calculations, VAT return filing and compliance reporting workflows.' },
  { icon: Cpu, title: 'AI-assisted Financial Analysis', description: 'Apply AI to analyze financial data, detect anomalies and generate business insights.' },
  { icon: Database, title: 'ERP & Accounting System Advisory', description: 'Evaluate, select, configure and integrate accounting software — QuickBooks, Tally, SAP or custom ERP.' },
  { icon: Layers, title: 'Compliance Software Planning', description: 'Design software for regulatory compliance tracking, audit trails and automated reporting.' },
  { icon: TrendingUp, title: 'Business Intelligence & Reporting', description: 'Transform operational and financial data into actionable intelligence for better decisions.' },
  { icon: Globe, title: 'Business Process Digitization', description: 'Convert paper-based finance and compliance processes into efficient, auditable digital workflows.' },
];

export default function BlendSection() {
  return (
    <>
      {/* Dark editorial separator */}
      <div className="bg-navy text-cream">
        <div className="container-x py-28 md:py-36 text-center">
          <AnimatedSection>
            <SectionLabel index="04" light>Where Finance Meets Technology</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h2 className="display-lg font-light text-cream mt-10 max-w-3xl mx-auto">
              Unique services, only possible when deep financial expertise meets{' '}
              <span className="italic text-gold">modern technology.</span>
            </h2>
          </AnimatedSection>
        </div>
      </div>

      <section id="integrated" className="section-pad bg-paper">
        <div className="container-x">
          <AnimatedSection>
            <SectionLabel index="05">Integrated Services</SectionLabel>
            <h2 className="display-lg text-ink2 mt-10 max-w-3xl">
              Business <span className="italic text-gold">×</span> Technology.
            </h2>
            <p className="mt-6 text-[0.98rem] text-smoke leading-[1.85] max-w-xl">
              The intersection of accounting, compliance and digital transformation —
              solving problems generalist consultants and developers can&apos;t.
            </p>
          </AnimatedSection>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {cards.map((card, i) => (
              <AnimatedSection key={card.title} delay={(i % 4) * 0.06}>
                <ServiceCard {...card} index={i + 1} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
