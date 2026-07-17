import GlassCard from "@/components/GlassCard";
import Image from "next/image";

const coreTechs = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "Python",
  "TypeScript",
  "Docker",
];

const tools = ["Git / GitHub", "Cursor"];

const processSkills = [
  "Software Architecture",
  "SDLC",
  "CI/CD",
  "JIRA",
  "Version Control",
  "Scalability",
  "Problem Solving",
  "Sentry",
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 md:shrink-0">
      <div className="md:sticky md:top-12 flex flex-col gap-6 animate-fade-up">
        <GlassCard>
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-36 h-36 rounded-2xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden shadow-lg transition-transform duration-200 hover:scale-[1.03] grayscale hover:grayscale-0">
              <Image
                src="/profile.jpg"
                alt="Berke Karacan"
                fill
                className="object-cover"
                priority
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

          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Istanbul%2C+Turkey"
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=berkekaracan1113@gmail.com"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-transform duration-200 shadow-md hover:shadow-lg active:scale-95 hover:scale-[1.02]"
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

          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
            <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
              Languages & Core
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-[border-color] duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
            <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
              Tools / Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-[border-color] duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
            <h3 className="text-xs font-semibold mb-4 tracking-widest text-zinc-800 dark:text-zinc-100 uppercase transition-colors">
              Process & Delivery
            </h3>
            <div className="flex flex-wrap gap-2">
              {processSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-[border-color] duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

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
                  Intermediate
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
  );
}
