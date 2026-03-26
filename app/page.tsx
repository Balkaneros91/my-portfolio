import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BackgroundSection from "@/components/sections/BackgroundSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
        <HeroSection />
        <AboutSection />
        <BackgroundSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <MobileBottomNav />
      <Footer />
    </>
  );
}
