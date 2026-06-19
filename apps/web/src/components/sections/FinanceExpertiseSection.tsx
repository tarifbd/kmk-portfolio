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
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import FinanceCard from '@/components/ui/FinanceCard';
import { LucideIcon } from 'lucide-react';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BarChart3,
    title: 'Accounting & Financial Reporting',
    description:
      'Full-cycle accounting, financial statements, COA design, reporting support.',
  },
  {
    icon: FileText,
    title: 'Income Tax Compliance (ITP Certified)',
    description:
      'Tax return preparation, planning, advisory for individuals and companies.',
  },
  {
    icon: Shield,
    title: 'VAT Compliance & Advisory',
    description:
      'VAT registration, return filing, Musak submission, advisory for businesses.',
  },
  {
    icon: Briefcase,
    title: 'Customs Compliance',
    description:
      'Import/export documentation, classification, duty advisory, regulatory support.',
  },
  {
    icon: Users,
    title: 'Corporate Regulatory Compliance',
    description:
      'RJSC, trade licensing, BIDA registration, regulatory filings in Bangladesh.',
  },
  {
    icon: CheckCircle,
    title: 'Internal Control & Audit Support',
    description:
      'Control framework design, audit preparation, working paper support, risk assessment.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis & Business Advisory',
    description:
      'Business performance review, financial modelling, cost analysis, strategic advisory.',
  },
  {
    icon: BookOpen,
    title: 'Corporate Documentation & Advisory',
    description:
      'Business documentation, corporate planning, process mapping, operational advisory.',
  },
];

export default function FinanceExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Primary Expertise</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Finance, Tax & Compliance
          </h2>
          <p className="text-smoke text-[0.95rem] mb-12 max-w-2xl">
            Deep, credential-backed expertise across accounting, tax, VAT, customs,
            and regulatory compliance for businesses in Bangladesh.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.06}>
              <FinanceCard {...card} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
