import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Cpu, Shield, Users, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partnerships | Naberstone Safety Solutions",
  description:
    "Naberstone partnership pathways — operator deployments, OEM integrations, federal procurement, and strategic relationships.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface PartnershipLane {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  forWhom: string;
  process: EngagementStep[];
  href: string;
}

interface EngagementStep {
  step: string;
  description: string;
}

interface StrategicPartner {
  type: string;
  description: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const partnershipLanes: PartnershipLane[] = [
  {
    id: "operator",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Operator Deployments",
    description:
      "For facility operators, infrastructure owners, and asset managers evaluating RFIS for their electrified environments. Deployment engagements begin with an infrastructure evaluation and proceed through system specification, validation, and commissioning.",
    forWhom:
      "Data center operators, ESS facility owners, fleet operators, property managers with electrified infrastructure exposure.",
    process: [
      {
        step: "Infrastructure Evaluation",
        description:
          "Assessment of facility propagation exposure, asset class, and regulatory environment — defining the RFIS architecture appropriate to your context.",
      },
      {
        step: "System Specification",
        description:
          "Detailed RFIS specification covering sensing architecture, decisioning parameters, deployment mechanism, and documentation framework.",
      },
      {
        step: "Validation & AHJ Documentation",
        description:
          "Performance validation and production of AHJ submission documentation, insurance evidence packages, and lifecycle records.",
      },
      {
        step: "Commissioning & Lifecycle Support",
        description:
          "System commissioning, operator training, and ongoing lifecycle support including maintenance records and incident documentation.",
      },
    ],
    href: "/contact#evaluation",
  },
  {
    id: "oem",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "OEM Integrations",
    description:
      "For manufacturers of battery systems, energy storage products, EVSE, and power infrastructure who want to embed RFIS capability at the product level. OEM integration engagements are engineering collaborations beginning at the design stage.",
    forWhom:
      "Battery pack and module manufacturers, ESS container OEMs, EVSE manufacturers, UPS system OEMs, and advanced air mobility platform developers.",
    process: [
      {
        step: "Design Stage Review",
        description:
          "Engineering review of battery system architecture to identify RFIS integration points — sensing placement, intervention mechanism design, and documentation hooks.",
      },
      {
        step: "RFIS Architecture Development",
        description:
          "Co-development of the RFIS architecture embedded within the OEM product — calibrated to the specific battery chemistry, form factor, and use environment.",
      },
      {
        step: "Validation Testing",
        description:
          "Performance validation against UL 9540A and relevant standards — producing the test evidence that supports OEM product compliance claims.",
      },
      {
        step: "Commercial Integration",
        description:
          "Licensing, supply chain, and commercial arrangements for RFIS capability embedded in OEM products at volume.",
      },
    ],
    href: "/contact#integration",
  },
];

const federalPathwayDetails = {
  title: "Federal Pathways",
  description:
    "Naberstone engages with Department of Defense programs, intelligence community facilities, and federal civilian agencies through procurement-aligned processes. Federal engagements require appropriate clearances and procurement vehicles depending on the specific program context.",
  contexts: [
    "Department of Defense — platform and facility programs",
    "Intelligence community — secure facility and remote power applications",
    "DHS and federal civilian — critical infrastructure protection programs",
    "Department of Energy — grid storage and research facility applications",
  ],
  note: "Federal engagement inquiries are handled through direct contact with appropriate clearance and procurement context provided.",
};

const strategicPartners: StrategicPartner[] = [
  {
    type: "AHJ-Facing Integrators",
    description:
      "Fire protection engineering firms and systems integrators with AHJ relationships who can specify and deploy RFIS in their client engagements.",
  },
  {
    type: "Infrastructure Developers",
    description:
      "Data center, ESS facility, and electrified infrastructure developers who want to specify RFIS at the design stage.",
  },
  {
    type: "Channel Partners",
    description:
      "Distribution and channel partners with established relationships in the fire protection, electrical infrastructure, and safety markets.",
  },
  {
    type: "Research Institutions",
    description:
      "University and national laboratory partners supporting materials science research and large-scale fire testing.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Partnerships</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Two lanes. One outcome.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Naberstone engages through operator deployments and OEM integrations
            — building RFIS capability into infrastructure as operated and as
            manufactured. Both pathways produce the same outcome: validated
            propagation interruption in high-consequence environments.
          </p>
        </div>
      </section>

      {/* Main partnership lanes */}
      <section className="border-t border-border">
        {partnershipLanes.map((lane, i) => (
          <div
            key={lane.id}
            id={lane.id}
            className={`py-24 lg:py-32 border-b border-border ${
              i % 2 !== 0 ? "bg-card" : ""
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Lane overview */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {lane.icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {lane.title}
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {lane.description}
                  </p>
                  <div className="border border-border rounded-lg p-4 bg-secondary/20 mb-8">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      For
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {lane.forWhom}
                    </p>
                  </div>
                  <Link
                    href={lane.href}
                    className={cn(buttonVariants({ size: "sm" }), "glow-amber")}
                  >
                    Begin Engagement <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>

                {/* Process steps */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-8">
                    Engagement Process
                  </p>
                  <div className="space-y-6">
                    {lane.process.map((step, j) => (
                      <div key={j} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="h-6 w-6 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-[9px] font-mono text-primary/60">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                          </div>
                          {j < lane.process.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6 last:pb-0">
                          <h3 className="text-sm font-semibold text-foreground mb-2">
                            {step.step}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Federal Pathways */}
      <section id="federal" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Federal Pathways</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {federalPathwayDetails.title}
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {federalPathwayDetails.description}
              </p>
              <p className="text-xs text-muted-foreground/60 leading-relaxed mb-8 italic">
                {federalPathwayDetails.note}
              </p>
              <Link
                href="/contact#federal"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Federal Inquiry <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">
                Program Contexts
              </p>
              <ul className="space-y-4">
                {federalPathwayDetails.contexts.map((ctx, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ctx}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section id="strategic" className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Strategic Partnerships</SectionLabel>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Ecosystem relationships.
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-16">
            Naberstone builds strategic relationships with integrators,
            developers, channel partners, and research institutions who expand
            the reach and evidence base of RFIS across the electrified
            infrastructure market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategicPartners.map((partner, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {partner.type}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Discuss a Partnership <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
