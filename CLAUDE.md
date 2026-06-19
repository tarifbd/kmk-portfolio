# CLAUDE.md — KMK Hybrid Portfolio
> Full-stack portfolio for K M Khadimul Hasan  
> **Primary:** Business · Finance · Tax · Compliance  
> **Secondary:** IT · AI · Automation  
> **Special:** Blending section where both worlds meet  
> Read this entire file before writing any code.

---

## 1. PROJECT OVERVIEW

Build a **hyper-modern light-mode portfolio** that positions K M Khadimul Hasan primarily as a **finance, accounting, tax, and compliance professional** — with IT, AI, and automation as a secondary expertise. The site must clearly show **three service zones**:

1. **Finance & Compliance** (primary, gold accent)
2. **Business × Technology** — integrated/blending services (gradient accent)
3. **IT & Digital Solutions** (secondary, blue accent)

**Critical positioning rule:** This is NOT a developer portfolio. The visitor should first see a credentialed finance professional (CA CC, ITP, MBA), then discover his technology capabilities.

---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Backend | NestJS (TypeScript) |
| ORM | Prisma ORM |
| Database | PostgreSQL |
| Email | Resend API |
| Package manager | pnpm workspaces |
| Monorepo | Turborepo |
| Frontend deploy | Vercel |
| Backend deploy | Railway |

---

## 3. MONOREPO STRUCTURE

```
kmk-portfolio/
├── CLAUDE.md
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── .env.example
├── .gitignore
│
├── apps/
│   ├── web/                              # Next.js 15
│   │   ├── package.json
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   ├── public/
│   │   │   ├── images/
│   │   │   │   └── profile.jpg           # ← PUT REAL PHOTO HERE
│   │   │   └── cv.pdf
│   │   └── src/
│   │       ├── app/
│   │       │   ├── layout.tsx
│   │       │   ├── page.tsx
│   │       │   └── globals.css
│   │       ├── components/
│   │       │   ├── layout/
│   │       │   │   ├── Navbar.tsx
│   │       │   │   └── Footer.tsx
│   │       │   ├── sections/
│   │       │   │   ├── HeroSection.tsx
│   │       │   │   ├── AboutSection.tsx
│   │       │   │   ├── CredentialsSection.tsx
│   │       │   │   ├── FinanceExpertiseSection.tsx
│   │       │   │   ├── ExperienceSection.tsx
│   │       │   │   ├── BlendSection.tsx       ← THE UNIQUE SECTION
│   │       │   │   ├── ITServicesSection.tsx
│   │       │   │   ├── ProjectsSection.tsx
│   │       │   │   ├── TestimonialsSection.tsx
│   │       │   │   └── ContactSection.tsx
│   │       │   └── ui/
│   │       │       ├── AnimatedSection.tsx
│   │       │       ├── SectionLabel.tsx
│   │       │       ├── FinanceCard.tsx
│   │       │       ├── BlendCard.tsx
│   │       │       └── ITCard.tsx
│   │       ├── lib/
│   │       │   ├── api.ts
│   │       │   └── utils.ts
│   │       └── types/index.ts
│   │
│   └── api/                              # NestJS Backend
│       ├── package.json
│       ├── tsconfig.json
│       ├── nest-cli.json
│       ├── src/
│       │   ├── main.ts
│       │   ├── app.module.ts
│       │   ├── contact/
│       │   │   ├── contact.module.ts
│       │   │   ├── contact.controller.ts
│       │   │   ├── contact.service.ts
│       │   │   └── dto/create-contact.dto.ts
│       │   ├── mail/
│       │   │   ├── mail.module.ts
│       │   │   └── mail.service.ts
│       │   └── prisma/
│       │       ├── prisma.module.ts
│       │       └── prisma.service.ts
│       └── prisma/
│           ├── schema.prisma
│           └── migrations/
│
└── packages/
    └── types/
        └── src/index.ts
```

---

## 4. DESIGN SYSTEM

> Implement these EXACTLY. Every color, font, and spacing decision is specified.

### 4.1 Color Palette

```css
:root {
  /* Backgrounds */
  --cream:   #FAFAF7;   /* main page background — warm off-white, not pure white */
  --white:   #FFFFFF;   /* card surfaces */

  /* Text */
  --navy:    #0B1527;   /* headings — deep navy, very dark */
  --ink:     #1E2A3B;   /* sub-headings */
  --smoke:   #4A5568;   /* body text */
  --muted:   #6B7280;   /* secondary text */
  --light:   #94A3B8;   /* placeholder text */

  /* Finance Zone — GOLD */
  --gold:    #A87818;   /* primary finance accent */
  --goldl:   #FEFAEE;   /* gold tint background */
  --goldbdr: #E4C96B;   /* gold border */

  /* IT Zone — BLUE */
  --blue:    #1D50C8;   /* IT/tech accent */
  --bluel:   #EFF6FF;   /* blue tint background */
  --bluebdr: #BFDBFE;   /* blue border */

  /* Blend Zone — Gradient (gold → blue) */
  /* Used on blend cards, dividers, gradient text */

  /* Hero Right Panel */
  /* background: var(--navy) — deep navy for the photo panel */

  /* UI */
  --steel:   #E2E8F0;   /* default borders */
}
```

### 4.2 Three Visual Zones

| Zone | Background | Accent color | Card left border | Section bg |
|---|---|---|---|---|
| Finance (primary) | `--white` sections | `--gold` (#A87818) | 3px solid gold | alternates white/cream |
| Blending (unique) | `--white` | gradient gold→blue | gradient top border (3px) | white |
| IT (secondary) | `--cream` sections | `--blue` (#1D50C8) | 3px solid blue | cream |

### 4.3 Gradient Definitions

```css
/* Finance credential text */
.grad-gold { background: linear-gradient(135deg, #A87818, #C9A84C); }

/* IT accent text */
.grad-blue { background: linear-gradient(135deg, #1D50C8, #3B82F6); }

/* Blending — THE SIGNATURE GRADIENT */
.grad-blend { background: linear-gradient(135deg, #A87818, #1D50C8); }

/* Blend card top border (on hover) */
background: linear-gradient(90deg, #A87818, #1D50C8);

/* Hero right panel — NOT a gradient, solid navy: #0B1527 */
```

### 4.4 Typography

```
Google Fonts URL:
https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap

Roles:
  Display / All headings:  Bricolage Grotesque (wght 700-800, tracking -0.03em)
  Body / paragraphs:       Inter (wght 400-500)
  Labels / tags / mono:    JetBrains Mono (wght 400, uppercase, tracking-widest)

Type scale:
  Hero H1:    clamp(2.4rem, 4vw, 3.8rem), weight 800, line-height 1.07
  Section H2: clamp(1.8rem, 3vw, 2.5rem), weight 800, line-height 1.1
  Card title: 0.93-0.97rem, weight 700
  Body:       0.95rem, line-height 1.8
  Small body: 0.82rem, line-height 1.68
  Labels:     0.67rem, mono, uppercase, letter-spacing 0.22em
```

### 4.5 Signature Design Elements

1. **Split-panel hero**: Left = white content + subtle dot grid. Right = solid navy (`#0B1527`) with photo frame + floating credential badges.
2. **Floating credential badges** on hero right panel: white cards with gold/blue left border, position: absolute, with float animation.
3. **Finance cards**: Left 3px gold border, no top border, hover slides right (`translateX(4px)`).
4. **Blend cards**: White bg, gradient top border (gold→blue) appears on hover, full lift + shadow.
5. **IT cards**: Left 3px blue border, hover slides right.
6. **Blend header block**: Full-width dark navy section between experience and blend services, with two gradient lines meeting at a center icon.
7. **Experience timeline**: Gradient vertical line — gold at top, transitions to blue at bottom.
8. **Section labels**: `◈ Label Text` — JetBrains Mono, uppercase, 0.22em tracking. Gold for finance sections, blue for IT, gradient for blend.

---

## 5. PAGE SECTIONS & CONTENT

### 5.1 Navbar

```
Logo:      KMK. (dot in gold)
Links:     About | Expertise | Integrated Services | IT Services | Contact
CTA:       "Contact →" (navy filled button)
Scroll:    transparent → cream/blur on scroll + border-bottom border-steel
Mobile:    hamburger, full-screen dropdown
```

### 5.2 Hero Section (SPLIT PANEL)

```
Layout: grid, 1.15fr left / 0.85fr right, min-height: 100vh

LEFT (white bg, subtle 48px dot grid):
  [Eyebrow badge]  ● Business · Finance · Tax · Compliance Professional
                   (green dot, gold text, gold-50 bg, gold border, rounded-full, mono font)

  [H1 — Bricolage Grotesque, 3.8rem, weight 800]
    "K M [gold gradient]Khadimul[/gold] Hasan"

  [Subtitle — 0.95rem, smoke color]
    Business Advisor · Tax & Compliance Specialist · IT & Automation Enthusiast

  [Description — 2 lines, max-width 520px]
    "I help businesses manage accounting, finance, tax, VAT, customs, and regulatory
    compliance — with professional advisory support backed by CA and ITP credentials.
    I also bring IT, AI, and automation expertise to modernize how businesses operate."

  [Credential pills — 3 pills with gold border, mono font]:
    [Award icon] CA CC · Partly Qualified CA
    [Award icon] Certified ITP — Income Tax Lawyer
    [Award icon] MBA & BBA (AIS) — University of Dhaka

  [CTA buttons]:
    Primary: "View Expertise →"  (navy filled, Bricolage, weight 700)
    Secondary: "Contact Me"       (gold border, gold text, gold-50 hover)

RIGHT (navy bg #0B1527, dot grid overlay 10% opacity):
  [Background]: radial gradient glows (gold-tinted top-right, blue-tinted bottom-left)
  [Decorative rings]: 2 concentric circles, white at 6-10% opacity

  [Photo frame — center]:
    width: 220px, height: 275px
    background: rgba(255,255,255,0.09)
    border: 2px solid rgba(255,255,255,0.25)
    border-radius: 24px
    backdrop-filter: blur(8px)
    Content: <img src="/images/profile.jpg" /> or "KH" initials fallback

  [Floating badges — 3 credential cards + 1 available badge]:
    Available badge (top-left of photo frame):
      white bg, green dot + "Open to Advisory Engagements"

    Badge 1 (top-right, gold left border, animate-floatA):
      Title: "CA CC"
      Sub:   "Chartered Accountancy"

    Badge 2 (bottom-left, gold left border, animate-floatB):
      Title: "ITP Certified"
      Sub:   "Income Tax Practitioner"

    Badge 3 (middle-right, blue left border, animate-floatA 0.5s delay):
      Title: "MBA · DU"
      Sub:   "Accounting & Info Systems"
```

### 5.3 About Section

```
Section label: ◈ About Me (gold)
H2: Business Professional. Tech Enabler.
Desc: "Dhaka, Bangladesh — combining finance expertise with modern technology."

Layout: 2-column (1.4fr left text / 1fr right stats)

Left — 3 bio paragraphs:
  P1: BBA+MBA from University of Dhaka, CA CC, ITP certification, ICAB details
  P2: KPMG, ACNABIN, Agrani Bank, Brain Station 23, Inception23 career journey
  P3: Unique positioning — finance knowledge + IT skills, rare combination

Right — 2×2 Stat bento grid (white cards, 3px gold top border):
  CA+ITP   / Professional Qualifications
  10+      / Years Combined Experience
  5        / Firms & Organizations
  MBA+BBA  / University of Dhaka
```

### 5.4 Credentials Section

```
Section label: ◈ Academic & Professional Background (gold)
H2: Qualifications & Credentials
Grid: auto-fill, minmax(270px, 1fr)

4 credential cards (white bg, gold icon box, gold hover border):
  1. MBA — Accounting & Information Systems / University of Dhaka
  2. BBA — Accounting & Information Systems / University of Dhaka
  3. CA CC · Partly Qualified CA — Chartered Accountancy Track / ICAB
  4. Certified ITP — Income Tax Practitioner (Authorized Tax Lawyer) / NBR Bangladesh
```

### 5.5 Finance Expertise Section (GOLD ZONE)

```
Section label: ◈ Primary Expertise (gold)
H2: Finance, Tax & Compliance
Desc: "Deep, credential-backed expertise across accounting, tax, VAT, customs..."
Background: white

8 cards — LEFT 3px gold border, hover: translateX(4px) + gold shadow:

1.  Accounting & Financial Reporting      [BarChart3]
    Full-cycle accounting, financial statements, COA design, reporting support.

2.  Income Tax Compliance (ITP Certified) [FileText]
    Tax return preparation, planning, advisory for individuals and companies.

3.  VAT Compliance & Advisory             [Shield]
    VAT registration, return filing, Musak submission, advisory for businesses.

4.  Customs Compliance                    [Briefcase]
    Import/export documentation, classification, duty advisory, regulatory support.

5.  Corporate Regulatory Compliance       [Users]
    RJSC, trade licensing, BIDA registration, regulatory filings in Bangladesh.

6.  Internal Control & Audit Support      [CheckCircle]
    Control framework design, audit preparation, working paper support, risk assessment.

7.  Financial Analysis & Business Advisory [TrendingUp]
    Business performance review, financial modelling, cost analysis, strategic advisory.

8.  Corporate Documentation & Advisory    [BookOpen]
    Business documentation, corporate planning, process mapping, operational advisory.
```

### 5.6 Experience Timeline

```
Section label: ◈ Professional Journey (gold)
H2: Work Experience
Desc: "A career spanning Big Four, banking, CA practice, software, and enterprise AI."
Background: cream

Vertical timeline — gradient line (gold top → blue bottom):

Current dot: filled gold
Past dots: outlined, steel

5 entries (current first):
1. [CURRENT] CTO & Project Coordinator — Inception23
   Enterprise AI & Software Integration Company
   → Leading AI-driven software and digital transformation projects.
     Bridging finance, compliance, and technology for enterprise clients.

2. [PAST] Software & Technology — Brain Station 23
   Software Development Company
   → Technology exposure — software products, IT-driven processes, digital solutions.

3. [PAST] Senior Officer — Agrani Bank
   State-owned Commercial Bank
   → Banking operations, commercial credit, trade finance, regulatory compliance.

4. [PAST] Audit & Advisory — KPMG Bangladesh
   Big Four Professional Services Firm
   → Audit, advisory, compliance across banking, manufacturing, services.

5. [PAST] Audit & Advisory — ACNABIN
   Chartered Accountancy Firm
   → Statutory audit, tax compliance, financial reporting, CA articleship.
```

### 5.7 Blend Header Block (VISUAL SEPARATOR)

```
Full-width navy block (#0B1527) between Experience and Blend Services.
NOT a section — purely a visual separator/announcement.

Content (centered):
  [Two gradient lines meeting at center icon]
  Left line:   gradient 90deg transparent → gold
  Center icon: circle with Zap icon (gold tint)
  Right line:  gradient 90deg blue → transparent

  H2 (white): "Where Finance Meets Technology"
  P (white/60%): "Unique services only possible when deep business and financial
                  expertise combine with modern IT, AI, and automation capabilities."

Decorative: dot grid overlay at very low opacity
```

### 5.8 Blending Services Section (THE UNIQUE SECTION)

```
Section label: ◈ Integrated Services (GRADIENT gold→blue text)
H2: Business × Technology Services
Desc: "The intersection of accounting, compliance, and digital transformation —
       solving problems that generalist consultants and developers can't."
Background: white

8 blend cards — white bg, GRADIENT TOP BORDER (gold→blue) appears on hover:
  Card hover: box-shadow + translateY(-4px) + gradient top border visible

1.  Accounting Process Automation         [Zap]
    Automate manual accounting workflows — data entry, reconciliation, journal posting
    — using modern software and AI tools.

2.  Finance Dashboard Development         [BarChart3]
    Real-time dashboards for cash flow, P&L, compliance status, VAT tracking,
    and business KPI monitoring.

3.  Digital Tax & VAT Management Tools    [FileText]
    Software solutions to automate tax calculations, VAT return filing,
    and compliance reporting workflows.

4.  AI-assisted Financial Analysis        [Cpu]
    Apply AI tools to analyze financial data, detect anomalies, identify
    cost-saving opportunities, and generate business insights.

5.  ERP & Accounting System Advisory      [Database]
    Evaluate, select, configure, and integrate accounting software —
    QuickBooks, Tally, SAP, or custom ERP systems.

6.  Compliance Software Planning          [Layers]
    Design and implement software for regulatory compliance tracking,
    audit trails, and automated compliance reporting.

7.  Business Intelligence & Reporting     [TrendingUp]
    Transform operational and financial data into actionable intelligence
    for better business decisions.

8.  Business Process Digitization         [Globe]
    Convert paper-based and manual finance/compliance processes into
    efficient, auditable digital workflows.
```

### 5.9 IT Services Section (BLUE ZONE — SECONDARY)

```
Section label: ◈ Secondary Expertise (blue)
H2: IT & Digital Solutions
Desc: "Full-stack software development and digital services — websites, apps,
       SaaS, and digital marketing for businesses."
Background: cream

6 IT cards — LEFT 3px blue border, hover: translateX(4px) + blue shadow:

1.  Web Design & Development       [Globe]
    Custom websites and web applications — Next.js, React, TypeScript.

2.  App Development                [Smartphone]
    Cross-platform iOS and Android apps with React Native.

3.  SaaS Product Development       [Layers]
    End-to-end SaaS — auth, dashboards, billing, multi-tenancy.

4.  Digital Marketing              [TrendingUp]
    SEO, Google Ads, social media, and content marketing campaigns.

5.  UI/UX Design                   [Palette]
    Figma design — wireframes, prototypes, design systems.

6.  Business Automation            [Zap]
    Workflow automation, CRM integration, API connections, AI tools.
```

### 5.10 Projects

```
Section label: ◈ Work Highlights (gold)
H2: Projects & Advisory Work
Background: white

4 cards — 3px colored top bar matching zone:
  Gold bar = finance project
  Gradient bar = blend project
  Blue bar = IT project

1. TIN Audit Checker          [zone: finance, col: gold]
   Tag: Gov-Tech Tool | Status: Live
   NBR Bangladesh TIN compliance tool. 15,000+ records.
   Tech: HTML, CSS, JavaScript, GitHub Pages

2. AI Voice Agent System      [zone: blend, col: gray/gradient]
   Tag: Enterprise AI | Status: Delivered
   Voice agent for Matador Group FMCG — NLP, order automation, analytics.
   Tech: Node.js, AI/ML, PostgreSQL, React.js

3. UNKORA                     [zone: it, col: blue]
   Tag: E-Commerce Platform | Status: Live
   Bangladesh e-commerce platform with admin dashboard.
   Tech: Next.js 15, NestJS, PostgreSQL, Tailwind CSS
   Link: https://unkora.com.bd

4. Yamama                     [zone: it, col: blue]
   Tag: Global Marketplace | Status: In Progress
   Multi-vendor marketplace, Kafka, Go microservices, Kubernetes.
   Tech: Next.js, Go, Kafka, Kubernetes
```

### 5.11 Testimonials

```
Section label: ◈ Client Feedback (gold)
H2: What Clients Say
Background: cream

3 cards (focus on finance + blend testimonials):

1. Rafiqul Islam — Business Owner, Dhaka
   "Khadimul's understanding of our tax compliance needs was exceptional.
   He didn't just advise — he built us a system that actually works."

2. Farhan Ahmed — Startup Founder
   "He brought both financial expertise and technical know-how to our project.
   The dashboard he built gives us real visibility into our business."

3. Nadia Rahman — Finance Manager, Dhaka
   "Rare to find someone who understands both accounting and software.
   He automated our VAT process and saved us significant time every month."
```

### 5.12 Contact Section

```
Section label: ◈ Get In Touch (gold)
H2: Let's Discuss Your Needs
Desc: "Need support with accounting, tax, VAT, compliance, or business automation?"
Background: white

Layout: 1fr left info / 1.5fr right form

Left:
  "Ready to work together?" (H3)
  Description paragraph
  Contact items:
    [Mail]    khadimul@inception23.com
    [MapPin]  Dhaka, Bangladesh
    [Globe]   Available for remote advisory engagements

Right — Contact form (NO <form> tag — use div + onClick):
  Full Name *
  Email Address *
  Organization (optional)
  Service Required (GROUPED DROPDOWN):
    ── Finance & Compliance ──
      Accounting Advisory
      Income Tax Compliance (ITP)
      VAT Compliance
      Customs Compliance
      Corporate Regulatory Compliance
      Internal Control & Audit Support
      Financial Analysis & Advisory
    ── Business × Technology (Blended) ──
      Accounting Process Automation
      Finance Dashboard Development
      Digital Tax & VAT Tools
      AI-assisted Financial Analysis
      ERP & Accounting System Advisory
      Business Process Digitization
    ── IT & Digital Solutions ──
      Web Design & Development
      App Development
      SaaS Product Development
      Digital Marketing
      Business Automation & Integration
    Other / General Inquiry
  Message * (textarea)
  "Send Message →" button (navy)

On submit:
  → POST to /api/contact (NestJS)
  → Save to PostgreSQL
  → Send email via Resend
  → Show success toast (green left border, white bg)
```

### 5.13 CTA Banner

```
navy bg (#0B1527) with gold + blue radial glows + dot grid
H2 (white): "Need Accounting, Tax, or Business Automation Support?"
P (white/60%): "Let's discuss how professional advisory — combined with smart
                technology — can help your business become more compliant,
                efficient, and organized."
Buttons:
  Primary: "Get In Touch →" (white bg, navy text)
  Secondary: "View Integrated Services" (white outlined)
```

### 5.14 Footer

```
Navy background (#0B1527)
Logo: KMK. (gold dot)
Bio: "Business · Finance · Tax · Compliance · IT & Automation Advisory from Dhaka, Bangladesh."
Nav links: About | Expertise | Integrated Services | IT Services | Contact
Social: GitHub | LinkedIn | Email
Copyright: © 2025 K M Khadimul Hasan. All rights reserved.
```

---

## 6. BACKEND (NestJS API)

### 6.1 Contact DTO

```typescript
// apps/api/src/contact/dto/create-contact.dto.ts
export class CreateContactDto {
  @IsString() @MinLength(2) name: string;
  @IsEmail() email: string;
  @IsOptional() @IsString() organization?: string;
  @IsOptional() @IsString() service?: string;
  @IsString() @MinLength(10) message: string;
}
```

### 6.2 Contact API

```
POST /api/contact
  → Validate DTO
  → Save to contact_submissions table
  → Send email notification via Resend
  → Return { success: true, message: "..." }

GET /api/health
  → Return { status: 'ok', timestamp }
```

### 6.3 Email Notification (Resend)

```typescript
// Send to: khadimul@inception23.com
// Subject: "New Inquiry: {name} — {service}"
// Body: structured HTML with all submission fields
// From: 'Portfolio <noreply@yourdomain.com>'
```

---

## 7. DATABASE SCHEMA

```prisma
model ContactSubmission {
  id           String   @id @default(cuid())
  name         String
  email        String
  organization String?
  service      String?
  message      String
  read         Boolean  @default(false)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([email])
  @@index([createdAt])
  @@map("contact_submissions")
}
```

---

## 8. ENVIRONMENT VARIABLES

```env
# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# apps/api/.env
NODE_ENV=development
PORT=8000
DATABASE_URL=postgresql://user:password@localhost:5432/kmk_portfolio
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=khadimul@inception23.com

# Production (Railway — api)
NODE_ENV=production
DATABASE_URL=<Railway PostgreSQL URL>
RESEND_API_KEY=<your key>
FRONTEND_URL=https://kmkhadimuulhasan.com
```

---

## 9. TAILWIND CONFIG

```typescript
// apps/web/tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        navy:  { DEFAULT: '#0B1527', ink: '#1E2A3B' },
        gold:  { DEFAULT: '#A87818', light: '#FEFAEE', border: '#E4C96B' },
        brand: { DEFAULT: '#1D50C8', light: '#EFF6FF', border: '#BFDBFE' },
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 5.5s ease-in-out infinite',
      },
      keyframes: {
        floatA: { '0%,100%': { transform: 'translateY(0)' },  '50%': { transform: 'translateY(-8px)' } },
        floatB: { '0%,100%': { transform: 'translateY(-8px)' }, '50%': { transform: 'translateY(0)' } },
      },
    },
  },
};
```

---

## 10. GLOBALS.CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-cream font-body text-navy antialiased; }
  h1, h2, h3, h4 { @apply font-display; }
  ::selection { @apply bg-gold-light text-navy; }
}

@layer components {
  /* Finance card — gold left border */
  .finance-card {
    @apply bg-white border border-steel border-l-[3px] border-l-gold
           rounded-r-2xl p-6 transition-all duration-200 cursor-default;
  }
  .finance-card:hover {
    @apply border-gold-border translate-x-1 shadow-[0_6px_24px_rgba(168,120,24,.1)];
  }

  /* IT card — blue left border */
  .it-card {
    @apply bg-white border border-steel border-l-[3px] border-l-brand
           rounded-r-2xl p-6 transition-all duration-200 cursor-default;
  }
  .it-card:hover {
    @apply border-brand-border translate-x-1 shadow-[0_6px_24px_rgba(29,80,200,.08)];
  }

  /* Blend card — gradient top border on hover */
  .blend-card {
    @apply relative bg-white border border-steel rounded-2xl p-6
           transition-all duration-200 cursor-default overflow-hidden;
  }
  .blend-card::before {
    content: '';
    @apply absolute top-0 left-0 right-0 h-[3px] opacity-0 transition-opacity duration-300;
    background: linear-gradient(90deg, #A87818, #1D50C8);
    border-radius: 16px 16px 0 0;
  }
  .blend-card:hover { @apply -translate-y-1 shadow-[0_8px_28px_rgba(0,0,0,.08)] border-transparent; }
  .blend-card:hover::before { @apply opacity-100; }

  /* Section label */
  .section-label {
    @apply font-mono text-[0.67rem] uppercase tracking-[0.22em] mb-3 flex items-center gap-2;
  }
  .section-label::before { content: '◈'; font-size: 0.78em; }
}
```

---

## 11. layout.tsx

```tsx
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  axes: ['opsz'],
})
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400','500'] })

export const metadata = {
  title: 'K M Khadimul Hasan — Accounting, Finance & Compliance Professional',
  description: 'Business advisor, tax & compliance specialist, and IT consultant from Dhaka, Bangladesh. CA CC, Certified ITP, MBA (AIS) — University of Dhaka.',
  keywords: ['accounting', 'tax compliance', 'VAT advisory', 'Bangladesh', 'ITP', 'CA', 'finance consultant'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bricolage.variable} ${inter.variable} ${mono.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
```

---

## 12. IMPLEMENTATION ORDER

### Phase 1 — Setup
- [ ] Init pnpm monorepo + Turborepo
- [ ] Scaffold `apps/web` (Next.js 15 + TypeScript + Tailwind)
- [ ] Scaffold `apps/api` (NestJS)
- [ ] Configure `tailwind.config.ts` with all design tokens
- [ ] Write `globals.css` with component classes
- [ ] Set up font loading in `layout.tsx`
- [ ] Add `public/images/profile.jpg` placeholder

### Phase 2 — Frontend (section order)
- [ ] Navbar
- [ ] HeroSection (split panel — white left, navy right with photo + credential badges)
- [ ] AboutSection (bio + stats bento)
- [ ] CredentialsSection (4 cards)
- [ ] FinanceExpertiseSection (8 gold cards)
- [ ] ExperienceSection (gradient timeline)
- [ ] BlendSection (header block + 8 blend cards)
- [ ] ITServicesSection (6 blue cards)
- [ ] ProjectsSection (4 cards, color-coded by zone)
- [ ] TestimonialsSection (3 finance-focused quotes)
- [ ] ContactSection (grouped dropdown form)
- [ ] CtaBanner + Footer

### Phase 3 — Backend
- [ ] NestJS app with CORS
- [ ] Prisma schema + migration
- [ ] ContactModule (controller + service + DTO)
- [ ] MailModule (Resend)
- [ ] Validation pipe

### Phase 4 — Integration & Polish
- [ ] Connect form to backend API
- [ ] Success/error toast
- [ ] Framer Motion scroll reveals
- [ ] Mobile responsive (375px, 768px, 1280px)
- [ ] SEO meta tags
- [ ] sitemap.xml + robots.txt

### Phase 5 — Deploy
- [ ] Push to GitHub
- [ ] Deploy API → Railway
- [ ] Deploy web → Vercel
- [ ] Set all env vars
- [ ] Test contact form end-to-end

---

## 13. BUILD COMMANDS

```bash
pnpm install                          # Install all deps
pnpm dev                              # Run both apps
pnpm --filter web dev                 # Frontend only (port 3000)
pnpm --filter api start:dev           # Backend only (port 8000)

# Prisma
cd apps/api
pnpm prisma migrate dev --name init
pnpm prisma generate
pnpm prisma studio

pnpm build                            # Production build
```

---

## 14. CRITICAL NOTES FOR CLAUDE CODE

1. **Identity**: Finance is PRIMARY. IT is SECONDARY. Hero eyebrow says "Business · Finance · Tax · Compliance Professional" — NOT "Software Engineer".

2. **Photo**: `public/images/profile.jpg` → the photo-frame component. If file missing, show "KH" initials fallback (large, white, centered in the navy panel).

3. **Three zones are visually distinct**: Finance (gold) cards must NEVER use blue. IT (blue) cards must NEVER use gold. Only blend cards use the gradient.

4. **Blend section header**: NOT a regular section — it's a full-width navy block that visually separates the experience timeline from the blend services section.

5. **Contact form dropdown**: Use `<optgroup>` HTML element for the three grouped service categories. Style it properly.

6. **No `<form>` HTML tags**: Use `<div>` containers with React `onClick` on the submit button. Validate all required fields before calling the API.

7. **Framer Motion**: All components marked `'use client'`. Use `whileInView` with `once: true` for section reveals.

8. **TypeScript**: Strict mode. All component props typed with interfaces. No `any`.

9. **Mobile**: Hero split becomes stacked on < 900px. Right panel (navy) shows below the content. Floating badges hidden on mobile. Photo frame stays centered.

10. **Timeline gradient**: The vertical line goes from `var(--gold)` at the top to `var(--steel)` in the middle to `var(--blue)` at the bottom — reflecting the career path from pure finance to technology.
