import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

// ─── Data ───────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "17M+", label: "Electric vehicles sold globally in 2024" },
  { value: "$900B+", label: "Direct property damage and indirect costs from fires per year" },
  { value: "40%", label: "Current fire codes are not designed for lithium-ion scenarios" },
];

const riskCards = [
  {
    image: "/images/cybertruck-fire.jpg",
    alt: "Cybertruck engulfed in flames demonstrating EV fire risk",
    tag: "EV Fires",
    description:
      "Electric vehicle batteries create self-sustaining thermal events that conventional suppression cannot extinguish. Runaway propagation moves cell to cell in seconds.",
  },
  {
    image: "/images/iphone-fire.jpg",
    alt: "Consumer lithium device fire illustrating lithium battery danger",
    tag: "Lithium",
    description:
      "Lithium-chemistry failures are electrochemical chain reactions that generate their own oxidizer. They cannot be starved of oxygen like traditional fires.",
  },
  {
    image: "/images/ebike-fire.jpg",
    alt: "E-bike fire in an urban environment",
    tag: "Micro-Mobility",
    description:
      "Small-format lithium devices concentrate enough energy to produce catastrophic thermal events in homes, transit systems, and shared spaces.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Find The Problem Early",
    description:
      "We watch for early warning signs — heat, gas, and changes in the system — before things get out of control.",
  },
  {
    number: "02",
    title: "Stop The Reaction",
    description:
      "We act inside the battery's chemistry to stop the fire from growing and spreading.",
  },
  {
    number: "03",
    title: "Keep It Contained And Recover",
    description:
      "We keep the problem in one place, protect nearby systems, and help everything get back to normal faster.",
  },
];

const platformOutcomes = [
  "Stop fires from spreading",
  "Reduce damage and toxic smoke",
  "Get systems back online faster",
];

const applicationCards = [
  {
    image: "/images/data-center.jpg",
    alt: "Data center server room with battery backup infrastructure",
    name: "Data Centers",
    href: "/applications#data-centers",
    description:
      "A single battery failure can cascade across rack-level and room-level infrastructure.",
  },
  {
    image: "/images/saudi-bess.jpg",
    alt: "Grid-scale energy storage system installation",
    name: "Energy Storage",
    href: "/applications#energy-storage",
    description:
      "Containerized battery systems can propagate cell-to-cell at utility scale.",
  },
  {
    image: "/images/aerospace.jpg",
    alt: "Aviation and aerospace launch systems",
    name: "Aviation & Aerospace",
    href: "/applications#aviation-aerospace",
    description:
      "Lithium-based failures in confined systems require immediate interruption before escalation.",
  },
  {
    image: "/images/pentagon.jpg",
    alt: "Pentagon aerial view representing federal defense",
    name: "Federal & Defense",
    href: "/applications#federal-defense",
    description:
      "Mission-critical facilities require documented, bounded, and recoverable outcomes.",
  },
  {
    image: "/images/charging-station.jpg",
    alt: "Tesla supercharger station at night",
    name: "Charging Infrastructure",
    href: "/applications#charging-infrastructure",
    description:
      "One vehicle event can cascade across adjacent charging bays in high-density environments.",
  },
  {
    image: "/images/ev-fleet.jpg",
    alt: "FedEx EV fleet vehicles parked in close proximity",
    name: "EV Environments",
    href: "/applications#ev-environments",
    description:
      "Parked vehicles in close proximity increase the risk of multi-asset propagation events.",
  },
];

const standardsTags = [
  { label: "UL 9540A", description: "Defines how battery fires spread at scale" },
  {
    label: "NFPA 855",
    description: "Shifting toward outcome-based fire safety",
  },
  {
    label: "AHJ Documentation",
    description: "Requires proof of containment — not assumptions",
  },
];

const deploymentPathways = [
  {
    title: "Infrastructure Evaluation Program",
    description:
      "Assess propagation exposure and RFIS readiness across your infrastructure.",
  },
  {
    title: "OEM Integration",
    description:
      "Embed RFIS capability directly into batteries, enclosures, and system platforms.",
  },
  {
    title: "Federal Pathways",
    description:
      "Deploy RFIS through aligned defense and federal infrastructure programs.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Scale RFIS across operators, developers, and infrastructure ecosystems.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/data-center-fire.jpg"
          alt="Data center server room engulfed in fire illustrating electrification risk"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero content — centered */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-24 lg:pt-0 lg:pb-0">
          <div>
            <SectionLabel>Reactive Fire Interruption Systems</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.05] mb-8 uppercase">
              Fire protection didn&apos;t evolve with electrification.
              Naberstone did.
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Technical Overview
              </Link>
              <Link
                href="/contact#integration"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Discuss Deployment &amp; Integration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar overlaid at bottom */}
        <div className="relative z-10 w-full border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/20">
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-8"
                >
                  <span className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60 leading-relaxed max-w-[220px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Challenge ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-8">
            The Risk Changed.
            <br />
            The Paradigm Didn&apos;t.
          </h2>

          <div className="max-w-2xl space-y-6 mb-16">
            <p className="text-base text-muted-foreground leading-relaxed">
              Legacy fire protection was built for combustion — heat, oxygen, fuel.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Electrified infrastructure fails differently. Lithium-ion events are
              self-sustaining chemical reactions, generating their own oxidizer and
              propagating across systems.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Suppression reacts. It does not interrupt.
            </p>
          </div>

          {/* Promo video */}
          <div className="rounded-xl overflow-hidden mb-16 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/IPQktdzAIwI?autoplay=1&mute=1&loop=1&playlist=IPQktdzAIwI&controls=1&showinfo=0&rel=0&modestbranding=1"
              title="Naberstone Safety Solutions Extinguisher Promo"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* 3 callouts with yellow left border */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-primary pl-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fires in batteries can spread from cell to cell in minutes —
                not hours.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                These fires make dangerous gases that can make the situation
                worse.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today&apos;s safety rules focus on watching fires spread — not
                stopping them early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Category ────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-border">
        {/* Full background image */}
        <Image
          src="/images/cybertruck-fire.jpg"
          alt="Cybertruck fire illustrating electrification risk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Category</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: narrative */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
                From Putting Out Fires To Stopping Them Early.
              </h2>
              <div className="space-y-5 mb-10">
                <p className="text-base text-white/70 leading-relaxed">
                  For a long time, fire safety has been about putting out fires
                  after they start.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  That works for normal fires.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  But batteries are different.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  They create their own reaction and keep burning on their own.
                </p>
                <p className="text-base text-white/70 leading-relaxed">
                  So the goal isn&apos;t to put out the fire — it&apos;s to stop
                  it before it spreads.
                </p>
              </div>
              <Link
                href="/category"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Explore the RFIS Category
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right: RFIS definition card */}
            <div className="border border-primary/40 bg-black/40 backdrop-blur-md rounded-lg p-8 transition-all duration-500 hover:border-primary/80 hover:bg-black/50 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(230,186,24,0.15)]">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
                A New Category Of Fire Safety Infrastructure
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                Reactive Fire Interruption Systems
              </h3>
              <div className="space-y-5">
                <p className="text-sm text-white/70 leading-relaxed">
                  RFIS finds problems early, stops the reaction inside the
                  battery, and keeps the fire from spreading.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Instead of waiting for flames, it stops the problem at the
                  source.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  This keeps damage small and easier to recover from.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: The Platform ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Stop The Fire Before It Spreads.
          </h2>

          {/* Three numbered steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome card */}
          <div className="border border-primary/30 rounded-lg p-8 bg-card mb-10">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              System-Level Outcomes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platformOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/platform"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary text-primary hover:bg-primary/10"
            )}
          >
            See How It Works
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Section 5: Applications ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            Built For Systems That Can&apos;t Afford To Fail.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Wherever energy is concentrated, one failure can cascade into
            system-wide loss.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {applicationCards.map((app, i) => (
              <Link
                key={i}
                href={app.href}
                className="group relative rounded-xl overflow-hidden h-56 lg:h-64 block"
              >
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {app.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/applications"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary text-primary hover:bg-primary/10"
              )}
            >
              Explore Critical Use Cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Standards & Validation ──────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards &amp; Validation</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
                Safety Rules Are Changing. Stopping The Fire Matters Now.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Regulators are no longer asking if you have a fire suppression
                system. They&apos;re asking if your system can actually stop
                thermal propagation — and prove it.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                UL 9540A and NFPA 855 are shifting the standard from
                &ldquo;response&rdquo; to &ldquo;containment.&rdquo; Compliance
                now requires documented evidence that your system interrupts
                failure — not just detects it.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Naberstone&apos;s RFIS platform is designed around these emerging
                frameworks — giving you a defensible, audit-ready position before
                the rules finish changing.
              </p>

              <Link
                href="/standards"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-primary text-primary hover:bg-primary/10"
                )}
              >
                View Validation Framework
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* Right: technical diagram */}
            <div className="relative flex items-center justify-center">
              <div className="relative inline-block">
                <div className="absolute -inset-3 rounded-lg bg-primary/20 blur-2xl" />
                <Image
                  src="/images/rfis-datacenter-blueprint.jpg"
                  alt="RFIS Data Center Blueprint"
                  width={5504}
                  height={3072}
                  className="relative w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Standards tags row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {standardsTags.map((tag, i) => (
              <div
                key={i}
                className="border border-border rounded-lg px-5 py-4 bg-card hover:border-primary/40 transition-colors"
              >
                <p className="text-sm font-semibold text-primary mb-1">
                  {tag.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tag.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Why Naberstone ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why Naberstone</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-5xl mb-12">
            From Chemistry To Infrastructure — Engineered To Stop Propagation.
          </h2>

          {/* Two-column: paragraphs left, bullet points right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                You can&apos;t stop a lithium fire at the surface.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                You have to stop it where it begins.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                RFIS is built on electrochemical failure modeling, propagation
                dynamics, and system-level engineering — designed for real
                infrastructure.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Chemistry-first design</span>{" "}
                  — Built on understanding failure at the electrochemical level
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Propagation-aware systems</span>{" "}
                  — Designed to control how events spread across assets
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Infrastructure-ready deployment</span>{" "}
                  — Engineered for real-world facilities and standards environments
                </p>
              </div>
            </div>
          </div>

          {/* Full-width propagation comparison diagram */}
          <div className="relative rounded-xl overflow-hidden border border-primary/40">
            <Image
              src="/images/propagation-vs-interruption-diagram.jpg"
              alt="Comparison diagram: Uncontrolled Propagation vs RFIS Interruption containment"
              width={5504}
              height={3072}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Section 8: Engagement / Deployment Models ─────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Engagement</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            Deploy RFIS Across Your Infrastructure
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Naberstone works with operators, OEMs, and agencies to deploy RFIS
            through defined engagement models.
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-6">
            RFIS Deployment Models
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deploymentPathways.map((pathway, i) => (
              <Link
                key={i}
                href="/contact"
                className="group border border-border rounded-lg p-8 hover:border-primary/50 transition-all block"
              >
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {pathway.description}
                </p>
                <span className="text-primary group-hover:translate-x-1 inline-block transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Closing CTA ─────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-border">
        {/* Background image */}
        <Image
          src="/images/wm-fire.jpg"
          alt="Dramatic fire scene underscoring the urgency of next-generation safety infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto mb-6">
            The Future Of Infrastructure Safety Starts Here.
          </h2>
          <p className="text-base text-white max-w-xl mx-auto mb-10 leading-relaxed">
            Naberstone is the infrastructure layer operators, OEMs, and agencies
            rely on as electrification scales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact#deployment"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              )}
            >
              Schedule Deployment Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <p className="text-sm text-white/50">
            Built for infrastructure where failure is not an option.
          </p>
        </div>
      </section>
    </>
  );
}
