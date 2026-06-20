import { Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';

const testimonials = [
  { quote: "Khadimul's understanding of our tax compliance needs was exceptional. He didn't just advise — he built us a system that actually works.", name: 'Rafiqul Islam', title: 'Business Owner, Dhaka' },
  { quote: 'He brought both financial expertise and technical know-how to our project. The dashboard he built gives us real visibility into our business.', name: 'Farhan Ahmed', title: 'Startup Founder' },
  { quote: 'Rare to find someone who understands both accounting and software. He automated our VAT process and saved us significant time every month.', name: 'Nadia Rahman', title: 'Finance Manager, Dhaka' },
];

const proof = [
  { value: '15,000+', label: 'Records validated (TIN tool)' },
  { value: '10+', label: 'Years across finance & tech' },
  { value: '05', label: 'Firms & organizations' },
  { value: 'CA · ITP', label: 'Credentialed advisory' },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeader
          index="10"
          label="Proof & Feedback"
          accent="gold"
          title={['What working together looks like.']}
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealOnView key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col border-t border-line pt-8">
                <Quote size={22} strokeWidth={1.4} className="mb-5 text-gold" />
                <blockquote className="mb-8 flex-1 font-serif text-[1.28rem] font-light leading-[1.5] text-ink2">
                  {t.quote}
                </blockquote>
                <figcaption>
                  <p className="font-display text-[0.9rem] font-semibold text-ink2">
                    {t.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                    {t.title}
                  </p>
                </figcaption>
              </figure>
            </RevealOnView>
          ))}
        </div>

        {/* Factual proof strip */}
        <RevealOnView delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label} className="bg-cream p-7">
                <p className="font-serif text-[1.9rem] font-light leading-none text-ink2">
                  {p.value}
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
