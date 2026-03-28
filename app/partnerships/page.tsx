import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partnerships | Naberstone Safety Solutions",
  description:
    "Two paths to RFIS deployment — operator facility integration and OEM product embedding. Structured engagement for mission-critical infrastructure.",
};

// ─── Content ─────────────────────────────────────────────────────────────────

const facilityBenefits = [
  "Propagation risk assessment across battery and electrified asset classes",
  "Sensing architecture design calibrated to facility layout and threat profile",
  "Intervention and containment strategy aligned to operational requirements",
  "Full AHJ documentation package for permitting and compliance submissions",
  "Lifecycle monitoring and maintenance framework from day one",
];

const oemBenefits = [
  "Design-stage integration of RFIS sensing and intervention capability",
  "Product-level propagation containment validated through UL 9540A methodology",
  "Embedded documentation and compliance architecture for downstream AHJ approval",
  "Co-engineering engagement with Naberstone's systems and chemistry team",
  "Scalable deployment model from prototype through volume production",
];

const federalCapabilities = [
  "Procurement-aligned engagement for defense and federal civilian programs",
  "Validated performance evidence meeting federal documentation requirements",
  "Classified and sensitive program engagement through appropriate channels",
  "RFIS system architecture aligned to DoD and federal installation standards",
  "Lifecycle documentation and audit trail for federal compliance frameworks",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PartnershipsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-partnerships-oem.jpg"
          alt="Industrial facility and laboratory environment representing RFIS deployment pathways"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <SectionLabel>Deployment Pathways</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
            Two Paths To Deployment. One Outcome.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-6">
            RFIS deploys at the operator level and at the OEM level — providing
            propagation protection whether you manage electrified infrastructure
            or build it.
          </p>
          <p className="text-base text-white/60 max-w-2xl leading-relaxed">
            OEM partners embed RFIS into products and platforms.
            <br />
            Operators deploy RFIS across facilities and infrastructure.
          </p>
        </div>
      </section>

      {/* ── Deploy RFIS Into Your Facility ──────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/data-center.jpg"
                alt="Data center facility with battery infrastructure requiring RFIS deployment"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <SectionLabel>Operator Deployment</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Deploy RFIS Into Your Facility
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                For operators managing lithium-chemistry risk across data
                centers, energy storage installations, EV infrastructure, and
                critical facilities — Naberstone provides a structured
                assessment-to-deployment pathway.
              </p>

              <ul className="space-y-4 mb-10">
                {facilityBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Schedule Facility Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Embed RFIS Into Your Product ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content (left on desktop) */}
            <div className="order-2 lg:order-1">
              <SectionLabel>OEM Integration</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Embed RFIS Into Your Product
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                For OEMs building battery systems, energy storage products, EV
                charging platforms, or electrified infrastructure — Naberstone
                provides a co-engineering pathway to embed RFIS at the product
                level.
              </p>

              <ul className="space-y-4 mb-10">
                {oemBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact#integration"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Integration Discussion
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Image (right on desktop) */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border order-1 lg:order-2">
              <Image
                src="/images/rfis-commercial.jpg"
                alt="RFIS product integration within commercial battery and energy storage systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Federal & Mission-Critical ──────────────────────────────────── */}
      <section className="py-24 lg:py-32" id="federal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionLabel>Federal Pathways</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              RFIS For Mission-Critical Infrastructure
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The Department of Defense and federal civilian agencies are
              deploying lithium-chemistry energy systems across platforms,
              facilities, and forward operating environments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Naberstone provides federal-pathway engagement, validated
              performance evidence, and RFIS system architecture aligned to
              defense and federal civilian requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
              {federalCapabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary text-primary hover:bg-primary/10"
              )}
            >
              Inquire About Federal Engagement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
