export default function PortfolioBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="absolute inset-0 site-grid" />
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
