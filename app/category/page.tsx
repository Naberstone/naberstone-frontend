import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "RFIS Category | Naberstone Safety Solutions",
  description:
    "Reactive Fire Interruption Systems (RFIS) — understanding the category that addresses lithium-chemistry propagation in critical infrastructure.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface IsIsNot {
  is: string[];
  isNot: string[];
}

interface CascadeStage {
  stage: string;
  description: string;
}

interface CategoryDriver {
  driver: string;
  detail: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const rfisDefinition = {
  short:
    "Reactive Fire Interruption Systems (RFIS) are active safety architectures that detect early electrochemical failure signatures, interrupt thermal propagation pathways, and contain event boundaries in lithium-chemistry and high-density electrified environments.",
  long: "RFIS represents a fundamental architectural shift from suppression — which addresses the downstream flame event — to interruption, which addresses the upstream failure mechanism. The system operates at the chemistry layer, targeting the conditions that enable cell-to-cell propagation before runaway conditions become self-sustaining.",
};

const isIsNot: IsIsNot = {
  is: [
    "An active safety architecture operating at the chemistry layer",
    "A propagation interruption system — designed to stop cascade before it establishes",
    "A standards-aligned approach designed for UL 9540A and NFPA 855 compliance evidence",
    "A documentable, auditable infrastructure layer with lifecycle oversight",
    "Designed for the electrochemical failure mode of lithium-based systems",
  ],
  isNot: [
    "A fire suppression system — it does not deploy agent after ignition to reduce flame",
    "A detection-only system — detection is the first stage, not the complete function",
    "A passive barrier system — RFIS is reactive and active in its intervention",
    "A retrofit of existing suppression infrastructure",
    "A single-technology product — it is a system architecture across sensing, decisioning, and deployment",
  ],
};

const cascadeStages: CascadeStage[] = [
  {
    stage: "Early Indicators",
    description:
      "Electrochemical stress begins producing measurable off-gas precursors and thermal signatures before visible failure. This is the RFIS intervention window.",
  },
  {
    stage: "Cell-Level Failure",
    description:
      "A single cell enters thermal runaway. Internal pressure rises, venting begins. Heat generation accelerates. Adjacent cells begin receiving thermal load.",
  },
  {
    stage: "Propagation Onset",
    description:
      "Thermal energy transfers to adjacent cells. Each new cell entering runaway amplifies the thermal load. The cascade begins to self-sustain.",
  },
  {
    stage: "Module-Level Event",
    description:
      "Multiple cells in runaway. Off-gas concentration reaches flammability thresholds. Secondary ignition risk becomes severe. Event boundary expands.",
  },
  {
    stage: "System-Level Loss",
    description:
      "Propagation has crossed module and pack boundaries. Structural and facility damage begins. Recovery timeline extends from hours to weeks.",
  },
];

const categoryDrivers: CategoryDriver[] = [
  {
    driver: "Electrification at infrastructure scale",
    detail:
      "Lithium chemistry is now embedded in data centers, grid storage, aviation, defense, and public charging — environments where failure consequence is not isolated to the battery.",
  },
  {
    driver: "Standards moving to performance-based evidence",
    detail:
      "UL 9540A and NFPA 855 are establishing a compliance environment that requires demonstrated propagation control — not just listed components. Suppression systems cannot provide this evidence.",
  },
  {
    driver: "Failure mode mismatch",
    detail:
      "Conventional suppression is architecturally mismatched to electrochemical failure. The fire triangle model does not apply to self-oxidizing thermal runaway chemistry.",
  },
  {
    driver: "Operator liability and documentation requirements",
    detail:
      "AHJ submissions, insurance underwriting, and post-incident liability are driving demand for documentable, traceable safety architecture — not just installed equipment.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CategoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Category Definition</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Reactive Fire Interruption Systems
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {rfisDefinition.short}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            {rfisDefinition.long}
          </p>
        </div>
      </section>

      {/* Is / Is Not */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What RFIS Is and Is Not</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Precision of category matters.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Is */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                  RFIS Is
                </span>
              </div>
              <ul className="space-y-4">
                {isIsNot.is.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Is Not */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  RFIS Is Not
                </span>
              </div>
              <ul className="space-y-4">
                {isIsNot.isNot.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cascade Problem */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Cascade Problem</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
            Understanding the failure sequence.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Thermal runaway in lithium-chemistry systems is not a fire — it is a
            cascade. Understanding the sequence reveals why RFIS operates at a
            different point than suppression, and why timing determines outcome.
          </p>

          <div className="relative">
            {cascadeStages.map((stage, i) => (
              <div key={i} className="flex gap-8 mb-8 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-8 w-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono ${
                      i === 0
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < cascadeStages.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3
                    className={`text-sm font-semibold mb-2 ${
                      i === 0 ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {stage.stage}
                    {i === 0 && (
                      <span className="ml-3 text-[9px] tracking-[0.15em] uppercase text-primary/60">
                        RFIS Window
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why This Category Emerges Now</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Four converging forces.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryDrivers.map((driver, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono text-primary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {driver.driver}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {driver.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Evaluate RFIS for your infrastructure.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Whether you are an operator evaluating protection architecture, an
              OEM designing lithium-chemistry products, or an agency establishing
              standards — Naberstone can provide technical context aligned to
              your engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Technical Overview
              </Link>
              <Link
                href="/platform"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Explore the Platform <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
