import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Bio, highlights, and key skills.",
};

export default function About() {
  return <AboutContent />;
}
