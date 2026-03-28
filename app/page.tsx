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
  { value: "$900B+", label: "Global lithium-ion battery market by 2030" },
  { value: "40%", label: "Annual increase in battery-related fire incidents" },
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
      "Multi-spectrum sensing across thermal, chemical, and electrical signatures enables classification of failure precursors before thermal runaway conditions establish.",
  },
  {
    number: "02",
    title: "Stop The Reaction",
    description:
      "Targeted intervention at the chemistry layer disrupts the electrochemical propagation pathway — interrupting the reaction mechanism, not just the downstream flame.",
  },
  {
    number: "03",
    title: "Keep It Contained And Recover",
    description:
      "Define and hold the event boundary. Protect adjacent infrastructure, preserve forensic evidence, and accelerate the path back to operational status.",
  },
];

const platformOutcomes = [
  "Prevent propagation across adjacent cells, modules, and assets",
  "Minimize secondary damage, toxic byproducts, and contamination zones",
  "Accelerate operational recoverability and documentation compliance",
];

const applicationCards = [
  {
    image: "/images/app-data-centers.jpg",
    alt: "Data center server room with battery backup infrastructure",
    name: "Data Centers",
    description:
      "UPS battery arrays and high-density power infrastructure require propagation-aware protection at the rack and room level.",
  },
  {
    image: "/images/app-energy-storage.jpg",
    alt: "Grid-scale energy storage system installation",
    name: "Energy Storage",
    description:
      "Grid-scale and commercial BESS installations face cascading thermal risk across cell modules and containerized systems.",
  },
  {
    image: "/images/app-aviation.jpg",
    alt: "Aviation lithium battery systems in aircraft environment",
    name: "Aviation & Aerospace",
    description:
      "Lithium-based systems in aircraft and ground support demand containment approaches aligned to federal airworthiness standards.",
  },
  {
    image: "/images/app-defense.jpg",
    alt: "Federal defense facility with critical power infrastructure",
    name: "Federal & Defense",
    description:
      "Mission-critical platforms and secure facilities require validated, documentable protection with federal procurement pathways.",
  },
  {
    image: "/images/app-charging.jpg",
    alt: "High-power EV charging station infrastructure",
    name: "Charging Infrastructure",
    description:
      "High-power EVSE installations concentrate energy in shared environments where a single event can cascade across bays.",
  },
  {
    image: "/images/app-ev.jpg",
    alt: "Electric vehicles in parking structure environment",
    name: "EV Environments",
    description:
      "Parking structures, fleets, and multi-tenant facilities face unique exposure from vehicles with varying battery state and age.",
  },
];

const standardsTags = [
  { label: "UL 9540A", description: "Propagation behavior test method" },
  {
    label: "NFPA 855",
    description: "2026 direction toward controlled outcomes",
  },
  {
    label: "AHJ Documentation",
    description: "Performance-based submissions",
  },
];

const deploymentPathways = [
  {
    title: "Infrastructure Evaluation Program",
    description:
      "Structured assessment of your facility's propagation exposure and RFIS readiness across asset classes and operational environments.",
  },
  {
    title: "OEM Integration",
    description:
      "Engineering collaboration to embed RFIS capability into battery systems, enclosures, and power infrastructure at the product level.",
  },
  {
    title: "Federal Pathways",
    description:
      "Procurement-aligned engagement for defense, intelligence, and federal civilian infrastructure programs with documentation requirements.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Channel and ecosystem relationships with operators, developers, and AHJ-facing integrators deploying at scale.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-home.jpg"
          alt="Industrial scrapyard fire scene illustrating the scale of modern fire risk"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-40 pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-8 uppercase">
            Fire protection didn&apos;t evolve with electrification.{" "}
            <span className="text-primary">Naberstone did.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact#deployment"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Schedule Deployment Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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

      {/* ── Section 2: The Problem ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-6">
            The Risk Changed. The Paradigm Didn&apos;t.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Legacy fire suppression was designed for combustion — heat, oxygen,
            fuel. Electrified infrastructure fails differently. Lithium-chemistry
            failures are electrochemical events that generate their own oxidizer.
            Suppression can&apos;t interrupt what&apos;s already self-sustaining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {riskCards.map((card, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-[0.15em] uppercase text-primary bg-black/50 backdrop-blur-sm rounded px-2.5 py-1">
                    {card.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/category"
              className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
            >
              View The Category
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Category ────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-card border-y border-border overflow-hidden">
        {/* Subtle background image hint */}
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src="/images/data-center-fire.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Category</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: narrative */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                From Putting Out Fires To Stopping Them Early
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                The safety industry has spent decades optimizing for suppression —
                deploying agents after ignition to reduce heat and starve flames.
                That model assumes conventional combustion.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Lithium-chemistry events require a different architecture. The goal
                isn&apos;t suppression after the fact. It&apos;s interruption at the
                chemistry layer — before propagation establishes, before secondary
                events begin, before the event boundary expands beyond the origin
                cell.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed mb-8">
                Naberstone defines and owns this category — Reactive Fire
                Interruption Systems — as the infrastructure-grade answer to the
                electrification era.
              </p>
              <Link
                href="/rfis"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Explore RFIS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right: RFIS definition card */}
            <div className="border-l-2 border-primary bg-secondary/30 rounded-r-lg p-8 glow-amber">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
                Category Definition
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Reactive Fire Interruption Systems
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                RFIS are active safety architectures designed to detect early
                electrochemical failure signatures, interrupt thermal propagation
                pathways, and contain event boundaries in lithium-chemistry and
                high-density electrified environments.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unlike suppression systems, RFIS operates at the chemistry layer —
                targeting the failure mechanism, not the downstream flame event. The
                outcome is a defined, bounded, recoverable incident rather than a
                cascading loss event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: The Platform ────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Stop The Fire Before It Spreads
          </h2>

          {/* Three numbered steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary/30 font-mono">
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
          <div className="border border-border rounded-lg p-8 bg-card mb-10">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Designed Outcomes
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
            className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
          >
            Learn More About The Platform
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── Section 5: Applications ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            Built For Systems That Can&apos;t Afford To Fail
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Wherever electrified energy concentrates at scale, propagation risk
            follows. RFIS is designed to operate across the full range of critical
            infrastructure contexts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {applicationCards.map((app, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    {app.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/applications"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Explore Critical Use Cases
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Standards & Validation ──────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards &amp; Validation</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Safety Rules Are Changing. Stopping The Fire Matters Now.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                NFPA 855&apos;s 2026 revision cycle is moving toward
                performance-based outcomes — requiring evidence that systems
                actually limit propagation, not just meet prescriptive
                specifications. UL 9540A has established large-scale fire testing
                as the definitive methodology for characterizing cell-to-cell and
                module-level propagation behavior.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Authority Having Jurisdiction (AHJ) submissions increasingly
                require documentation of failure mode behavior, propagation
                containment evidence, and lifecycle oversight records — creating a
                compliance environment that legacy suppression cannot satisfy.
              </p>

              {/* Standards tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {standardsTags.map((tag, i) => (
                  <div
                    key={i}
                    className="border border-primary/30 rounded-lg px-4 py-2.5 bg-primary/5"
                  >
                    <p className="text-sm font-semibold text-primary">
                      {tag.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tag.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/standards"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                View Full Standards Context
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* Right: UL / testing image */}
            <div className="relative rounded-xl overflow-hidden border border-border h-80 lg:h-[480px]">
              <Image
                src="/images/rfis-ds1.jpg"
                alt="RFIS product and UL testing certification documentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Technical / Propagation ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Science</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-5xl mb-12">
            From Chemistry To Infrastructure — Engineered To Stop Propagation
          </h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <p className="text-base text-muted-foreground leading-relaxed">
              Effective RFIS requires understanding failure at the chemistry layer
              before designing the system layer. Naberstone starts from materials
              science — the electrochemical failure modes, the off-gas chemistry,
              the thermal propagation dynamics — and engineers upward into
              deployable, validated infrastructure systems.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The RFIS approach maps the full failure sequence — from initial cell
              venting through thermal cascade — and intervenes at the earliest
              viable point. This architecture-first methodology ensures that
              protection is embedded at the system level rather than bolted on
              after the fact.
            </p>
          </div>

          {/* Technical comparison diagrams */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden border border-border h-72 lg:h-80 group">
              <Image
                src="/images/propagation-vs-interruption.jpg"
                alt="Diagram showing uncontrolled thermal propagation spreading across battery cells"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-red-400 mb-1">
                  Without RFIS
                </p>
                <p className="text-lg font-semibold text-white">
                  Uncontrolled Propagation
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Thermal runaway cascades across cells and modules without
                  intervention — resulting in total asset loss.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-primary/30 h-72 lg:h-80 group">
              <Image
                src="/images/heat-map-containment.jpg"
                alt="Heat map showing RFIS interruption containing thermal event to origin cell"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-1">
                  With RFIS
                </p>
                <p className="text-lg font-semibold text-white">
                  RFIS Interruption
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Event is detected, interrupted, and contained at the origin —
                  adjacent infrastructure remains operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Deployment Models ───────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Deployment Models</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            Deploy RFIS Across Your Infrastructure
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Multiple engagement pathways designed for operators, OEMs, federal
            agencies, and integrators deploying protection at scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deploymentPathways.map((pathway, i) => (
              <Link
                key={i}
                href="/contact"
                className="group border border-border rounded-lg p-8 bg-card hover:border-primary/50 hover:bg-secondary/20 transition-all block"
              >
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pathway.description}
                </p>
                <span className="text-sm text-primary group-hover:translate-x-1 inline-block transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Closing CTA ─────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/wm-fire.jpg"
          alt="Dramatic fire scene underscoring the urgency of next-generation safety infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto mb-6">
            The Future Of Infrastructure Safety Starts Here.
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Naberstone is building the infrastructure layer that critical
            operators, OEMs, and agencies will depend on as electrification scales
            into consequence-grade environments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact#deployment"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Schedule Deployment Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
