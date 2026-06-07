import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
