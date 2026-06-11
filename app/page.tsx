import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import SetupChecklist from "@/components/SetupChecklist";
import VideoSection from "@/components/show/VideoSection";
import {
  AIShippingIcon,
  ContentEngineIcon,
  ReportingIcon,
  SalesPipelineIcon,
  ShowLeadIcon,
  UnifiedInboxIcon,
} from "@/components/ModuleIcons";

export const metadata: Metadata = {
  title: "HatchKit - Helping Reptile Breeders Sell More with Less Busywork",
  description:
    "HatchKit helps breeders capture more leads, follow up with every buyer, ship safely, and turn one-time buyers into repeat customers - so you sell more without doing it all by hand.",
};

const heroStats = [
  { value: "1", label: "Place for leads, buyers, deals, shipping, and posts" },
  { value: "80%", label: "Of the repetitive busywork can move to workflows" },
  { value: "0", label: "Need to be a tech person" },
];

const breederPainPoints = [
  "You leave a show with names, texts, DMs, and notes scattered everywhere.",
  "You know you should post more, but you are busy feeding, cleaning, packing, and answering buyers.",
  "Shipping days turn into weather checks, customer updates, and second-guessing.",
  "Your website, email list, follow-up, and sales process are not as organized as your animals deserve.",
];

const operatingModules = [
  {
    icon: <ShowLeadIcon size={24} />,
    title: "Stop losing people after shows",
    description:
      "QR forms and follow-up texts turn table traffic, DMs, and website inquiries into real contacts you can sell to later.",
  },
  {
    icon: <AIShippingIcon size={24} />,
    title: "Make shipping less stressful",
    description:
      "HatchKit helps check weather, route risk, species needs, hold decisions, and customer updates before a live animal moves.",
  },
  {
    icon: <ContentEngineIcon size={24} />,
    title: "Keep social media moving",
    description:
      "Use your available animals, care tips, show plans, and customer questions to create useful posts without starting from scratch.",
  },
  {
    icon: <UnifiedInboxIcon size={24} />,
    title: "Know who wants what",
    description:
      "Keep buyer messages, interest, budget, animal notes, and next steps together so serious buyers do not slip through.",
  },
  {
    icon: <SalesPipelineIcon size={24} />,
    title: "Track deals without a messy notebook",
    description:
      "See where every buyer stands: interested, deposit, paid, shipping review, delivered, care check-in, or repeat buyer.",
  },
  {
    icon: <ReportingIcon size={24} />,
    title: "See what is actually making money",
    description:
      "Know which shows, posts, species, and follow-up messages are creating sales instead of guessing.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Capture",
    body: "A buyer scans, fills a form, sends a DM, or asks about an available animal.",
  },
  {
    step: "02",
    title: "Organize",
    body: "HatchKit tags interest, source, species, budget, and next action in one customer record.",
  },
  {
    step: "03",
    title: "Move",
    body: "The system drafts follow-up, updates the deal stage, and flags shipping requirements.",
  },
  {
    step: "04",
    title: "Grow",
    body: "Care check-ins, review asks, content prompts, and repeat-buyer campaigns keep the relationship active.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$199",
    setupFee: "$799",
    subtitle: "Lead capture and follow-up",
    description: "For smaller breeder businesses that need a clean intake system and basic buyer follow-up.",
    features: [
      { text: "QR lead capture and buyer intake forms", included: true },
      { text: "CRM fields, tags, and smart lists", included: true },
      { text: "Starter storefront and inquiry workflow", included: true },
      { text: "Review and referral follow-up", included: true },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$349",
    setupFee: "$1,499",
    subtitle: "Full buyer journey",
    description: "For active breeders that need sales tracking, safe shipping flow, and content support.",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Deal pipeline and reservation workflow", included: true },
      { text: "Safe shipping review and customer updates", included: true },
      { text: "Weekly content planning support", included: true },
    ],
    ctaLabel: "Get Growth",
  },
  {
    name: "Scale",
    price: "$599",
    setupFee: "$2,499",
    subtitle: "Multi-species and repeat campaigns",
    description: "For established operations with regular drops, multiple species, and more support needs.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Multi-species segments and launch campaigns", included: true },
      { text: "VIP buyer workflows and advanced reporting", included: true },
      { text: "Priority implementation and support", included: true },
    ],
    ctaLabel: "Go Scale",
  },
];

const faqItems = [
  {
    question: "Is HatchKit only for reptile breeders?",
    answer:
      "No. HatchKit is built around breeder-business operations: leads, customers, inventory interest, safe movement, content, and follow-up. Reptile breeders are an early focus, but the brand and system are not pet-store or reptile-only.",
  },
  {
    question: "Do I have to replace my current sales channels?",
    answer:
      "No. HatchKit is designed to sit around the channels you already use and make the buyer journey more organized after someone finds you.",
  },
  {
    question: "What makes the shipping workflow different?",
    answer:
      "It treats shipping as a decision process, not just a label task. Weather, timing, species needs, hold decisions, and customer messages are reviewed before the shipment moves.",
  },
  {
    question: "How technical do I need to be?",
    answer:
      "You do not need to be technical. HatchKit is set up as a practical operating system for breeder teams, with forms, workflows, messaging, and content prompts prepared for daily use.",
  },
  {
    question: "Does the demo cost anything?",
    answer:
      "No. There are two free ways to see HatchKit. The instant one: our guided live demo on this site - you play one of your buyers for about 3 minutes and the real automated emails and texts land on your own phone. Then, if you like what you felt, book a free 15-minute call and we map it to your business - no pressure and no commitment to buy.",
  },
];

export default function HomePage() {
  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern">
        <div className="hk-hero-layout">
          <div>
            <span className="hk-eyebrow">Software that helps breeders sell more</span>
            <h1>You raise the animals. HatchKit helps you sell more of them.</h1>
            <p className="hk-hero-copy">
              Built for breeders who are great with animals but tired of losing leads,
              forgetting to follow up, and watching interested buyers go cold. HatchKit
              captures every lead, follows up for you, keeps shipping safe, and turns more
              lookers into paid, repeat buyers - without you becoming a tech person.
            </p>
            <div className="hk-hero-actions">
              <Link href="/experience/" className="hk-button hk-button-primary">
                Experience HatchKit Live — Free →
              </Link>
              <Link href="/demo/" className="hk-button hk-button-secondary">
                Book a Free Demo Call
              </Link>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "13.5px",
                fontWeight: 600,
                lineHeight: 1.6,
                margin: "14px 0 0",
              }}
            >
              Play one of your buyers in a guided demo — real texts &amp; emails hit your phone ·
              about 3 minutes · no signup
            </p>
            <div className="hk-hero-stats">
              {heroStats.map((stat) => (
                <div className="hk-hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <VideoSection />

      <section className="hk-section hk-section-eggshell">
        <div className="hk-shell">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <span className="hk-kicker">Don&apos;t take our word for it</span>
              <h2 className="hk-section-heading">Feel it work — before anyone calls you.</h2>
              <p className="hk-section-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
                Our guided live demo walks you through a real buyer&apos;s journey, one easy step at a
                time — and the automated emails and texts land on <strong>your</strong> phone while
                you watch the breeder&apos;s side run itself. You can&apos;t do it wrong.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="hk-grid-3" style={{ marginTop: "36px" }}>
              {[
                { step: "01", title: "Type your name and email", body: "That's the whole setup. Add your mobile if you want to feel the real texts too." },
                { step: "02", title: "Click through a buyer's journey", body: "Free guide → falling for a gecko → deposit → safe shipping → review. We guide every click." },
                { step: "03", title: "Watch the magic land on your devices", body: "Every automated email and text a real buyer gets arrives on YOUR phone — live, as you click." },
              ].map((item) => (
                <article className="hk-card" key={item.step}>
                  <span
                    style={{
                      color: "#00B8A9",
                      fontFamily: "var(--font-accent)",
                      fontSize: "14px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.step}
                  </span>
                  <h3 style={{ color: "#102A43", fontSize: "19px", margin: "10px 0 8px" }}>{item.title}</h3>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.65 }}>{item.body}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginTop: "34px", textAlign: "center" }}>
              <Link href="/experience/" className="hk-button hk-button-primary">
                Experience HatchKit Live →
              </Link>
              <p style={{ color: "#8795A1", fontSize: "13px", fontWeight: 600, margin: "12px 0 0" }}>
                Free · about 3 minutes · no signup, no card, no sales call
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell hk-grid-2" style={{ alignItems: "center" }}>
          <ScrollReveal>
            <div>
              <span className="hk-kicker">Built by a real breeder business</span>
              <h2 className="hk-section-heading">Made by breeders who got tired of losing sales.</h2>
              <p className="hk-section-copy">
                HatchKit came out of a working breeder operation - shows, buyer DMs, shipping
                days, and endless follow-up. We got tired of watching good leads slip away and
                built the systems to stop it: capture every buyer, follow up automatically, and
                turn more inquiries into paid, repeat sales. Now you get those same systems
                without building them yourself.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "26px" }}>
                {["Built by working breeders", "Weather-checked shipping", "More follow-up, more repeat buyers"].map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "rgba(0,184,169,0.1)",
                      borderRadius: "999px",
                      color: "#102A43",
                      fontFamily: "var(--font-accent)",
                      fontSize: "13px",
                      fontWeight: 700,
                      padding: "9px 12px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/about/"
                className="hk-link"
                style={{ display: "inline-flex", marginTop: "20px" }}
              >
                See how HatchKit was built
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="hk-card">
              <span className="hk-kicker">Plain English</span>
              <h3 style={{ color: "#102A43", fontSize: "28px", marginTop: "12px" }}>
                HatchKit sets up the robots so you can stay focused on the animals and the buyers.
              </h3>
              <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.75, marginTop: "16px" }}>
                The point is not to make you learn a complicated tech stack. The point is
                to give you a working system for the jobs you already know you should be
                doing but never have enough hours for.
              </p>
              <Link href="/about/" className="hk-link" style={{ display: "inline-flex", marginTop: "20px" }}>
                Read the HatchKit story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">Sound familiar?</span>
            <h2 className="hk-section-heading">Most breeders do not have a reptile problem. They have a business follow-through problem.</h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="hk-grid-2" style={{ marginTop: "34px" }}>
              {breederPainPoints.map((point) => (
                <article className="hk-card" key={point}>
                  <p style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "18px", fontWeight: 800, lineHeight: 1.55 }}>
                    {point}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal>
            <span className="hk-kicker">What HatchKit handles</span>
            <h2 className="hk-section-heading">The business jobs that eat up your nights and Sundays.</h2>
            <p className="hk-section-copy">
              Leads, buyers, follow-up, shipping, websites, email, social posts, and
              repeat customers all work better when they are connected instead of sitting
              in your phone, notebook, and memory.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="hk-module-list">
              {operatingModules.map((module) => (
                <article className="hk-module-item" key={module.title}>
                  <div className="hk-icon-box">{module.icon}</div>
                  <div>
                    <h3
                      style={{
                        color: "#102A43",
                        fontSize: "18px",
                        marginBottom: "7px",
                      }}
                    >
                      {module.title}
                    </h3>
                    <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.65 }}>
                      {module.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
            <div style={{ maxWidth: "760px" }}>
              <span className="hk-kicker">How it works</span>
              <h2 className="hk-section-heading">From availability question to repeat buyer.</h2>
              <p className="hk-section-copy">
                Every workflow is designed around the same reality: buyers show up in
                different places, and you need a simple way to keep them moving without
                doing every step manually.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="hk-workflow">
              {workflowSteps.map((item) => (
                <article className="hk-workflow-step" key={item.step}>
                  <span>{item.step}</span>
                  <h3 style={{ color: "#102A43", fontSize: "20px", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-eggshell">
        <div className="hk-shell hk-split">
          <ScrollReveal>
            <div>
              <span className="hk-kicker">Shipping safety</span>
              <h2 className="hk-section-heading">No more guessing and hoping on shipping day.</h2>
              <p className="hk-section-copy">
                HatchKit helps standardize the shipment review: route weather, safe windows,
                packaging notes, hold decisions, and buyer updates all stay visible before
                anything moves.
              </p>
              <div style={{ marginTop: "28px" }}>
                <Link href="/features/" className="hk-link">
                  Review shipping features
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hk-shipping-board">
              <BoardHeader title="Shipping review" status="3 decisions queued" />
              {[
                {
                  lane: "Atlanta to Phoenix",
                  detail: "Destination heat risk after 2 PM. Buyer update drafted.",
                  status: "Hold",
                  color: "#FF6B6B",
                },
                {
                  lane: "Raleigh to Denver",
                  detail: "Route temps stable. Insulation note confirmed.",
                  status: "Clear",
                  color: "#00B8A9",
                },
                {
                  lane: "Nashville to Chicago",
                  detail: "Overnight hub review needed before label.",
                  status: "Review",
                  color: "#2F80ED",
                },
              ].map((shipment) => (
                <div className="hk-shipping-lane" key={shipment.lane}>
                  <div className="hk-row">
                    <strong style={{ color: "#102A43", fontFamily: "var(--font-subheading)" }}>
                      {shipment.lane}
                    </strong>
                    <span
                      className="hk-status-pill"
                      style={{ background: `${shipment.color}18`, color: shipment.color }}
                    >
                      {shipment.status}
                    </span>
                  </div>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.55, marginTop: "8px" }}>
                    {shipment.detail}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
              <span className="hk-kicker">Social simplicity</span>
              <h2 className="hk-section-heading">Stop staring at a blank caption box.</h2>
            <p className="hk-section-copy">
              The content engine is grounded in what breeders already have: available animals,
              care guidance, show plans, customer questions, and real inventory updates.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="hk-content-grid">
              {[
                { title: "Animal spotlight", body: "Turn available inventory into clean posts with buyer-ready details." },
                { title: "Care education", body: "Use care basics and onboarding notes as helpful evergreen content." },
                { title: "Show schedule", body: "Prep preview posts, QR lead capture, and post-show follow-up." },
                { title: "Buyer questions", body: "Convert repeat questions into posts, emails, and saved replies." },
                { title: "Shipping updates", body: "Explain safe movement standards in a professional brand voice." },
                { title: "Repeat buyers", body: "Prompt return visits with updates that feel useful, not random." },
              ].map((item) => (
                <article className="hk-content-tile" key={item.title}>
                  <h3 style={{ color: "#102A43", fontSize: "18px", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-eggshell">
        <div className="hk-shell">
          <ScrollReveal>
            <SetupChecklist />
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section hk-section-soft">
        <div className="hk-shell">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <span className="hk-kicker">Pricing</span>
              <h2 className="hk-section-heading">Start with the amount of help your business needs now.</h2>
              <p className="hk-section-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
                We help set it up. You do not need to become a software expert first.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="hk-grid-3" style={{ alignItems: "stretch", marginTop: "42px" }}>
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-section">
        <div className="hk-shell">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <span className="hk-kicker">Questions</span>
              <h2 className="hk-section-heading">Straight answers before your free demo.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginTop: "24px" }}>
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="hk-final-cta scale-pattern">
        <div style={{ margin: "0 auto", maxWidth: "720px" }}>
          <ScrollReveal>
            <span className="hk-eyebrow">Ready to sell more with less hassle?</span>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", marginTop: "22px" }}>
              See what HatchKit would do for your sales.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "17px",
                lineHeight: 1.7,
                margin: "18px auto 32px",
                maxWidth: "590px",
              }}
            >
              Feel it yourself first: play one of your buyers in the guided live demo and watch
              the follow-up land on your own phone. Then book a free, no-pressure 15-minute call
              and we will map it to how you actually sell. No cost, no obligation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/experience/" className="hk-button hk-button-primary">
                Experience HatchKit Live →
              </Link>
              <Link href="/demo/" className="hk-button hk-button-secondary">
                Book a Free Demo Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="hk-dashboard">
      <div className="hk-dashboard-top">
        <div className="hk-window-dots" aria-hidden="true">
          <span style={{ background: "#FF6B6B" }} />
          <span style={{ background: "#FFF7E6" }} />
          <span style={{ background: "#00B8A9" }} />
        </div>
        <span style={{ color: "#52606D", fontFamily: "var(--font-accent)", fontSize: "12px", fontWeight: 700 }}>
          HatchKit Command Center
        </span>
      </div>
      <div className="hk-dashboard-body">
        <div className="hk-tool-panel">
          <BoardHeader title="Today" status="Live" />
          {[
            ["New show leads", "18"],
            ["Buyer replies queued", "7"],
            ["Shipments to review", "3"],
            ["Posts awaiting approval", "5"],
          ].map(([label, value]) => (
            <div
              className="hk-row"
              key={label}
              style={{ borderTop: "1px solid rgba(16,42,67,0.08)", padding: "13px 0" }}
            >
              <span style={{ color: "#52606D", fontSize: "14px" }}>{label}</span>
              <strong style={{ color: "#102A43", fontFamily: "var(--font-accent)", fontSize: "18px" }}>
                {value}
              </strong>
            </div>
          ))}
        </div>

        <div>
          <div className="hk-tool-panel">
            <BoardHeader title="Buyer pipeline" status="Auto-routed" />
            {["Interested", "Deposit", "Paid", "Ship", "Care"].map((stage, index) => (
              <div key={stage} style={{ marginTop: index === 0 ? "14px" : "10px" }}>
                <div className="hk-row" style={{ marginBottom: "7px" }}>
                  <span style={{ color: "#102A43", fontFamily: "var(--font-subheading)", fontSize: "13px" }}>
                    {stage}
                  </span>
                  <span style={{ color: "#52606D", fontSize: "12px" }}>{[12, 5, 4, 3, 9][index]}</span>
                </div>
                <div style={{ background: "rgba(16,42,67,0.08)", borderRadius: "999px", height: "8px" }}>
                  <div
                    style={{
                      background: index === 3 ? "#00B8A9" : "#2F80ED",
                      borderRadius: "999px",
                      height: "8px",
                      width: `${[82, 52, 44, 36, 68][index]}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardHeader({ title, status }: { title: string; status: string }) {
  return (
    <div className="hk-row" style={{ marginBottom: "12px" }}>
      <h3 style={{ color: "#102A43", fontSize: "16px" }}>{title}</h3>
      <span className="hk-status-pill" style={{ background: "rgba(0,184,169,0.12)", color: "#008C82" }}>
        {status}
      </span>
    </div>
  );
}
