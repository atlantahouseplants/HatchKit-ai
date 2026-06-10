import Link from "next/link";

const setupItems = [
  "Lead forms and show QR capture",
  "Buyer records, tags, and follow-up stages",
  "Simple website or inquiry flow that fits how you sell",
  "Text and email follow-up for people who asked about animals",
  "Shipping review steps, buyer updates, and hold decisions",
  "Starter social posts, prompts, and saved replies",
  "Basic reporting so you can see what is working",
];

type SetupChecklistProps = {
  compact?: boolean;
  showCta?: boolean;
};

export default function SetupChecklist({ compact = false, showCta = true }: SetupChecklistProps) {
  return (
    <div className="hk-setup-checklist">
      <div>
        <span className="hk-kicker">What we set up for you</span>
        <h2 className="hk-section-heading">
          You do not get handed an empty login and a homework assignment.
        </h2>
        <p className="hk-section-copy">
          HatchKit is guided setup. We help turn the way you already sell, ship, and
          follow up into a working system your business can actually use.
        </p>
        {showCta && (
          <Link href="/demo/" className="hk-button hk-button-primary">
            Get a Free Demo
          </Link>
        )}
      </div>

      <div className={compact ? "hk-setup-list hk-setup-list-compact" : "hk-setup-list"}>
        {setupItems.map((item) => (
          <div className="hk-setup-item" key={item}>
            <span aria-hidden="true">✓</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
