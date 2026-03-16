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
  AnimalProfileIcon,
  MediaLibraryIcon,
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "Features — 10 Tools Built for Reptile Breeders",
  description:
    "HatchKit does ten things for you: captures show leads, manages your animals, handles shipping, puts all your messages in one place, follows up with buyers, tracks your deals, posts on social media, organizes your media, builds your website, and shows you what's working.",
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
    icon: <AnimalProfileIcon size={28} />,
    title: "Animal Profiles",
    tagline: "Every animal gets its own page. Every question gets remembered.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Each animal gets a full profile: photos, morph, personality, price, and availability",
      "Tracks who asked about each animal \u2014 never lose track of \u201cDo you still have that orange one?\u201d",
      "See which animals are getting the most attention from buyers",
      "When someone messages about an animal, HatchKit links them together automatically",
      "Public profile page on your website so buyers can browse and inquire",
      "Mark an animal as sold and inventory updates everywhere instantly",
      "Upload videos and b-roll clips right to each animal\u2019s profile",
      "One click to message everyone who asked about a specific animal",
    ],
    breederBenefit:
      "Breeders tell us the same thing: \u201cSomeone messaged me about a gecko three weeks ago and I can\u2019t remember which one.\u201d HatchKit remembers for you. Every animal, every question, every interested buyer \u2014 all connected.",
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
      "Instagram DMs, Facebook messages, texts, and emails \u2014 all in one thread per customer",
      "AI writes draft replies for you \u2014 you just approve or edit before sending",
      "AI automatically answers common questions (care, feeding, shipping, pricing) so you don\u2019t repeat yourself 50 times a week",
      "Tells you who\u2019s just browsing vs. who\u2019s a serious buyer \u2014 so you know who to reply to first",
      "Turns social media comments into leads \u2014 when someone comments \u201cHow much?\u201d, HatchKit auto-DMs them with details",
      "New messages from unknown people automatically save as new contacts",
      "Works on your phone \u2014 reply from anywhere, even at shows",
    ],
    breederBenefit:
      "Most breeders check 5 different apps and take 6+ hours to get back to people. With HatchKit, every message lands in one place, AI answers the common questions for you, and it tells you who\u2019s actually ready to buy. Breeders using HatchKit reply 12x faster.",
  },
  {
    icon: <MarketingIcon size={28} />,
    title: "Automatic Follow-Up",
    tagline: "Stay in touch with buyers \u2014 even while you sleep.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Automatic texts and emails to new leads \u2014 starts following up within 60 seconds",
      "Alerts to interested buyers when you list new animals that match what they want",
      "1-month check-in after a sale: \u201cHow\u2019s your new gecko settling in? Need feeders?\u201d",
      "6-month upgrade reminder: \u201cTime for a bigger enclosure? Here\u2019s our guide.\u201d",
      "1-year anniversary: \u201cHappy 1 year! Here\u2019s a special deal as a thank you.\u201d",
      "Automatically sends care guides when people ask common questions",
      "Gently nudges browsers toward buying with helpful info over time \u2014 no pushy sales tactics",
      "Reach back out to people who went cold",
    ],
    breederBenefit:
      "Most breeders lose contact with buyers after the sale. With HatchKit, your buyers hear from you at 1 month, 6 months, and 1 year \u2014 with helpful tips, not spam. They remember you, they come back, and they send their friends.",
  },
  {
    icon: <SalesPipelineIcon size={28} />,
    title: "Deal Tracker",
    tagline: "See exactly where every sale stands.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Visual board showing every deal (Interested \u2192 Deposit \u2192 Paid \u2192 Shipped \u2192 Delivered)",
      "Deals move forward automatically when payments and shipments happen",
      "Send real invoices with payment links \u2014 no more Venmo screenshots or Zelle guesswork",
      "Full purchase history for every customer \u2014 see who bought what and when",
      "Automatically recognizes repeat buyers and VIP customers so you can prioritize them",
      "Waitlist for upcoming clutches \u2014 buyers sign up and get notified when babies are ready",
      "Every sale automatically updates your inventory \u2014 no manual spreadsheet entry",
      "Export your full sales history to a spreadsheet anytime",
    ],
    breederBenefit:
      "Stop keeping deals in your head or a messy spreadsheet. See every active sale at a glance, know your repeat buyers by name, and never let a paid deposit sit without following up. Every sale auto-updates your inventory.",
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
      "See exactly where your buyers come from \u2014 Facebook, Instagram, MorphMarket, shows, or your website",
      "Sales broken down by show, morph, and source so you know what\u2019s working",
      "Which emails and texts get the best results",
      "Repeat buyer rate \u2014 how many customers come back for more",
      "Which animals get the most social media attention and engagement",
      "How many people you\u2019re capturing at each show and how many turn into sales",
      "Seasonal trends so you can plan ahead",
      "Filter by any date range and export to spreadsheet",
    ],
    breederBenefit:
      "Most breeders have no clue which shows actually make money, which morphs sell fastest, or where their best buyers come from. HatchKit shows you all of it so you can stop guessing and start spending time where it pays off.",
  },
  {
    icon: <MediaLibraryIcon size={28} />,
    title: "Media Library",
    tagline: "All your photos, videos, and clips \u2014 organized and ready to post.",
    color: "#1B5E20",
    lightBg: "rgba(27,94,32,0.05)",
    capabilities: [
      "Upload and organize photos and videos by animal, show, or folder",
      "Every animal\u2019s photos, videos, and b-roll clips in one place",
      "Drag-and-drop upload from your phone or computer",
      "HatchKit pulls the right photos automatically when creating social posts",
      "Upload b-roll clips for reels and video posts",
      "See which photos have been used in posts and which haven\u2019t",
      "Tag and search your media \u2014 find that photo of \u201cSunset\u201d in seconds",
    ],
    breederBenefit:
      "Most breeders have thousands of photos scattered across their phone, nowhere organized, half of them never posted. HatchKit keeps everything sorted by animal so when it\u2019s time to post or reply to a buyer, the right photo is right there.",
  },
  {
    icon: <ContentEngineIcon size={28} />,
    title: "Auto Social Posts",
    tagline: "Your social media, handled for you.",
    color: "#FF6F00",
    lightBg: "rgba(255,111,0,0.05)",
    capabilities: [
      "Daily Instagram posts written in your voice \u2014 not generic AI slop",
      "Tells you which animal to post next based on what\u2019s getting attention and what hasn\u2019t been posted recently",
      "Tracks how many times each animal has been posted and how much engagement it got",
      "Knows your show schedule: posts previews before shows and recaps after",
      "Matches the season: breeding updates in spring, hatchling posts in summer, show previews in fall",
      "Approve posts by replying to a text \u2014 \u20181\u2019 to post, \u20182\u2019 to skip, or send edits",
      "Posts directly to your Instagram and Facebook",
      "Turns comments on your posts into leads automatically",
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
            All 10 Tools
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
            Ten tools. One system. Built by reptile breeders, for reptile breeders.
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
