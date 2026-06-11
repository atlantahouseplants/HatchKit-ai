import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About HatchKit - Built From a Real Breeder Business",
  description:
    "HatchKit was built from Brianna's real breeder business experience at YetiGex: shows, buyer follow-up, shipping, content, websites, and automation.",
};

const storySteps = [
  {
    title: "Brianna built the business the real way",
    body: "Shows, messages, buyer questions, care support, shipping decisions, content, and every little follow-up that keeps customers happy.",
  },
  {
    title: "Then the work started stacking up",
    body: "The more the business grew, the more time got eaten by admin: remembering who wanted what, posting consistently, checking weather, and keeping buyers warm.",
  },
  {
    title: "So the systems got built",
    body: "HatchKit came from setting up automations, AI help, CRM structure, websites, forms, content workflows, and shipping guardrails around a real breeder business.",
  },
  {
    title: "Now other breeders can use the same playbook",
    body: "The goal is simple: let software handle the repeatable work so breeders can spend more time on animals, buyers, and the parts that require a human.",
  },
];

const missionItems = [
  "Help breeders look professional without hiring a full marketing team",
  "Keep show leads, DMs, website inquiries, and buyer notes from getting lost",
  "Make live-animal shipping safer and easier to explain to customers",
  "Turn real inventory and care knowledge into useful social content",
  "Give self-employed breeders tools that normally only bigger e-commerce businesses have",
];

const notFor = [
  "People looking for a cute pet-store website template",
  "Breeders who want to keep everything manual forever",
  "Anyone who wants a blank software login with no setup help",
];

export default function AboutPage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto" }}>
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="hk-eyebrow">Our story</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.8rem, 6vw, 5rem)", marginTop: "22px" }}>
              HatchKit started with a breeder who needed her business to stop running on memory.
            </h1>
            <p className="hk-hero-copy">
              Brianna built and ran a real breeder operation — shows, buyer messages,
              shipping decisions, content, and endless follow-up. HatchKit is the software
              system built from solving those problems for real. And it is not designed for
              one species or one kind of setup: if you sell animals like a business, the
              system works.
            </p>
            <div className="hk-hero-actions">
              <Link href="/demo/" className="hk-button hk-button-primary">Get a Free Demo</Link>
              <Link href="/features/" className="hk-button hk-button-secondary">See What It Handles</Link>
            </div>
          </div>
          <div className="hk-dashboard" style={{ padding: "24px" }}>
            <span className="hk-kicker">The purpose</span>
            <h2 style={{ color: "#102A43", fontSize: "30px", marginTop: "12px" }}>
              Use the robots for the repeat work. Keep the breeder for the human part.
            </h2>
            <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.75, marginTop: "16px" }}>
              HatchKit is not here to replace the relationship buyers have with a breeder.
              It is here to handle the follow-up, reminders, organization, drafts, checks,
              and marketing work that usually falls through the cracks.
            </p>
            <a
              href="https://yetigex.com"
              target="_blank"
              rel="noreferrer"
              className="hk-link"
              style={{ display: "inline-flex", marginTop: "20px" }}
            >
              Visit YetiGex
            </a>
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">How it happened</span>
            <h2 className="hk-section-heading">The business grew. The backend had to catch up.</h2>
            <p className="hk-section-copy">
              A lot of breeders are great at animals and customer trust, but the marketing,
              e-commerce, CRM, and automation side can feel like a second full-time job.
              HatchKit was built to close that gap.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="hk-workflow" style={{ marginTop: "36px" }}>
              {storySteps.map((step, index) => (
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

      <section className="hk-section">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "start" }}>
          <ScrollReveal>
            <div>
              <span className="hk-kicker">Our mission</span>
              <h2 className="hk-section-heading">Give breeder businesses the systems they should not have to figure out alone.</h2>
              <p className="hk-section-copy">
                Most self-employed breeders do not need a lecture about funnels, pixels,
                nurture sequences, and CRMs. They need someone to set up a practical system
                that helps them sell more animals, stay organized, and protect the customer experience.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: "grid", gap: "12px" }}>
              {missionItems.map((item) => (
                <div className="hk-card" key={item} style={{ alignItems: "center", display: "flex", gap: "12px", padding: "18px" }}>
                  <span style={{ background: "#00B8A9", borderRadius: "999px", height: "10px", width: "10px" }} />
                  <strong style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", lineHeight: 1.45 }}>
                    {item}
                  </strong>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-eggshell">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <ScrollReveal>
            <div className="hk-card">
              <span className="hk-kicker">Who this is for</span>
              <h2 style={{ color: "#102A43", fontSize: "30px", marginTop: "12px" }}>
                Breeders who know they could sell more if the business side was not so scattered.
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.75, marginTop: "16px" }}>
                The same core system works for any breeder running a real sales operation:
              </p>
              <div style={{ display: "grid", gap: "9px", marginTop: "14px" }}>
                {[
                  "Reptiles & amphibians",
                  "Aquatics & fish rooms",
                  "Insects, inverts & feeders",
                  "Birds & small mammals",
                ].map((species) => (
                  <div key={species} style={{ alignItems: "center", display: "flex", gap: "10px" }}>
                    <span style={{ background: "#00B8A9", borderRadius: "999px", flexShrink: 0, height: "8px", width: "8px" }} />
                    <span style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 700 }}>
                      {species}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.7, marginTop: "14px" }}>
                Capture the lead, remember what they wanted, follow up, ship safely when
                needed, and keep the relationship alive.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <span className="hk-kicker">Who it is not for</span>
              <div style={{ display: "grid", gap: "12px", marginTop: "18px" }}>
                {notFor.map((item) => (
                  <div className="hk-card" key={item} style={{ padding: "18px" }}>
                    <p style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px", fontWeight: 800, lineHeight: 1.5 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-final-cta scale-pattern">
        <div style={{ margin: "0 auto", maxWidth: "760px" }}>
          <span className="hk-eyebrow">Talk to someone who gets it</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "20px" }}>
            If you are tired of doing the same business chores by hand, this is worth a conversation.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "17px", lineHeight: 1.7, margin: "18px auto 30px" }}>
            Feel it yourself in the live demo, then bring your current sales mess to a free
            call. We will show what HatchKit can organize and automate first.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <Link href="/experience/" className="hk-button hk-button-primary">Experience HatchKit Live →</Link>
            <Link href="/demo/" className="hk-button hk-button-secondary">Book a Free Demo Call</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
