import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";

export default function ECommerceProjectPage() {
  const project = getProjectBySlug("e-commerce-project");
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
