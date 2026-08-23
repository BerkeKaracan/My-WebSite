import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 0;

  return (
    <article className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-4/3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 ${reversed ? "lg:order-2" : ""}`}
        aria-label={`Open live demo of ${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <span className="absolute top-4 left-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">
          {String(index).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-950/90 text-white opacity-0 translate-y-1 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          Live
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </a>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-500 dark:text-zinc-500 after:content-['·'] last:after:content-none after:mx-1.5 after:text-zinc-300 dark:after:text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-200"
          >
            Case study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
          >
            Visit site
          </a>
        </div>
      </div>
    </article>
  );
}
