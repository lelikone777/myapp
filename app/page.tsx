import type { Metadata } from "next";
import type { Project } from "./data/projects";
import { projects } from "./data/projects";
import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Intro page with a short bio and featured projects.",
};

export default function Intro() {
  const featured = projects.slice(0, 3);

  return (
    <Section>
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted)]">Hi, I&apos;m</p>
        <h1 className="text-5xl font-semibold">Aleksei Kalinin — React developer</h1>
        <p className="max-w-3xl text-xl text-[var(--muted)]">
          I build fast, clear, and accessible interfaces with React and Next.js. I care about developer experience,
          performance, and keeping codebases clean and maintainable.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-[var(--accent-foreground)] transition hover:opacity-90"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:border-[var(--accent)]"
          >
            Contact me
          </Link>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Featured projects</h2>
        <ul className="flex flex-wrap items-start justify-start gap-4">
          {featured.map((project: Project) => (
            <li key={project.title} className="w-full max-w-xl">
              <Link
                href={`/projects/${project.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
              >
                <Card>
                  <div className="flex flex-col items-start gap-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-lg text-[var(--muted)]">{project.description}</p>
                    <span className="text-zinc-600 dark:text-zinc-400">Learn more</span>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
