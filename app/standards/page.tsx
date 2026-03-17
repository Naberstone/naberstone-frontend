import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Standards & Validation | Naberstone Safety Solutions",
  description:
    "UL 9540A, NFPA 855, and AHJ documentation — the standards context driving the shift to performance-based fire safety for electrified infrastructure.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface StandardsCard {
  code: string;
  title: string;
  context: string;
  rfisRelevance: string;
}

interface CodeAdoptionPoint {
  point: string;
  detail: string;
}

interface ValidationLibraryItem {
  label: string;
  description: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const standardsCards: StandardsCard[] = [
  {
    code: "UL 9540A",
    title:
      "Test Method for Evaluating Thermal Runaway Fire Propagation in Battery Energy Storage Systems",
    context:
      "UL 9540A is the definitive large-scale fire test methodology for characterizing cell-to-cell, module-to-module, and unit-to-unit thermal propagation in battery energy storage systems. It measures the actual propagation behavior of a system — not just the listed status of components.",
    rfisRelevance:
      "RFIS architecture is designed to produce the propagation limitation outcomes that UL 9540A testing evaluates. Systems with documented RFIS intervention demonstrate measurable reduction in propagation spread — producing the test evidence AHJs and insurers require.",
  },
  {
    code: "NFPA 855",
    title:
      "Standard for the Installation of Stationary Energy Storage Systems",
    context:
      "NFPA 855 governs the installation of stationary energy storage systems and is the primary code framework referenced by AHJs in commercial and utility ESS deployments. Its 2026 revision cycle is moving toward performance-based outcome requirements — specifically addressing propagation control.",
    rfisRelevance:
      "RFIS systems are engineered in alignment with NFPA 855's direction toward performance-based safety evidence. Naberstone's documentation framework supports AHJ submission requirements as the 2026 revision takes effect across jurisdictions.",
  },
  {
    code: "AHJ Documentation",
    title:
      "Authority Having Jurisdiction — Performance-Based Submissions",
    context:
      "Authorities Having Jurisdiction increasingly require performance-based documentation for ESS and electrified infrastructure installations — moving beyond prescriptive component listing toward demonstrated outcome evidence. This shift mirrors broader trends in building code toward engineered performance.",
    rfisRelevance:
      "Naberstone's documentation framework produces the submission evidence AHJs require: propagation containment testing, sensor and response performance data, lifecycle maintenance records, and post-incident reporting. RFIS deployments are designed to be auditable from day one.",
  },
];

const codeAdoptionPoints: CodeAdoptionPoint[] = [
  {
    point: "Standards lead, adoption follows",
    detail:
      "UL 9540A and NFPA 855 have established the performance-based framework — but code adoption across jurisdictions is uneven. Early-adopting AHJs are already requiring documented propagation control. The rest will follow.",
  },
  {
    point: "Insurance is moving faster than code",
    detail:
      "Commercial property and infrastructure insurers are adjusting underwriting requirements for electrified assets ahead of formal code adoption — creating market pressure for documented propagation management regardless of local jurisdiction.",
  },
  {
    point: "Incident history is accelerating requirements",
    detail:
      "High-profile ESS and EV fires are accelerating regulatory attention. Each significant incident increases pressure on AHJs, insurers, and operators to require demonstrable propagation control — not just installed suppression.",
  },
  {
    point: "Performance-based submissions are the future",
    detail:
      "As electrification scales, prescriptive codes cannot keep pace with new chemistries and system configurations. Performance-based submissions — supported by test evidence and documented system behavior — are the long-term compliance direction.",
  },
];

const validationLibraryItems: ValidationLibraryItem[] = [
  {
    label: "Propagation Containment Evidence",
    description:
      "Test data demonstrating RFIS boundary containment in standardized scenarios",
  },
  {
    label: "Sensing Performance Data",
    description:
      "Characterization of early indicator detection across temperature, off-gas, and electrical domains",
  },
  {
    label: "Intervention Timing Documentation",
    description:
      "Response time data from precursor detection to intervention deployment",
  },
  {
    label: "AHJ Submission Templates",
    description:
      "Performance-based submission documentation frameworks aligned to NFPA 855",
  },
  {
    label: "Lifecycle Maintenance Records",
    description:
      "Audit trail and documentation structure for ongoing AHJ and insurer requirements",
  },
  {
    label: "Post-Incident Reports",
    description:
      "Structured incident documentation for regulatory, insurance, and operational review",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StandardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, oklch(0.72 0.175 48 / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards &amp; Validation</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            The regulatory landscape is shifting.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            UL 9540A, NFPA 855, and AHJ performance-based submissions are
            establishing a compliance environment that legacy suppression systems
            cannot satisfy. RFIS is designed for this environment.
          </p>
        </div>
      </section>

      {/* Standards cards */}
      <section className="py-24 lg:py-32 border-t border-border" id="ul9540a">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards Context</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Three anchors of the performance-based safety framework.
          </h2>

          <div className="space-y-6">
            {standardsCards.map((standard, i) => (
              <div
                key={i}
                id={i === 1 ? "nfpa855" : undefined}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="bg-card px-8 py-6 border-b border-border">
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-1">
                        {standard.code}
                      </p>
                      <h3 className="text-sm font-medium text-foreground">
                        {standard.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 border-r border-border">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                      Context
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {standard.context}
                    </p>
                  </div>
                  <div className="p-8 bg-secondary/10">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-4">
                      RFIS Relevance
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {standard.rfisRelevance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code adoption lag */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Code Adoption &amp; Performance-Based Submissions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            The standard is set. Adoption follows.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codeAdoptionPoints.map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.point}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Library */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Validation Library</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Documentation that satisfies the compliance environment.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Naberstone&apos;s validation framework is built to produce the
                documentation evidence that AHJs, insurers, and operators need —
                not just at commissioning, but throughout the system lifecycle.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Qualified operators and agencies can request access to the
                Naberstone Validation Library — including test methodology
                summaries, propagation containment evidence, and AHJ submission
                templates.
              </p>
              <Link
                href="/contact#overview"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Validation Library Access{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {validationLibraryItems.map((item, i) => (
                <Card
                  key={i}
                  className="bg-card border-border hover:border-primary/50 transition-colors"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
