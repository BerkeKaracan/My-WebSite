import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800">
      <SectionLabel index="01" title="Selected Work" />
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
