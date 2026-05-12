// src/app/projects/dev-connect-platform/page.tsx
import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function DevConnectProject() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-950 text-zinc-300 font-sans flex items-center justify-center">
      <GlassCard className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-zinc-100 mb-4">Coming Soon</h1>
        <p className="text-zinc-400 mb-8 font-light">
          The details for this project are currently being updated. Please check
          back later.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors text-sm"
        >
          Return to Home
        </Link>
      </GlassCard>
    </main>
  );
}
