import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hatchkit.ai"),
  title: {
    default: "HatchKit - Software That Handles Breeder Business Busywork",
    template: "%s | HatchKit",
  },
  description:
    "HatchKit helps breeders stop losing leads, follow up with buyers, plan safer shipping, post more consistently, and run the business side without becoming a tech person.",
  keywords: [
    "breeder business software",
    "animal breeder crm",
    "live animal shipping software",
    "breeder marketing automation",
    "breeder customer journey",
    "breeder command center",
    "AI shipping agent",
    "social content for breeders",
  ],
  openGraph: {
    type: "website",
    siteName: "HatchKit",
    title: "HatchKit - Software That Handles Breeder Business Busywork",
    description:
      "Stop losing leads, missing follow-ups, stressing over shipping day, and trying to run the business side from memory.",
    url: "https://hatchkit.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "HatchKit - Software That Handles Breeder Business Busywork",
    description: "HatchKit helps breeders run the business side without becoming tech people.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Mobile sticky CTA */}
        <style>{`
          .mobile-sticky-cta {
            display: none;
          }
          @media (max-width: 767px) {
            .mobile-sticky-cta {
              display: flex;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 12px 16px;
              background: rgba(16,42,67,0.96);
              backdrop-filter: blur(12px);
              border-top: 1px solid rgba(255,255,255,0.08);
              z-index: 999;
            }
          }
        `}</style>
        <div className="mobile-sticky-cta">
          <a
            href="/experience/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              background: '#2F80ED',
              color: '#fff',
              fontFamily: "var(--font-subheading)",
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Try HatchKit Live — Free
          </a>
        </div>
      </body>
    </html>
  );
}
