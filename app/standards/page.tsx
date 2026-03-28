import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, Shield, ClipboardCheck, ArrowRight } from "lucide-react";
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
  icon: React.ElementType;
  code: string;
  title: string;
  context: string;
  rfisRelevance: string;
}

interface ValidationLibraryItem {
  label: string;
  description: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const standardsCards: StandardsCard[] = [
  {
    icon: FileText,
    code: "UL 9540A",
    title:
      "Test Method for Evaluating Thermal Runaway Fire Propagation in Battery Energy Storage Systems",
    context:
      "UL 9540A is the definitive large-scale fire test methodology for characterizing cell-to-cell, module-to-module, and unit-to-unit thermal propagation in battery energy storage systems. It measures the actual propagation behavior of a system — not just the listed status of components.",
    rfisRelevance:
      "RFIS architecture is designed to produce the propagation limitation outcomes that UL 9540A testing evaluates. Systems with documented RFIS intervention demonstrate measurable reduction in propagation spread — producing the test evidence AHJs and insurers require.",
  },
  {
    icon: Shield,
    code: "NFPA 855",
    title:
      "Standard for the Installation of Stationary Energy Storage Systems",
    context:
      "NFPA 855 governs the installation of stationary energy storage systems and is the primary code framework referenced by AHJs in commercial and utility ESS deployments. Its 2026 revision cycle is moving toward performance-based outcome requirements — specifically addressing propagation control.",
    rfisRelevance:
      "RFIS systems are engineered in alignment with NFPA 855's direction toward performance-based safety evidence. Naberstone's documentation framework supports AHJ submission requirements as the 2026 revision takes effect across jurisdictions.",
  },
  {
    icon: ClipboardCheck,
    code: "AHJ DOCUMENTATION",
    title:
      "Authority Having Jurisdiction — Performance-Based Submissions",
    context:
      "Authorities Having Jurisdiction increasingly require performance-based documentation for ESS and electrified infrastructure installations — moving beyond prescriptive component listing toward demonstrated outcome evidence. This shift mirrors broader trends in building code toward engineered performance.",
    rfisRelevance:
      "Naberstone's documentation framework produces the submission evidence AHJs require: propagation containment testing, sensor and response performance data, lifecycle maintenance records, and post-incident reporting. RFIS deployments are designed to be auditable from day one.",
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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-standards.jpg"
          alt="Industrial containers with UL 9540A certification labeling"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <SectionLabel>Standards &amp; Validation</SectionLabel>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
            The Regulatory Landscape Is Shifting.
          </h1>

          <p className="text-lg md:text-xl font-semibold text-white/90 max-w-3xl leading-snug mb-4">
            Systems That Can&apos;t Demonstrate Controlled Failure Behavior Are
            No Longer Approved.
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
            UL 9540A, NFPA 855, and AHJ performance-based submissions are
            establishing a compliance environment that legacy suppression systems
            cannot satisfy. RFIS is designed for this environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact#overview"
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

      {/* ── Three Anchors — Standards Cards ───────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border" id="ul9540a">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Standards Context</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-4xl mb-16">
            Three Anchors Of The Performance-Based Safety Framework.
          </h2>

          <div className="space-y-6">
            {standardsCards.map((standard, i) => {
              const Icon = standard.icon;
              return (
                <div
                  key={i}
                  id={
                    i === 1
                      ? "nfpa855"
                      : i === 2
                        ? "ahj"
                        : undefined
                  }
                  className="border border-border rounded-lg overflow-hidden"
                >
                  {/* Header bar */}
                  <div className="bg-card px-6 md:px-8 py-5 border-b border-border">
                    <div className="flex items-start gap-4">
                      <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-1">
                          {standard.code}
                        </p>
                        <h3 className="text-sm font-medium text-foreground leading-snug">
                          {standard.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Two-column body */}
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Context column */}
                    <div className="p-6 md:p-8 lg:border-r border-border">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                        Context
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {standard.context}
                      </p>
                    </div>

                    {/* RFIS Relevance column */}
                    <div className="p-6 md:p-8 bg-primary/[0.04]">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4">
                        RFIS Relevance
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {standard.rfisRelevance}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Validation Library ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Validation Library</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column — copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Documentation That Satisfies The Compliance Environment.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Naberstone&apos;s validation framework is built to produce the
                documentation evidence that AHJs, insurers, and operators need
                — not just at commissioning, but throughout the system
                lifecycle.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Qualified operators and agencies can request access to the
                Naberstone Validation Library — including test methodology
                summaries, propagation containment evidence, and AHJ
                submission templates.
              </p>
              <Link
                href="/contact#overview"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Validation Library Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right column — validation items */}
            <div className="space-y-3">
              {validationLibraryItems.map((item, i) => (
                <Card
                  key={i}
                  className="bg-card border-border hover:border-primary/50 transition-colors"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
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
