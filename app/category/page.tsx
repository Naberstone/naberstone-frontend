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
  { bold: "Chemistry-layer system", rest: "stops failure before it spreads" },
  { bold: "Propagation interruption", rest: "not fire reaction" },
  { bold: "Standards-aligned", rest: "UL 9540A + NFPA 855" },
  { bold: "Auditable infrastructure layer", rest: "full lifecycle visibility" },
];

const rfisIsNot = [
  { bold: "Not fire suppression", rest: "does not wait for flames to begin" },
  { bold: "Not detection-only", rest: "detection is just the first step" },
  { bold: "Not passive", rest: "actively intervenes" },
  { bold: "Not retrofit", rest: "built into architecture" },
  { bold: "Not a product", rest: "a full system" },
];

const cascadeStages = [
  {
    number: "01",
    title: "Early Warning",
    description:
      "The battery starts to fail.\nYou can't see flames yet.\nBut signs are there.",
    highlight: true,
    rfisWindow: true,
    boldNote: "This is when RFIS stops it.",
  },
  {
    number: "02",
    title: "One Cell Fails",
    description:
      "One battery cell overheats.\nPressure builds.\nHeat starts spreading.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "03",
    title: "It Starts Spreading",
    description:
      "Nearby cells get hotter.\nMore cells begin to fail.\nThe chain reaction starts.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "04",
    title: "Bigger Fire Event",
    description:
      "Multiple cells fail together.\nDangerous gases build up.\nThe fire grows fast.",
    highlight: false,
    rfisWindow: false,
  },
  {
    number: "05",
    title: "Full System Damage",
    description:
      "The failure spreads across the system.\nEquipment is damaged.\nRecovery can take weeks.",
    highlight: false,
    rfisWindow: false,
  },
];

const categoryDrivers = [
  {
    number: "01",
    title: "Everything Runs On Batteries",
    description:
      "Batteries power modern infrastructure.\nWhen one fails, the impact spreads beyond a single system.",
  },
  {
    number: "02",
    title: "Standards Are Changing",
    description:
      "Safety is no longer about components.\nIt's about proving fires can be stopped from spreading.",
  },
  {
    number: "03",
    title: "Solving The Wrong Problem",
    description:
      "Old systems fight flames after they start.\nBattery failures spread before that even works.",
  },
  {
    number: "04",
    title: "Proof Is Now Required",
    description:
      "Operators must show fires can be contained.\nNot assumed — proven, documented, and repeatable.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CategoryPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative flex items-center overflow-hidden py-24 lg:py-0" style={{ minHeight: '559px' }}>
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center h-full w-full">
          <SectionLabel>Category Definition</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px] font-bold text-white max-w-5xl mb-6">
            Reactive Fire Interruption Systems
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl leading-snug mb-8 font-semibold">
            Stops Lithium Fires Before They Spread.
            <br />
            Before They Become Catastrophic.
          </p>
          <div className="space-y-4 max-w-2xl">
            <p className="text-base text-white leading-relaxed">
              Battery fires spread in seconds.
              <br />
              Legacy systems respond after the damage begins.
            </p>
            <p className="text-base text-white leading-relaxed">
              RFIS stops the reaction at the source —
              <br />
              before it becomes a cascading event.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Is / Is Not ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What RFIS Is And Is Not</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            RFIS Is A Different Class Of System.
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-4xl mb-16 leading-relaxed font-semibold">
            Most Systems Are Built To React After Ignition. RFIS Is Built To
            Stop The Event Before It Spreads.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RFIS IS */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-primary">
                  RFIS Is
                </span>
              </div>
              <ul className="space-y-6">
                {rfisIs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{item.bold}</span>
                      {" — "}{item.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RFIS IS NOT */}
            <div className="relative rounded-xl p-8">
              <div className="absolute inset-4 rounded-xl bg-primary/8 blur-sm" />
              <div className="relative rounded-xl border border-primary/40 bg-primary/[0.08] p-8">
                <div className="flex items-center gap-3 mb-8">
                  <XCircle className="h-5 w-5 text-white" />
                  <span className="text-sm font-bold tracking-[0.15em] uppercase text-white">
                    RFIS Is Not
                  </span>
                </div>
                <ul className="space-y-6">
                  {rfisIsNot.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-white mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-white/80 leading-relaxed">
                        <span className="font-semibold text-white">{item.bold}</span>
                        {" — "}{item.rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Cascade Problem ───────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>The Cascade Problem</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            It&rsquo;s Not A Fire. It&rsquo;s A Cascade.
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-4xl mb-2 leading-relaxed font-semibold">
            Fires From Batteries Don&rsquo;t Start Big.
            <br />
            They Start Small — And Spread Fast.
          </p>
          <p className="text-base md:text-lg text-foreground max-w-4xl mb-16 leading-relaxed font-semibold">
            If You Wait Too Long, It&rsquo;s Too Late.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                  <div
                    className={cn(
                      "flex-1",
                      stage.highlight ? "relative mb-8" : "pb-8 pt-1.5"
                    )}
                  >
                    {stage.highlight && (
                      <>
                        <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg" />
                        <div className="absolute inset-0 rounded-lg bg-black border border-border" />
                      </>
                    )}
                    <div className={cn(stage.highlight && "relative p-4")}>
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
                        <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                          RFIS Window
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md whitespace-pre-line">
                      {stage.description}
                      {stage.boldNote && (
                        <>
                          {"\n"}
                          <span className="font-semibold text-foreground">
                            {stage.boldNote}
                          </span>
                        </>
                      )}
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Technical diagram */}
            <div className="rounded-xl border-2 border-primary overflow-hidden">
              <Image
                src="/images/rfis-ev-charging-v2.jpg"
                alt="RFIS Containment boundary and EV Charging Infrastructure diagram"
                width={2618}
                height={2869}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Now ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why This Category Emerges Now</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-4xl mb-4">
            The Shift Is Already Happening.
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-4xl mb-16 leading-relaxed font-semibold">
            Fire Protection Didn&rsquo;t Evolve With Electrification.
            <br />
            Now The Consequences Are Showing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryDrivers.map((driver) => (
              <div
                key={driver.number}
                className="group rounded-xl border border-border p-8 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-mono font-bold text-primary">
                    {driver.number}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {driver.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            Stop The Risk Before It Spreads.
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-2">
            See how RFIS fits into your systems, and how it stops failure before it spreads.
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
            Fires from batteries can spread fast.
            <br />
            Our system stops them early — before they get worse.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "glow-amber"
              )}
            >
              Request Technical Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact?type=deployment"
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
