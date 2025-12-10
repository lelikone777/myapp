"use client";

import Card from "@/components/Card";
import Section from "@/components/Section";
import { useLanguage } from "./LanguageProvider";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"];
const highlights = [
  "Build responsive UI with focus on UX, performance, and accessibility.",
  "Experience shipping SPA/SSR/ISR apps on Next.js.",
  "Prefer strong typing and clean, maintainable code.",
];

const AboutContent = () => {
  const { t, lang } = useLanguage();
  const localizedHighlights =
    lang === "ru"
      ? [
          "Делаю адаптивные интерфейсы с упором на UX, производительность и доступность.",
          "Опыт релизов SPA/SSR/ISR на Next.js.",
          "Люблю типизацию и поддерживаемый код.",
        ]
      : highlights;

  return (
    <Section>
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted)]">{t("about.label")}</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">{t("about.title")}</h1>
        <p className="text-lg text-[var(--muted)] sm:text-xl">{t("about.intro")}</p>
      </div>

      <div className="mt-6 space-y-4 sm:mt-8">
        <Card>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold sm:text-2xl">{t("about.highlights")}</h2>
            <ul className="list-disc space-y-1 pl-5 text-[var(--muted)]">
              {localizedHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold sm:text-2xl">{t("about.skills")}</h2>
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
};

export default AboutContent;
