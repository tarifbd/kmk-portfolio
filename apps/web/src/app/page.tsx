import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import FinanceExpertiseSection from '@/components/sections/FinanceExpertiseSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ITAutomationSection from '@/components/sections/ITAutomationSection';
import BlendSection from '@/components/sections/BlendSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Primary: finance, tax & compliance */}
        <HeroSection />
        <AboutSection />
        <CredentialsSection />
        <FinanceExpertiseSection />
        <ExperienceSection />
        {/* Secondary: IT, AI & automation */}
        <ITAutomationSection />
        {/* Blended: business × technology */}
        <BlendSection />
        <ProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
