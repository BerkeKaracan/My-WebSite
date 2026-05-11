import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Extract and format project name from the slug parameter
  const projectName = params.slug.replace(/-/g, " ").toUpperCase();

  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors w-fit"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          BACK TO HOME
        </Link>

        {/* Project Details Container */}
        <GlassCard>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-4">
            {projectName}
          </h1>
          <div className="w-16 h-[2px] bg-zinc-600 mb-8"></div>

          <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed">
            <p>
              This is the detailed page for <strong>{projectName}</strong>.
              Later, we will fetch the specific content for this project (like
              images, descriptions, and technical challenges) from a database or
              a local data structure.
            </p>
            <p className="mt-6">
              Current URL parameter (slug):{" "}
              <code className="bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-mono text-sm">
                {params.slug}
              </code>
            </p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
