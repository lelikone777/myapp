"use client";

import type { Lang } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

const options: { label: string; value: Lang }[] = [
  { label: "EN", value: "en" },
  { label: "RU", value: "ru" },
];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 text-sm">
      {options.map((option) => {
        const isActive = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            className={`cursor-pointer rounded-md px-3 py-1 transition ${
              isActive
                ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
            aria-pressed={isActive}
            aria-label={`Switch to ${option.label}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
