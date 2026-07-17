import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";

export default function FeedbackPortalPage() {
  const project = getProjectBySlug("feedback-portal");
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
