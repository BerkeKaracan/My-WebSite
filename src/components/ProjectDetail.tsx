import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import ThemeToggle from "@/components/ThemeToggle";
import PortfolioBackdrop from "@/components/PortfolioBackdrop";
import type { Project } from "@/data/projects";
import { tagToneClasses } from "@/lib/tagStyles";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="relative min-h-screen text-zinc-800 dark:text-zinc-300 font-sans">
      <PortfolioBackdrop />

      <ThemeToggle />

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-16 flex flex-col gap-12 md:gap-16 animate-fade-up">
        <div className="flex flex-col gap-8 md:gap-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors w-fit group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>

          <header className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-12 items-end">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md ${tagToneClasses[tag.tone]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.05]">
                {project.shortTitle ?? project.title}
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 rounded-[1.75rem]"
          aria-label={`Open live demo of ${project.title}`}
        >
          <div
            aria-hidden
            className="absolute -inset-px rounded-[1.75rem] bg-linear-to-b from-zinc-300/80 via-zinc-200/40 to-transparent dark:from-zinc-600/50 dark:via-zinc-800/30 dark:to-transparent opacity-80"
          />
          <div className="relative overflow-hidden rounded-[1.65rem] border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl shadow-zinc-900/10 dark:shadow-black/40">
            <div className="relative w-full aspect-16/10 md:aspect-video">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-zinc-950/35 via-transparent to-transparent dark:from-zinc-950/55 pointer-events-none"
              />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-950/90 text-white opacity-0 translate-y-1 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                Visit live site
                <svg
                  className="w-3.5 h-3.5"
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
            </div>
          </div>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.85fr] gap-10 lg:gap-14">
          <div className="flex flex-col gap-14">
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-600" />
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                  Overview
                </h2>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg max-w-3xl">
                {project.overview}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-600" />
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                  Key Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="relative p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 transition-[border-color,background-color,transform] duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900 hover:-translate-y-0.5"
                  >
                    <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-12 flex flex-col gap-5 h-fit">
            <GlassCard className="p-6 md:p-7">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-400 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-7">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-400 mb-3">
                Links
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                {project.repoBlurb}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 text-sm font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg
                    className="w-5 h-5"
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
                  Visit Site
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-sm font-semibold rounded-xl transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </GlassCard>
          </aside>
        </div>
      </div>
    </main>
  );
}
