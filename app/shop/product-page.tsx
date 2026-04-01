"use client";

import { useState, useEffect } from "react";
import { SectionLabel } from "@/components/shared/section-label";
import { WaitlistModal } from "./waitlist-modal";
import {
  Shield,
  Zap,
  Target,
  Layers,
  Award,
  Factory,
  ChevronDown,
  Bell,
  Clock,
  ArrowRight,
} from "lucide-react";

// ─── Content (editable in one place) ────────────────────────────────────────

const PRODUCT = {
  name: "RFIS-X1",
  tagline: "Built to stop high-risk fire events before they spread.",
  subtitle: "Reactive Fire Interruption Extinguisher",
  heroDescription:
    "The first fire extinguisher purpose-engineered for lithium battery thermal events. Industrial-grade construction. Chemistry-layer interruption agent. Designed for the environments where legacy extinguishers fail.",
  soldOutLabel: "Sold Out",
  nextRelease: "Next Release Pending",
  waitlistCta: "Join the Waitlist",
  waitlistSubtext: "Get notified when the next release becomes available.",
};

const GALLERY_IMAGES = [
  // Replace these with actual product image paths
  { id: 1, label: "Front View", placeholder: "RFIS-X1 — Front Angle" },
  { id: 2, label: "Side Profile", placeholder: "RFIS-X1 — Side Profile" },
  { id: 3, label: "Detail Close-up", placeholder: "RFIS-X1 — Detail Shot" },
  { id: 4, label: "Installed Context", placeholder: "RFIS-X1 — In Environment" },
];

const VALUE_PROPS = [
  {
    icon: Zap,
    title: "Lithium-Optimized Agent",
    description: "Chemistry-layer formulation built to interrupt thermal runaway propagation in lithium battery events.",
  },
  {
    icon: Shield,
    title: "Industrial-Grade Build",
    description: "All-metal enclosure with premium powder-coat finish. Engineered for high-consequence environments.",
  },
  {
    icon: Target,
    title: "Rapid Deployment Design",
    description: "Optimized ergonomics and fast-access mounting for critical seconds that define outcomes.",
  },
  {
    icon: Factory,
    title: "Infrastructure-Ready",
    description: "Purpose-built for data centers, BESS facilities, EV charging infrastructure, and fleet operations.",
  },
];

const FEATURES = [
  {
    icon: Layers,
    title: "Chemistry-Layer Interruption",
    description: "Proprietary agent formulated to address lithium's self-oxidizing fire behavior — what conventional extinguishers can't stop.",
  },
  {
    icon: Shield,
    title: "Premium Enclosure",
    description: "Full-metal construction with corrosion-resistant finish. Built to perform in industrial, commercial, and critical infrastructure environments.",
  },
  {
    icon: Target,
    title: "Fast-Access Format",
    description: "Engineered mounting system with optimized pull-pin geometry for rapid deployment under pressure.",
  },
  {
    icon: Zap,
    title: "Modern Fire Architecture",
    description: "Designed for electrified environments — EV charging, battery storage, server rooms — where legacy extinguishers were never tested.",
  },
  {
    icon: Award,
    title: "Engineered by Naberstone",
    description: "Backed by our Reactive Fire Interruption Systems platform. Every component is purpose-designed, not adapted from legacy products.",
  },
  {
    icon: Factory,
    title: "Deployment-Ready",
    description: "Ships with wall-mount bracket, response guidance documentation, and compliance-ready specifications for facility integration.",
  },
];

const FAQS = [
  {
    question: "When will the RFIS-X1 be available again?",
    answer: "Our current production allocation is fully committed. Join the waitlist to be first in line when the next manufacturing run is released. Waitlist subscribers receive priority notification before general availability.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer: "You'll receive a confirmation email immediately. When new inventory becomes available, we'll notify waitlist subscribers in order of sign-up before announcing general availability. You'll have a priority window to secure your unit.",
  },
  {
    question: "Will waitlist subscribers get early access?",
    answer: "Yes. Waitlist subscribers will be notified before the general public and receive a priority purchase window when new inventory is released.",
  },
  {
    question: "Is phone number required to join the waitlist?",
    answer: "No. Only your name and email are required. Adding your phone number is optional and gives you access to priority SMS restock alerts for the fastest notification possible.",
  },
  {
    question: "Who is the RFIS-X1 designed for?",
    answer: "The RFIS-X1 is built for anyone operating in environments with lithium battery fire risk — data centers, EV charging facilities, battery energy storage systems, fleet operations, commercial buildings, and critical infrastructure. It's designed for facility managers, safety officers, fleet operators, and infrastructure teams who need fire response equipment that actually works against modern fire chemistry.",
  },
  {
    question: "How is this different from a standard fire extinguisher?",
    answer: "Standard ABC and CO2 extinguishers were not designed for lithium battery fires. Lithium fires are self-oxidizing — they generate their own oxygen, which makes conventional agents ineffective. The RFIS-X1 uses a chemistry-layer interruption agent specifically formulated to stop lithium thermal runaway propagation.",
  },
];

// ─── Component ──────────────────────────────────────────────────────────────

export function ProductPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── 1. HERO / PRODUCT INTRO ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgb(230 186 24 / 0.04) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Product Info */}
            <div className="order-2 lg:order-1">
              <SectionLabel>Limited Release</SectionLabel>

              {/* Sold out badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  {PRODUCT.soldOutLabel}
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                  {PRODUCT.nextRelease}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-foreground leading-[1.02] mb-4">
                {PRODUCT.name}
              </h1>
              <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-6">
                {PRODUCT.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {PRODUCT.heroDescription}
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px"
                >
                  <Bell className="h-4 w-4" />
                  {PRODUCT.waitlistCta}
                </button>
              </div>
              <p className="text-xs text-muted-foreground/60">
                {PRODUCT.waitlistSubtext}
              </p>
            </div>

            {/* Right — Hero Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Sold out ribbon */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-background/80 backdrop-blur-sm text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full">
                    Sold Out
                  </span>
                </div>

                {/* Product image placeholder — REPLACE with actual product image */}
                <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden glow-amber">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgb(230 186 24 / 0.03) 0%, transparent 70%)",
                      }}
                    />
                    <div className="text-center relative z-10">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-12 w-12 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-foreground mb-1">
                        RFIS-X1
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Product image coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRODUCT GALLERY ───────────────────────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
            Every angle. Every detail.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main image */}
            <div className="lg:col-span-8">
              {/* REPLACE: swap src with actual product photo */}
              <div className="aspect-[4/3] bg-card border border-border rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgb(230 186 24 / 0.02) 0%, transparent 70%)",
                    }}
                  />
                  <div className="text-center relative z-10">
                    <Shield className="h-16 w-16 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      {GALLERY_IMAGES[activeImage].placeholder}
                    </p>
                  </div>
                </div>
                {/* Sold out overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full">
                    Sold Out
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-card border rounded-lg overflow-hidden transition-all ${
                    activeImage === i
                      ? "border-primary ring-1 ring-primary/30"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {/* REPLACE: swap with actual thumbnail images */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="h-6 w-6 text-primary/20 mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground/60">
                        {img.label}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY VALUE PROPS ───────────────────────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPS.map((prop, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <prop.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCT STORY / WHY PEOPLE WANT IT ────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Story */}
            <div>
              <SectionLabel>Why RFIS-X1</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Fire equipment hasn&apos;t evolved.<br />
                Fire risk has.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The fire extinguisher market is built on decades-old chemistry designed for paper,
                  wood, and electrical fires. But the environments we build today run on lithium — and
                  lithium fires don&apos;t follow the same rules.
                </p>
                <p>
                  Lithium battery thermal events are self-oxidizing. They generate their own oxygen.
                  They can reignite after suppression. Standard extinguishers weren&apos;t designed
                  for this — because they didn&apos;t have to be.
                </p>
                <p className="text-foreground font-medium">
                  The RFIS-X1 was purpose-engineered from the ground up for this new reality. Not
                  adapted. Not rebranded. Built.
                </p>
              </div>
            </div>

            {/* Right — Stats / social proof */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">17M+</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      EVs on global roads
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">40%</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Code gap in fire safety
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">$900B+</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Annual fire loss exposure
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">0</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Legacy extinguishers built for lithium
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">High demand, limited supply.</span>{" "}
                  The first RFIS-X1 production run sold out before public availability. Join the
                  waitlist to secure your allocation in the next release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT FEATURES ──────────────────────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Features</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Engineered with intent.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every component of the RFIS-X1 was designed for one purpose — reliable interruption
              of lithium battery fire events in the environments where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SOLD OUT / DEMAND SECTION ─────────────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(230 186 24 / 0.03) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                Current Release Fully Allocated
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Don&apos;t wait for general availability.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Waitlist subscribers get first notification when inventory opens.
              Secure your position now for priority access to the next RFIS-X1 release.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px"
            >
              <Bell className="h-4 w-4" />
              {PRODUCT.waitlistCta}
            </button>
            <p className="text-xs text-muted-foreground/50 mt-4">
              Join over the growing list of professionals waiting for the next release.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ───────────────────────────────────────────────── */}
      <section className="border-t border-border py-20 lg:py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
              Frequently asked questions.
            </h2>

            <div className="space-y-0">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        activeFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      activeFaq === i ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA SECTION ─────────────────────────────────────────── */}
      <section className="border-t border-border py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgb(230 186 24 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4">
              Next Release Coming Soon
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Be first in line.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              The RFIS-X1 is the fire extinguisher built for what comes next.
              Join the waitlist and we&apos;ll let you know the moment inventory opens.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base tracking-wide px-10 py-4 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px"
            >
              {PRODUCT.waitlistCta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── STICKY WAITLIST BAR ──────────────────────────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
          showSticky
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm font-semibold text-foreground">RFIS-X1</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Sold Out
              </span>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px w-full sm:w-auto"
            >
              <Bell className="h-3.5 w-3.5" />
              {PRODUCT.waitlistCta}
            </button>
          </div>
        </div>
      </div>

      {/* ── WAITLIST MODAL ───────────────────────────────────────────────── */}
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
