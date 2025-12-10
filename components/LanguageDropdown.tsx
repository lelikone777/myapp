"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

const options: { label: string; value: Lang }[] = [
  { label: "EN", value: "en" },
  { label: "RU", value: "ru" },
];

const LanguageDropdown = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = options.find((o) => o.value === lang)?.label ?? "EN";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current}
        <span className="text-[var(--muted)]" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute right-0 z-40 mt-2 w-28 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)]">
          <ul className="py-1 text-sm" role="listbox">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left transition hover:bg-[var(--nav-hover)] cursor-pointer ${
                    lang === option.value ? "text-[var(--accent)] font-semibold" : "text-[var(--foreground)]"
                  }`}
                  role="option"
                  aria-selected={lang === option.value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
