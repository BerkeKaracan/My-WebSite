import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import PortfolioBackdrop from "@/components/PortfolioBackdrop";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen text-zinc-800 dark:text-zinc-300">
      <PortfolioBackdrop />

      <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/90">
        <div className="max-w-4xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20 animate-rise">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500"
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          {project.shortTitle ?? project.title}
        </h1>

        <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          {project.summary}
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 block rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          aria-label={`Open live demo of ${project.title}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-950/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Visit live site →
          </span>
        </a>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 2}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
          <div className="space-y-14">
            <section>
              <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-4">
                Overview
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-6">
                Key Features
              </h2>
              <ul className="space-y-6">
                {project.features.map((feature, i) => (
                  <li
                    key={feature.title}
                    className="flex gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-zinc-400 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:sticky lg:top-20 h-fit space-y-6">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-500 mb-3">
                Stack
              </h3>
              <ul className="space-y-1.5">
                {project.techStack.map((tech) => (
                  <li key={tech} className="text-sm text-zinc-700 dark:text-zinc-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.repoBlurb}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-200"
              >
                Visit Site
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
