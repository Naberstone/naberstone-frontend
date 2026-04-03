import type { Metadata } from "next";
import { ProductPage } from "./product-page";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "RFIS-X1 Lithium Battery Fire Extinguisher",
  description:
    "The only fire extinguisher that stops lithium battery fires and all other fire classes. Purpose-built by Naberstone for homes, EVs, e-bikes, and workplaces.",
  image: "https://www.naberstone.com/images/shop/rfis-x1-front-box-1x1.png",
  brand: {
    "@type": "Brand",
    name: "Naberstone",
  },
  sku: "RFIS-X1",
  url: "https://www.naberstone.com/shop",
  offers: {
    "@type": "Offer",
    url: "https://www.naberstone.com/shop",
    priceCurrency: "USD",
    availability: "https://schema.org/SoldOut",
    seller: {
      "@type": "Organization",
      name: "Naberstone Safety Solutions",
    },
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Fire Classes",
      value: "All Classes (A, B, C, D, K + Lithium Battery)",
    },
    {
      "@type": "PropertyValue",
      name: "Waitlist",
      value: "https://www.naberstone.com/shop",
    },
  ],
};

export const metadata: Metadata = {
  title: "Lithium Battery Fire Extinguisher | RFIS-X1",
  description:
    "The only fire extinguisher that kills lithium battery fires and every other fire class. Sold out fast. Join the waitlist before it is gone again.",
  keywords: [
    "lithium battery fire extinguisher",
    "all class fire extinguisher",
    "lithium fire safety",
    "battery fire protection",
    "RFIS-X1",
    "lithium ion fire extinguisher",
    "EV fire extinguisher",
    "e-bike fire extinguisher",
    "Naberstone",
    "lithium battery fire suppression",
    "best fire extinguisher for lithium batteries",
    "fire extinguisher for every fire class",
  ],
  alternates: {
    canonical: "https://www.naberstone.com/shop",
  },
  openGraph: {
    title: "The Only Extinguisher That Stops Lithium Battery Fires",
    description:
      "It handles lithium battery fires AND every other fire class. Sold out fast. Join the waitlist now.",
    url: "https://www.naberstone.com/shop",
    siteName: "Naberstone Safety Solutions",
    type: "website",
    images: [
      {
        url: "https://www.naberstone.com/images/shop/rfis-x1-front-box-1x1.png",
        width: 1200,
        height: 1200,
        alt: "RFIS-X1 Lithium Battery Fire Extinguisher by Naberstone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Only Extinguisher That Stops Lithium Battery Fires",
    description:
      "Kills lithium battery fires and every other fire class. Sold out — join the waitlist before it is gone again.",
    images: [
      "https://www.naberstone.com/images/shop/rfis-x1-front-box-1x1.png",
    ],
  },
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage />
    </>
  );
}
