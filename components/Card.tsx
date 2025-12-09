import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] p-6">
    {children}
  </div>
);

export default Card;
