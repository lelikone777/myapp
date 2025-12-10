"use client";

import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import type { Project } from "@/app/data/projects";
import { projects } from "@/app/data/projects";
import { useLanguage } from "./LanguageProvider";

const ProjectsContent = () => {
  const { t } = useLanguage();
  return (
    <Section>
      <div className="space-y-2">
        <p className="text-sm text-[var(--muted)]">{t("projects.label")}</p>
        <h1 className="text-3xl font-semibold">{t("projects.title")}</h1>
        <p className="text-[var(--muted)]">{t("projects.subtitle")}</p>
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
                <span className="text-sm text-[var(--accent)]">{t("projects.view")}</span>
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

export default ProjectsContent;
