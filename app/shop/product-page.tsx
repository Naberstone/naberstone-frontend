"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  Play,
  Flame,
  Wind,
  ShieldCheck,
} from "lucide-react";

// ─── Content (editable in one place) ────────────────────────────────────────

const PRODUCT = {
  name: "RFIS-X1",
  tagline: "The fire extinguisher that actually works on lithium battery fires.",
  subtitle: "Reactive Fire Interruption Extinguisher",
  heroDescription:
    "Lithium batteries are everywhere — in your building, your vehicles, your charging stations. But your fire extinguisher? It wasn't made for them. The RFIS-X1 is the only extinguisher built from the ground up to stop lithium battery fires. Nothing else on the market does this.",
  soldOutLabel: "Sold Out",
  nextRelease: "Next Batch Coming Soon",
  waitlistCta: "Get on the Waitlist",
  waitlistSubtext: "Be the first to know when it's back in stock. No spam, ever.",
};

const GALLERY_ITEMS = [
  { id: 1, label: "Front View", src: "/images/shop/rfis-x1-front.png", alt: "RFIS-X1 Front View", type: "image" as const },
  { id: 2, label: "With Box", src: "/images/shop/rfis-x1-with-box.png", alt: "RFIS-X1 With Packaging", type: "image" as const },
  { id: 3, label: "Detail Shot", src: "/images/shop/rfis-x1-top-view.png", alt: "RFIS-X1 Top Detail View", type: "image" as const },
  { id: 4, label: "Float View", src: "/images/shop/rfis-x1-float.png", alt: "RFIS-X1 Floating View", type: "image" as const },
  { id: 5, label: "Watch Video", src: "", alt: "", type: "video" as const, videoId: "IPQktdzAIwI" },
];

const VALUE_PROPS = [
  {
    icon: Zap,
    title: "Stops Lithium Battery Fires",
    description: "Regular extinguishers don't work on lithium battery fires. Period. The RFIS-X1 uses a special agent made to shut them down.",
  },
  {
    icon: ShieldCheck,
    title: "All-Class Fire Protection",
    description: "The RFIS-X1 isn't just for lithium battery fires. It also handles Class A (wood, paper, fabric), Class B (flammable liquids), and Class C (electrical) fires. One extinguisher that covers everything.",
  },
  {
    icon: Target,
    title: "Grab and Go",
    description: "When a fire starts, seconds matter. The RFIS-X1 is designed so anyone can grab it, pull the pin, and use it — fast.",
  },
  {
    icon: Factory,
    title: "Works Everywhere You Need It",
    description: "Homes. Garages. Office buildings. EV chargers. Server rooms. Warehouses. Battery storage. Wherever you have lithium batteries — or any fire risk — the RFIS-X1 belongs on the wall.",
  },
];

const FEATURES = [
  {
    icon: Flame,
    title: "Stops the Fires Nothing Else Can",
    description: "Lithium batteries make their own oxygen when they burn. That's why regular extinguishers fail and the fire keeps coming back. The RFIS-X1 was built with a special agent that breaks this cycle and puts it out for good.",
  },
  {
    icon: ShieldCheck,
    title: "Covers Every Type of Fire",
    description: "Class A — wood, paper, fabric. Class B — gasoline, oil, solvents. Class C — electrical equipment. Plus lithium battery fires. The RFIS-X1 handles all of them. Replace every extinguisher on your wall with one that actually covers everything.",
  },
  {
    icon: Wind,
    title: "Prevents Toxic Smoke Exposure",
    description: "Lithium battery fires release toxic fumes that can fill a room in seconds. Having the right extinguisher means putting the fire out before the smoke becomes the bigger danger.",
  },
  {
    icon: Zap,
    title: "Stops Fires From Spreading",
    description: "Lithium battery fires burn hotter and faster than normal fires. They can jump to nearby batteries, walls, and furniture in minutes. The RFIS-X1 stops the fire at the source before it takes over.",
  },
  {
    icon: Award,
    title: "Protects What Insurance Won't Replace",
    description: "A house fire from an e-bike in the garage. A server room fire that takes down your business. Insurance pays for damage — it doesn't undo it. The RFIS-X1 gives you a chance to stop it before there's damage at all.",
  },
  {
    icon: Factory,
    title: "Ready to Install",
    description: "Comes with a wall mount, setup guide, and everything you need. Hang it in your garage, kitchen, office, or server room. No extra parts. No professional install. Ready in minutes.",
  },
];

const FAQS = [
  {
    question: "When can I buy one?",
    answer: "The first batch is sold out. We're making more now. Join the waitlist and you'll be the first to know when they're ready — before anyone else.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer: "You'll get a confirmation email right away. When the next batch is ready, we'll email you first — before it goes public. You'll get a head start to grab yours.",
  },
  {
    question: "Do waitlist people get to buy first?",
    answer: "Yes. Waitlist members get first access. You'll be able to buy before we open it up to everyone else.",
  },
  {
    question: "Do I have to give my phone number?",
    answer: "No. Just your name and email. Phone is optional — it just means you'll also get a text when it's back in stock, so you hear about it even faster.",
  },
  {
    question: "Who is this for?",
    answer: "Anyone with lithium batteries nearby. If you have an EV, e-bike, home solar battery, or you manage a building with a server room, battery storage, or EV chargers — this is for you. It's also for fleet managers, safety teams, and facility operators.",
  },
  {
    question: "Why can't I just use a regular fire extinguisher?",
    answer: "Because regular fire extinguishers were made for wood, paper, and electrical fires. Lithium battery fires are completely different — they make their own oxygen and can restart after you put them out. A regular extinguisher simply won't stop one. The RFIS-X1 will.",
  },
  {
    question: "Is this only for lithium battery fires?",
    answer: "No. The RFIS-X1 handles lithium battery fires, but it also works on Class A (wood, paper, fabric), Class B (gasoline, oil, solvents), and Class C (electrical) fires. It's a true all-class extinguisher. You don't need a different one for different fire types — the RFIS-X1 covers them all.",
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
      {/* ── 1. HERO — SHOPIFY-STYLE PRODUCT LAYOUT ─────────────────────── */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — Product Gallery (main + thumbnails) */}
            <div className="order-1">
              <div className="relative">
                {/* Sold out ribbon */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-background/80 backdrop-blur-sm text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full">
                    Sold Out
                  </span>
                </div>

                {/* Main display — video or image */}
                <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden glow-amber transition-all relative">
                  {GALLERY_ITEMS[activeImage].type === "video" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${GALLERY_ITEMS[activeImage].videoId}?autoplay=1&mute=1&loop=1&playlist=${GALLERY_ITEMS[activeImage].videoId}&controls=1&showinfo=0&rel=0&modestbranding=1`}
                      title="RFIS-X1 Product Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <Image
                      src={GALLERY_ITEMS[activeImage].src}
                      alt={GALLERY_ITEMS[activeImage].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={activeImage === 0}
                    />
                  )}
                </div>

                {/* Thumbnail strip */}
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {GALLERY_ITEMS.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square bg-card border rounded-lg overflow-hidden transition-all relative ${
                        activeImage === i
                          ? "border-primary ring-1 ring-primary/30"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      {item.type === "video" ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <Play className="h-5 w-5 text-primary/40" />
                        </div>
                      ) : (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Product Info */}
            <div className="order-2 lg:sticky lg:top-28">
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

              {/* Divider */}
              <div className="border-t border-border mb-8" />

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px w-full sm:w-auto"
                >
                  <Bell className="h-4 w-4" />
                  {PRODUCT.waitlistCta}
                </button>
              </div>
              <p className="text-xs text-muted-foreground/60">
                {PRODUCT.waitlistSubtext}
              </p>
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
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Your fire extinguisher<br />
                won&apos;t save you.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Here&apos;s the truth most people don&apos;t know: the fire extinguisher on your wall
                  right now was designed for paper, wood, and electrical fires. It was never made for
                  lithium batteries.
                </p>
                <p>
                  Lithium battery fires are different. They make their own oxygen. They reignite after
                  you think they&apos;re out. They burn hotter. And they&apos;re spreading to more places
                  every year — EVs, e-bikes, scooters, solar batteries, data centers.
                </p>
                <p className="text-foreground font-medium">
                  Until now, there was nothing you could buy to stop one. The RFIS-X1 changes that.
                </p>
              </div>
            </div>

            {/* Right — Stats / social proof */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">40M+</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Lithium battery devices in U.S. homes
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">300%</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Rise in lithium battery fires since 2019
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">$2.6B</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Property damage from battery fires last year
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">0</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      Other extinguishers built for every fire class including lithium
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">The first RFIS-X1 batch sold out before we could even list it publicly.</span>{" "}
                  Get on the waitlist now to lock in your spot for the next release.
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
            <SectionLabel>What It Does</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              The problems it solves.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lithium battery fires are getting more common. Here&apos;s what the RFIS-X1 actually
              does to protect you, your family, and your property.
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
                First Batch Sold Out
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              The first batch sold out.<br />
              Don&apos;t miss the next one.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              People are waking up to the fact that their current fire extinguisher won&apos;t protect
              them from lithium battery fires. The first run of the RFIS-X1 sold out before we could
              even list it publicly. Get on the waitlist now — you&apos;ll be first in line when
              the next batch drops.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px"
            >
              <Bell className="h-4 w-4" />
              {PRODUCT.waitlistCta}
            </button>
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
              Next Batch Coming Soon
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Don&apos;t wait until it&apos;s too late.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              Lithium batteries are in more places every day. When something goes wrong, you need the
              right tool on the wall — not a fire extinguisher that was never made for this.
              Get on the waitlist now.
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
