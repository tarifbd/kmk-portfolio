import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#integrated', label: 'Integrated Services' },
  { href: '#it-services', label: 'IT Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="font-display font-bold text-xl text-white mb-2">
              KMK<span className="text-gold">.</span>
            </p>
            <p className="text-[0.85rem] max-w-xs leading-relaxed">
              Business · Finance · Tax · Compliance · IT & Automation Advisory from Dhaka, Bangladesh.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.85rem] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:khadimul@inception23.com"
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-[0.8rem]">
          © 2025 K M Khadimul Hasan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
