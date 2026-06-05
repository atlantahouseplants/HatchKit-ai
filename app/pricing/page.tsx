import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";
import SetupChecklist from "@/components/SetupChecklist";

export const metadata: Metadata = {
  title: "Pricing - HatchKit Setup and Monthly Plans",
  description:
    "HatchKit pricing for breeders who want help setting up lead capture, CRM, website, follow-up, shipping review, content, and buyer workflows.",
};

const plans = [
  {
    name: "Starter",
    price: "$199",
    setupFee: "$799",
    subtitle: "Get leads organized",
    description: "For breeders who need to stop losing names, DMs, show leads, and basic follow-up.",
    features: [
      { text: "Lead forms and show QR capture", included: true },
      { text: "Buyer records, tags, and smart lists", included: true },
      { text: "Basic inquiry and follow-up workflow", included: true },
      { text: "Review and referral prompts", included: true },
      { text: "Shipping review workflow", included: false },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$349",
    setupFee: "$1,499",
    subtitle: "Run the buyer journey",
    description: "For active breeders who need help with deals, shipping, content, and customer follow-through.",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Deal pipeline and reservation tracking", included: true },
      { text: "Safe shipping review and buyer updates", included: true },
      { text: "Social content planning and approvals", included: true },
      { text: "Care onboarding after delivery", included: true },
    ],
    ctaLabel: "Get Growth",
  },
  {
    name: "Scale",
    price: "$599",
    setupFee: "$2,499",
    subtitle: "Scale the operation",
    description: "For established breeders with regular drops, multiple categories, and more moving parts.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Multi-species or multi-category segmentation", included: true },
      { text: "Drop launch and event campaigns", included: true },
      { text: "VIP buyer and repeat purchase workflows", included: true },
      { text: "Priority implementation and support", included: true },
    ],
    ctaLabel: "Go Scale",
  },
];

const comparison = [
  ["Lead capture and buyer CRM", "Included", "Included", "Included"],
  ["Deal pipeline", "Basic", "Full", "Advanced"],
  ["Shipping safety workflow", "Add-on", "Included", "Included"],
  ["Content planning", "Starter prompts", "Weekly workflow", "Launch campaigns"],
  ["Reporting", "Source basics", "Pipeline visibility", "Advanced segments"],
  ["Setup help", "Included", "Included", "Priority"],
];

const faqs = [
  {
    q: "Why is there a setup fee?",
    a: "Because we help build the system with you. Setup covers forms, CRM structure, workflows, buyer tags, page templates, and the starting operating process for your business.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Most breeders start with the system that fixes their biggest current leak, then move up when they add shipping workflows, content operations, or more segments.",
  },
  {
    q: "Do I need to connect every sales channel on day one?",
    a: "No. The cleanest launch usually starts with the channels where you already lose leads or time, then expands after the workflow is proven.",
  },
];

export default function PricingPage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto" }}>
        <div className="hk-shell" style={{ maxWidth: "880px", textAlign: "center" }}>
          <span className="hk-eyebrow">Pricing</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.8rem, 6vw, 5rem)", marginTop: "22px" }}>
            Pick the amount of help your business needs now.
          </h1>
          <p className="hk-hero-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
            This is not just a blank software login. We help set up the system around
            how you actually sell, ship, and follow up.
          </p>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal stagger>
            <div className="hk-grid-3" style={{ alignItems: "stretch" }}>
              {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
            <SetupChecklist compact />
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">Compare plans</span>
            <h2 className="hk-section-heading">Designed around how much busywork you want off your plate.</h2>
            <p className="hk-section-copy">
              Starter gets leads organized. Growth connects sales, shipping, and content.
              Scale adds deeper campaigns, more segments, and priority help.
            </p>
          </ScrollReveal>
          <div className="hk-card" style={{ marginTop: "34px", overflowX: "auto", padding: 0 }}>
            <table style={{ borderCollapse: "collapse", minWidth: "720px", width: "100%" }}>
              <thead>
                <tr>
                  {["Capability", "Starter", "Growth", "Scale"].map((head) => (
                    <th
                      key={head}
                      style={{
                        background: "#F6F9FC",
                        borderBottom: "1px solid rgba(16,42,67,0.1)",
                        color: "#102A43",
                        fontFamily: "var(--font-subheading)",
                        fontSize: "14px",
                        padding: "16px",
                        textAlign: "left",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        style={{
                          borderBottom: "1px solid rgba(16,42,67,0.08)",
                          color: index === 0 ? "#102A43" : "#52606D",
                          fontSize: "14px",
                          fontWeight: index === 0 ? 700 : 500,
                          padding: "16px",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-eggshell">
        <div className="hk-shell hk-grid-2">
          <div>
            <span className="hk-kicker">Pricing questions</span>
            <h2 className="hk-section-heading">Straight answers before a demo.</h2>
          </div>
          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((item) => (
              <article className="hk-card" key={item.q}>
                <h3 style={{ color: "#102A43", fontSize: "18px", marginBottom: "8px" }}>{item.q}</h3>
                <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.65 }}>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hk-final-cta scale-pattern">
        <div style={{ margin: "0 auto", maxWidth: "700px" }}>
          <span className="hk-eyebrow">Not sure where to start?</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "20px" }}>
            We will recommend the smallest plan that fixes the current bottleneck.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "17px", lineHeight: 1.7, margin: "18px auto 30px" }}>
            A demo gives us enough context to understand what is actually slowing you down.
          </p>
          <Link href="/demo/" className="hk-button hk-button-primary">Talk to Brianna</Link>
        </div>
      </section>
    </div>
  );
}
