import type { Project } from "./data/projects";
import { projects } from "./data/projects";
import Link from "next/link";
import Card from "@/components/Card";

export default function Intro() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <h1 className="text-5xl font-semibold">Welcome to my app</h1>
      <p className="text-2xl">
        My name is <strong>[Your name]</strong>, and I'm a <strong>[Your role]</strong>.
      </p>
      <p className="text-xl">This is a Next.js app with a short description.</p>
      <ul className="flex flex-wrap items-center justify-center gap-4 my-8">
        {projects.map((project: Project) => (
          <li key={project.title} className="w-full max-w-xl">
            <Link
              href={project.link}
              className="block focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
            >
              <Card>
                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-3xl font-semibold">{project.title}</h2>
                  <p className="text-xl text-[var(--muted)]">{project.description}</p>
                  <span className="text-zinc-600 dark:text-zinc-400">Learn more</span>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
