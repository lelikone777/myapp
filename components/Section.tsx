import type { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => (
  <section className="max-w-5xl mx-auto px-6 py-16">{children}</section>
);

export default Section;
