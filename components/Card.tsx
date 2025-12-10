import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_40px_-24px_rgba(37,99,235,0.45)] focus-within:-translate-y-1 focus-within:border-[var(--accent)] focus-within:shadow-[0_16px_40px_-24px_rgba(37,99,235,0.45)]">
    {children}
  </div>
);

export default Card;
