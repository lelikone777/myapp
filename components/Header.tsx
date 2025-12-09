"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-b-zinc-200 px-6 py-4 dark:border-b-zinc-800">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="h-20 w-30 rounded-md object-cover"
          priority
        />
      </Link>
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
                  ? "bg-[var(--card)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
