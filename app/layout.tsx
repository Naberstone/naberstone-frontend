import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const jost = localFont({
  src: [
    {
      path: "../public/fonts/Jost-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Jost-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naberstone.com"),
  title: {
    default: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
    template: "%s | Naberstone Safety Solutions",
  },
  description:
    "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
  keywords: [
    "Naberstone",
    "RFIS",
    "Reactive Fire Interruption Systems",
    "fire safety",
    "lithium-ion fire protection",
    "thermal propagation",
    "battery fire safety",
    "data center fire protection",
    "energy storage fire safety",
    "EV fire protection",
    "fire interruption",
    "active fire safety",
  ],
  authors: [{ name: "Naberstone Safety Solutions" }],
  creator: "Naberstone Safety Solutions",
  openGraph: {
    title: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
    description:
      "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
    url: "https://www.naberstone.com",
    siteName: "Naberstone Safety Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
    description:
      "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
  },
  alternates: {
    canonical: "https://www.naberstone.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${jost.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Naberstone Safety Solutions",
              url: "https://www.naberstone.com",
              logo: "https://www.naberstone.com/images/naberstone-tm-logo-white.png",
              description:
                "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@naberstone.com",
                contactType: "sales",
              },
              sameAs: [],
            }),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
