import {
  BarChart3,
  FileText,
  Shield,
  Briefcase,
  Users,
  CheckCircle,
  TrendingUp,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';
import ServiceCard from '@/components/ui/ServiceCard';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BarChart3, title: 'Accounting & Financial Reporting', description: 'Full-cycle accounting, financial statements, chart-of-accounts design and reporting support.' },
  { icon: FileText, title: 'Income Tax Compliance', description: 'ITP-certified tax return preparation, planning and advisory for individuals and companies.' },
  { icon: Shield, title: 'VAT Compliance & Advisory', description: 'VAT registration, return filing, Musak submission and advisory for businesses.' },
  { icon: Briefcase, title: 'Customs Compliance', description: 'Import/export documentation, classification, duty advisory and regulatory support.' },
  { icon: Users, title: 'Corporate Regulatory Compliance', description: 'RJSC, trade licensing, BIDA registration and regulatory filings in Bangladesh.' },
  { icon: CheckCircle, title: 'Internal Control & Audit Support', description: 'Control framework design, audit preparation, working-paper support and risk assessment.' },
  { icon: TrendingUp, title: 'Financial Analysis & Advisory', description: 'Business performance review, financial modelling, cost analysis and strategic advisory.' },
  { icon: BookOpen, title: 'Corporate Documentation', description: 'Business documentation, corporate planning, process mapping and operational advisory.' },
];

export default function FinanceExpertiseSection() {
  return (
    <section id="expertise" className="section-pad relative bg-paper">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Primary Expertise"
          accent="gold"
          title={[
            <>
              Finance, tax &amp;{' '}
              <span className="italic text-gold">compliance.</span>
            </>,
          ]}
          intro="Deep, credential-backed expertise across accounting, tax, VAT, customs and regulatory compliance for businesses in Bangladesh — the foundation everything else is built on."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <RevealOnView key={card.title} delay={(i % 4) * 0.06}>
              <ServiceCard {...card} index={i + 1} accent="gold" />
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
