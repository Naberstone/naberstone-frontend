import type { Metadata } from "next";
import { ShoppingCart, Phone, Mail } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { PreorderButton } from "./preorder-button";
import { EnterpriseForm } from "./enterprise-form";

export const metadata: Metadata = {
  title: "Shop | Naberstone Safety Solutions",
  description:
    "Preorder Naberstone RFIS fire extinguishers — purpose-built for lithium battery fire events. Available in 2L, 6L, and 9L.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  size: string;
  subtitle: string;
  description: string;
  price: string;
  priceNote: string;
  badge?: string;
  specs: string[];
  idealFor: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "rfis-2l",
    name: "RFIS 2L",
    size: "2 Litre",
    subtitle: "Compact Lithium Fire Extinguisher",
    description:
      "Our most portable unit. Engineered for immediate response to small-scale lithium battery thermal events in personal and light commercial environments.",
    price: "$149",
    priceNote: "Preorder — ships when production completes",
    badge: "Most Popular",
    specs: [
      "2-litre agent capacity",
      "Lithium-chemistry optimized agent",
      "Compact, lightweight form factor",
      "Wall-mount bracket included",
      "Response guidance documentation",
    ],
    idealFor: [
      "EV owners & home charging",
      "Small battery rooms",
      "Office & retail environments",
      "Personal workshop safety",
    ],
  },
  {
    id: "rfis-6l",
    name: "RFIS 6L",
    size: "6 Litre",
    subtitle: "Standard Lithium Fire Extinguisher",
    description:
      "Our standard-issue unit for commercial and institutional environments. Higher agent capacity for sustained response across larger battery installations.",
    price: "$299",
    priceNote: "Preorder — ships when production completes",
    specs: [
      "6-litre agent capacity",
      "Extended discharge time",
      "Lithium & conventional fire rated",
      "Heavy-duty wall mount included",
      "Facility compliance documentation",
    ],
    idealFor: [
      "Server rooms & data centers",
      "EV charging facilities",
      "Commercial battery storage",
      "Warehouse & logistics",
    ],
  },
  {
    id: "rfis-9l",
    name: "RFIS 9L",
    size: "9 Litre",
    subtitle: "Industrial Lithium Fire Extinguisher",
    description:
      "Maximum capacity for high-consequence environments. Built for large-scale battery installations where event scale demands sustained, high-volume agent delivery.",
    price: "$449",
    priceNote: "Preorder — ships when production completes",
    badge: "Industrial",
    specs: [
      "9-litre agent capacity",
      "Maximum discharge range & duration",
      "Industrial-grade construction",
      "Floor stand or wall mount options",
      "Full compliance documentation package",
    ],
    idealFor: [
      "BESS containers",
      "Data center battery rooms",
      "Industrial fleet depots",
      "Critical infrastructure facilities",
    ],
  },
];

const faqs: FAQ[] = [
  {
    question: "How are these different from standard fire extinguishers?",
    answer:
      "Standard ABC or CO2 extinguishers are not effective against lithium battery thermal events because lithium fires are self-oxidizing — they generate their own oxygen. RFIS extinguishers use a chemistry-layer agent specifically formulated to interrupt lithium thermal runaway propagation.",
  },
  {
    question: "When will preorders ship?",
    answer:
      "Preorders are charged at time of purchase to reserve your unit. We will contact you with an estimated delivery timeline once production milestones are confirmed. You will receive shipping updates via email.",
  },
  {
    question: "Do these require special training to use?",
    answer:
      "RFIS extinguishers operate with standard pull-pin, aim, squeeze, sweep technique. However, lithium battery fire response differs from conventional fire response. We include response guidance with every unit and offer facility training packages for enterprise deployments.",
  },
  {
    question: "What is your refund policy for preorders?",
    answer:
      "Preorders are fully refundable until your unit enters the shipping process. Contact our team at any time to request a refund or modify your order.",
  },
  {
    question: "Do you offer volume pricing?",
    answer:
      "Yes. For orders of 10+ units, facility-wide deployments, or custom configurations, use the enterprise inquiry form below or contact our sales team directly for volume pricing.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Preorder</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Fire extinguishers built for lithium.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
            Standard extinguishers weren&apos;t designed for lithium battery
            fires. These were. Purpose-built agents, rated for the
            chemistry-layer events that conventional fire suppression
            can&apos;t stop.
          </p>
          <p className="text-sm text-primary font-medium">
            Reserve yours now — preorders are open.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors flex flex-col"
              >
                {/* Product Image Placeholder */}
                <div className="relative aspect-[4/3] bg-background overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <ShoppingCart className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {product.size}
                      </p>
                    </div>
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.15em] uppercase bg-primary text-background px-3 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
                    {product.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-3">
                    {product.price}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                      Specifications
                    </p>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            {spec}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-2">
                      Ideal For
                    </p>
                    <ul className="space-y-1.5">
                      {product.idealFor.map((use, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="h-1 w-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            {use}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preorder Action — pushed to bottom */}
                  <div className="mt-auto pt-5 border-t border-border">
                    <PreorderButton productId={product.id} />
                    <p className="text-[11px] text-muted-foreground/60 mt-2.5 text-center">
                      {product.priceNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
              What you need to know.
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-8">
                  <h3 className="text-base font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise / Custom Orders */}
      <section className="bg-card border-t border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <div>
              <SectionLabel>Enterprise & Volume Orders</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Need a larger deployment?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                For orders of 10+ units, facility-wide coverage planning, fleet
                deployments, or custom configurations — contact our team
                directly. We provide volume pricing, deployment guidance, and
                compliance documentation support.
              </p>

              {/* Direct contact options */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground">
                      Call Us
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:sales@naberstone.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      sales@naberstone.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <EnterpriseForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
