import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HatchKit — AI-Powered Growth Platform for Reptile Breeders",
    template: "%s | HatchKit",
  },
  description:
    "HatchKit is the all-in-one AI-powered growth engine built specifically for reptile breeders. Capture every show lead, automate your follow-up, and ship safely — all from one platform.",
  keywords: [
    "reptile breeder software",
    "reptile business automation",
    "herpetology business tools",
    "snake breeder crm",
    "gecko breeder platform",
    "AI shipping agent reptiles",
    "reptile show leads",
    "morphmarket alternative",
  ],
  openGraph: {
    type: "website",
    siteName: "HatchKit",
    title: "HatchKit — AI-Powered Growth Platform for Reptile Breeders",
    description:
      "Capture every show lead, automate your follow-up, and ship safely — all from one platform.",
    url: "https://hatchkit.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "HatchKit — AI-Powered Growth for Reptile Breeders",
    description: "The AI platform built specifically for reptile breeders.",
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
              background: rgba(17,17,17,0.95);
              backdrop-filter: blur(12px);
              border-top: 1px solid rgba(255,255,255,0.08);
              z-index: 999;
            }
          }
        `}</style>
        <div className="mobile-sticky-cta">
          <a
            href="/demo/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              background: '#FF6F00',
              color: '#fff',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Book a Free Demo →
          </a>
        </div>
      </body>
    </html>
  );
}
