import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import VideoSection from "@/components/show/VideoSection";

export const metadata: Metadata = {
  title: "Show Lead Capture - HatchKit for Breeder Events and Expos",
  description:
    "HatchKit helps breeder businesses capture show leads, follow up automatically, organize buyer interest, and move event traffic into a real sales pipeline.",
  openGraph: {
    title: "Show Lead Capture - HatchKit for Breeder Events",
    description:
      "Capture event leads, organize buyer interest, and follow up after the show with HatchKit.",
    url: "https://hatchkit.ai/show/",
    siteName: "HatchKit",
    type: "website",
  },
};

const showProblems = [
  "People stop by the table, ask questions, and leave without becoming contacts.",
  "You get home tired and the follow-up list is half paper, half texts, half memory.",
  "The hottest buyers cool off before you get around to messaging them.",
  "You cannot remember who asked about which animal once the weekend is over.",
];

const showFlow = [
  {
    title: "Scan",
    body: "Buyers scan a QR code at your table or event display instead of handing you another loose piece of paper.",
  },
  {
    title: "Tag",
    body: "HatchKit saves what they want, where you met them, their budget, and how soon they are looking.",
  },
  {
    title: "Follow up",
    body: "The buyer gets a useful message while you are still working the table or driving home.",
  },
  {
    title: "Close",
    body: "Serious buyers move toward deposit, shipping, care support, and repeat purchase.",
  },
];

export default function ShowPage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto" }}>
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="hk-eyebrow">Expo and event lead capture</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.8rem, 6vw, 5rem)", marginTop: "22px" }}>
              Stop letting good show leads walk away.
            </h1>
            <p className="hk-hero-copy">
              HatchKit helps breeders capture names at the table, remember what each buyer wanted,
              follow up fast, and keep selling after the show is over.
            </p>
            <div className="hk-hero-actions">
              <Link href="/demo/" className="hk-button hk-button-primary">Get a Free Demo</Link>
              <Link href="/features/" className="hk-button hk-button-secondary">See Features</Link>
            </div>
          </div>

          <div className="hk-card" style={{ background: "#fff" }}>
            <h2 style={{ color: "#102A43", fontSize: "24px", marginBottom: "18px" }}>
              Show-day lead board
            </h2>
            {[
              ["New scans", "42"],
              ["High-intent buyers", "11"],
              ["Animals requested", "23"],
              ["Follow-ups sent", "42"],
            ].map(([label, value]) => (
              <div
                className="hk-row"
                key={label}
                style={{ borderTop: "1px solid rgba(16,42,67,0.08)", padding: "14px 0" }}
              >
                <span style={{ color: "#52606D", fontSize: "15px" }}>{label}</span>
                <strong style={{ color: "#102A43", fontFamily: "var(--font-accent)", fontSize: "24px" }}>
                  {value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "start" }}>
          <ScrollReveal>
            <div>
              <span className="hk-kicker">The show problem</span>
              <h2 className="hk-section-heading">Shows create interest. The money is in what happens after.</h2>
              <p className="hk-section-copy">
                You can have a packed table and still lose sales if nobody gets followed
                up with on Monday. HatchKit gives you a cleaner way to capture, remember,
                and follow through.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: "grid", gap: "12px" }}>
              {showProblems.map((problem) => (
                <article className="hk-card" key={problem} style={{ padding: "18px" }}>
                  <p style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 800, lineHeight: 1.5 }}>
                    {problem}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">Show workflow</span>
            <h2 className="hk-section-heading">From scan to sales pipeline.</h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="hk-workflow">
              {showFlow.map((step, index) => (
                <article className="hk-workflow-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3 style={{ color: "#102A43", fontSize: "20px", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.65 }}>{step.body}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VideoSection />

      <section className="hk-final-cta scale-pattern">
        <div style={{ margin: "0 auto", maxWidth: "720px" }}>
          <span className="hk-eyebrow">Bring HatchKit to your next show</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "20px" }}>
            See what your post-show follow-up could look like.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "17px", lineHeight: 1.7, margin: "18px auto 30px" }}>
            We will map your table setup, buyer intake, and Monday follow-up during the demo.
          </p>
          <Link href="/demo/" className="hk-button hk-button-primary">Get a Free Demo</Link>
        </div>
      </section>
    </div>
  );
}
