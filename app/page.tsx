import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Intro page with a short bio and featured projects.",
};

export default function Intro() {
  return <HomeContent />;
}
