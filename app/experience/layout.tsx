import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience HatchKit Live - A Guided Demo in 3 Minutes",
  description:
    "Play one of your own buyers in a guided, step-by-step demo. Real automated emails and texts land on your devices while you watch the breeder's side run itself. Free, no signup.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
