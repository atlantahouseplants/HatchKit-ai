import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — Free 15-Minute Call",
  description:
    "Book a free 15-minute demo call with HatchKit. We'll walk you through the platform live, tailored to your species and show schedule. No pressure.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
