"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="h-14 w-14 rounded-md object-cover"
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-3">
          {navItems.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === href : pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-4 py-2 transition-colors ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--nav-hover)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
