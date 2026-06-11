// The guided-demo script: everything the coach card says before and after each
// buyer action. Pure copy + types — no logic, no webhooks. Edit freely.

export type StepId = "guide" | "mango" | "deposit" | "review";

export type StepBrief = {
  stepLabel: string; // "Step 1 of 4"
  scenario: string; // the story beat that sets up the action
  whatToDo: string; // the single thing to click and why it's realistic
  whatWillHappen: string[]; // bullets: exactly what to expect, watch-for-it framing
  phoneReady?: string; // extra callout shown ONLY when the visitor gave a mobile
  demoSafe?: string; // reassurance line (e.g. deposit = no real charge)
  cta: string;
  busyCta: string; // button label while events are revealing
};

export type StepRecap = {
  did: string[]; // "What HatchKit just did — on its own" checkmarks
  whyTitle: string;
  why: string; // the benefit, with a plain-language stat
  checkNow?: string; // "go check your inbox/phone" beat (always shown)
  checkNowPhone?: string; // appended when the visitor gave a mobile
  continueCta: string;
};

export type StepScript = { brief: StepBrief; recap: StepRecap };

// Shown on every brief card — the anti-spam / accelerated-timing promise.
export const SPED_UP_NOTE =
  "Sped up for the demo: you'll see two weeks of follow-up in seconds. The timeline below shows when your buyer really gets each message — naturally spaced, never a blast. You pick the timing for your business: instant, an hour later, next morning.";

export const STEP_SCRIPT: Record<StepId, StepScript> = {
  guide: {
    brief: {
      stepLabel: "Step 1 of 4 · Become the buyer",
      scenario:
        "You spotted SunScale Geckos on Instagram and tapped through to their site. You're curious about crested geckos but brand new — so you do what every first-time buyer does: grab the free Starter Guide.",
      whatToDo: "Click the button below — that's the only thing a real buyer does here.",
      whatWillHappen: [
        "The instant you click, HatchKit saves you as a new lead — name, email, and exactly what you're interested in. No notebook, no sticky note.",
        "A welcome email with the Starter Guide goes to your REAL inbox. Give it a minute, then go look.",
        "Two more touches get queued on their own: tomorrow's care-basics email and a friendly day-2 text about a gecko that fits a beginner.",
      ],
      phoneReady:
        "📱 Have your phone next to you — you gave us your mobile, so a real text from the demo breeder is about to land on it.",
      cta: "Get the Free Starter Guide →",
      busyCta: "Watch both screens…",
    },
    recap: {
      did: [
        "Saved you as a new lead and tagged you 'Crested Gecko' — Sarah's buyer board updated by itself",
        "Sent the welcome email with the guide, instantly, in Sarah's voice",
        "Queued tomorrow's care email and a day-2 nudge toward Mango — zero effort from Sarah",
      ],
      whyTitle: "Why the instant reply wins the sale",
      why:
        "Buyers message 3–4 breeders at once, and the first one to answer usually gets the sale. Lead-response research found replying within 5 minutes can make you ~21× more likely to win the conversation than waiting half an hour. HatchKit replies in seconds — while you're at a show, feeding animals, or asleep.",
      checkNow:
        "Go check your real inbox right now — the Starter Guide email is in there. (Don't see it? Peek in spam or Promotions, then come back.)",
      checkNowPhone: "Your phone should have buzzed too — that text came from the same click.",
      continueCta: "Continue the buyer's journey →",
    },
  },

  mango: {
    brief: {
      stepLabel: "Step 2 of 4 · Fall for a gecko",
      scenario:
        "Two days later (in real time), that friendly text introduces you to Mango — a beginner-friendly harlequin dalmatian crestie, $225. You open his page. You're smitten.",
      whatToDo: "Tell SunScale you're interested in Mango — one click, like replying to that text.",
      whatWillHappen: [
        "HatchKit instantly moves you to 'Interested' on Sarah's buyer board and pins Mango ($225) to your record — watch the dashboard on the right.",
        "You get a text with how to hold him with a deposit.",
        "If you go quiet, ONE polite reminder follows the next day — then it stops. No pestering, ever.",
      ],
      phoneReady: "📱 Keep your phone close — the deposit text is real.",
      cta: "I'm Interested in Mango →",
      busyCta: "Watch both screens…",
    },
    recap: {
      did: [
        "Moved you to 'Interested' — Sarah sees exactly who's warm, on which animal, at what price",
        "Pinned Mango and the $225 to your record automatically",
        "Sent the deposit text and scheduled one polite follow-up in case life gets busy",
      ],
      whyTitle: "Why follow-up is where the money hides",
      why:
        "Most breeder sales don't die from a 'no' — they die from silence. Sales research says it takes 5+ touches to close, and most sellers stop after 1 or 2 because they're busy. HatchKit never forgets a follow-up, so the buyers you'd normally lose simply come back.",
      checkNowPhone: "That Mango text should be on your phone about now — same message a real buyer gets.",
      continueCta: "Continue the buyer's journey →",
    },
  },

  deposit: {
    brief: {
      stepLabel: "Step 3 of 4 · Make it official",
      scenario: "You're sold. You want Mango held before someone else grabs him.",
      demoSafe:
        "Demo only — no real charge, no card, nothing to pay. One click simulates a buyer paying SunScale's real $75 hold deposit.",
      whatToDo:
        "Place the deposit, then watch BOTH screens — this single click runs the next nine days of the sale on its own.",
      whatWillHappen: [
        "Instant confirmation: the deposit is logged, Mango is marked 'on hold', and the buyer gets a celebration text.",
        "Before anything ships, HatchKit checks the weather along the route — no shipping label exists until Sarah approves. Live animals deserve that.",
        "Then the rest of the journey runs itself: ship-day tracking, a 'did Mango arrive safe?' check, first-week care tips, a review ask, and a VIP invite.",
      ],
      phoneReady: "📱 Several real texts will land over the next minute — that's 9 days of buyer updates, compressed.",
      cta: "Place the $75 Deposit (Demo) →",
      busyCta: "Running 9 days of follow-up…",
    },
    recap: {
      did: [
        "Confirmed the deposit and marked Mango 'on hold' everywhere at once",
        "Ran the safe-shipping review — weather checked, and Sarah approves before any label is created",
        "Texted tracking on ship day, then checked the gecko arrived alive and settled",
        "Followed up with care tips, a review request, and a VIP-list invite across the next week",
      ],
      whyTitle: "Why this is the part breeders feel the most",
      why:
        "That was 9 days of buyer communication — the part most breeders do from memory at 11pm, or never get to. Every automatic update kills a 'just checking in…' message you'd otherwise have to answer, and buyers who feel looked after come back, refer friends, and pay deposit-fast. Your hours go to the animals; the typing does itself.",
      checkNow: "More real messages are arriving in your inbox as you read this — that's the actual cadence a buyer feels.",
      continueCta: "One last step →",
    },
  },

  review: {
    brief: {
      stepLabel: "Step 4 of 4 · The part everyone skips",
      scenario:
        "Day 12: Mango is thriving on his new perch. SunScale's email asked how he's settling in — and for a quick review.",
      whatToDo: "Leave SunScale a glowing review, like the happy buyer you are.",
      whatWillHappen: [
        "The moment your review lands, HatchKit tags you as a happy buyer — proof Sarah can use.",
        "Then it politely asks the question that grows breeders fastest: 'Know anyone else looking?' — with the VIP list attached.",
        "Most breeders mean to ask for reviews and referrals. Almost none do. HatchKit asks every time, for every happy buyer.",
      ],
      phoneReady: "📱 This one's a real text — watch your phone right after you click.",
      cta: "Leave SunScale a 5-Star Review →",
      busyCta: "Watch both screens…",
    },
    recap: {
      did: [
        "Logged the review and tagged you as a happy buyer",
        "Sent the referral + VIP-list invite — the ask breeders always mean to make and rarely do",
        "Set Sarah's next move for her: referral, photo permission, VIP opt-in",
      ],
      whyTitle: "Why one happy buyer becomes your next three",
      why:
        "About 92% of people trust a recommendation from someone they know over any ad — referred buyers show up pre-sold. Repeat and referred customers are the cheapest sales you'll ever make, and HatchKit quietly farms them from every single happy buyer. One sale becomes the next one, on its own.",
      checkNowPhone: "The referral text on your phone is the real automation — word for word what your buyers would get.",
      continueCta: "See what this means for your business →",
    },
  },
};

// Journey rail labels (the prospect's map of where they are).
export const RAIL_STEPS = [
  { id: "intro", label: "Meet SunScale" },
  { id: "guide", label: "Free guide" },
  { id: "mango", label: "Meet Mango" },
  { id: "deposit", label: "Hold him" },
  { id: "review", label: "Review & refer" },
  { id: "done", label: "Your turn" },
] as const;
