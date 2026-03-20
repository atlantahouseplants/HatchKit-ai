import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HatchKit — Everything You Need to Sell More Animals",
  description:
    "HatchKit gives reptile breeders a website, automatic follow-ups, one inbox for every message, social media posts, and AI-powered shipping — all set up for you.",
};

export default function ShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        nav, footer, .mobile-sticky-cta {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
