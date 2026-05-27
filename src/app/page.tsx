import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT COLUMN: Comprehensive Profile (Sticky) */}
        <aside className="w-full md:w-1/3 md:shrink-0">
          <div className="md:sticky md:top-12 flex flex-col gap-6">
            <GlassCard>
              {/* Header: Photo & Title */}
              <div className="flex flex-col items-center gap-5">
                <div className="relative w-36 h-36 rounded-2xl bg-zinc-200 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/50 flex items-center justify-center overflow-hidden shadow-xl dark:shadow-2xl transition-all duration-500 hover:scale-105 grayscale hover:grayscale-0">
                  <Image
                    src="/profile.jpg"
                    alt="Berke Karacan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent pb-1">
                    Berke Karacan
                  </h1>
                  <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-[0.2em] font-medium">
                    Full Stack Developer
                  </h2>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-3 group cursor-default">
                  <svg
                    className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
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
                </div>
                <a
                  href="mailto:berkekaracan1113@gmail.com"
                  className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
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
                  <span>github.com/BerkeKaracan</span>
                </a>
              </div>

              <div className="mt-6 flex">
                <a
                  href="/Berke_Karacan_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Core Technologies */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
                <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
                  Languages & Core
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
                      className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Design */}
              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
                <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
                  Tools / Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Git / GitHub", "Cursor"].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Languages */}
              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/50 hidden md:block">
                <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
                  Education
                </h3>
                <div className="mb-4 group cursor-default">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    Web Design & Coding
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Istanbul University • 2025 - 2027
                  </p>
                </div>

                <h3 className="text-xs font-semibold mb-3 mt-6 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
                  Languages
                </h3>
                <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                      English
                    </span>
                    <span className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400 transition-colors">
                      Proficient
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                      Turkish
                    </span>
                    <span className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400 transition-colors">
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
          {/* Executive Summary Section */}
          <GlassCard className="group transition-all duration-500 border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-400 dark:hover:border-zinc-700/50">
            <h3 className="text-lg font-semibold mb-6 text-zinc-800 dark:text-zinc-100 tracking-wide flex items-center gap-3 transition-colors">
              <span className="w-8 h-px bg-zinc-400 dark:bg-zinc-600 group-hover:w-12 transition-all duration-300"></span>
              SUMMARY
            </h3>
            <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-justify transition-colors">
              <p>
                I am a Full-Stack Developer focused on building scalable,
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
            <h3 className="text-lg font-semibold mb-6 text-zinc-800 dark:text-zinc-100 tracking-wide flex items-center gap-3 transition-colors">
              <span className="w-8 h-px bg-zinc-400 dark:bg-zinc-600 group-hover:w-12 transition-all duration-300"></span>
              FEATURED PROJECTS
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex-row gap-6 items-center bg-zinc-100 dark:bg-zinc-900/30 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 transition-all hover:shadow-xl group">
                <div className="w-full xl:w-1/2 rounded-2xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src="/ecommerce-mockup.png"
                    alt="Premium Market E-Commerce"
                    width={800}
                    height={600}
                    className="object-cover w-full h-[250px] transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="w-full xl:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                      E-Commerce
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                      Full-Stack
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Premium Market
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    A feature-rich, high-performance Full-Stack modern
                    e-commerce platform built to demonstrate advanced web
                    development, secure backend architecture, and perfect web
                    vitals.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Next.js", "FastAPI", "PostgreSQL", "Tailwind"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="flex gap-4 mt-4">
                    <Link
                      href="/projects/e-commerce-project"
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 2: B2B SaaS */}
              <div className="flex flex-col xl:flex-row gap-6 items-center bg-zinc-100 dark:bg-zinc-900/30 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 transition-all hover:shadow-xl group">
                <div className="w-full xl:w-1/2 rounded-2xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src="/b2b-saas-preview.png"
                    alt="B2B SaaS Canvas Workspace"
                    width={800}
                    height={600}
                    className="object-cover w-full h-[250px] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-700">
                    🚧 Work in Progress
                  </div>
                </div>

                <div className="w-full xl:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                      B2B SaaS
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
                      Full-Stack
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Dynamic Canvas Workspace
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    A comprehensive, multi-tenant B2B platform featuring a
                    highly interactive, node-based canvas. Users can dynamically
                    render forms, kanban boards, and timelines.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Next.js",
                      "TypeScript",
                      "FastAPI",
                      "Zustand",
                      "Tailwind",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    <Link
                      href="/projects/b2-saas-project"
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* CERTIFICATIONS SECTION */}
          <GlassCard className="group">
            <h3 className="text-lg font-semibold mb-6 text-zinc-800 dark:text-zinc-100 tracking-wide flex items-center gap-3 transition-colors">
              <span className="w-8 h-px bg-zinc-400 dark:bg-zinc-600 group-hover:w-12 transition-all duration-300"></span>
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 bg-zinc-100/30 dark:bg-zinc-900/20 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 transition-colors">
                <a
                  href="/Software_Development_Tools_Certificate.pdf"
                  target="_blank"
                >
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors">
                    Software Development Tools
                  </p>
                  <p className="text-[11px] text-zinc-500 uppercase mt-1 tracking-wider font-mono">
                    BTK ACADEMY • 2026
                  </p>
                </a>
              </div>
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 bg-zinc-100/30 dark:bg-zinc-900/20 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 transition-colors">
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-colors">
                  Advanced React Patterns - Test -
                </p>
                <p className="text-[11px] text-zinc-500 uppercase mt-1 tracking-wider font-mono">
                  Frontend Masters • 2023
                </p>
              </div>
            </div>
          </GlassCard>
        </main>
      </div>
    </main>
  );
}
