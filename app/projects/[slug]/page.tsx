import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Project } from "@/app/data/projects";
import { projects } from "@/app/data/projects";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Link from "next/link";

type ParamsPromise = Promise<{ slug: string }>;

const findProject = (slug: string): Project | undefined => {
  const normalized = decodeURIComponent(slug).toLowerCase();
  return projects.find((project) => project.slug.toLowerCase() === normalized);
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
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

  return (
    <Section>
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted)]">Project</p>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-[var(--muted)]">{project.description}</p>
      </div>

      <Card>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div>
            <Link
              href={project.link}
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Live link <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default ProjectPage;
