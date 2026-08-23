export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-10 md:mb-12">
      <span className="section-index">{index}</span>
      <h2 className="text-sm font-medium tracking-[0.18em] uppercase text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <span className="hidden sm:block flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
