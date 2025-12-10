"use client";

import type { Project } from "@/app/data/projects";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const ProjectDetails = ({ project }: { project: Project }) => {
  const { t } = useLanguage();
  return (
    <Section>
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted)]">{t("project.badge")}</p>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-[var(--muted)]">{project.description}</p>
      </div>

      <Card>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">{t("project.stack")}</h2>
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
              {t("project.live")} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default ProjectDetails;
