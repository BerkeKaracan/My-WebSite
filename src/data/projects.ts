export type ProjectTag = {
  label: string;
  tone: "emerald" | "blue" | "purple" | "amber" | "rose" | "cyan";
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  href: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
  tags: ProjectTag[];
  summary: string;
  overview: string;
  features: ProjectFeature[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  repoBlurb: string;
};

export const projects: Project[] = [
  {
    slug: "b2-saas-project",
    title: "Dynamic Canvas Workspace",
    href: "/projects/b2-saas-project",
    image: "/b2b-saas-1.png",
    imageAlt: "B2B SaaS Canvas Workspace",
    gallery: ["/b2b-saas-2.png", "/b2b-saas-3.png"],
    tags: [
      { label: "B2B SaaS", tone: "blue" },
      { label: "Full-Stack", tone: "purple" },
    ],
    summary:
      "A comprehensive, multi-tenant B2B platform featuring a highly interactive, node-based canvas. Users can dynamically render forms, kanban boards, and timelines.",
    overview:
      "This platform serves as a comprehensive digital workspace for modern teams. By utilizing a highly advanced dynamic canvas architecture, users can freely drag, drop, and connect various modules such as text blocks, interactive forms, and task boards to create custom workflows. The multi-tenant backend architecture ensures complete data isolation and scalability for enterprise clients.",
    features: [
      {
        title: "Node-based Canvas",
        description:
          "Interactive drag-and-drop workspace for infinite customization of team workflows.",
      },
      {
        title: "Modular Blocks",
        description:
          "Render forms, Kanban boards, and timelines as connected building blocks on the canvas.",
      },
      {
        title: "Multi-tenant Architecture",
        description:
          "Isolated environments and data boundaries for each organization.",
      },
      {
        title: "Real-time State",
        description:
          "Smooth client-side interactions powered by Zustand for responsive editing.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "Python",
      "PostgreSQL",
    ],
    liveUrl: "https://b2-b-saa-s-dynamic.vercel.app/",
    repoUrl: "https://github.com/BerkeKaracan/b2b-saas-dynamic",
    repoBlurb:
      "Explore the source code to see the multi-tenant architecture and dynamic canvas implementation.",
  },
  {
    slug: "the-vault",
    title: "The Vault",
    shortTitle: "The Vault — Reading Terminal",
    href: "/projects/the-vault",
    image: "/the-vault-1.png",
    imageAlt: "The Vault reading and progress terminal",
    gallery: ["/the-vault-2.png", "/the-vault-3.png"],
    tags: [
      { label: "Productivity", tone: "emerald" },
      { label: "Full-Stack", tone: "purple" },
    ],
    summary:
      "A focus-driven reading and progress terminal — track books, log sessions, organize collections, and measure progress in one personal library.",
    overview:
      "The Vault is a reading progress terminal built with Next.js, TypeScript, and Supabase. Users discover books via the Google Books API, add materials to their library, log reading sessions, take notes, and shelve items into custom collections. OAuth sign-in, row-level security, and a clean dark/light interface keep the experience fast and personal.",
    features: [
      {
        title: "Book Discovery & Library",
        description:
          "Search and import volumes from Google Books, with rich metadata — descriptions, publishers, and categories.",
      },
      {
        title: "Progress Tracking",
        description:
          "Log page progress, reading sessions, and corrections so your stats stay accurate over time.",
      },
      {
        title: "Collections & Notes",
        description:
          "Organize materials into custom shelves, attach tags, and keep notes tied to what you're reading.",
      },
      {
        title: "OAuth & Profiles",
        description:
          "Sign in with Google or GitHub; user profiles sync display names from OAuth metadata automatically.",
      },
      {
        title: "Supabase + RLS",
        description:
          "PostgreSQL-backed schema with row-level security — each user's library and progress stay isolated.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Google Books API",
    ],
    liveUrl: "https://the-value.vercel.app/",
    repoUrl: "https://github.com/BerkeKaracan/the-vault",
    repoBlurb:
      "Explore the reading terminal, progress model, collections system, and Supabase auth setup.",
  },
  {
    slug: "feedback-portal",
    title: "Feedback Portal",
    shortTitle: "Multi-Tenant Feedback Portal",
    href: "/projects/feedback-portal",
    image: "/feedback-1.png",
    imageAlt: "Feedback Portal boards and admin dashboard",
    gallery: ["/feedback-2.png", "/feedback-3.png"],
    tags: [
      { label: "SaaS", tone: "cyan" },
      { label: "Full-Stack", tone: "purple" },
      { label: "Multi-Tenant", tone: "blue" },
    ],
    summary:
      "A modern Feedback & Feature Request Portal for product teams — collect ideas, prioritize with votes, and manage the full lifecycle from review to shipped.",
    overview:
      "Built with Next.js, TypeScript, React, and Supabase, this portal helps organizations gather, manage, and prioritize user feedback in one place. Public boards collect feature ideas and discussion; admins steer the backlog on a Kanban board; semantic duplicate detection keeps the queue clean; and multi-tenant workspaces keep each project's boards, roles, and settings isolated.",
    features: [
      {
        title: "Public Feedback Boards",
        description:
          "Users submit feature ideas, upvote suggestions, and discuss requests in comment threads.",
      },
      {
        title: "Admin Kanban Dashboard",
        description:
          "Admins move feedback through Review → Planned → Completed on a dedicated Kanban board.",
      },
      {
        title: "Smart Duplicate Detection",
        description:
          "Semantic embeddings and text similarity flag duplicate requests so admins can review and merge them.",
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Multiple organizations and projects run in parallel with isolated boards, roles, and settings.",
      },
      {
        title: "Auth & Role Security",
        description:
          "Supabase Auth (including OAuth) with RLS policies for users, project members, and admins.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    liveUrl: "https://feedback-portal-lyart.vercel.app/",
    repoUrl: "https://github.com/BerkeKaracan/Feedback-Portal",
    repoBlurb:
      "Explore the boards, Kanban triage flow, duplicate detection, and multi-tenant auth model.",
  },
  {
    slug: "e-commerce-project",
    title: "Premium Market",
    shortTitle: "E-Commerce Workspace",
    href: "/projects/e-commerce-project",
    image: "/e-commerce-1.png",
    imageAlt: "Premium Market E-Commerce",
    gallery: ["/e-commerce-2.png", "/e-commerce-3.png"],
    tags: [
      { label: "E-Commerce", tone: "emerald" },
      { label: "Full-Stack", tone: "purple" },
    ],
    summary:
      "A feature-rich, high-performance Full-Stack modern e-commerce platform built to demonstrate advanced web development, secure backend architecture, and perfect web vitals.",
    overview:
      "An end-to-end e-commerce solution engineered with modern technologies and a scalable backend architecture, focused on delivering a flawless user experience and high performance. The platform covers product browsing, cart management, and secure authentication with a clean, responsive storefront.",
    features: [
      {
        title: "JWT Authentication",
        description:
          "Custom auth flow with secure token handling for protected storefront and account actions.",
      },
      {
        title: "Shopping Cart State",
        description:
          "Global cart management so users can add, update, and checkout across pages without losing context.",
      },
      {
        title: "Product Discovery",
        description:
          "Dynamic filtering and search to help shoppers find products quickly.",
      },
      {
        title: "Performance & SEO",
        description:
          "Optimized image rendering and SEO-friendly structure for strong web vitals.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Context API",
    ],
    liveUrl: "https://e-commerce-project-market.vercel.app/",
    repoUrl: "https://github.com/BerkeKaracan/E-CommerceProject",
    repoBlurb:
      "Explore the source code to see the storefront architecture, auth flow, and cart implementation.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
