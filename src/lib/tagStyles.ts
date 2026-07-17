import type { ProjectTag } from "@/data/projects";

export const tagToneClasses: Record<ProjectTag["tone"], string> = {
  emerald:
    "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700",
  blue: "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700",
  purple:
    "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 border border-zinc-900 dark:border-zinc-100",
  amber:
    "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700",
  rose: "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700",
  cyan: "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700",
};
