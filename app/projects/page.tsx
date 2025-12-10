import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Selected projects with descriptions and tech stacks.",
};

const ProjectsPage = () => {
  return <ProjectsContent />;
};

export default ProjectsPage;
