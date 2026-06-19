'use client';

import { Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const testimonials = [
  {
    quote:
      "Khadimul's understanding of our tax compliance needs was exceptional. He didn't just advise — he built us a system that actually works.",
    name: 'Rafiqul Islam',
    title: 'Business Owner, Dhaka',
  },
  {
    quote:
      'He brought both financial expertise and technical know-how to our project. The dashboard he built gives us real visibility into our business.',
    name: 'Farhan Ahmed',
    title: 'Startup Founder',
  },
  {
    quote:
      "Rare to find someone who understands both accounting and software. He automated our VAT process and saved us significant time every month.",
    name: 'Nadia Rahman',
    title: 'Finance Manager, Dhaka',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Client Feedback</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-12 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            What Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-steel p-6 h-full flex flex-col">
                <Quote size={20} className="text-gold mb-4 flex-shrink-0" />
                <p className="text-[0.9rem] text-smoke leading-[1.8] flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-steel pt-4">
                  <p className="text-[0.88rem] font-display font-bold text-navy">{t.name}</p>
                  <p className="text-[0.75rem] font-mono text-muted uppercase tracking-wide mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
