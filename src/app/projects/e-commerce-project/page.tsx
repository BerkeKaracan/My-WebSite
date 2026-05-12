import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import Image from "next/image";

export default function ECommerceProject() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors w-fit group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
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

        {/* Hero Section */}
        <GlassCard>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
                E-Commerce Platform
              </h1>
              <p className="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-medium">
                Full-Stack Architecture & Integration
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/BerkeKaracan/E-CommerceProject"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-950 text-sm font-semibold rounded-lg hover:bg-zinc-300 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Source Code
              </a>
            </div>
          </div>

          {/* Project Mockup Image Placeholder */}
          <div className="w-full h-[300px] md:h-[550px] relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 mb-8 flex items-center justify-center group">
            <Image
              src="/ecommerce-mockup.png"
              alt="E-Commerce Project Interface"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
              Project Overview
            </h2>
            <div className="text-sm text-zinc-400 leading-relaxed font-light flex flex-col gap-4 text-justify">
              <p>
                This project is a comprehensive, feature-rich e-commerce
                platform built to demonstrate advanced web development
                practices. It handles everything from user authentication and
                dynamic product cataloging to complex cart state management and
                secure checkout flows.
              </p>
              <p>
                The frontend is engineered with Next.js and Tailwind CSS to
                ensure a highly responsive, accessible, and perfectly optimized
                user interface. The backend API, powered by FastAPI and
                PostgreSQL, guarantees rapid data retrieval and robust
                relational data structuring.
              </p>
            </div>
          </div>

          {/* Features & Tech Stack Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Features */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
                Key Features
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom JWT-based Authentication System
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Global State Management for Shopping Cart
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dynamic Product Filtering and Search
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Optimized Image Rendering & SEO Compliance
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-100 mb-4 border-b border-zinc-800 pb-2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "FastAPI",
                  "Python",
                  "PostgreSQL",
                  "Context API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-zinc-900/80 border border-zinc-800 rounded-md text-zinc-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
