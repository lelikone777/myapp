"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "./LanguageProvider";

const navItems = [
  { href: "/", key: "nav.home" as const },
  { href: "/projects", key: "nav.projects" as const },
  { href: "/about", key: "nav.about" as const },
  { href: "/contact", key: "nav.contact" as const },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--background)]/90 px-4 py-3 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-14 w-24 rounded-md object-cover"
            priority
          />
        </Link>
        <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
          <div className="md:hidden">
            <LanguageDropdown />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="block h-0.5 w-5 bg-current transition-all" />
            <span className="block h-0.5 w-5 bg-current transition-all" />
            <span className="block h-0.5 w-5 bg-current transition-all" />
          </button>
          <nav
            className={`absolute left-0 right-0 top-full mx-4 mt-3 flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-200 ease-out ${
              isOpen
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-2"
            } md:static md:mx-0 md:mt-0 md:flex md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0 md:pointer-events-auto md:opacity-100 md:translate-y-0`}
          >
            {navItems.map(({ href, key: navKey }) => {
              const isActive = href === "/" ? pathname === href : pathname?.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-4 py-2 text-center transition-colors ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--nav-hover)]"
                  }`}
                >
                  {t(navKey)}
                </Link>
              );
            })}
            <div className="md:hidden flex justify-center">
              <div className="inline-flex">
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
