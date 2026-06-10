'use client';

import { useState, useEffect } from "react";
import JourneyTimeline from "@/components/JourneyTimeline";
import BookingCalendar from "@/components/BookingCalendar";
import {
  type Stage,
  type Visitor,
  STARTER_STAGES,
  INTEREST_STAGES,
  CASCADE_STAGES,
  postLeadMagnet,
  postOfferClicked,
  postOrderSubmitted,
  postHatchkitLead,
} from "@/lib/demo-journey";

type Step = "intro" | "guide" | "mango" | "deposit" | "done";

const REVEAL_MS = 750;

export default function ExperiencePage() {
  const [step, setStep] = useState<Step>("intro");
  const [visitor, setVisitor] = useState<Visitor>({ name: "", email: "", phone: "" });
  const [revealed, setRevealed] = useState<Stage[]>([]);
  const [busy, setBusy] = useState(false);

  function revealGroup(group: Stage[], next: Step, fire: () => void) {
    setBusy(true);
    fire(); // POST the real webhook (fire-and-forget; never blocks the animation)
    group.forEach((stage, idx) => {
      setTimeout(() => {
        setRevealed((r) => [...r, stage]);
        if (idx === group.length - 1) {
          setBusy(false);
          setStep(next);
        }
      }, (idx + 1) * REVEAL_MS);
    });
  }

  const progress =
    step === "intro" ? 0 : step === "guide" ? 1 : step === "mango" ? 2 : step === "deposit" ? 3 : 4;

  return (
    <div className="hk-page">
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto", paddingBottom: "44px" }}>
        <div className="hk-shell" style={{ maxWidth: "820px", textAlign: "center" }}>
          <span className="hk-eyebrow">Try the live demo · 2 minutes · no signup</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)", marginTop: "18px" }}>
            Don&apos;t take our word for it. Feel HatchKit work on you.
          </h1>
          <p className="hk-hero-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Play the part of one of your buyers. Take three simple actions and watch the
            follow-up, shipping, and repeat-buyer automations fire in real time — the messages
            that would normally take days, landing in seconds.
          </p>
        </div>
      </section>

      <section className="hk-section" style={{ paddingTop: "36px" }}>
        <div className="hk-shell" style={{ maxWidth: "760px" }}>
          {/* progress */}
          {step !== "intro" && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  style={{
                    background: n <= progress ? "#2F80ED" : "rgba(16,42,67,0.1)",
                    borderRadius: "999px",
                    flex: 1,
                    height: "6px",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          )}

          {/* ── Intro: capture + scene ── */}
          {step === "intro" && (
            <div className="hk-card" style={{ padding: "30px" }}>
              <span className="hk-kicker">Set the scene</span>
              <h2 style={{ color: "#102A43", fontSize: "26px", margin: "10px 0 12px" }}>
                You just discovered SunScale Geckos at a reptile show.
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.7 }}>
                SunScale is a demo crested-gecko breeder running on HatchKit. Enter your details and
                we&apos;ll treat you exactly like one of their buyers — including the{" "}
                <strong>real automated emails and texts</strong> a buyer would receive. That&apos;s the
                experience your own buyers would get.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (visitor.name && visitor.email) setStep("guide");
                }}
                style={{ display: "grid", gap: "14px", marginTop: "22px" }}
              >
                <Input label="Your name" value={visitor.name} onChange={(v) => setVisitor({ ...visitor, name: v })} required />
                <Input label="Your email (where the demo emails go)" type="email" value={visitor.email} onChange={(v) => setVisitor({ ...visitor, email: v })} required />
                <Input label="Mobile (add it to feel the live texts too)" type="tel" value={visitor.phone || ""} onChange={(v) => setVisitor({ ...visitor, phone: v })} />
                <button className="hk-button hk-button-primary" type="submit" style={{ border: "none", cursor: "pointer", marginTop: "4px" }}>
                  Start the Experience →
                </button>
                <p style={{ color: "#8795A1", fontSize: "12px", lineHeight: 1.5, textAlign: "center" }}>
                  No charge, no signup, no obligation. You can stop anytime.
                </p>
              </form>
            </div>
          )}

          {/* ── Action card (current buyer move) ── */}
          {step === "guide" && (
            <ActionCard
              tag="Your move · Step 1"
              title="Grab the free Crested Gecko Starter Guide"
              body="Just like a real buyer would. Watch what happens the instant you do."
              cta="Get the Free Starter Guide"
              busy={busy}
              onClick={() => revealGroup(STARTER_STAGES, "mango", () => postLeadMagnet(visitor))}
            />
          )}
          {step === "mango" && (
            <ActionCard
              tag="Your move · Step 2"
              title="Open Mango’s page and say you’re interested"
              body="Mango is a beginner-friendly Harlequin Dalmatian, $225. Show some interest."
              cta="I’m Interested — Tell Me More"
              busy={busy}
              onClick={() => revealGroup(INTEREST_STAGES, "deposit", () => postOfferClicked(visitor))}
            />
          )}
          {step === "deposit" && (
            <ActionCard
              tag="Your move · Step 3"
              title="Hold Mango with a $75 reservation deposit"
              body="Demo only — no real charge. This kicks off the full purchase, safe-shipping, and repeat-buyer journey."
              cta="Place the $75 Deposit (Demo)"
              busy={busy}
              onClick={() => revealGroup(CASCADE_STAGES, "done", () => postOrderSubmitted(visitor))}
            />
          )}

          {/* ── Live timeline ── */}
          {revealed.length > 0 && (
            <div style={{ marginTop: "26px" }}>
              <div style={{ alignItems: "center", display: "flex", gap: "10px", marginBottom: "14px" }}>
                <span className="hk-kicker" style={{ margin: 0 }}>Happening automatically</span>
                {busy && <span style={{ color: "#2F80ED", fontSize: "13px", fontWeight: 700 }}>firing…</span>}
              </div>
              <JourneyTimeline stages={revealed} />
            </div>
          )}

          {/* ── Finish: capture + book ── */}
          {step === "done" && <Finish visitor={visitor} />}
        </div>
      </section>
    </div>
  );
}

function ActionCard({
  tag,
  title,
  body,
  cta,
  busy,
  onClick,
}: {
  tag: string;
  title: string;
  body: string;
  cta: string;
  busy: boolean;
  onClick: () => void;
}) {
  return (
    <div className="hk-card" style={{ borderTop: "4px solid #00B8A9", padding: "26px" }}>
      <span className="hk-eyebrow" style={{ color: "#00B8A9" }}>{tag}</span>
      <h2 style={{ color: "#102A43", fontSize: "23px", margin: "10px 0 8px" }}>{title}</h2>
      <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.65, marginBottom: "20px" }}>{body}</p>
      <button
        className="hk-button hk-button-primary"
        disabled={busy}
        onClick={onClick}
        style={{ border: "none", cursor: busy ? "wait" : "pointer", opacity: busy ? 0.7 : 1 }}
        type="button"
      >
        {busy ? "Watch it fire…" : cta}
      </button>
    </div>
  );
}

function Finish({ visitor }: { visitor: Visitor }) {
  // Capture the prospect as a HatchKit sales lead once, when they reach the end.
  useEffect(() => {
    postHatchkitLead(visitor);
    // fire exactly once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: "32px" }}>
      <div className="hk-card hk-section-eggshell" style={{ padding: "30px", textAlign: "center" }}>
        <span className="hk-eyebrow" style={{ color: "#2F80ED" }}>That’s the whole journey</span>
        <h2 style={{ color: "#102A43", fontSize: "28px", margin: "12px 0" }}>
          Every message and update you just saw happened on its own.
        </h2>
        <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.7, marginLeft: "auto", marginRight: "auto", maxWidth: "560px" }}>
          📬 The real emails — and texts, if you added your mobile — are landing right now,
          exactly what your buyers would feel. Now imagine it running for your animals, your
          buyers, and your shows. That&apos;s HatchKit.
        </p>
      </div>

      <div className="hk-card" style={{ marginTop: "20px", padding: "22px" }}>
        <div style={{ marginBottom: "10px", textAlign: "center" }}>
          <h3 style={{ color: "#102A43", fontSize: "22px", marginBottom: "6px" }}>Want this for your business?</h3>
          <p style={{ color: "#52606D", fontSize: "14px", lineHeight: 1.6 }}>
            Book a free 15-minute demo — we&apos;ll set it up around how you actually sell. No cost, no obligation.
          </p>
        </div>
        <BookingCalendar />
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        style={{
          color: "#102A43",
          display: "block",
          fontFamily: "var(--font-subheading)",
          fontSize: "14px",
          fontWeight: 800,
          marginBottom: "7px",
        }}
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: "#fff",
          border: "1.5px solid rgba(16,42,67,0.14)",
          borderRadius: "8px",
          color: "#1F2933",
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          outline: "none",
          padding: "13px 14px",
          width: "100%",
        }}
      />
    </div>
  );
}
