import type { Metadata } from "next";
import ShowPage from "@/components/show/ShowPage";

export const metadata: Metadata = {
  title: "Nashville Reptile Show — Join the HatchKit Waitlist",
  description:
    "HatchKit automatically follows up with every person who scans your QR at the table. Stop losing show leads. Sign up for free at the Nashville show.",
  openGraph: {
    title: "Nashville Reptile Show — Join the HatchKit Waitlist",
    description:
      "The all-in-one tool for reptile vendors. Capture leads, automate follow-up, smart shipping, unified inbox. Built by breeders, for breeders.",
    url: "https://hatchkit-ai.vercel.app/show/",
    siteName: "HatchKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville Reptile Show — HatchKit Waitlist",
    description:
      "Stop leaving shows with phone numbers you never text. HatchKit captures and follows up with every lead automatically.",
  },
};

export default function Page() {
  return <ShowPage />;
}
