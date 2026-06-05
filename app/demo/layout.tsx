import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a HatchKit Demo - Breeder Business Software",
  description:
    "Book a HatchKit demo and see how breeder businesses can capture leads, manage buyer follow-up, review shipping safety, and plan content in one system.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
