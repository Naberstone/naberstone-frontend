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
  title: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
  description:
    "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
  openGraph: {
    title: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
    description:
      "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
    siteName: "Naberstone Safety Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naberstone Safety Solutions | Reactive Fire Interruption Systems",
    description:
      "Naberstone builds Reactive Fire Interruption Systems (RFIS) — the interruption layer designed to stop thermal propagation before it becomes catastrophic across critical infrastructure.",
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

        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
