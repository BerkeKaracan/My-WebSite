import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-zinc-500 mb-2">
            Get in touch
          </p>
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s build something.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          <a
            href={profile.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            CV
          </a>
        </div>
      </div>
      <p className="mt-12 font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
