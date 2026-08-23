import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/90">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100 tracking-tight hover:opacity-70 transition-opacity"
        >
          {profile.name.split(" ")[0].toLowerCase()}.
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
