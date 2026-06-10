import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try the Live HatchKit Demo - Feel It Work in 2 Minutes",
  description:
    "Play the buyer and watch HatchKit's follow-up, safe-shipping, and repeat-buyer automations fire in real time - the messages that normally take days, landing in seconds. Free, no signup.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
