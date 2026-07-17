export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm shadow-zinc-900/5 dark:shadow-black/20 transition-[border-color,box-shadow] duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md dark:hover:shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}
