import type { Metadata } from "next";
import ShowPage from "@/components/show/ShowPage";

export const metadata: Metadata = {
  title: "Reptiscale — The All-In-One Platform for Reptile Breeders",
  description:
    "Stop losing show leads. Reptiscale captures every interested buyer, follows up automatically, handles shipping, and runs your social media. Built by breeders, for breeders.",
  openGraph: {
    title: "Reptiscale — The All-In-One Platform for Reptile Breeders",
    description:
      "The all-in-one tool for reptile vendors. Capture leads, automate follow-up, smart shipping, unified inbox. Built by breeders, for breeders.",
    url: "https://Reptiscaleai.com/show/",
    siteName: "Reptiscale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reptiscale — Built for Reptile Vendors",
    description:
      "Stop losing leads after every show. Reptiscale captures buyers, follows up automatically, and handles shipping — so you can focus on your animals.",
  },
};

export default function Page() {
  return <ShowPage />;
}
