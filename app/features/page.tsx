import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ShowLeadIcon,
  AIShippingIcon,
  MarketingIcon,
  SalesPipelineIcon,
  BrandWebsiteIcon,
  ReportingIcon,
  ContentEngineIcon,
  UnifiedInboxIcon,
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "Features — 8 Tools Built for Reptile Breeders",
  description:
    "HatchKit does eight things for you: captures show leads, handles shipping, puts all your messages in one place, follows up with buyers, tracks your deals, posts on social media, builds your website, and shows you what's working.",
};

const modules = [
  {
    icon: <ShowLeadIcon size={28} />,
    title: "Show Lead Capture",
    tagline: "Never lose a show lead again.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Custom QR codes for each show \u2014 buyers scan in seconds",
      "Instantly saves their info and sends a thank-you text",
      "Import leads from paper signup sheets",
      "Tag people by what species they want, budget, and timeline",
      "Automatic follow-up texts start the moment they scan",
      "GPS show check-in so you know which leads came from which show",
      "See how many leads you\u2019re getting in real time during the show",
    ],
    breederBenefit:
      "Before HatchKit, most breeders only sell to about 5% of the people they meet at shows. With automatic follow-up starting within 60 seconds of a scan, that number climbs to 20\u201335%.",
  },
  {
    icon: <AIShippingIcon size={28} />,
    title: "Smart Shipping",
    tagline: "Ship safe. Every time. Without the headache.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "Checks the weather along the entire shipping route automatically",
      "Knows the safe temperature range for 500+ species",
      "Decides whether to ship or hold \u2014 no guesswork",
      "Texts your buyer if the shipment is held, with an updated ship date",
      "Tells you exactly how many heat packs to use",
      "Works with FedEx, UPS, and Ship Your Reptiles",
      "Follows up after delivery to make sure the animal arrived safe",
    ],
    breederBenefit:
      "The average breeder spends 45 minutes per shipment checking weather and texting customers. HatchKit does all of it for you. No dead animals. No angry buyers. No stress.",
  },
  {
    icon: <UnifiedInboxIcon size={28} />,
    title: "One Inbox",
    tagline: "Every message. Every app. One screen.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "MorphMarket messages show up instantly",
      "Instagram DMs in the same place",
      "Facebook messages too",
      "Texts and emails in one thread per customer",
      "AI writes draft replies for you \u2014 you just approve or edit before sending",
      "New messages from unknown people automatically save as new contacts",
      "Tag and flag important conversations",
      "Works on your phone \u2014 reply from anywhere, even at shows",
    ],
    breederBenefit:
      "Most breeders check 5 different apps and take 6+ hours to get back to people. With HatchKit, every message lands in one place and AI writes a draft reply before you even see it. Breeders using HatchKit reply 12x faster.",
  },
  {
    icon: <MarketingIcon size={28} />,
    title: "Automatic Follow-Up",
    tagline: "Stay in touch with buyers \u2014 even while you sleep.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Automatic texts and emails to new leads",
      "Alerts to interested buyers when you list new animals",
      "Follow-up messages by species (e.g., \u2018Ball Python Updates\u2019)",
      "Seasonal breeding and hatching announcements",
      "Referral program \u2014 track who sends you new buyers and reward them",
      "Reach back out to people who went cold",
      "Tests different subject lines and send times to find what works best",
    ],
    breederBenefit:
      "Most breeders don\u2019t have any system for staying in touch with buyers. Leads disappear, past customers never hear from you again, and animals sit unsold. HatchKit keeps your buyer list working for you around the clock.",
  },
  {
    icon: <SalesPipelineIcon size={28} />,
    title: "Deal Tracker",
    tagline: "See exactly where every sale stands.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Visual board showing every deal (Interested \u2192 Deposit \u2192 Paid \u2192 Shipped \u2192 Repeat Buyer)",
      "Deals move forward automatically when payments and shipments happen",
      "Send real invoices with payment links \u2014 no more Venmo screenshots or Zelle guesswork",
      "Works with Square and Stripe for easy checkout",
      "Waitlist for upcoming clutches \u2014 buyers sign up and get notified when babies are ready",
      "Notes and conversation history on every deal",
      "Track deposits, balances, and payments in one place",
      "Spot your repeat buyers and VIP customers",
    ],
    breederBenefit:
      "Stop keeping deals in your head or a messy spreadsheet. See every active sale at a glance and never let a paid deposit sit without following up.",
  },
  {
    icon: <BrandWebsiteIcon size={28} />,
    title: "Your Website",
    tagline: "Look as professional as you are.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Custom website with your logo and colors",
      "Gallery of available animals with morph info, photos, and price",
      "Blog for care sheets, breeding updates, and hatch announcements",
      "Contact forms built right in",
      "Links to your MorphMarket and social media pages",
      "Looks great on phones and loads fast",
      "Shows up when people search for reptile breeders in your area",
    ],
    breederBenefit:
      "A real website builds trust and catches buyers who find you through Google. Every inquiry from your site automatically gets saved as a new contact so nobody falls through the cracks.",
  },
  {
    icon: <ReportingIcon size={28} />,
    title: "Your Numbers",
    tagline: "See what\u2019s working. Do more of it.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Sales broken down by show, morph, and where the buyer came from",
      "How many leads actually turn into sales, by source",
      "Which emails and texts get the best results",
      "How much each customer is worth over time",
      "Shipping costs broken down by carrier and route",
      "Seasonal trends so you can plan ahead",
      "Filter by any date range and export to spreadsheet",
    ],
    breederBenefit:
      "Most breeders have no clue which shows actually make money after travel costs, which morphs sell fastest, or where their best buyers come from. HatchKit shows you all of it.",
  },
  {
    icon: <ContentEngineIcon size={28} />,
    title: "Auto Social Posts",
    tagline: "Your social media, handled for you.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "Daily Instagram posts written in your voice \u2014 not generic AI slop",
      "Knows your show schedule: posts previews before shows and recaps after",
      "Posts more animal spotlights when you have animals to sell",
      "Matches the season: breeding updates in spring, hatchling posts in summer, show previews in fall",
      "Approve posts by replying to a text \u2014 \u20181\u2019 to post, \u20182\u2019 to skip, or send edits",
      "Posts directly to your Instagram and Facebook",
    ],
    contentCategories: [
      { emoji: "\ud83e\udd8e", label: "Animal Spotlight" },
      { emoji: "\ud83d\udcda", label: "Care Tips" },
      { emoji: "\ud83c\udfac", label: "Behind the Scenes" },
      { emoji: "\ud83e\uddec", label: "Morph Education" },
      { emoji: "\u2764\ufe0f", label: "Customer Stories" },
      { emoji: "\ud83d\udcc5", label: "Seasonal" },
      { emoji: "\ud83d\udcac", label: "Q&A" },
      { emoji: "\ud83c\udff7\ufe0f", label: "For Sale" },
    ],
    breederBenefit:
      "You know you should post more but who has the time? HatchKit writes a full week of real, species-accurate posts every Sunday night. You approve what you like and skip what you don\u2019t \u2014 takes about 2 minutes.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#111111",
          padding: "140px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="scale-pattern"
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(27,94,32,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,111,0,0.12)",
              color: "#FF6F00",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
              border: "1px solid rgba(255,111,0,0.2)",
            }}
          >
            All 8 Tools
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Everything You Need to Sell More Reptiles
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.65",
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            Eight tools. One system. Built by reptile breeders, for reptile breeders.
            Every feature exists because a breeder asked for it.
          </p>
          <Link
            href="/demo/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "15px 30px",
              borderRadius: "10px",
              background: "#FF6F00",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Book a Free Demo →
          </Link>
        </div>
      </section>

      {/* MODULE SECTIONS */}
      {modules.map((mod, i) => (
        <section
          key={i}
          style={{
            padding: "80px 24px",
            background: i % 2 === 0 ? "#fff" : "#F5F5F0",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <ScrollReveal>
              <div
                className="feature-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "64px",
                  alignItems: "center",
                }}
              >
                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: mod.lightBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: mod.color,
                      marginBottom: "20px",
                    }}
                  >
                    {mod.icon}
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      color: "#1A1A1A",
                      marginBottom: "8px",
                    }}
                  >
                    {mod.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: mod.color,
                      marginBottom: "24px",
                    }}
                  >
                    {mod.tagline}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {mod.capabilities.map((cap, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span
                          style={{
                            flexShrink: 0,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: `${mod.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "1px",
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke={mod.color}
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span style={{ fontSize: "15px", color: "#333", lineHeight: 1.5 }}>
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Content Engine categories as pills */}
                  {"contentCategories" in mod && mod.contentCategories && (
                    <div style={{ marginTop: "20px" }}>
                      <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#888",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}>
                        Smart rotation across 8 categories:
                      </p>
                      <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}>
                        {(mod.contentCategories as Array<{emoji: string; label: string}>).map((cat, k) => (
                          <span key={k} style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "5px 12px",
                            borderRadius: "100px",
                            background: "rgba(255,111,0,0.08)",
                            border: "1px solid rgba(255,111,0,0.15)",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "#333",
                          }}>
                            {cat.emoji} {cat.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Benefit card */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div
                    style={{
                      background: i === 1 || i === 2 ? "#1B5E20" : "#111111",
                      borderRadius: "20px",
                      padding: "36px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#FF6F00",
                        marginBottom: "14px",
                      }}
                    >
                      Why This Matters
                    </div>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "rgba(255,255,255,0.8)",
                        fontStyle: "italic",
                      }}
                    >
                      {mod.breederBenefit}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .feature-grid { grid-template-columns: 1fr !important; }
              .feature-grid > div { order: 0 !important; }
            }
          `}</style>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section
        style={{
          background: "#1B5E20",
          padding: "80px 24px",
          textAlign: "center",
        }}
        className="scale-pattern"
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#fff",
              marginBottom: "14px",
            }}
          >
            Want to See How It Works?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "32px",
              maxWidth: "480px",
              margin: "0 auto 32px",
              lineHeight: "1.65",
            }}
          >
            Book a free 15-minute call and we&apos;ll walk you through exactly how
            each tool works for your species and your show schedule.
          </p>
          <Link
            href="/demo/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 36px",
              borderRadius: "10px",
              background: "#FF6F00",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(255,111,0,0.35)",
            }}
          >
            Book My Free Demo →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
