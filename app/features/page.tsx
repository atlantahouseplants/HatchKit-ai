import type { Metadata } from "next";
import Link from "next/link";
import {
  AIShippingIcon,
  AnimalProfileIcon,
  BrandWebsiteIcon,
  ContentEngineIcon,
  MarketingIcon,
  MediaLibraryIcon,
  ReportingIcon,
  SalesPipelineIcon,
  ShowLeadIcon,
  UnifiedInboxIcon,
} from "@/components/ModuleIcons";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "What HatchKit Handles - Breeder Business Software",
  description:
    "See what HatchKit handles for breeders: leads, follow-up, websites, email, social posts, buyer tracking, safe shipping, and repeat customer workflows.",
};

const featureGroups = [
  {
    icon: <ShowLeadIcon size={28} />,
    title: "Lead capture",
    description:
      "When somebody asks about an animal, scans a show QR code, fills out a form, or messages you online, HatchKit helps turn that into a contact you can follow up with.",
    details: ["Show QR forms", "Website forms", "Interest tags", "First follow-up"],
  },
  {
    icon: <UnifiedInboxIcon size={28} />,
    title: "Buyer inbox",
    description:
      "Keep buyer messages and notes in one place so you are not trying to remember which person wanted which animal three weeks later.",
    details: ["Buyer notes", "AI reply drafts", "Serious-buyer flags", "Saved context"],
  },
  {
    icon: <SalesPipelineIcon size={28} />,
    title: "Sales pipeline",
    description:
      "See who is just asking, who is ready for a deposit, who has paid, who needs shipping, and who needs a care check-in.",
    details: ["Deal stages", "Reservations", "Deposits", "Next steps"],
  },
  {
    icon: <AIShippingIcon size={28} />,
    title: "Shipping safety",
    description:
      "Help check weather, route risk, hold decisions, and buyer updates before shipping day turns into a scramble.",
    details: ["Weather checks", "Hold decisions", "Buyer updates", "Delivery follow-up"],
  },
  {
    icon: <ContentEngineIcon size={28} />,
    title: "Content engine",
    description:
      "Use the animals, care tips, show plans, and buyer questions you already have to create posts and email ideas.",
    details: ["Post ideas", "Approvals", "Care tips", "Show previews"],
  },
  {
    icon: <MediaLibraryIcon size={28} />,
    title: "Media library",
    description:
      "Keep photos, videos, and clips organized so you can find the right media when a buyer asks or a post needs to go out.",
    details: ["Folders", "Animal media", "Reusable clips", "Post-ready files"],
  },
  {
    icon: <AnimalProfileIcon size={28} />,
    title: "Animal profiles",
    description:
      "Give each animal a clean record with availability, photos, personality notes, buyer interest, and sales status.",
    details: ["Availability", "Waitlists", "Profile links", "Inventory notes"],
  },
  {
    icon: <MarketingIcon size={28} />,
    title: "Follow-up campaigns",
    description:
      "Send the right check-ins after interest, purchase, delivery, care milestones, reviews, referrals, and repeat sales.",
    details: ["Lead follow-up", "Care onboarding", "Reviews", "Repeat buyers"],
  },
  {
    icon: <BrandWebsiteIcon size={28} />,
    title: "Website and funnels",
    description:
      "Give buyers a more professional path with pages for available animals, forms, guides, offers, and event campaigns.",
    details: ["Animal pages", "Forms", "Guides", "Offers"],
  },
  {
    icon: <ReportingIcon size={28} />,
    title: "Business reporting",
    description:
      "See which shows, posts, sales channels, species, and follow-ups are actually helping you sell.",
    details: ["Lead sources", "Sales pipeline", "Post signals", "Repeat rate"],
  },
];

const outcomes = [
  "More buyers saved before they disappear",
  "Less typing the same replies over and over",
  "Fewer shipping-day surprises",
  "More consistent posts without hiring a marketer",
  "More repeat buyers because follow-up actually happens",
];

export default function FeaturesPage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto" }}>
        <div className="hk-shell" style={{ maxWidth: "900px", textAlign: "center" }}>
          <span className="hk-eyebrow">What HatchKit handles</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.8rem, 6vw, 5rem)", marginTop: "22px" }}>
            The business chores you should not have to do by hand forever.
          </h1>
          <p className="hk-hero-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Leads, buyer follow-up, websites, emails, social media, shipping checks,
            and sales tracking in one setup your business can actually use.
          </p>
          <div className="hk-hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/demo/" className="hk-button hk-button-primary">Get a Free Demo</Link>
            <Link href="/pricing/" className="hk-button hk-button-secondary">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">Plain English features</span>
            <h2 className="hk-section-heading">The stuff you know you should be doing, but never have enough time to do.</h2>
            <p className="hk-section-copy">
              HatchKit is not asking you to become a tech person. It gives you a working
              system for the jobs that usually live in your phone, inbox, notebook, and memory.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="hk-grid-2" style={{ marginTop: "38px" }}>
              {featureGroups.map((feature) => (
                <article className="hk-card" key={feature.title}>
                  <div className="hk-module-item" style={{ border: 0, padding: 0 }}>
                    <div className="hk-icon-box">{feature.icon}</div>
                    <div>
                      <h3 style={{ color: "#102A43", fontSize: "20px", marginBottom: "8px" }}>
                        {feature.title}
                      </h3>
                      <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.65 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
                    {feature.details.map((detail) => (
                      <span
                        key={detail}
                        style={{
                          background: "rgba(47,128,237,0.08)",
                          borderRadius: "999px",
                          color: "#102A43",
                          fontFamily: "var(--font-accent)",
                          fontSize: "12px",
                          fontWeight: 700,
                          padding: "7px 10px",
                        }}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <ScrollReveal>
            <div>
              <span className="hk-kicker">Why it helps sales</span>
              <h2 className="hk-section-heading">Most lost sales are not because the animal was wrong. The follow-up broke.</h2>
              <p className="hk-section-copy">
                The buyer asked a question, then life got busy. The DM got buried.
                The show lead never got a text. The shipping update took too long.
                HatchKit is built to close those gaps.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: "grid", gap: "12px" }}>
              {outcomes.map((outcome) => (
                <div className="hk-card" key={outcome} style={{ alignItems: "center", display: "flex", gap: "12px", padding: "18px" }}>
                  <span style={{ background: "#00B8A9", borderRadius: "999px", height: "10px", width: "10px" }} />
                  <strong style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "15px" }}>
                    {outcome}
                  </strong>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-final-cta scale-pattern">
        <div style={{ margin: "0 auto", maxWidth: "760px" }}>
          <span className="hk-eyebrow">See it with your animals and your process</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "20px" }}>
            No generic software tour. We will show what HatchKit would handle first.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "17px", lineHeight: 1.7, margin: "18px auto 30px" }}>
            Bring your sales mess, your shipping process, and the parts of the business where you know you need help.
          </p>
          <Link href="/demo/" className="hk-button hk-button-primary">Get a Free Demo</Link>
        </div>
      </section>
    </div>
  );
}
