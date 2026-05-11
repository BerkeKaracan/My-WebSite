import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
