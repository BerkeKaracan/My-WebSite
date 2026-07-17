import GlassCard from "@/components/GlassCard";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="group/heading text-lg font-semibold mb-6 text-zinc-800 dark:text-zinc-100 tracking-wide flex items-center gap-3">
      <span className="w-8 h-px bg-zinc-400 dark:bg-zinc-600 transition-[width] duration-200 group-hover/heading:w-12" />
      {children}
    </h3>
  );
}

export default function MainContent() {
  return (
    <div className="w-full md:w-2/3 flex flex-col gap-8 animate-fade-up-delayed">
      <GlassCard className="group">
        <SectionHeading>SUMMARY</SectionHeading>
        <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-justify">
          <p>
            I am a Full-Stack Engineer focused on building functional and
            scalable web applications. I handle both frontend interfaces and
            backend architectures, prioritizing clean code and maintainable
            systems over buzzwords. My core stack consists of Next.js, Tailwind
            CSS, and Zustand for building interactive user interfaces, paired
            with Python and PostgreSQL for backend logic and relational data
            modeling. When solving complex problems—such as processing data or
            managing dynamic states—I focus on clear architecture, reliable data
            flows, and shipping features that stay maintainable as projects grow.
          </p>
        </div>
      </GlassCard>

      <GlassCard>
        <SectionHeading>FEATURED PROJECTS</SectionHeading>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <SectionHeading>CERTIFICATIONS</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/Software_Development_Tools_Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Software Development Tools
            </p>
            <p className="text-[11px] text-zinc-500 uppercase mt-1 tracking-wider font-mono">
              BTK ACADEMY • 2026
            </p>
          </a>
        </div>
      </GlassCard>
    </div>
  );
}
