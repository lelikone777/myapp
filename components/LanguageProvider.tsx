"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, TranslationKey } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const detectLang = (): Lang => {
  if (typeof navigator === "undefined") return "en";
  const preferred = navigator.language || navigator.languages?.[0] || "en";
  return preferred.toLowerCase().startsWith("ru") ? "ru" : "en";
};

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "en" || stored === "ru") {
      setLangState(stored);
    } else {
      setLangState(detectLang());
    }
  }, []);

  const setLang = (value: Lang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", value);
    }
  };

  const t = (key: TranslationKey) => getTranslation(lang, key);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};

export default LanguageProvider;
