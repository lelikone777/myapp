import type { Metadata } from "next";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Selected projects with descriptions and tech stacks.",
};

const ProjectsPage = () => {
  return (
    <Section>
      <div className="space-y-2">
        <p className="text-sm text-[var(--muted)]">My work</p>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-[var(--muted)]">A selection of projects with short descriptions and stacks.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project: Project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
          >
            <Card>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <span className="text-sm text-[var(--accent)]">View</span>
              </div>
              <p className="mt-3 text-[var(--muted)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
