'use client';

import { useRef, useState } from "react";
import BuyerPhone from "@/components/experience/BuyerPhone";
import HatchKitDashboard from "@/components/experience/HatchKitDashboard";
import ScheduleRibbon from "@/components/experience/ScheduleRibbon";
import GuideCard, { type GuidePhase } from "@/components/experience/GuideCard";
import JourneyRail from "@/components/experience/JourneyRail";
import BookingCalendar from "@/components/BookingCalendar";
import {
  type JourneyEvent,
  type Visitor,
  groupEvents,
  postLeadMagnet,
  postOfferClicked,
  postOrderSubmitted,
  postReviewSubmitted,
  postHatchkitLead,
} from "@/lib/demo-journey";
import { STEP_SCRIPT, RAIL_STEPS, type StepId } from "@/lib/demo-script";

type Step = "intro" | StepId | "done";
const REVEAL_MS = 650;

// Which real webhook each buyer action fires (payloads unchanged — these run the
// actual SunScale automations), and which journey events it reveals on screen.
const ACTIONS: Record<StepId, { fire: (v: Visitor) => void; group: 1 | 2 | 3 | 4; next: Step }> = {
  guide: { fire: postLeadMagnet, group: 1, next: "mango" },
  mango: { fire: postOfferClicked, group: 2, next: "deposit" },
  deposit: { fire: postOrderSubmitted, group: 3, next: "review" },
  review: { fire: postReviewSubmitted, group: 4, next: "done" },
};

export default function ExperiencePage() {
  const [step, setStep] = useState<Step>("intro");
  const [phase, setPhase] = useState<GuidePhase>("brief");
  const [visitor, setVisitor] = useState<Visitor>({ name: "", email: "", phone: "" });
  const [revealed, setRevealed] = useState<JourneyEvent[]>([]);
  const startedFired = useRef(false);
  const completedFired = useRef(false); // one hot-lead capture, ever (StrictMode-proof)
  const stageRef = useRef<HTMLDivElement>(null);

  const hasPhone = Boolean(visitor.phone && visitor.phone.trim());

  function scrollToStage() {
    stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startDemo(e: React.FormEvent) {
    e.preventDefault();
    if (!visitor.name || !visitor.email) return;
    if (!startedFired.current) {
      startedFired.current = true;
      // Early capture: contact saved in the HatchKit sales account, no task yet.
      postHatchkitLead(visitor, "Started the self-guided demo on hatchkitai.com", "started");
    }
    setStep("guide");
    setPhase("brief");
    scrollToStage();
  }

  function act(id: StepId) {
    if (phase !== "brief") return;
    setPhase("revealing");
    ACTIONS[id].fire(visitor); // the real webhook — fire-and-forget, never blocks the show
    const evs = groupEvents(ACTIONS[id].group);
    evs.forEach((ev, idx) => {
      setTimeout(() => {
        setRevealed((r) => [...r, ev]);
        if (idx === evs.length - 1) setPhase("recap");
      }, (idx + 1) * REVEAL_MS);
    });
  }

  function next(id: StepId) {
    const to = ACTIONS[id].next;
    if (to === "done" && !completedFired.current) {
      completedFired.current = true;
      // Completion: hot-lead tag + follow-up task for the sales team.
      postHatchkitLead(visitor, "Completed the self-guided demo on hatchkitai.com", "completed");
    }
    setStep(to);
    setPhase("brief");
    scrollToStage();
  }

  const phoneMessages = revealed
    .filter((e) => e.channel !== "system")
    .map((e) => ({ channel: e.channel as "email" | "text", buyer: e.buyer || "", realDay: e.realDay }));
  const latest = revealed[revealed.length - 1];
  const activeStage = latest?.stage || "New lead";
  const note = latest?.note || "";
  const railIndex = (["intro", "guide", "mango", "deposit", "review", "done"] as Step[]).indexOf(step);

  return (
    <div className="hk-page">
      {/* ── Hero ── */}
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto", paddingBottom: "40px" }}>
        <div className="hk-shell" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="hk-eyebrow">The live demo · about 3 minutes · free · no signup</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.3rem, 4.5vw, 3.9rem)", marginTop: "18px" }}>
            Experience HatchKit. Live. Right now.
          </h1>
          <p className="hk-hero-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
            You&apos;re about to play one of your own buyers — guided the whole way, one easy step at a
            time. Real automated emails and texts will land on <strong>your</strong> devices while you
            watch the breeder&apos;s side run itself. You can&apos;t do it wrong.
          </p>
        </div>
      </section>

      <section className="hk-section" style={{ paddingTop: "32px" }}>
        <div ref={stageRef} className="hk-shell" style={{ maxWidth: step === "intro" ? "640px" : "1000px", scrollMarginTop: "90px" }}>
          {/* journey map */}
          {step !== "intro" && <JourneyRail steps={RAIL_STEPS} currentIndex={railIndex} />}

          {/* ── Intro: set the scene + collect the buyer identity ── */}
          {step === "intro" ? (
            <div className="hk-card" style={{ padding: "30px" }}>
              <span className="hk-kicker">Set the scene</span>
              <h2 style={{ color: "#102A43", fontSize: "26px", margin: "10px 0 12px" }}>
                For the next 3 minutes, you&apos;re the buyer.
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.7 }}>
                SunScale Geckos is our demo breeder — a real account running real HatchKit automations.
                Enter your details and we&apos;ll treat you exactly like one of their buyers: the{" "}
                <strong>actual emails and texts</strong> a buyer gets will arrive on your devices, live,
                as you click through the journey. At every step we&apos;ll tell you what to do, what&apos;s
                about to happen, and what HatchKit just did behind the scenes.
              </p>
              <form onSubmit={startDemo} style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
                <Input label="Your name" value={visitor.name} onChange={(v) => setVisitor({ ...visitor, name: v })} required />
                <Input
                  label="Your real email (the demo emails land here)"
                  type="email"
                  value={visitor.email}
                  onChange={(v) => setVisitor({ ...visitor, email: v })}
                  required
                />
                <Input
                  label="Mobile — optional, but this is where the magic hits (real demo texts, never marketing)"
                  type="tel"
                  value={visitor.phone || ""}
                  onChange={(v) => setVisitor({ ...visitor, phone: v })}
                />
                <button className="hk-button hk-button-primary" type="submit" style={{ border: "none", cursor: "pointer", marginTop: "4px" }}>
                  Start the Live Demo →
                </button>
                <p style={{ color: "#8795A1", fontSize: "12px", lineHeight: 1.5, textAlign: "center" }}>
                  No charge. No spam after the demo. Stop anytime.
                </p>
              </form>
            </div>
          ) : (
            <>
              {/* ── The coach: brief → act → recap ── */}
              {step !== "done" && (
                <GuideCard
                  phase={phase}
                  script={STEP_SCRIPT[step as StepId]}
                  hasPhone={hasPhone}
                  onAction={() => act(step as StepId)}
                  onContinue={() => next(step as StepId)}
                />
              )}

              {step === "done" && <Finale hasPhone={hasPhone} />}

              {/* ── The stage: buyer's phone + breeder's dashboard ── */}
              <div className="hk-exp-split" style={{ marginTop: "24px" }}>
                <BuyerPhone name={visitor.name} messages={phoneMessages} />
                <HatchKitDashboard name={visitor.name} activeStage={activeStage} note={note} />
              </div>

              {/* the anti-spam proof */}
              {phoneMessages.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <ScheduleRibbon messages={phoneMessages} />
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`
        .hk-exp-split {
          display: grid;
          gap: 22px;
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }
        @media (max-width: 820px) {
          .hk-exp-split { grid-template-columns: 1fr; }
        }
        /* the global sticky CTA would cover the demo controls mid-journey */
        .mobile-sticky-cta { display: none !important; }
      `}</style>
    </div>
  );
}

function Finale({ hasPhone }: { hasPhone: boolean }) {
  return (
    <div>
      <div className="hk-card hk-section-eggshell" style={{ padding: "30px", textAlign: "center" }}>
        <span className="hk-eyebrow" style={{ color: "#2F80ED" }}>You just lived the whole buyer journey</span>
        <h2 style={{ color: "#102A43", fontSize: "27px", margin: "12px 0" }}>
          Two weeks of perfect follow-up. Sarah never sent a single message.
        </h2>
        <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.7, marginLeft: "auto", marginRight: "auto", maxWidth: "600px" }}>
          In three minutes you felt two weeks of a SunScale buyer&apos;s life: instant welcome, helpful
          care tips, a deposit, a weather-checked shipment, an arrival check, a review, and a referral
          ask — all automatic, all naturally spaced. The real emails{hasPhone ? " and texts" : ""} are
          sitting in your inbox{hasPhone ? " and on your phone" : ""} right now. Keep them — that&apos;s
          your sample of what <strong>your buyers</strong> would feel.
        </p>
      </div>

      <div className="hk-card" style={{ marginTop: "20px", padding: "22px" }}>
        <div style={{ marginBottom: "10px", textAlign: "center" }}>
          <h3 style={{ color: "#102A43", fontSize: "22px", marginBottom: "6px" }}>Want this running for your business?</h3>
          <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6 }}>
            Book a free 15-minute call — we&apos;ll map HatchKit to your species, your shows, and how you
            actually sell. No cost, no obligation, no pressure.
          </p>
        </div>
        <BookingCalendar />
        <p style={{ color: "#8795A1", fontSize: "12px", lineHeight: 1.6, margin: "14px 0 0", textAlign: "center" }}>
          Not ready to book? No problem — we&apos;ll follow up by email. (And yes, that follow-up is
          HatchKit working for us, too. 😉)
        </p>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label style={{ color: "#102A43", display: "block", fontFamily: "var(--font-subheading)", fontSize: "14px", fontWeight: 800, marginBottom: "7px" }}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ background: "#fff", border: "1.5px solid rgba(16,42,67,0.14)", borderRadius: "8px", color: "#1F2933", fontFamily: "var(--font-body)", fontSize: "15px", outline: "none", padding: "13px 14px", width: "100%" }}
      />
    </div>
  );
}
