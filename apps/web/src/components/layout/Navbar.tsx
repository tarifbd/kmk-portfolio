'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#it-automation', label: 'Automation' },
  { href: '#integrated', label: 'Integrated' },
  { href: '#work', label: 'Work' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'border-b border-line bg-paper/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-xl tracking-tight text-ink2"
            aria-label="Home"
          >
            <span className="hidden sm:inline">K M Khadimul</span>
            <span className="sm:hidden">KMK</span>
            <span className="text-gold">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
                  active === l.href ? 'text-ink2' : 'text-muted hover:text-ink2'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href="#contact" className="!px-5 !py-2.5 !text-[0.8rem]">
              Contact
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </MagneticButton>
          </div>

          <button
            className="p-2 text-ink2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-28 transition-[clip-path,opacity] duration-500 md:hidden ${
          open
            ? 'pointer-events-auto opacity-100 [clip-path:inset(0_0_0_0)]'
            : 'pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="flex flex-col gap-2">
          {[...links, { href: '#contact', label: 'Contact' }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-line py-4"
            >
              <span className="font-serif text-3xl text-ink2">{l.label}</span>
              <span className="font-mono text-[0.62rem] text-muted">
                0{i + 1}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-auto font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          Dhaka, Bangladesh — khadimul@inception23.com
        </p>
      </div>
    </>
  );
}
