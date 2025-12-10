"use client";

import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/app/data/projects";
import { projects } from "@/app/data/projects";

const HomeContent = () => {
  const { t } = useLanguage();
  const featured = projects.slice(0, 3);

  return (
    <Section>
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted)]">{t("hero.greeting")}</p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">{t("hero.title")}</h1>
        <p className="max-w-3xl text-lg text-[var(--muted)] sm:text-xl">{t("hero.subtitle")}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-[var(--accent-foreground)] transition hover:opacity-90"
          >
            {t("hero.ctaProjects")}
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:border-[var(--accent)]"
          >
            {t("hero.ctaContact")}
          </Link>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">{t("hero.featured")}</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((project: Project) => (
            <li key={project.title} className="w-full">
              <Link
                href={`/projects/${project.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
              >
                <Card>
                  <div className="flex flex-col items-start gap-3">
                    <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
                    <p className="text-base text-[var(--muted)] sm:text-lg">{project.description}</p>
                    <span className="text-zinc-600 dark:text-zinc-400">{t("hero.learnMore")}</span>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default HomeContent;
