import Link from "next/link";
import Image from "next/image";
import GlassCard from "@/components/GlassCard";

export default function B2BSaaSProject() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors w-fit group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
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

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/50">
              B2B SaaS
            </span>
            <span className="px-3 py-1.5 text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full border border-purple-200 dark:border-purple-800/50">
              Full-Stack
            </span>
            <span className="px-3 py-1.5 text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800/50">
              🚧 Work in Progress
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
            Dynamic Canvas Workspace
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            A highly interactive, multi-tenant B2B platform featuring a
            node-based canvas for building dynamic forms, kanban boards, and
            timelines.
          </p>
        </div>

        <GlassCard className="overflow-hidden p-2 md:p-3">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/b2b-saas-preview.png"
              alt="B2B SaaS Canvas Workspace Mockup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Project Overview
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg">
                This platform serves as a comprehensive digital workspace for
                modern teams. By utilizing a highly advanced dynamic canvas
                architecture, users can freely drag, drop, and connect various
                modules such as text blocks, interactive forms, and task boards
                to create custom workflows. The multi-tenant backend
                architecture ensures complete data isolation and scalability for
                enterprise clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Key Features
              </h2>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Node-based Dynamic Canvas:</strong> Interactive
                    drag-and-drop interface for infinite workspace
                    customization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Modular Blocks:</strong> Seamlessly render
                    interactive Form Blocks, Kanban boards, and Timelines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Multi-tenant Architecture:</strong> Fully isolated
                    databases and environments for different organizations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Real-time State Management:</strong> Flawless and
                    smooth client-side interactions powered by Zustand.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-6">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Zustand",
                  "FastAPI",
                  "Python",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-5">
                Repository
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Explore the source code to see the multi-tenant architecture and
                dynamic canvas implementation.
              </p>
              <a
                href="https://github.com/BerkeKaracan/b2b-saas-dynamic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
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
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
