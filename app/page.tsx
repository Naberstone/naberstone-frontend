import Link from "next/link";
import {
  Server,
  Battery,
  Plane,
  Shield,
  Zap,
  Car,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

// ─── Data interfaces ────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface ProofPoint {
  text: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface OutcomeItem {
  text: string;
}

interface SectorCard {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface EvidenceAnchor {
  label: string;
  description: string;
}

interface CredibilityBullet {
  text: string;
}

interface EngagementPathway {
  title: string;
  description: string;
  href: string;
}

// ─── Static content ─────────────────────────────────────────────────────────

const stats: StatItem[] = [
  {
    value: "17M+",
    label: "Electric vehicles sold globally in 2024",
  },
  {
    value: "180+ MWh",
    label: "Battery storage capacity involved in destructive fires over 18 months",
  },
  {
    value: "$1M+",
    label: "Reported cost of significant data center outages (1 in 5 incidents)",
  },
];

const proofPoints: ProofPoint[] = [
  {
    text: "Thermal runaway is a chain reaction that can damage adjacent cells and propagate.",
  },
  {
    text: "Events can generate flammable and toxic gases during failure.",
  },
  {
    text: "Standards increasingly require performance-based evidence: testing, documentation, lifecycle oversight.",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Sense & Classify",
    description:
      "Early indicator detection across thermal, chemical, and electrical signatures — enabling classification before runaway conditions establish.",
  },
  {
    number: "02",
    title: "Interrupt",
    description:
      "Targeted intervention into reaction chemistry and off-gas behavior, disrupting the propagation pathway at the chemistry layer.",
  },
  {
    number: "03",
    title: "Control & Recover",
    description:
      "Define and hold the event boundary. Protect adjacent infrastructure, preserve documentation evidence, accelerate return to operations.",
  },
];

const outcomes: OutcomeItem[] = [
  { text: "Prevent propagation across adjacent assets" },
  { text: "Minimize secondary damage and contaminated byproducts" },
  { text: "Accelerate operational recoverability" },
];

const sectors: SectorCard[] = [
  {
    icon: <Server className="h-5 w-5 text-primary" />,
    name: "Data Centers",
    description:
      "UPS battery arrays and high-density power infrastructure require propagation-aware protection at the rack and room level.",
  },
  {
    icon: <Battery className="h-5 w-5 text-primary" />,
    name: "Energy Storage",
    description:
      "Grid-scale and commercial ESS installations face cascading thermal risk across cell modules and containerized systems.",
  },
  {
    icon: <Plane className="h-5 w-5 text-primary" />,
    name: "Aviation & Aerospace",
    description:
      "Lithium-based systems in aircraft and ground support demand containment approaches aligned to federal airworthiness standards.",
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    name: "Federal & Defense",
    description:
      "Mission-critical platforms and secure facilities require validated, documentable protection with federal procurement pathways.",
  },
  {
    icon: <Zap className="h-5 w-5 text-primary" />,
    name: "Charging Infrastructure",
    description:
      "High-power EVSE installations concentrate energy in shared environments where a single event can cascade across bays.",
  },
  {
    icon: <Car className="h-5 w-5 text-primary" />,
    name: "EV Environments",
    description:
      "Parking structures, fleets, and multi-tenant facilities face unique exposure from vehicles with varying battery state and age.",
  },
];

const evidenceAnchors: EvidenceAnchor[] = [
  {
    label: "UL 9540A",
    description: "Propagation behavior test method",
  },
  {
    label: "NFPA 855",
    description: "2026 direction toward controlled outcomes",
  },
  {
    label: "AHJ Documentation",
    description: "Performance-based submissions",
  },
];

const credibilityBullets: CredibilityBullet[] = [
  {
    text: "Materials science foundation — understanding failure chemistry before system design",
  },
  {
    text: "Infrastructure systems engineering — deployable across facility types and asset classes",
  },
  {
    text: "Standards-aware development — aligned to UL 9540A, NFPA 855, and AHJ documentation requirements",
  },
];

const engagementPathways: EngagementPathway[] = [
  {
    title: "Infrastructure Evaluation Program",
    description:
      "Structured assessment of your facility's propagation exposure and RFIS readiness across asset classes.",
    href: "/contact#evaluation",
  },
  {
    title: "OEM Integration",
    description:
      "Engineering collaboration to embed RFIS capability into battery systems, enclosures, and power infrastructure at the product level.",
    href: "/partnerships#oem",
  },
  {
    title: "Federal Pathways",
    description:
      "Procurement-aligned engagement for defense, intelligence, and federal civilian infrastructure programs.",
    href: "/partnerships#federal",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Channel and ecosystem relationships with operators, developers, and AHJ-facing integrators.",
    href: "/partnerships#strategic",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, oklch(0.72 0.175 48 / 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <SectionLabel>Reactive Fire Interruption Systems</SectionLabel>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Fire protection didn&apos;t evolve as fast as electrification.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Critical infrastructure now concentrates energy at a scale where
            fires become cascading chemical events. Naberstone builds the
            interruption layer — systems designed to stop propagation before it
            becomes catastrophic.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Request Technical Overview
            </Link>
            <Link
              href="/contact#integration"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Discuss Deployment &amp; Integration{" "}
              <span className="group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/60 max-w-xl leading-relaxed">
            Aligned to the propagation-driven safety reality underpinning UL
            9540A and next-generation ESS guidance.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40">
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* Section 2: Stats bar */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-8"
              >
                <span className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Problem */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
            The risk changed. The paradigm didn&apos;t.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Legacy fire suppression systems were designed for combustion events —
            heat, oxygen, fuel. Electrified infrastructure fails differently.
            Lithium chemistry failures are electrochemical events that generate
            their own oxidizer. Suppression can&apos;t interrupt what&apos;s
            already self-sustaining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofPoints.map((point, i) => (
              <div key={i} className="border-l-2 border-primary pl-6 py-2">
                <p className="text-sm text-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Category Shift */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Category</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: narrative */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                From suppression to interruption.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                The safety industry has spent decades optimizing for suppression
                — deploying agents after ignition to reduce heat and starve
                flames. That model assumes conventional combustion.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Lithium-chemistry events require a different architecture. The
                goal isn&apos;t suppression after the fact. It&apos;s
                interruption at the chemistry layer — before propagation
                establishes, before secondary events begin, before the event
                boundary expands beyond the origin cell.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Naberstone defines and owns this category — Reactive Fire
                Interruption Systems — as the infrastructure-grade answer to the
                electrification era.
              </p>
            </div>

            {/* Right: RFIS definition block */}
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
                Unlike suppression systems, RFIS operates at the chemistry layer
                — targeting the failure mechanism, not the downstream flame
                event. The outcome is a defined, bounded, recoverable incident
                rather than a cascading loss event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How RFIS Works */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Interrupt the chemistry. Reduce the cascade.
          </h2>

          {/* Three steps */}
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

          {/* Outcome triad */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Designed Outcomes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{outcome.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Applications */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-4">
            Built for high-consequence infrastructure.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Wherever electrified energy concentrates at scale, propagation risk
            follows. RFIS is designed to operate across the full range of
            critical infrastructure contexts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, i) => (
              <Card
                key={i}
                className="bg-background border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{sector.icon}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/applications"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              View All Applications <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Market Moving */}
      <section
        className="py-24 lg:py-32"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.012 255) 0%, oklch(0.10 0.013 255) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards &amp; Validation</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
            Safety expectations are shifting toward propagation prevention.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-6 leading-relaxed">
            NFPA 855&apos;s 2026 revision cycle is moving toward
            performance-based outcomes — requiring evidence that systems actually
            limit propagation, not just meet prescriptive specifications. UL
            9540A has established large-scale fire testing as the definitive
            methodology for characterizing cell-to-cell and module-level
            propagation behavior.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Authority Having Jurisdiction (AHJ) submissions increasingly require
            documentation of failure mode behavior, propagation containment
            evidence, and lifecycle oversight records — creating a compliance
            environment that legacy suppression cannot satisfy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {evidenceAnchors.map((anchor, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-semibold text-primary mb-2">
                  {anchor.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {anchor.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/standards"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Standards &amp; Validation Context{" "}
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Why Naberstone */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why Naberstone</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Built from materials science to infrastructure systems
                engineering.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Effective RFIS requires understanding failure at the chemistry
                layer before designing the system layer. Naberstone starts from
                materials science — the electrochemical failure modes, the
                off-gas chemistry, the thermal propagation dynamics — and
                engineers upward into deployable, validated infrastructure
                systems.
              </p>
              <ul className="space-y-5">
                {credibilityBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {bullet.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: abstract cascade diagram */}
            <div className="relative h-64 lg:h-80 rounded-lg border border-border bg-background overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="border-r border-foreground" />
                    ))}
                  </div>
                  {/* Cascade nodes */}
                  {[
                    { top: "10%", left: "15%", size: "h-3 w-3", opacity: "opacity-90" },
                    { top: "10%", left: "45%", size: "h-3 w-3", opacity: "opacity-90" },
                    { top: "10%", left: "75%", size: "h-3 w-3", opacity: "opacity-90" },
                    { top: "40%", left: "10%", size: "h-2 w-2", opacity: "opacity-60" },
                    { top: "40%", left: "30%", size: "h-2 w-2", opacity: "opacity-60" },
                    { top: "40%", left: "55%", size: "h-2 w-2", opacity: "opacity-60" },
                    { top: "40%", left: "80%", size: "h-2 w-2", opacity: "opacity-60" },
                    { top: "70%", left: "20%", size: "h-1.5 w-1.5", opacity: "opacity-40" },
                    { top: "70%", left: "50%", size: "h-1.5 w-1.5", opacity: "opacity-40" },
                    { top: "70%", left: "75%", size: "h-1.5 w-1.5", opacity: "opacity-40" },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className={`absolute ${node.size} rounded-full bg-primary ${node.opacity}`}
                      style={{ top: node.top, left: node.left }}
                    />
                  ))}
                  {/* Interrupt line */}
                  <div
                    className="absolute left-0 right-0 h-px bg-primary opacity-40"
                    style={{ top: "55%" }}
                  />
                  <p
                    className="absolute right-2 text-[9px] tracking-widest uppercase text-primary opacity-60"
                    style={{ top: "calc(55% + 4px)" }}
                  >
                    INTERRUPT
                  </p>
                  <p className="absolute top-1 left-0 text-[9px] tracking-widest uppercase text-muted-foreground opacity-50">
                    PROPAGATION CASCADE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Engagement Pathways */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Engagement</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Engage through evaluation, integration, and deployment.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagementPathways.map((pathway, i) => (
              <Link
                key={i}
                href={pathway.href}
                className="group border border-border rounded-lg p-8 bg-card hover:border-primary/50 hover:bg-secondary/20 transition-all block"
              >
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pathway.description}
                </p>
                <span className="text-sm text-primary group-hover:translate-x-1 inline-block transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Closing CTA */}
      <section
        className="py-24 lg:py-32 border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.013 255) 0%, oklch(0.08 0.012 255) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto mb-6">
            The electrified era needs a new safety category.
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Naberstone is building the infrastructure layer that critical
            operators, OEMs, and agencies will depend on as electrification
            scales into consequence-grade environments.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "glow-amber mb-6 inline-flex"
            )}
          >
            Request the Technical Overview →
          </Link>
          <p className="text-xs text-muted-foreground/60 max-w-md mx-auto mt-6">
            For qualified operators, OEMs, and agencies evaluating
            next-generation infrastructure protection.
          </p>
        </div>
      </section>
    </>
  );
}
