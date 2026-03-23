import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop | Naberstone Safety Solutions",
  description:
    "Shop Naberstone fire extinguishers — purpose-built for lithium battery fire events in critical infrastructure environments.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  specs: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "rfis-ext-1",
    name: "RFIS-1 Compact",
    subtitle: "Portable Lithium Fire Extinguisher",
    description:
      "Engineered for immediate response to small-scale lithium battery thermal events. Ideal for EV charging bays, server rooms, and maintenance environments.",
    price: "$249",
    image: "/products/rfis-ext-1.jpg",
    badge: "Best Seller",
    specs: [
      "2.5 lb agent capacity",
      "Lithium-chemistry optimized",
      "UL rated",
      "Wall-mount bracket included",
    ],
  },
  {
    id: "rfis-ext-5",
    name: "RFIS-5 Standard",
    subtitle: "Multi-Purpose Lithium Fire Extinguisher",
    description:
      "Our standard-issue extinguisher for battery rooms, energy storage facilities, and data center environments. Higher agent capacity for sustained response.",
    price: "$449",
    image: "/products/rfis-ext-5.jpg",
    specs: [
      "5 lb agent capacity",
      "Extended discharge time",
      "Lithium & conventional fire rated",
      "Heavy-duty wall mount included",
    ],
  },
  {
    id: "rfis-ext-10",
    name: "RFIS-10 Industrial",
    subtitle: "High-Capacity Lithium Fire Extinguisher",
    description:
      "Built for large-scale infrastructure environments — BESS containers, fleet charging depots, and industrial battery installations where event scale demands higher capacity.",
    price: "$799",
    image: "/products/rfis-ext-10.jpg",
    badge: "Industrial",
    specs: [
      "10 lb agent capacity",
      "Maximum discharge range",
      "Wheeled cart option available",
      "Facility compliance documentation",
    ],
  },
  {
    id: "rfis-ext-auto",
    name: "RFIS-Auto",
    subtitle: "Vehicle Emergency Extinguisher",
    description:
      "Compact form factor designed for in-vehicle storage. Purpose-built for EV owners, fleet operators, and first responders encountering lithium battery events on the road.",
    price: "$189",
    image: "/products/rfis-ext-auto.jpg",
    specs: [
      "1.5 lb compact form factor",
      "Vehicle mount bracket",
      "Lithium-chemistry optimized",
      "Glove-box or trunk storage",
    ],
  },
  {
    id: "rfis-kit-facility",
    name: "Facility Safety Kit",
    subtitle: "Complete Facility Response Package",
    description:
      "Everything a facility operator needs — two RFIS-5 extinguishers, signage, mounting hardware, and a facility response guide. Designed for battery rooms and charging environments.",
    price: "$999",
    image: "/products/rfis-kit-facility.jpg",
    badge: "Bundle",
    specs: [
      "2x RFIS-5 extinguishers",
      "Safety signage package",
      "Mounting hardware for 2 stations",
      "Facility response guide",
    ],
  },
  {
    id: "rfis-kit-fleet",
    name: "Fleet Response Kit",
    subtitle: "Multi-Vehicle Fleet Package",
    description:
      "Equip your entire EV fleet operation. Five RFIS-Auto units with vehicle mounts, driver training materials, and fleet compliance documentation.",
    price: "$849",
    image: "/products/rfis-kit-fleet.jpg",
    specs: [
      "5x RFIS-Auto extinguishers",
      "Vehicle mount brackets",
      "Driver training materials",
      "Fleet compliance documentation",
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
    question: "Do these require special training to use?",
    answer:
      "RFIS extinguishers operate with standard pull-pin, aim, squeeze, sweep technique. However, lithium battery fire response differs from conventional fire response. We include response guidance with every product and offer facility training packages.",
  },
  {
    question: "What certifications do these carry?",
    answer:
      "All RFIS extinguishers are independently tested and rated for lithium battery fire events. Specific certifications and test documentation are available on each product page and included with purchase.",
  },
  {
    question: "Do you offer volume pricing for facilities?",
    answer:
      "Yes. For orders of 10+ units or facility-wide deployments, contact our sales team for volume pricing, custom configuration, and deployment planning support.",
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
          <SectionLabel>Shop</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Fire extinguishers built for lithium.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Standard extinguishers weren&apos;t designed for lithium battery
            fires. These were. Purpose-built agents, rated for the
            chemistry-layer events that conventional fire suppression
            can&apos;t stop.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Product Image Placeholder */}
                <div className="relative aspect-[4/3] bg-background overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <ShoppingCart className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Product image
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
                <div className="p-6">
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
                    {product.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <ul className="space-y-1.5 mb-6">
                    {product.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{spec}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <button
                      disabled
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "opacity-60 cursor-not-allowed"
                      )}
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume / Enterprise callout */}
      <section className="bg-card border-y border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Enterprise & Volume Orders</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Equipping a facility or fleet?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                For deployments of 10+ units, facility-wide coverage planning,
                or custom configurations, our team provides volume pricing,
                deployment guidance, and compliance documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
                >
                  Contact Sales
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Explore Partnership Models
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Volume Pricing", desc: "10+ unit discounts" },
                {
                  label: "Deployment Planning",
                  desc: "Facility coverage mapping",
                },
                {
                  label: "Compliance Docs",
                  desc: "AHJ & insurance packages",
                },
                {
                  label: "Training",
                  desc: "On-site response training",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 border border-border rounded-lg"
                >
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
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

      {/* CTA */}
      <section className="bg-card border-t border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Online store launching soon.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Our full e-commerce experience is coming. In the meantime, contact
              our team directly to place orders, request quotes, or discuss
              volume pricing for your deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Contact to Order
              </Link>
              <Link
                href="/contact#integration"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
