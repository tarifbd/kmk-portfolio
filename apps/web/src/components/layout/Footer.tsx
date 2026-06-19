const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#integrated', label: 'Integrated' },
  { href: '#it-services', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
];

const social = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'mailto:khadimul@inception23.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55 border-t border-white/10">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl text-cream mb-4">
              K M Khadimul<span className="text-gold">.</span>
            </p>
            <p className="text-[0.85rem] leading-relaxed max-w-xs">
              Business · Finance · Tax · Compliance · IT &amp; Automation advisory
              from Dhaka, Bangladesh.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/35 mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-[0.9rem] hover:text-cream transition-colors w-fit">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/35 mb-5">Elsewhere</p>
            <div className="flex flex-col gap-3">
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] hover:text-cream transition-colors w-fit">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/35">
          <span>© 2026 K M Khadimul Hasan</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
