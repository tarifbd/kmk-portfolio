'use client';

import { Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const credentials = [
  {
    title: 'MBA',
    subtitle: 'Accounting & Information Systems',
    institution: 'University of Dhaka',
  },
  {
    title: 'BBA',
    subtitle: 'Accounting & Information Systems',
    institution: 'University of Dhaka',
  },
  {
    title: 'CA CC (Partly Qualified)',
    subtitle: 'Chartered Accountancy Track',
    institution: 'ICAB',
  },
  {
    title: 'Certified ITP',
    subtitle: 'Income Tax Practitioner (Authorized Tax Lawyer)',
    institution: 'NBR Bangladesh',
  },
];

export default function CredentialsSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Academic & Professional Background</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-12 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Qualifications & Credentials
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {credentials.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-steel p-6 hover:border-gold-border transition-all duration-200 h-full">
                <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center mb-4">
                  <Award size={18} className="text-gold" />
                </div>
                <h3 className="text-[0.93rem] font-display font-bold text-navy mb-1">
                  {c.title}
                </h3>
                <p className="text-[0.82rem] text-smoke mb-2 leading-snug">{c.subtitle}</p>
                <p className="text-[0.72rem] font-mono uppercase tracking-wide text-gold">
                  {c.institution}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
