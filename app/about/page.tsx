import type { Metadata } from "next";
import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Bio, highlights, and key skills.",
};

export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"];
  const highlights = [
    "Build responsive UI with focus on UX, performance, and accessibility.",
    "Experience shipping SPA/SSR/ISR apps on Next.js.",
    "Prefer strong typing and clean, maintainable code.",
  ];

  return (
    <Section>
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted)]">About</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">About Me</h1>
        <p className="text-lg text-[var(--muted)] sm:text-xl">
          My name is <strong>Aleksei Kalinin</strong>, and I&apos;m a <strong>frontend developer</strong> focusing on
          building clear, fast, and accessible web experiences.
        </p>
      </div>

      <div className="mt-6 space-y-4 sm:mt-8">
        <Card>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Highlights</h2>
            <ul className="list-disc space-y-1 pl-5 text-[var(--muted)]">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
