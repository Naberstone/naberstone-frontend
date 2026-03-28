import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
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
  title: string;
  description: string;
}

// ── Content ─────────────────────────────────────────────────────────────────

const systemLayers: SystemLayer[] = [
  {
    id: "01",
    title: "Sensing",
    description:
      "Multi-modal early indicator detection across thermal, chemical, and electrical signal domains. RFIS sensing identifies the pre-failure signature — not the post-ignition event.",
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
      "Classification and intervention logic that translates sensor signals into calibrated response — distinguishing normal variation from genuine propagation risk.",
    details: [
      "Multi-signal fusion for high-confidence failure classification",
      "Propagation trajectory modeling from real-time sensor state",
      "Graduated response protocol with full audit documentation",
    ],
  },
  {
    id: "03",
    title: "Deployment",
    description:
      "Targeted intervention into the active failure pathway — engaging at the chemistry layer to interrupt propagation before it becomes self-sustaining.",
    details: [
      "Precision deployment timed to the early propagation window",
      "Chemistry-layer intervention targeting failure mechanism",
      "Spatial targeting calibrated to event origin and trajectory",
    ],
  },
  {
    id: "04",
    title: "Containment",
    description:
      "Active management of the event boundary — protecting adjacent infrastructure, managing off-gas accumulation, and preventing secondary ignition.",
    details: [
      "Event boundary definition and monitoring throughout the incident",
      "Adjacent asset protection through isolation and targeted response",
      "Off-gas management to reduce secondary ignition and toxicity",
    ],
  },
  {
    id: "05",
    title: "Restoration",
    description:
      "Structured recovery from a bounded, documented incident — enabling faster return to operations than uncontrolled cascade events.",
    details: [
      "Post-incident documentation for AHJ and insurance purposes",
      "Clearance assessment and re-commissioning support",
      "Incident data export for root cause and fleet learning",
    ],
  },
];

const platformOutcomes: PlatformOutcome[] = [
  {
    headline: "Prevents multi-system failure",
    body: "RFIS intervention at the early propagation window prevents cell-to-cell cascade from establishing — containing the event to the smallest possible boundary before it reaches adjacent modules or racks.",
  },
  {
    headline: "Reduces downtime and recovery cost",
    body: "A bounded, controlled event enables faster facility recovery, reduced contamination cleanup, and lower secondary damage — dramatically shortening the path back to full operational status.",
  },
  {
    headline: "Lowers liability and insurance exposure",
    body: "Every sensing event, decisioning action, and deployment is logged — creating auditable documentation for AHJ submissions, insurance underwriters, and post-incident regulatory review.",
  },
];

const deploymentApplications: DeploymentApplication[] = [
  {
    image: "/images/app-data-centers.jpg",
    title: "Data Centers",
    description:
      "Rack and room-level sensing and containment for UPS battery arrays and backup power infrastructure.",
  },
  {
    image: "/images/app-energy-storage.jpg",
    title: "Energy Storage",
    description:
      "Module-level RFIS integration within containerized battery energy storage systems (BESS).",
  },
  {
    image: "/images/app-aviation.jpg",
    title: "Aviation & Aerospace",
    description:
      "Onboard and ground-support fire interruption for lithium-powered aviation platforms.",
  },
  {
    image: "/images/app-defense.jpg",
    title: "Federal & Defense",
    description:
      "Mission-aligned RFIS for defense and federal civilian lithium-chemistry infrastructure.",
  },
  {
    image: "/images/app-charging.jpg",
    title: "Charging Infrastructure",
    description:
      "Bay-level protection for high-power EVSE installations and charging depots.",
  },
  {
    image: "/images/app-ev.jpg",
    title: "EV Environments",
    description:
      "Facility-level RFIS architecture for multi-vehicle electrified fleet and parking environments.",
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
                Reactive Fire Interruption works across multiple layers —
                sensing, decisioning, deployment, containment, and restoration —
                to stop lithium-chemistry propagation before it cascades into
                system-wide failure.
              </p>
            </div>

            {/* Right: Hero image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <Image
                  src="/images/hero-platform.jpg"
                  alt="RFIS residential edge system diagram showing Home Battery System, Detection Node, EV Charging, and Containment Zone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.15em] uppercase text-muted-foreground text-center">
                RFIS Scales Down To Residential Environments
              </p>
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10"
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-24 lg:py-32 bg-card border-y border-border">
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
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <Image
                  src="/images/chemistry-detection.jpg"
                  alt="Early Signal Detection diagram showing Thermal Signature and RFIS Intervention points"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Outcomes ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
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
              >
                <CardContent className="p-8">
                  {/* Amber accent line */}
                  <div className="h-1 w-12 bg-primary mb-8 rounded-full" />
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {outcome.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Deployment Applications ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-16 leading-[1.1]">
            Built For Systems That Can&apos;t Afford To Fail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploymentApplications.map((app, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors bg-background"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-primary mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/applications"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" })
              )}
            >
              Explore Critical Use Cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            See How RFIS Stops Propagation — Before It Spreads.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            The Naberstone technical overview provides detailed system
            architecture, mechanism description, and deployment context for
            qualified operators, OEMs, and federal evaluators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                buttonVariants({ variant: "outline", size: "lg" })
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
