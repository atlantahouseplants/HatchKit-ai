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
  title: "Features — 8 Modules Built for Reptile Breeders",
  description:
    "HatchKit's eight AI-powered modules work together to capture leads, automate marketing, generate social content, manage shipping, unify your inbox, and grow your reptile breeding business.",
};

const modules = [
  {
    icon: <ShowLeadIcon size={28} />,
    title: "Show Lead Capture",
    tagline: "Never lose a show lead again.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Custom QR codes for each show \u2014 scannable in seconds",
      "Instant lead capture form with automatic thank-you text",
      "Bulk import from paper signup sheets",
      "Tag leads by species interest, budget, and timeline",
      "Automatic follow-up sequence starts the moment they scan",
      "GPS show check-in to associate leads with specific events",
      "Real-time lead count dashboard during the show",
    ],
    breederBenefit:
      "Before HatchKit, most breeders convert less than 5% of show contacts. With automated follow-up starting within 60 seconds of a scan, that number climbs to 20\u201335%.",
  },
  {
    icon: <AIShippingIcon size={28} />,
    title: "AI Shipping Agent",
    tagline: "Ship safely. Every time. Without manual work.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "Real-time weather monitoring along full shipping route",
      "Species-specific temperature tolerance database (500+ species)",
      "Automatic ship/hold decision with confidence score",
      "Customer SMS notification with hold reason and new ETA",
      "Heat pack quantity recommendation based on temps and duration",
      "Carrier transit time integration (FedEx, UPS, Ship Your Reptiles)",
      "Post-delivery follow-up for arrival confirmation",
    ],
    breederBenefit:
      "The average breeder spends 45 minutes per shipment on weather research and customer communication. HatchKit reduces that to 0. No dead animals. No angry customers. No manual work.",
  },
  {
    icon: <UnifiedInboxIcon size={28} />,
    title: "Unified Managed Inbox",
    tagline: "Every message. Every platform. One screen.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "MorphMarket inquiry integration \u2014 messages appear instantly",
      "Instagram DM management via Meta Graph API",
      "Facebook Messenger integration",
      "SMS and email in the same conversation thread",
      "AI-assisted response drafting \u2014 the agent writes replies for common questions, you approve or edit before sending",
      "Automatic lead creation \u2014 any new message from an unknown contact creates a lead",
      "Conversation tagging and priority flagging",
      "Mobile app access \u2014 reply from your phone at shows",
    ],
    breederBenefit:
      "The average breeder checks 5 apps to manage customer conversations and takes 6+ hours to respond. With HatchKit\u2019s unified inbox, every message lands in one place and AI drafts your response before you even see it. Breeders using HatchKit respond 12x faster than the industry average.",
  },
  {
    icon: <MarketingIcon size={28} />,
    title: "Marketing Automation",
    tagline: "Your marketing runs even when you\u2019re sleeping.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Email and SMS drip sequences for new leads",
      "New animal listing alerts to interested buyers",
      "Morph-specific nurture campaigns (e.g., \u2018Ball Python Newsletter\u2019)",
      "Seasonal breeding and hatching announcements",
      "Referral program with tracking and rewards",
      "Re-engagement campaigns for cold leads",
      "A/B testing for subject lines and send times",
    ],
    breederBenefit:
      "Most breeders have no marketing system at all \u2014 leads are lost, past customers are never re-engaged, and new animals sit unsold. HatchKit turns your customer list into a revenue engine.",
  },
  {
    icon: <SalesPipelineIcon size={28} />,
    title: "Sales Pipeline",
    tagline: "Know exactly where every deal stands.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Visual Kanban-style deal board (Interest \u2192 Deposit \u2192 Paid \u2192 Shipped \u2192 Repeat)",
      "Automatic stage progression based on payment and shipping events",
      "Professional invoicing with secure payment links \u2014 no more Venmo screenshots or Zelle guesswork",
      "Integrated with Square and Stripe for professional checkout",
      "Automated waitlist for upcoming clutches \u2014 buyers join a list, get notified automatically when babies are available",
      "Deal notes and conversation history",
      "Payment tracking with deposit and balance management",
      "Repeat customer identification and VIP tagging",
    ],
    breederBenefit:
      "Stop keeping deals in your head or a chaotic spreadsheet. See every active sale at a glance and never let a paid deposit go stale without following up.",
  },
  {
    icon: <BrandWebsiteIcon size={28} />,
    title: "Brand & Website",
    tagline: "Look like the professional you are.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Custom-designed website with your logo and brand colors",
      "Available animals gallery with morph info, photos, and price",
      "Blog for care sheets, breeding updates, and hatch announcements",
      "Integrated contact and inquiry forms",
      "MorphMarket and social media link integration",
      "Mobile-optimized and fast-loading",
      "SEO-optimized for local reptile search queries",
    ],
    breederBenefit:
      "A professional website builds trust and captures buyers who find you organically. Combined with HatchKit\u2019s CRM, every inquiry from your site automatically enters your pipeline.",
  },
  {
    icon: <ReportingIcon size={28} />,
    title: "Smart Reporting",
    tagline: "Know what\u2019s working. Double down on it.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Revenue by show, morph, and sales channel",
      "Lead-to-sale conversion rate by source",
      "Best-performing email and SMS campaigns",
      "Customer lifetime value and repeat purchase rate",
      "Shipping cost analysis by carrier and route",
      "Seasonal revenue trends and forecasting",
      "Custom date range filters and CSV export",
    ],
    breederBenefit:
      "Most breeders have no idea which shows are profitable after travel costs, which morphs move fastest, or which marketing channels drive real sales. HatchKit answers all of it.",
  },
  {
    icon: <ContentEngineIcon size={28} />,
    title: "AI Content Engine",
    tagline: "Your social media, on autopilot.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "Daily Instagram posts written in your exact voice \u2014 never generic",
      "Show-aware scheduling: preview posts 3 days before, recap posts 1 day after",
      "Inventory-driven content: more animal spotlights when you have animals to sell",
      "Seasonal awareness: spring breeding updates, summer hatchling season, fall show previews, winter planning content",
      "Approve posts via SMS reply \u2014 \u20181\u2019 to post, \u20182\u2019 to skip, or send edits as text",
      "Direct Instagram and Facebook publishing via Meta Graph API",
    ],
    contentCategories: [
      { emoji: "\ud83e\udd8e", label: "Animal Spotlight" },
      { emoji: "\ud83d\udcda", label: "Care Tips" },
      { emoji: "\ud83c\udfac", label: "Behind the Scenes" },
      { emoji: "\ud83e\uddec", label: "Morph Education" },
      { emoji: "\u2764\ufe0f", label: "Customer Stories" },
      { emoji: "\ud83d\udcc5", label: "Seasonal" },
      { emoji: "\ud83d\udcac", label: "Engagement" },
      { emoji: "\ud83c\udff7\ufe0f", label: "Promotional" },
    ],
    breederBenefit:
      "Most breeders know they should post more but never have time. The Content Engine generates a full week of authentic, species-accurate posts every Sunday night. You approve what you like and skip what you don\u2019t \u2014 it takes 2 minutes.",
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
            All 8 Modules
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
            Everything Your Breeding Business Needs
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
            Eight modules. One platform. Built specifically for reptile breeders.
            Every feature was designed because breeders asked for it.
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
                      The Breeder Impact
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
            Ready to See It in Action?
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
            Book a free 15-minute demo and we&apos;ll show you exactly how each module
            would work for your species and show schedule.
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
