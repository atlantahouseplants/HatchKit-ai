'use client';

import { useState, useEffect } from "react";
import BuyerPhone from "@/components/experience/BuyerPhone";
import HatchKitDashboard from "@/components/experience/HatchKitDashboard";
import ScheduleRibbon from "@/components/experience/ScheduleRibbon";
import BookingCalendar from "@/components/BookingCalendar";
import {
  type JourneyEvent,
  type Visitor,
  groupEvents,
  postLeadMagnet,
  postOfferClicked,
  postOrderSubmitted,
  postHatchkitLead,
} from "@/lib/demo-journey";

type Step = "intro" | "guide" | "mango" | "deposit" | "done";
const REVEAL_MS = 650;

export default function ExperiencePage() {
  const [step, setStep] = useState<Step>("intro");
  const [visitor, setVisitor] = useState<Visitor>({ name: "", email: "", phone: "" });
  const [revealed, setRevealed] = useState<JourneyEvent[]>([]);
  const [busy, setBusy] = useState(false);

  function revealGroup(group: 1 | 2 | 3, next: Step, fire: () => void) {
    setBusy(true);
    fire(); // POST the real webhook (fire-and-forget; never blocks the animation)
    const evs = groupEvents(group);
    evs.forEach((ev, idx) => {
      setTimeout(() => {
        setRevealed((r) => [...r, ev]);
        if (idx === evs.length - 1) {
          setBusy(false);
          setStep(next);
        }
      }, (idx + 1) * REVEAL_MS);
    });
  }

  const phoneMessages = revealed
    .filter((e) => e.channel !== "system")
    .map((e) => ({ channel: e.channel as "email" | "text", buyer: e.buyer || "", realDay: e.realDay }));
  const latest = revealed[revealed.length - 1];
  const activeStage = latest?.stage || "New lead";
  const note = latest?.note || "";
  const progress = step === "intro" ? 0 : step === "guide" ? 1 : step === "mango" ? 2 : step === "deposit" ? 3 : 4;

  return (
    <div className="hk-page">
      {/* ── Hero ── */}
      <section className="hk-hero scale-pattern" style={{ minHeight: "auto", paddingBottom: "40px" }}>
        <div className="hk-shell" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span className="hk-eyebrow">Try the live demo · about 2 minutes · no signup</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.3rem, 4.5vw, 3.9rem)", marginTop: "18px" }}>
            See exactly what your buyers feel.
          </h1>
          <p className="hk-hero-copy" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Play one of your buyers. You&apos;ll watch the emails and texts they&apos;d get on one
            screen, and the deal updating on your side on the other. You&apos;re seeing two weeks of
            follow-up in two minutes — in real life it&apos;s spread out naturally, and we show you
            the real day on every message.
          </p>
        </div>
      </section>

      <section className="hk-section" style={{ paddingTop: "32px" }}>
        <div className="hk-shell" style={{ maxWidth: step === "intro" ? "640px" : "1000px" }}>
          {/* progress */}
          {step !== "intro" && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "22px" }}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} style={{ background: n <= progress ? "#2F80ED" : "rgba(16,42,67,0.1)", borderRadius: "999px", flex: 1, height: "6px", transition: "background 0.3s" }} />
              ))}
            </div>
          )}

          {/* ── Intro ── */}
          {step === "intro" ? (
            <div className="hk-card" style={{ padding: "30px" }}>
              <span className="hk-kicker">Set the scene</span>
              <h2 style={{ color: "#102A43", fontSize: "26px", margin: "10px 0 12px" }}>
                You just found SunScale Geckos at a reptile show.
              </h2>
              <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.7 }}>
                SunScale is a demo crested-gecko breeder running on HatchKit. Enter your details and
                we&apos;ll treat you like one of their buyers — including the{" "}
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
                  No charge, no obligation. Stop anytime.
                </p>
              </form>
            </div>
          ) : (
            <>
              {/* anti-spam banner */}
              <div
                style={{
                  alignItems: "center",
                  background: "rgba(0,184,169,0.08)",
                  border: "1px solid rgba(0,184,169,0.25)",
                  borderRadius: "12px",
                  display: "flex",
                  gap: "12px",
                  marginBottom: "22px",
                  padding: "13px 16px",
                }}
              >
                <span style={{ fontSize: "20px" }}>⏱️</span>
                <p style={{ color: "#102A43", fontSize: "13.5px", lineHeight: 1.55, margin: 0 }}>
                  <strong>You&apos;re seeing this sped up.</strong> Watch the schedule at the bottom — your
                  buyer gets each message <strong>naturally spaced over ~2 weeks</strong>, never all at once.
                </p>
              </div>

              {/* current action */}
              {step === "guide" && (
                <ActionCard step="Step 1 of 3" title="Ask for the free Crested Gecko Starter Guide" body="Exactly like a real buyer would. Then watch both screens light up." cta="Get the Free Starter Guide" busy={busy} onClick={() => revealGroup(1, "mango", () => postLeadMagnet(visitor))} />
              )}
              {step === "mango" && (
                <ActionCard step="Step 2 of 3" title="Open Mango’s page and say you’re interested" body="Mango is a beginner-friendly gecko, $225. Show some interest." cta="I’m Interested in Mango" busy={busy} onClick={() => revealGroup(2, "deposit", () => postOfferClicked(visitor))} />
              )}
              {step === "deposit" && (
                <ActionCard step="Step 3 of 3" title="Hold Mango with a $75 deposit" body="Demo only — no real charge. This kicks off the whole purchase, safe-shipping, and repeat-buyer journey." cta="Place the $75 Deposit (Demo)" busy={busy} onClick={() => revealGroup(3, "done", () => postOrderSubmitted(visitor))} />
              )}

              {/* split screen */}
              <div className="hk-exp-split" style={{ marginTop: "24px" }}>
                <BuyerPhone name={visitor.name} messages={phoneMessages} />
                <HatchKitDashboard name={visitor.name} activeStage={activeStage} note={note} />
              </div>

              {/* schedule ribbon */}
              {phoneMessages.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <ScheduleRibbon messages={phoneMessages} />
                </div>
              )}

              {step === "done" && <Finish visitor={visitor} />}
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
      `}</style>
    </div>
  );
}

function ActionCard({ step, title, body, cta, busy, onClick }: { step: string; title: string; body: string; cta: string; busy: boolean; onClick: () => void }) {
  return (
    <div className="hk-card" style={{ borderTop: "4px solid #00B8A9", padding: "24px" }}>
      <span className="hk-eyebrow" style={{ color: "#00B8A9" }}>{step} · your move</span>
      <h2 style={{ color: "#102A43", fontSize: "22px", margin: "10px 0 8px" }}>{title}</h2>
      <p style={{ color: "#52606D", fontSize: "15px", lineHeight: 1.6, marginBottom: "18px" }}>{body}</p>
      <button className="hk-button hk-button-primary" disabled={busy} onClick={onClick} style={{ border: "none", cursor: busy ? "wait" : "pointer", opacity: busy ? 0.7 : 1 }} type="button">
        {busy ? "Watch it run…" : cta}
      </button>
    </div>
  );
}

function Finish({ visitor }: { visitor: Visitor }) {
  useEffect(() => {
    postHatchkitLead(visitor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: "28px" }}>
      <div className="hk-card hk-section-eggshell" style={{ padding: "30px", textAlign: "center" }}>
        <span className="hk-eyebrow" style={{ color: "#2F80ED" }}>That was your buyer&apos;s first two weeks</span>
        <h2 style={{ color: "#102A43", fontSize: "27px", margin: "12px 0" }}>
          Every email, text, and update ran on its own.
        </h2>
        <p style={{ color: "#52606D", fontSize: "16px", lineHeight: 1.7, marginLeft: "auto", marginRight: "auto", maxWidth: "580px" }}>
          Spaced out naturally so it feels personal — never spammy. The real emails (and texts, if you
          added your mobile) are landing now. Imagine it running for your animals, your buyers, and
          your shows. That&apos;s HatchKit.
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
