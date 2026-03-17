import type { Metadata } from "next";
import Link from "next/link";
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

// ─── Interfaces ──────────────────────────────────────────────────────────────

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

interface DeploymentContext {
  label: string;
  description: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const systemLayers: SystemLayer[] = [
  {
    id: "01",
    title: "Sensing",
    description:
      "Multi-modal early indicator detection across thermal, chemical, and electrical signal domains. RFIS sensing is designed to identify the pre-failure signature — not the post-ignition event.",
    details: [
      "Thermal gradient monitoring across cell and module boundaries",
      "Off-gas precursor detection at sub-ignition concentrations",
      "Electrical signature analysis for cell-level stress indicators",
      "Continuous multi-point monitoring with low-latency signal processing",
    ],
  },
  {
    id: "02",
    title: "Decisioning",
    description:
      "Classification and intervention logic that translates sensor signals into calibrated response — distinguishing normal operational variation from genuine propagation risk.",
    details: [
      "Multi-signal fusion for high-confidence failure classification",
      "Propagation trajectory modeling from real-time sensor state",
      "Graduated response protocol — escalating from monitoring to intervention",
      "Documentation of decisioning events for AHJ and audit records",
    ],
  },
  {
    id: "03",
    title: "Deployment",
    description:
      "Targeted intervention into the active failure pathway — engaging at the chemistry layer to interrupt propagation before it becomes self-sustaining.",
    details: [
      "Precision deployment timed to the early propagation window",
      "Chemistry-layer intervention targeting failure mechanism, not flame",
      "Spatial targeting calibrated to the event origin and trajectory",
      "Deployment confirmation and event logging for post-incident review",
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
      "Off-gas management to reduce secondary ignition and toxicity exposure",
      "Structural and environmental monitoring during active containment",
    ],
  },
  {
    id: "05",
    title: "Restoration",
    description:
      "Structured recovery from a bounded, documented incident — enabling faster return to operations than uncontrolled cascade events.",
    details: [
      "Post-incident documentation package for AHJ and insurance purposes",
      "Clearance assessment and re-commissioning support",
      "Incident data export for root cause and fleet learning",
      "Lifecycle record update reflecting event history",
    ],
  },
];

const platformOutcomes: PlatformOutcome[] = [
  {
    headline: "Propagation stopped at the origin boundary",
    body: "RFIS intervention at the early propagation window prevents cell-to-cell cascade from establishing — containing the event to the smallest possible boundary.",
  },
  {
    headline: "Documented, auditable safety record",
    body: "Every sensing event, decisioning action, and deployment is logged — creating the documentation evidence required by AHJ submissions, insurance underwriters, and post-incident review.",
  },
  {
    headline: "Operational continuity after the event",
    body: "A bounded, controlled event enables faster facility recovery, reduced contamination cleanup, and lower secondary damage — dramatically shortening the recovery timeline.",
  },
];

const deploymentContexts: DeploymentContext[] = [
  {
    label: "Containerized ESS",
    description:
      "Module-level RFIS integration within containerized battery energy storage systems",
  },
  {
    label: "Data Center UPS",
    description:
      "Rack and room-level sensing and containment for UPS battery arrays",
  },
  {
    label: "Charging Infrastructure",
    description: "Bay-level protection for high-power EVSE installations",
  },
  {
    label: "Fleet & Parking",
    description:
      "Facility-level RFIS architecture for multi-vehicle electrified environments",
  },
  {
    label: "OEM Battery Systems",
    description:
      "Embedded RFIS capability integrated at the pack and module design level",
  },
  {
    label: "Federal Platforms",
    description:
      "Mission-aligned RFIS for defense and federal civilian infrastructure",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, oklch(0.72 0.175 48 / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Platform</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            A system view of RFIS.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Reactive Fire Interruption is not a single technology — it is a
            system architecture spanning five functional layers, from early
            indicator sensing through post-incident restoration.
          </p>
        </div>
      </section>

      {/* System Layers */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>System Architecture</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Five layers. One continuous intervention arc.
          </h2>

          <div className="space-y-px">
            {systemLayers.map((layer, i) => (
              <div
                key={layer.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border last:border-b-0 ${
                  i % 2 === 0 ? "" : "bg-card/30"
                }`}
              >
                {/* Number + title */}
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary/20 font-mono">
                      {layer.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {layer.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                {/* Detail bullets */}
                <div className="lg:col-span-5">
                  <ul className="space-y-3">
                    {layer.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-level mechanism */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Mechanism</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Operating at the chemistry layer.
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
            <div className="border border-border rounded-lg p-8 bg-background">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6">
                The Intervention Window
              </p>
              <div className="space-y-4">
                {[
                  {
                    phase: "Pre-failure",
                    status: "Sensing active",
                    active: false,
                  },
                  {
                    phase: "Early precursor",
                    status: "Classification begins",
                    active: true,
                  },
                  {
                    phase: "Propagation onset",
                    status: "Intervention deployed",
                    active: true,
                  },
                  {
                    phase: "Containment phase",
                    status: "Boundary management",
                    active: true,
                  },
                  {
                    phase: "Post-event",
                    status: "Restoration & documentation",
                    active: false,
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 border-b border-border last:border-0 ${
                      row.active ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <span className="text-xs text-foreground">{row.phase}</span>
                    <span
                      className={`text-xs ${
                        row.active ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Outcomes</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            What RFIS changes about the incident.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformOutcomes.map((outcome, i) => (
              <Card
                key={i}
                className="bg-card border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="h-px w-8 bg-primary mb-6" />
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {outcome.headline}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment contexts */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            RFIS across deployment contexts.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deploymentContexts.map((ctx, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {ctx.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ctx.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/applications"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Detailed Application Profiles{" "}
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Request the technical overview.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            The Naberstone technical overview provides detailed system
            architecture, mechanism description, and deployment context for
            qualified operators, OEMs, and federal evaluators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Request Technical Overview
            </Link>
            <Link
              href="/contact#integration"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discuss Deployment &amp; Integration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
