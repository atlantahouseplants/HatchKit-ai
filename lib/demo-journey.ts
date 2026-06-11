// Self-guided demo journey.
//
// These helpers POST to the SAME production webhooks the existing demo funnel uses, so
// every existing SunScale automation fires unchanged. We only add the prospect's own info;
// all other values match docs/demo-showroom/accelerated-workflow-recipes.md.

export const WEBHOOK_BASE = "https://reptiscale-demo.vercel.app";
const SUNSCALE_LOCATION_ID = "oCn199rzTjj0rPgqXyXU"; // demo account the buyer journey runs in

export type Visitor = { name: string; email: string; phone?: string };

async function post(path: string, body: unknown): Promise<boolean> {
  try {
    const res = await fetch(`${WEBHOOK_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch {
    return false; // never let a webhook hiccup break the on-screen experience
  }
}

export const postLeadMagnet = (v: Visitor) =>
  post("/webhooks/ghl/lead-magnet", {
    locationId: SUNSCALE_LOCATION_ID,
    firstName: v.name,
    email: v.email,
    phone: v.phone || "",
    species_interest: "Crested Gecko",
    source: "website-self-demo",
    offerKey: "crested_gecko_starter_guide",
  });

export const postOfferClicked = (v: Visitor) =>
  post("/webhooks/ghl/offer-clicked", {
    locationId: SUNSCALE_LOCATION_ID,
    email: v.email,
    phone: v.phone || "",
    species_interest: "Crested Gecko",
    animalInterest: "Mango - Harlequin Dalmatian",
    offerKey: "animal_reservation",
    source: "website-self-demo",
  });

export const postOrderSubmitted = (v: Visitor) =>
  post("/webhooks/ghl/order-submitted", {
    locationId: SUNSCALE_LOCATION_ID,
    firstName: v.name,
    email: v.email,
    phone: v.phone || "",
    species_interest: "Crested Gecko",
    animalInterest: "Mango - Harlequin Dalmatian",
    productName: "Animal Reservation Deposit",
    amount: 75,
    purchaseStatus: "Deposit Paid",
    source: "website-self-demo",
  });

// The buyer leaves a review (advocacy). Fires the real referral + VIP-invite automation
// (the server texts the same referral ask a real happy buyer would get).
export const postReviewSubmitted = (v: Visitor) =>
  post("/webhooks/ghl/review-submitted", {
    locationId: SUNSCALE_LOCATION_ID,
    firstName: v.name,
    email: v.email,
    phone: v.phone || "",
    species_interest: "Crested Gecko",
    source: "website-self-demo",
  });

// Captures the prospect as a HatchKit sales lead (separate account) + notifies Brianna.
// stage:'started' = capture-only (no follow-up task yet); 'completed' = hot lead + task.
export const postHatchkitLead = (v: Visitor, notes?: string, stage?: "started" | "completed") =>
  post("/webhooks/hatchkit/demo-lead", {
    name: v.name,
    email: v.email,
    phone: v.phone || "",
    notes: notes || "Completed the self-guided demo on hatchkitai.com",
    ...(stage ? { stage } : {}),
  });

// ── Journey model ───────────────────────────────────────────────────────────
// The buyer's first two weeks. `realDay` is when the buyer ACTUALLY gets it in real life
// (the anti-spam proof: notice the natural spacing). The prospect sees it compressed.

export const BOARD_STAGES = [
  "New lead",
  "Interested",
  "Deposit paid",
  "Safe-ship review",
  "Shipped",
  "Delivered",
  "Repeat buyer",
] as const;

export type Channel = "email" | "text" | "system";

export type JourneyEvent = {
  group: 1 | 2 | 3 | 4; // which buyer action reveals it
  channel: Channel; // "system" = no buyer message, just a dashboard change
  realDay: number; // 0–14: the real-world day the buyer gets this
  buyer?: string; // the message the buyer sees (email/text)
  stage: string; // board stage active after this event (one of BOARD_STAGES)
  note: string; // plain-language "what you see in HatchKit"
};

export const EVENTS: JourneyEvent[] = [
  // Group 1 — buyer asks for the free starter guide
  { group: 1, channel: "email", realDay: 0, buyer: "Here's your free Crested Gecko Starter Guide 🦎", stage: "New lead", note: "A new buyer is saved with exactly what they asked about." },
  { group: 1, channel: "email", realDay: 1, buyer: "Day-1 care basics: enclosure, humidity, first feeding", stage: "New lead", note: "A helpful care email goes out on its own." },
  { group: 1, channel: "text", realDay: 2, buyer: "Want a beginner-friendly gecko? Meet Mango 👀", stage: "New lead", note: "A gentle nudge toward an animal that fits their budget." },

  // Group 2 — buyer shows interest in Mango
  { group: 2, channel: "text", realDay: 2, buyer: "Mango's still available — a $75 deposit can hold him.", stage: "Interested", note: "Mango becomes a deal card on your buyer board." },
  { group: 2, channel: "text", realDay: 3, buyer: "Still thinking about Mango? Happy to answer anything.", stage: "Interested", note: "If they go quiet, a friendly reminder fires + a task for you." },

  // Group 3 — buyer pays the deposit; everything else runs itself
  { group: 3, channel: "text", realDay: 3, buyer: "Got your deposit — Mango's on hold for you! 🎉", stage: "Deposit paid", note: "The sale is logged and Mango is marked held." },
  { group: 3, channel: "system", realDay: 4, stage: "Safe-ship review", note: "Before anything ships, HatchKit checks the weather and route for you." },
  { group: 3, channel: "text", realDay: 5, buyer: "Good news — the weather looks safe to ship Thursday.", stage: "Safe-ship review", note: "No shipping label is created until you approve it. (Your edge.)" },
  { group: 3, channel: "text", realDay: 7, buyer: "Mango's on the way! Here's your tracking link.", stage: "Shipped", note: "Marked shipped, tracking shared with the buyer." },
  { group: 3, channel: "text", realDay: 8, buyer: "Did Mango arrive safely? Reply YES once he's settled.", stage: "Delivered", note: "Delivery + a live-arrival check, automatically." },
  { group: 3, channel: "email", realDay: 9, buyer: "Welcome home! Mango's first-week care 🏡", stage: "Delivered", note: "New-keeper care guidance keeps the buyer happy." },
  { group: 3, channel: "email", realDay: 12, buyer: "How's Mango settling in? Mind leaving a quick review?", stage: "Delivered", note: "Happy-buyer review and referral ask." },
  { group: 3, channel: "text", realDay: 14, buyer: "Want first dibs on future geckos? Join the VIP list.", stage: "Repeat buyer", note: "One sale turns into a repeat buyer." },

  // Group 4 — buyer leaves a review; the referral engine kicks in
  { group: 4, channel: "system", realDay: 14, stage: "Repeat buyer", note: "Review saved. The buyer is tagged as a happy customer — referral + VIP invites go out on their own." },
  { group: 4, channel: "text", realDay: 14, buyer: "Thank you for the review! If you know someone researching crested geckos, I can send them the same starter guide and VIP availability list. 💚", stage: "Repeat buyer", note: "One happy sale just became your next lead source — automatically." },
];

export const groupEvents = (group: 1 | 2 | 3 | 4) => EVENTS.filter((e) => e.group === group);
