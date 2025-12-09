"use client";

import { useTheme } from "./ThemeProvider";

const options: { label: string; value: "light" | "dark" | "system" }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 text-sm">
      {options.map((option) => {
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`rounded-md px-3 py-1 transition ${
              isActive
                ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
            aria-pressed={isActive}
            aria-label={`Use ${option.value} theme`}
            title={option.value === "system" ? `System (${resolvedTheme})` : option.label}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
