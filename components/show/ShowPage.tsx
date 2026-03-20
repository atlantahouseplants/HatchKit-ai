'use client';

import HeroSection from "./HeroSection";
import PainSection from "./PainSection";
import FlipSection from "./FlipSection";
import FeaturesList from "./FeaturesList";
import SocialProof from "./SocialProof";
import WaitlistForm from "./WaitlistForm";
import ShowFooter from "./ShowFooter";

export default function ShowPage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <FlipSection />
      <FeaturesList />
      <SocialProof />
      <WaitlistForm />
      <ShowFooter />

      <style>{`
        /* Responsive overrides for show page grids */
        @media (max-width: 768px) {
          .show-pain-grid,
          .show-flip-grid,
          .show-proof-grid,
          .show-features-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Focus styles for form inputs */
        #waitlist input:focus,
        #waitlist select:focus {
          border-color: #1B5E20 !important;
          box-shadow: 0 0 0 3px rgba(27,94,32,0.1);
        }
      `}</style>
    </>
  );
}
