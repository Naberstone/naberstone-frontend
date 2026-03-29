import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Server, Battery, Plane, Shield, Zap, Car } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform | Naberstone Safety Solutions",
  description:
    "The Naberstone RFIS platform — sensing, decisioning, deployment, containment, and restoration for lithium-chemistry infrastructure.",
};

// ── Interfaces ──────────────────────────────────────────────────────────────

interface SystemLayer {
  id: string;
  title: string;
  description: string;
  details: string[];
}

interface PlatformOutcome {
  headline: string;
  body: string;
}

interface DeploymentApplication {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

// ── Content ─────────────────────────────────────────────────────────────────

const systemLayers: SystemLayer[] = [
  {
    id: "01",
    title: "Sensing",
    description:
      "Detects early failure signals before ignition.\n\nMonitors heat, gas, and electrical changes across the system.",
    details: [
      "Thermal gradient monitoring across cell and module boundaries",
      "Off-gas precursor detection at sub-ignition concentrations",
      "Electrical signature analysis for cell-level stress indicators",
    ],
  },
  {
    id: "02",
    title: "Decisioning",
    description:
      "Classifies risk in real time.\n\nDetermines whether intervention is required and how to respond.",
    details: [
      "Multi-signal fusion for high-confidence failure classification",
      "Propagation trajectory modeling from real-time sensor state",
      "Graduated response protocol — escalating from monitoring to intervention",
    ],
  },
  {
    id: "03",
    title: "Deployment",
    description:
      "Targets the failure at its origin.\n\nInterrupts propagation before it becomes self-sustaining.",
    details: [
      "Precision deployment timed to the early propagation window",
      "Chemistry-layer intervention targeting failure mechanism, not flame",
      "Spatial targeting calibrated to the event origin and trajectory",
    ],
  },
  {
    id: "04",
    title: "Containment",
    description:
      "Controls the event boundary.\n\nPrevents spread across adjacent systems and infrastructure.",
    details: [
      "Event boundary definition and monitoring throughout the incident",
      "Adjacent asset protection through isolation and targeted response",
      "Off-gas management to reduce secondary ignition and toxicity exposure",
    ],
  },
  {
    id: "05",
    title: "Restoration",
    description:
      "Enables faster recovery.\n\nDocuments the event and restores operations with minimal downtime.",
    details: [
      "Post-incident documentation package for AHJ and insurance purposes",
      "Clearance assessment and re-commissioning support",
      "Incident data export for root cause and fleet learning",
    ],
  },
];

const platformOutcomes: PlatformOutcome[] = [
  {
    headline: "Prevents multi-system failure",
    body: "A single battery event can cascade across infrastructure.\nRFIS contains it at the source.",
  },
  {
    headline: "Reduces downtime and recovery cost",
    body: "Smaller events mean faster recovery.\nLess cleanup. Less disruption.",
  },
  {
    headline: "Lowers liability and insurance exposure",
    body: "Documented, controlled events reduce uncertainty for insurers, regulators, and operators.",
  },
];

const deploymentApplications: DeploymentApplication[] = [
  {
    image: "/images/data-center.jpg",
    icon: <Server className="h-5 w-5 text-primary" />,
    title: "Data Centers",
    description:
      "A single battery failure can cascade across rack-level and room-level infrastructure.",
    href: "/applications#data-centers",
  },
  {
    image: "/images/saudi-bess.jpg",
    icon: <Battery className="h-5 w-5 text-primary" />,
    title: "Energy Storage",
    description:
      "Containerized battery systems can propagate cell-to-cell at utility scale.",
    href: "/applications#energy-storage",
  },
  {
    image: "/images/aerospace.jpg",
    icon: <Plane className="h-5 w-5 text-primary" />,
    title: "Aviation & Aerospace",
    description:
      "Lithium-based failures in confined systems require immediate interruption before escalation.",
    href: "/applications#aviation-aerospace",
  },
  {
    image: "/images/pentagon.jpg",
    icon: <Shield className="h-5 w-5 text-primary" />,
    title: "Federal & Defense",
    description:
      "Mission-critical facilities require documented, bounded, and recoverable outcomes.",
    href: "/applications#federal-defense",
  },
  {
    image: "/images/charging-station.jpg",
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Charging Infrastructure",
    description:
      "One vehicle event can cascade across adjacent charging bays in high-density environments.",
    href: "/applications#charging-infrastructure",
  },
  {
    image: "/images/ev-fleet.jpg",
    icon: <Car className="h-5 w-5 text-primary" />,
    title: "EV Environments",
    description:
      "Parked vehicles in close proximity increase the risk of multi-asset propagation events.",
    href: "/applications#ev-environments",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden bg-background">
        {/* Subtle amber glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <SectionLabel>The Platform</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
                RFIS Is A System.
                <br />
                Not A Product.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                RFIS works across multiple layers — detecting early signals,
                stopping spread, and containing the event before it escalates.
              </p>
            </div>

            {/* Right: Hero image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/hero-platform.jpg"
                  alt="RFIS residential edge system diagram showing Home Battery System, Detection Node, EV Charging, and Containment Zone"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Radial gradient fade to black */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 50%, #03050A 100%)",
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(3, 5, 10, 0.25)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: System Architecture (Five Layers) ─────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>System Architecture</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4 leading-[1.1]">
            Five Layers. One System. No Spread.
          </h2>
          <p className="text-base md:text-lg font-semibold text-muted-foreground max-w-3xl mb-16">
            System-Wide Cascade Events Can Result In Multi-Million Dollar Losses
            And Extended Downtime
          </p>

          <div className="divide-y divide-border border-t border-border">
            {systemLayers.map((layer) => (
              <div
                key={layer.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 items-start"
              >
                {/* Number + Title */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="text-3xl md:text-4xl font-bold text-primary font-mono leading-none">
                    {layer.id}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {layer.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {layer.description}
                  </p>
                </div>

                {/* Bullet details */}
                <div className="lg:col-span-5">
                  <ul className="space-y-3">
                    {layer.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Operating At The Chemistry Layer ───────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Mechanism</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                Operating At The Chemistry Layer
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                RFIS intervention targets the electrochemical failure mechanism —
                not the downstream thermal or combustion event that results from
                unchecked propagation. This distinction is architecturally
                significant.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Thermal runaway in lithium-chemistry cells is self-oxidizing —
                the cell generates its own oxygen as part of the failure
                chemistry. Suppression systems designed around the fire triangle
                (fuel, heat, oxygen) cannot interrupt a process that is
                chemically autonomous.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                RFIS engages the failure at the precursor stage — before the
                self-sustaining chemistry establishes — or interrupts the
                propagation vector between cells, limiting cascade to the minimum
                possible boundary.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/chemistry-detection.jpg"
                  alt="Early Signal Detection diagram showing Thermal Signature and RFIS Intervention points"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 90%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Outcomes ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Outcomes</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-16 leading-[1.1]">
            What Changes When RFIS Is In Place
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformOutcomes.map((outcome, i) => (
              <Card
                key={i}
                className="bg-card border-border hover:border-primary/50 transition-colors"
                style={{ maxWidth: '390px' }}
              >
                <CardContent className="p-8 h-full">
                  {/* Amber accent line */}
                  <div className="h-px w-8 bg-primary mb-8" />
                  <h3 className="text-sm font-bold text-foreground mb-4">
                    {outcome.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line" style={{ fontSize: '13px' }}>
                    {outcome.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Deployment Applications ───────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4 leading-[1.1]">
            Built For Systems That Can&apos;t Afford To Fail.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Wherever energy is concentrated, one failure can cascade into
            system-wide loss.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {deploymentApplications.map((app, i) => (
              <Link
                key={i}
                href={app.href}
                className="group relative rounded-xl overflow-hidden h-56 lg:h-64 block"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-2">{app.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {app.title}
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

      {/* ── Section 6: CTA ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            See How RFIS Stops Propagation — Before It Spreads.
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
            Get a detailed breakdown of how RFIS detects early failure, stops propagation, and protects critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact#integration"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white text-white hover:bg-white/10 bg-transparent"
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
