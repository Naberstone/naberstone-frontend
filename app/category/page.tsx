import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "RFIS Category | Naberstone Safety Solutions",
  description:
    "Reactive Fire Interruption Systems (RFIS) — a new category of active safety architecture that stops lithium-chemistry propagation before it becomes catastrophic.",
};

// ─── Content ─────────────────────────────────────────────────────────────────

const rfisIs = [
  "A chemistry-layer safety system that operates before ignition",
  "A propagation interruption architecture — stops cascade before it establishes",
  "Standards-aligned for UL 9540A, NFPA 855, and evolving AHJ requirements",
  "An auditable infrastructure layer with full documentation and compliance traceability",
  "Full lifecycle visibility — from early detection through post-event reporting",
];

const rfisIsNot = [
  "Not a fire suppression system — it does not deploy agent after ignition",
  "Not a detection-only system — detection is only the first stage",
  "Not a passive barrier — RFIS is reactive, active, and intervenes directly",
  "Not a retrofit of existing suppression infrastructure",
  "Not a product — it is a complete system architecture across sensing, decisioning, and deployment",
];

const cascadeStages = [
  {
    number: "01",
    title: "Early Warning",
    description:
      "Electrochemical stress produces measurable off-gas precursors and thermal signatures before visible failure.",
    highlight: true,
    rfisWindow: true,
    boldNote: "This is when RFIS stops it.",
  },
  {
    number: "02",
    title: "One Cell Fails",
    description:
      "A single cell enters thermal runaway. Internal pressure rises, venting begins. Heat generation accelerates.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "03",
    title: "It Starts Spreading",
    description:
      "Thermal energy transfers to adjacent cells. Each new cell entering runaway amplifies the thermal load. The cascade self-sustains.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "04",
    title: "Bigger Fire Event",
    description:
      "Multiple cells in runaway. Off-gas concentration reaches flammability thresholds. Secondary ignition risk becomes severe.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "05",
    title: "Full System Damage",
    description:
      "Propagation crosses module and pack boundaries. Structural and facility damage begins. Recovery timeline extends from hours to weeks.",
    highlight: false,
    rfisWindow: false,
  },
];

const categoryDrivers = [
  {
    number: "01",
    title: "Everything Runs On Batteries",
    description:
      "Lithium chemistry is now embedded in data centers, grid storage, aviation, defense, and public charging — environments where failure consequence is not isolated to the battery.",
  },
  {
    number: "02",
    title: "Standards Are Changing",
    description:
      "UL 9540A and NFPA 855 are establishing compliance environments that require demonstrated propagation control — not just listed components.",
  },
  {
    number: "03",
    title: "Solving The Wrong Problem",
    description:
      "Conventional suppression is architecturally mismatched to electrochemical failure. The fire triangle model does not apply to self-oxidizing thermal runaway chemistry.",
  },
  {
    number: "04",
    title: "Proof Is Now Required",
    description:
      "AHJ submissions, insurance underwriting, and post-incident liability are driving demand for documentable, traceable safety architecture — not just installed equipment.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CategoryPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-category.jpg"
          alt="Fire and explosion scene illustrating the need for reactive fire interruption"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Amber gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, oklch(0.72 0.175 48 / 0.10) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <SectionLabel>Category Definition</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
            Reactive Fire Interruption Systems
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-snug mb-8 font-medium">
            Stops Lithium Fires Before They Spread.
            <br />
            Before They Become Catastrophic.
          </p>
          <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            RFIS represents a fundamental shift from suppression — which
            addresses the downstream flame event — to interruption, which
            targets the upstream failure mechanism at the chemistry layer before
            runaway conditions become self-sustaining.
          </p>
        </div>
      </section>

      {/* ── Section 2: Is / Is Not ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What RFIS Is And Is Not</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            RFIS Is A Different Class Of System
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
            Most systems are built to react after ignition. RFIS is built to
            stop the event before it spreads.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RFIS IS */}
            <div className="rounded-xl border border-primary/30 bg-primary/[0.03] p-8">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-primary">
                  RFIS Is
                </span>
              </div>
              <ul className="space-y-5">
                {rfisIs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RFIS IS NOT */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.02] p-8">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="h-5 w-5 text-amber-400/70" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-amber-400/70">
                  RFIS Is Not
                </span>
              </div>
              <ul className="space-y-5">
                {rfisIsNot.map((item, i) => (
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

      {/* ── Section 3: The Cascade Problem ───────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Cascade Problem</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            It&rsquo;s Not A Fire. It&rsquo;s A Cascade.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
            Fires from batteries don&rsquo;t start big. They start small — and
            spread fast. If you wait too long, it&rsquo;s too late.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Cascade timeline */}
            <div className="relative">
              {cascadeStages.map((stage, i) => (
                <div key={i} className="flex gap-6 mb-0">
                  {/* Timeline rail */}
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "h-10 w-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono transition-colors",
                        stage.highlight
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground"
                      )}
                    >
                      {stage.number}
                    </div>
                    {i < cascadeStages.length - 1 && (
                      <div
                        className={cn(
                          "w-px flex-1 min-h-[24px]",
                          i === 0 ? "bg-primary/30" : "bg-border"
                        )}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-1.5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3
                        className={cn(
                          "text-base font-semibold",
                          stage.highlight ? "text-primary" : "text-foreground"
                        )}
                      >
                        {stage.title}
                      </h3>
                      {stage.rfisWindow && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase text-primary">
                          RFIS Window
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {stage.description}
                      {stage.boldNote && (
                        <>
                          {" "}
                          <span className="font-semibold text-primary">
                            {stage.boldNote}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Technical diagrams */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/rfis-architecture-stack.jpg"
                  alt="RFIS architecture stack — hexagonal system diagram showing layered safety architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/cell-system-flow.jpg"
                  alt="Cell system flow diagram — RFIS detectors, charging bays, and system integration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Now ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why This Category Emerges Now</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            The Shift Is Already Happening
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
            Fire protection didn&rsquo;t evolve with electrification. Now the
            consequences are showing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryDrivers.map((driver) => (
              <div
                key={driver.number}
                className="group rounded-xl border border-border bg-background p-8 hover:border-primary/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-primary/40 mb-4 block">
                  {driver.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {driver.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 max-w-3xl mx-auto">
            Stop The Risk Before It Spreads.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you are an operator evaluating protection architecture, an
            OEM designing lithium-chemistry products, or an agency establishing
            standards — Naberstone can provide technical context aligned to your
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary text-primary hover:bg-primary/10"
              )}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact?type=deployment"
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
