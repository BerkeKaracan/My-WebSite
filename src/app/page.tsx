import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import PortfolioBackdrop from "@/components/PortfolioBackdrop";

export default function Home() {
  return (
    <main className="relative min-h-screen p-6 md:p-12 lg:p-24 text-zinc-800 dark:text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      <PortfolioBackdrop />
      <ThemeToggle />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
}
