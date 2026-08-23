import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";

export default function TheVaultPage() {
  const project = getProjectBySlug("the-vault");
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
