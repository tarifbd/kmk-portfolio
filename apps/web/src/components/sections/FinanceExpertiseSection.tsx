'use client';

import {
  BarChart3,
  FileText,
  Shield,
  Briefcase,
  Users,
  CheckCircle,
  TrendingUp,
  BookOpen,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceCard from '@/components/ui/ServiceCard';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BarChart3, title: 'Accounting & Financial Reporting', description: 'Full-cycle accounting, financial statements, COA design, reporting support.' },
  { icon: FileText, title: 'Income Tax Compliance', description: 'ITP-certified tax return preparation, planning and advisory for individuals and companies.' },
  { icon: Shield, title: 'VAT Compliance & Advisory', description: 'VAT registration, return filing, Musak submission, advisory for businesses.' },
  { icon: Briefcase, title: 'Customs Compliance', description: 'Import/export documentation, classification, duty advisory, regulatory support.' },
  { icon: Users, title: 'Corporate Regulatory Compliance', description: 'RJSC, trade licensing, BIDA registration, regulatory filings in Bangladesh.' },
  { icon: CheckCircle, title: 'Internal Control & Audit Support', description: 'Control framework design, audit preparation, working paper support, risk assessment.' },
  { icon: TrendingUp, title: 'Financial Analysis & Advisory', description: 'Business performance review, financial modelling, cost analysis, strategic advisory.' },
  { icon: BookOpen, title: 'Corporate Documentation', description: 'Business documentation, corporate planning, process mapping, operational advisory.' },
];

export default function FinanceExpertiseSection() {
  return (
    <section id="expertise" className="section-pad bg-paper">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="03">Primary Expertise</SectionLabel>
          <h2 className="display-lg text-ink2 mt-10 max-w-3xl">
            Finance, tax &amp; <span className="italic text-gold">compliance.</span>
          </h2>
          <p className="mt-6 text-[0.98rem] text-smoke leading-[1.85] max-w-xl">
            Deep, credential-backed expertise across accounting, tax, VAT, customs
            and regulatory compliance for businesses in Bangladesh.
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
  );
}
