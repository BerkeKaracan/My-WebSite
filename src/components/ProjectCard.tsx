import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { tagToneClasses } from "@/lib/tagStyles";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/project flex flex-col xl:flex-row gap-6 items-stretch bg-zinc-50 dark:bg-zinc-950/60 p-4 md:p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 transition-[border-color,box-shadow] duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/25">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full xl:w-[46%] rounded-2xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-950 block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
        aria-label={`Open live demo of ${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={600}
          className="object-cover object-top w-full h-[230px] xl:h-full xl:min-h-[240px] transition-transform duration-300 ease-out group-hover/project:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-zinc-950/40 to-transparent opacity-0 transition-opacity duration-200 group-hover/project:opacity-100 pointer-events-none"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-zinc-950/90 text-white opacity-0 translate-y-1 transition-[opacity,transform] duration-200 group-hover/project:opacity-100 group-hover/project:translate-y-0">
          Live demo
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </a>

      <div className="w-full xl:w-[54%] flex flex-col gap-4 py-1 xl:pr-2">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md ${tagToneClasses[tag.tone]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {project.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-1 flex flex-wrap gap-3">
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View Details
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/project:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Visit Site
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
