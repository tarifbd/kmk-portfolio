import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';

const credentials = [
  { title: 'MBA — Accounting & Information Systems', institution: 'University of Dhaka' },
  { title: 'BBA — Accounting & Information Systems', institution: 'University of Dhaka' },
  { title: 'CA CC (Partly Qualified)', institution: 'ICAB — Chartered Accountancy Track' },
  { title: 'Certified ITP — Income Tax Practitioner', institution: 'NBR — Authorized Tax Lawyer' },
];

export default function CredentialsSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Academic & Professional Background"
          accent="gold"
          title={['Qualifications & credentials.']}
        />

        <div className="mt-14 border-t border-line">
          {credentials.map((c, i) => (
            <RevealOnView key={c.title} delay={i * 0.06}>
              <div className="group grid grid-cols-1 items-baseline gap-4 border-b border-line py-8 md:grid-cols-12">
                <span className="font-mono text-[0.7rem] tracking-widest text-muted md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-[1.5rem] font-normal leading-tight text-ink2 transition-colors group-hover:text-gold md:col-span-7">
                  {c.title}
                </h3>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted md:col-span-4 md:text-right">
                  {c.institution}
                </p>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
