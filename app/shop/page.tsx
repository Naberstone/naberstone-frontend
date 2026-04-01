import type { Metadata } from "next";
import { SectionLabel } from "@/components/shared/section-label";
import { ProductPage } from "./product-page";

export const metadata: Metadata = {
  title: "RFIS-X1 | Naberstone Safety Solutions",
  description:
    "The RFIS-X1 fire extinguisher — purpose-built for lithium battery fire events. Engineered by Naberstone for high-risk electrified environments. Currently sold out — join the waitlist.",
  openGraph: {
    title: "RFIS-X1 | Naberstone Safety Solutions",
    description:
      "Built to stop high-risk fire events before they spread. The RFIS-X1 is currently sold out — join the waitlist for restock updates.",
    url: "https://www.naberstone.com/shop",
    siteName: "Naberstone Safety Solutions",
    type: "website",
  },
};

export default function ShopPage() {
  return <ProductPage />;
}
