"use client";

type Lang = "en" | "ru";

const translations = {
  en: {
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      greeting: "Hi, I’m",
      title: "Aleksei Kalinin — Frontend developer",
      subtitle:
        "I build fast, clear, and accessible interfaces with React and Next.js. I care about developer experience, performance, and keeping codebases clean and maintainable.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      featured: "Featured projects",
      learnMore: "Learn more",
    },
    projects: {
      label: "My work",
      title: "Projects",
      subtitle: "A selection of projects with short descriptions and stacks.",
      view: "View",
    },
    project: { badge: "Project", stack: "Stack", live: "Live link" },
    about: {
      label: "About",
      title: "About Me",
      intro:
        "My name is Aleksei Kalinin, and I’m a frontend developer focusing on building clear, fast, and accessible web experiences.",
      highlights: "Highlights",
      skills: "Skills",
    },
    contact: {
      label: "Contact",
      title: "Let’s work together",
      subtitle: "I’m open to React/Next.js roles and freelance projects. Remote-first, comfortable collaborating across time zones.",
      emailCta: "Email me",
      resume: "Download resume",
      response: "Typically respond within 1 business day.",
    },
  },
  ru: {
    nav: { home: "Главная", projects: "Проекты", about: "Обо мне", contact: "Контакты" },
    hero: {
      greeting: "Привет, я",
      title: "Алексей Калинин — frontend-разработчик",
      subtitle:
        "Создаю быстрые, понятные и доступные интерфейсы на React и Next.js. Забочусь о DX, производительности и чистом коде.",
      ctaProjects: "Смотреть проекты",
      ctaContact: "Связаться",
      featured: "Избранные проекты",
      learnMore: "Подробнее",
    },
    projects: {
      label: "Мои работы",
      title: "Проекты",
      subtitle: "Подборка проектов с кратким описанием и стеком.",
      view: "Смотреть",
    },
    project: { badge: "Проект", stack: "Стек", live: "Ссылка" },
    about: {
      label: "Обо мне",
      title: "Обо мне",
      intro:
        "Меня зовут Алексей Калинин, я frontend-разработчик. Делаю понятные, быстрые и доступные веб-приложения.",
      highlights: "Факты",
      skills: "Навыки",
    },
    contact: {
      label: "Контакты",
      title: "Давайте работать вместе",
      subtitle: "Открыт к ролям React/Next.js и фрилансу. Работаю удаленно, комфортно взаимодействую в разных часовых поясах.",
      emailCta: "Написать на почту",
      resume: "Скачать резюме",
      response: "Отвечаю обычно в течение одного рабочего дня.",
    },
  },
};

type TranslationKey =
  | `nav.${keyof typeof translations.en.nav}`
  | `hero.${keyof typeof translations.en.hero}`
  | `projects.${keyof typeof translations.en.projects}`
  | `project.${keyof typeof translations.en.project}`
  | `about.${keyof typeof translations.en.about}`
  | `contact.${keyof typeof translations.en.contact}`;

const getTranslation = (lang: Lang, key: TranslationKey): string => {
  const parts = key.split(".");
  // @ts-expect-error dynamic lookup
  return parts.reduce((acc, part) => acc?.[part], translations[lang]) as string;
};

export type { Lang, TranslationKey };
export { translations, getTranslation };
