import type { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">{children}</section>
);

export default Section;
