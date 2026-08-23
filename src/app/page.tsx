import PortfolioBackdrop from "@/components/PortfolioBackdrop";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <PortfolioBackdrop />
      <SiteHeader />
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <SiteFooter />
      </div>
    </>
  );
}
