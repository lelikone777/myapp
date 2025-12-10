import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Project } from "@/app/data/projects";
import { projects } from "@/app/data/projects";
import ProjectDetails from "@/components/ProjectDetails";

type ParamsPromise = Promise<{ slug: string }>;

const findProject = (slug: string): Project | undefined => {
  const normalized = decodeURIComponent(slug).toLowerCase();
  return projects.find((project) => project.slug.toLowerCase() === normalized);
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

const ProjectPage = async ({ params }: { params: ParamsPromise }) => {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
