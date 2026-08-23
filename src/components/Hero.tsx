import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-20 md:pt-24 md:pb-28 animate-rise">
      <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
        <div className="relative shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            ) : null}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500 mb-4">
            Portfolio / 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={profile.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {profile.location}
            </a>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
            <a
              href={profile.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {profile.email}
            </a>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {profile.github}
            </a>
          </div>

          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors duration-200"
          >
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
