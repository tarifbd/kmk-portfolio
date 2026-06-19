import type { Metadata } from 'next';
import { Fraunces, Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'K M Khadimul Hasan — Accounting, Finance & Compliance Professional',
  description:
    'Business advisor, tax & compliance specialist, and IT consultant from Dhaka, Bangladesh. CA CC, Certified ITP, MBA (AIS) — University of Dhaka.',
  keywords: [
    'accounting',
    'tax compliance',
    'VAT advisory',
    'Bangladesh',
    'ITP',
    'CA',
    'finance consultant',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${bricolage.variable} ${inter.variable} ${mono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
