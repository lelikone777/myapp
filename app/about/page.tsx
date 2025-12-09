import Card from "@/components/Card";

export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"];
  const highlights = [
    "Делаю адаптивные UI с упором на UX, производительность и доступность",
    "Опыт сборки SPA/SSR/ISR на Next.js",
    "Нравится типизировать всё, что движется, и держать код чистым",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted)]">Кто я</p>
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="text-xl text-[var(--muted)]">
          My name is <strong>[Your name]</strong>, and I'm a <strong>[Your role]</strong> focusing on building clear,
          fast, and accessible web experiences.
        </p>
      </div>

      <Card>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Факты</h2>
          <ul className="list-disc space-y-1 pl-5 text-[var(--muted)]">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Навыки</h2>
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
    </section>
  );
}
