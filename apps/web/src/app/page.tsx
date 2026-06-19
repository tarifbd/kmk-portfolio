import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import FinanceExpertiseSection from '@/components/sections/FinanceExpertiseSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import BlendSection from '@/components/sections/BlendSection';
import ITServicesSection from '@/components/sections/ITServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CredentialsSection />
        <FinanceExpertiseSection />
        <ExperienceSection />
        <BlendSection />
        <ITServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
