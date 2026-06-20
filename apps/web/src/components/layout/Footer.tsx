import { ArrowUpRight } from 'lucide-react';

const nav = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#it-automation', label: 'Automation' },
  { href: '#integrated', label: 'Integrated' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const social = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'mailto:khadimul@inception23.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/55">
      <div className="hairline-grad" />
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-x relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl text-cream">
              K M Khadimul<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed">
              Accounting, finance, tax, VAT &amp; compliance — engineered with IT, AI
              and automation. Advisory &amp; systems, from Dhaka, Bangladesh.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/35">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-3">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="w-fit text-[0.9rem] transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/35">
              Elsewhere
            </p>
            <div className="flex flex-col gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-1.5 text-[0.9rem] transition-colors hover:text-cream"
                >
                  {s.label}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.6}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/35 sm:flex-row">
          <span>© 2026 K M Khadimul Hasan</span>
          <span>Designed &amp; built in Dhaka</span>
        </div>
      </div>
    </footer>
  );
}
