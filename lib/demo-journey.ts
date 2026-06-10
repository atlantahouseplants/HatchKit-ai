// Self-guided demo journey.
//
// These helpers POST to the SAME production webhooks the existing GoHighLevel funnel
// uses, so every existing SunScale automation fires unchanged. We only add the prospect's
// own info; all other values match docs/demo-showroom/accelerated-workflow-recipes.md.

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

// Captures the prospect as a HatchKit sales lead (separate account) + notifies Brianna.
export const postHatchkitLead = (v: Visitor, notes?: string) =>
  post("/webhooks/hatchkit/demo-lead", {
    name: v.name,
    email: v.email,
    phone: v.phone || "",
    notes: notes || "Completed the self-guided demo on hatchkitai.com",
  });

export type Channel = "email" | "text" | "system";

export type Stage = {
  title: string;
  channel: Channel;
  realTiming: string; // what the real-world delay would be
  detail: string; // what the buyer experiences
  breeder: string; // what the breeder sees inside HighLevel
};

// Group 1 — after the prospect requests the starter guide
export const STARTER_STAGES: Stage[] = [
  {
    title: "Lead captured instantly",
    channel: "system",
    realTiming: "the moment they raise a hand",
    detail: "Your new buyer is saved with their name, email, and what they were interested in.",
    breeder: "New contact appears in HighLevel, tagged “new lead · crested gecko.”",
  },
  {
    title: "Welcome + starter guide email",
    channel: "email",
    realTiming: "instant",
    detail: "They get the guide they asked for right away — no waiting on you.",
    breeder: "Email logged on the contact timeline automatically.",
  },
  {
    title: "Care-basics follow-up",
    channel: "email",
    realTiming: "normally Day 1",
    detail: "A helpful care email keeps you top of mind without you lifting a finger.",
    breeder: "Contact moves to the “Nurture” stage.",
  },
  {
    title: "Available-animals nudge",
    channel: "text",
    realTiming: "normally Day 2",
    detail: "They get pointed to animals that fit — like Mango.",
    breeder: "Smart list “Hot Animal Buyers” starts filling up.",
  },
];

// Group 2 — after the prospect shows interest in Mango
export const INTEREST_STAGES: Stage[] = [
  {
    title: "Tagged a hot lead",
    channel: "system",
    realTiming: "instant",
    detail: "The system knows they want Mango specifically.",
    breeder: "Contact tagged “hot lead,” Animal Interest = Mango.",
  },
  {
    title: "Deal created in your pipeline",
    channel: "system",
    realTiming: "instant",
    detail: "A real sales opportunity is opened so nothing falls through the cracks.",
    breeder: "Opportunity appears in the Lead Pipeline at “Interested.”",
  },
  {
    title: "Reservation offer sent",
    channel: "text",
    realTiming: "normally within the hour",
    detail: "They’re invited to hold Mango with a simple $75 deposit.",
    breeder: "Next Best Action: invite the $75 reservation deposit.",
  },
  {
    title: "Reminder if they go quiet",
    channel: "text",
    realTiming: "normally next day",
    detail: "If no deposit yet, a friendly nudge brings them back — automatically.",
    breeder: "Reservation Abandonment workflow + a follow-up task for you.",
  },
];

// Group 3 — cascades automatically after the deposit
export const CASCADE_STAGES: Stage[] = [
  {
    title: "Deposit recorded — Mango held",
    channel: "system",
    realTiming: "instant",
    detail: "The sale is logged and the animal is marked as held.",
    breeder: "Sales pipeline → “Payment Received.” Customer tag added.",
  },
  {
    title: "Safe-shipping review starts",
    channel: "system",
    realTiming: "normally Day 1",
    detail: "Before anything ships, HatchKit checks the route and weather.",
    breeder: "Shipping pipeline → “Pending Review,” weather checked for you.",
  },
  {
    title: "Weather-checked shipping decision",
    channel: "text",
    realTiming: "before every live shipment",
    detail: "Buyer is told it ships only on a safe weather window — no guessing.",
    breeder: "No label is created until you approve. This is the differentiator.",
  },
  {
    title: "Shipped + tracking",
    channel: "text",
    realTiming: "normally Day 3–5",
    detail: "They get a heads-up that Mango is on the way.",
    breeder: "Shipping pipeline → “In Transit.”",
  },
  {
    title: "Delivered + live-arrival check",
    channel: "text",
    realTiming: "delivery day",
    detail: "A check-in confirms a safe, live arrival.",
    breeder: "Shipping pipeline → “Delivered → LAG Confirmed.”",
  },
  {
    title: "Care onboarding (Day 0 → 7)",
    channel: "email",
    realTiming: "first week after arrival",
    detail: "New-keeper care tips keep the buyer happy and confident.",
    breeder: "Care onboarding sequence runs on autopilot.",
  },
  {
    title: "Review + referral request",
    channel: "email",
    realTiming: "normally Day 10",
    detail: "Happy buyers are asked for a review and to refer a friend.",
    breeder: "Contact moves to the “Advocacy” stage.",
  },
  {
    title: "VIP repeat-buyer invite",
    channel: "text",
    realTiming: "ongoing",
    detail: "They’re invited to get first look at future geckos — turning one sale into many.",
    breeder: "Added to the VIP / availability-alerts list.",
  },
];
