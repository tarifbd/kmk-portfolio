import type { Metadata, Viewport } from 'next';
import {
  Fraunces,
  Bricolage_Grotesque,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';
import ThreeBackdrop from '@/components/three/ThreeBackdrop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CursorGlow from '@/components/ui/CursorGlow';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kmkhadimulhasan.com';
const title = 'K M Khadimul Hasan — Finance, Tax & Compliance, engineered with AI & Automation';
const description =
  'Accounting, finance, tax, VAT, customs and regulatory compliance — modernised with IT, AI and automation. CA CC (ICAB), Certified ITP (NBR), MBA & BBA in Accounting & Information Systems (University of Dhaka). Advisory & systems from Dhaka, Bangladesh.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — K M Khadimul Hasan',
  },
  description,
  keywords: [
    'accounting',
    'tax compliance',
    'VAT advisory',
    'customs compliance',
    'income tax practitioner',
    'ITP Bangladesh',
    'CA CC ICAB',
    'business automation',
    'AI automation',
    'finance dashboards',
    'ERP advisory',
    'full-stack developer',
    'Dhaka Bangladesh',
  ],
  authors: [{ name: 'K M Khadimul Hasan' }],
  creator: 'K M Khadimul Hasan',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'K M Khadimul Hasan',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EB',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'K M Khadimul Hasan',
  jobTitle: 'Finance, Tax & Compliance Advisor · IT & Automation Systems Builder',
  description,
  url: siteUrl,
  email: 'khadimul@inception23.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Dhaka' },
  knowsAbout: [
    'Accounting & Financial Reporting',
    'Income Tax & VAT Compliance',
    'Customs & Regulatory Compliance',
    'Business Process Automation',
    'AI & Full-stack Software Development',
  ],
  hasCredential: ['CA CC (ICAB)', 'Certified ITP (NBR Bangladesh)', 'MBA (AIS)', 'BBA (AIS)'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <ThreeBackdrop />
          <ScrollProgress />
          <CursorGlow />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
