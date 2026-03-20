import type { Metadata } from "next";
import ShowPage from "@/components/show/ShowPage";

export const metadata: Metadata = {
  title: "HatchKit — The All-In-One Platform for Reptile Breeders",
  description:
    "Stop losing show leads. HatchKit captures every interested buyer, follows up automatically, handles shipping, and runs your social media. Built by breeders, for breeders.",
  openGraph: {
    title: "HatchKit — The All-In-One Platform for Reptile Breeders",
    description:
      "The all-in-one tool for reptile vendors. Capture leads, automate follow-up, smart shipping, unified inbox. Built by breeders, for breeders.",
    url: "https://hatchkitai.com/show/",
    siteName: "HatchKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HatchKit — Built for Reptile Vendors",
    description:
      "Stop losing leads after every show. HatchKit captures buyers, follows up automatically, and handles shipping — so you can focus on your animals.",
  },
};

export default function Page() {
  return <ShowPage />;
}
