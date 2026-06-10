import SetupChecklist from "@/components/SetupChecklist";
import BookingCalendar from "@/components/BookingCalendar";
import VideoSection from "@/components/show/VideoSection";

const outcomes = [
  "Where your leads are coming from and where they are getting lost",
  "Which repetitive jobs the robots can handle first",
  "How HatchKit can help with your website, follow-up, shipping, and content",
  "The smallest setup that makes sense for your operation",
];

const comeReadyWith = [
  "How you sell today — shows, website, social, marketplace, or a mix",
  "Roughly how many animals you move in a month",
  "The species or categories you work with",
  "The one part of the business that keeps falling through the cracks",
];

export default function DemoPage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto", paddingBottom: "72px" }}>
        <div className="hk-shell hk-grid-2" style={{ alignItems: "start" }}>
          <div>
            <span className="hk-eyebrow">Free 15-minute demo</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.7rem, 5vw, 4.8rem)", marginTop: "22px" }}>
              See how breeders like you are using HatchKit to sell more.
            </h1>
            <p className="hk-hero-copy">
              No pressure and no cost. Tell us how you sell, where buyers find you, and what
              keeps falling through the cracks. We will walk you through a live demo account so
              you can see exactly what HatchKit does and how other breeders are using it to
              get more sales.
            </p>

            <div style={{ marginTop: "28px", display: "grid", gap: "12px" }}>
              <span className="hk-eyebrow" style={{ color: "#B9FBC0" }}>Come ready to talk about</span>
              {comeReadyWith.map((item) => (
                <div key={item} style={{ alignItems: "center", display: "flex", gap: "12px" }}>
                  <span style={{ background: "#B9FBC0", borderRadius: "999px", height: "10px", width: "10px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.6, marginTop: "24px" }}>
              Want to see it first?{" "}
              <a href="/experience/" style={{ color: "#B9FBC0", fontWeight: 800 }}>
                Try the live demo yourself →
              </a>{" "}
              (2 minutes, no signup, no call needed).
            </p>

            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.6, marginTop: "16px" }}>
              Prefer email? Reach the team directly at{" "}
              <a href="mailto:brianna@hatchkitai.com" style={{ color: "#B9FBC0", fontWeight: 700 }}>
                brianna@hatchkitai.com
              </a>
              .
            </p>
          </div>

          <div className="hk-card" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "8px" }}>
              <h2 style={{ color: "#102A43", fontSize: "22px", marginBottom: "6px" }}>
                Get your free HatchKit demo
              </h2>
              <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6 }}>
                15 minutes. Free, no pressure, no obligation. Pick a slot and you are booked — you
                will get a confirmation by email.
              </p>
            </div>
            <BookingCalendar />
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "start" }}>
          <div>
            <span className="hk-kicker">What the call covers</span>
            <h2 className="hk-section-heading">We start with how you already sell, not with a generic demo script.</h2>
            <p className="hk-section-copy">
              If your buyers come from shows, Instagram, MorphMarket, Facebook, your website,
              text messages, or all of the above, that is the point. We will show how HatchKit
              can clean up the follow-through.
            </p>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {outcomes.map((item) => (
              <div className="hk-card" key={item} style={{ alignItems: "center", display: "flex", gap: "12px", padding: "18px" }}>
                <span style={{ background: "#B9FBC0", borderRadius: "999px", height: "10px", width: "10px" }} />
                <span style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 700 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <SetupChecklist compact showCta={false} />
        </div>
      </section>

      <VideoSection />
    </div>
  );
}
