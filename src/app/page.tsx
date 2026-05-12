import GlassCard from "@/components/GlassCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT COLUMN: Comprehensive Profile (Sticky) */}
        <aside className="w-full md:w-1/3 md:shrink-0">
          <div className="sticky top-12 flex flex-col gap-6">
            <GlassCard>
              {/* Header: Photo & Title */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-36 h-36 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 grayscale hover:grayscale-0">
                  <span className="text-xs font-medium tracking-widest text-zinc-500">
                    PHOTO
                  </span>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent pb-1">
                    Berke Karacan
                  </h1>
                  <h2 className="text-sm text-zinc-400 mt-1 uppercase tracking-[0.2em] font-medium">
                    Full Stack Developer
                  </h2>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col gap-4 text-sm text-zinc-400">
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-zinc-100 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span>Istanbul, Turkey</span>
                </a>
                <a
                  href="mailto:berkekaracan1113@gmail.com"
                  className="flex items-center gap-3 hover:text-zinc-100 transition-colors group"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>berkekaracan1113@gmail.com</span>
                </a>
                <a
                  href="https://github.com/BerkeKaracan"
                  className="flex items-center gap-3 hover:text-zinc-100 transition-colors group"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <span rel="noopener noreferrer">
                    https://github.com/BerkeKaracan
                  </span>
                </a>
              </div>

              {/* Core Technologies */}
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-100 uppercase">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "FastAPI",
                    "PostgreSQL",
                    "Python",
                    "TypeScript",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 rounded-md text-zinc-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Languages */}
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-100 uppercase">
                  Education
                </h3>
                <div className="mb-4 group cursor-default">
                  <p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors"></p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Istanbul University • 2025 - 2027
                  </p>
                </div>

                <h3 className="text-xs font-semibold mb-3 mt-6 tracking-widest text-zinc-100 uppercase">
                  Languages
                </h3>
                <div className="flex flex-col gap-2 text-sm text-zinc-400">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-300">English</span>{" "}
                    <span className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400">
                      Fluent
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-300">Turkish</span>{" "}
                    <span className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </aside>

        {/* RIGHT COLUMN: Detailed Content (Scrollable) */}
        <main className="w-full md:w-2/3 flex flex-col gap-8">
          {/* Long Summary Section */}
          <GlassCard className="group">
            <h3 className="text-lg font-semibold mb-6 text-zinc-100 tracking-wide flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-600 group-hover:w-12 transition-all duration-300"></span>
              EXECUTIVE SUMMARY
            </h3>
            <div className="flex flex-col gap-4 text-sm text-zinc-400 leading-relaxed font-light text-justify">
              <p>
                About I am a Full-Stack Developer focused on building scalable,
                high-performance web applications. I bridge the gap between
                modern frontend interfaces and robust, heavy-duty backend
                architectures. My engineering approach is direct: writing clean,
                maintainable code and architecting systems that perform
                flawlessly under the hood. From designing secure REST APIs to
                developing pixel-perfect UIs, I build end-to-end solutions that
                scale.
              </p>
              <p>
                Currently, I specialize in the modern web stack, utilizing
                Next.js and Tailwind CSS to craft highly responsive, accessible,
                and performant user interfaces. On the backend, I leverage the
                speed and asynchronous capabilities of Python&apos;s FastAPI,
                coupled with the reliability of PostgreSQL for complex
                relational data modeling. I am deeply committed to writing DRY
                (Don&apos;t Repeat Yourself) code, implementing comprehensive
                testing strategies, and optimizing application performance at
                every layer of the stack.
              </p>
            </div>
          </GlassCard>

          {/* Projects Section */}
          <GlassCard className="group">
            <h3 className="text-lg font-semibold mb-6 text-zinc-100 tracking-wide flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-600 group-hover:w-12 transition-all duration-300"></span>
              FEATURED PROJECTS
            </h3>

            <div className="flex flex-col gap-6">
              {/* Project 1 */}
              <div className="relative p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/40 transition-all duration-300 hover:shadow-lg hover:border-zinc-700 group/card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-base font-semibold text-zinc-100 group-hover/card:text-white transition-colors">
                      {/* Invisible stretched link covering the entire card */}
                      <Link
                        href="/projects/fintech-dashboard-api"
                        className="before:absolute before:inset-0 before:z-10"
                      >
                        E-Commerce Project (MARKET)
                      </Link>
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                      Backend Architecture
                    </p>
                  </div>
                  <div className="flex gap-3 text-zinc-500 relative z-20">
                    <a
                      href="https://github.com/BerkeKaracan/E-CommerceProject"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light">
                  A feature-rich, high-performance Full-Stack modern e-commerce
                  platform built to demonstrate advanced web development, secure
                  backend architecture, and perfect web vitals.
                </p>
                <div className="flex flex-wrap gap-2 mt-5 relative z-20">
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                    FastAPI
                  </span>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="relative p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/40 transition-all duration-300 hover:shadow-lg hover:border-zinc-700 group/card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-base font-semibold text-zinc-100 group-hover/card:text-white transition-colors">
                      {/* Invisible stretched link covering the entire card */}
                      <Link
                        href="/projects/devconnect-platform"
                        className="before:absolute before:inset-0 before:z-10"
                      >
                        DevConnect Platform
                      </Link>
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                      Full Stack Application
                    </p>
                  </div>
                  <div className="flex gap-3 text-zinc-500 relative z-20">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="Live Demo"
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
                    </a>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light relative z-20 pointer-events-none">
                  Designed and developed a real-time collaboration platform for
                  developers. Built a responsive, accessible UI using Next.js
                  and Tailwind CSS. The backend utilizes FastAPI with
                  Server-Sent Events (SSE) for real-time notifications.
                </p>
                <div className="flex flex-wrap gap-2 mt-5 relative z-20">
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                    FastAPI
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </main>
      </div>
    </main>
  );
}
