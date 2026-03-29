import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Settings, Shield } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partnerships | Naberstone Safety Solutions",
  description:
    "Two paths to RFIS deployment — operator facility integration and OEM product embedding. Structured engagement for mission-critical infrastructure.",
};

// ─── Content ─────────────────────────────────────────────────────────────────

const facilitySteps = [
  {
    number: "01",
    title: "Infrastructure Evaluation",
    description:
      "We assess your facility, risk exposure, and regulatory requirements — defining how RFIS fits into your system.",
  },
  {
    number: "02",
    title: "System Specification",
    description:
      "We design the sensing, decision, and deployment architecture tailored to your environment.",
  },
  {
    number: "03",
    title: "Validation & Approval",
    description:
      "We generate the test data, documentation, and AHJ submissions required for approval and insurance.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We deploy, train operators, and support the system through its full lifecycle.",
  },
];

const oemSteps = [
  {
    number: "01",
    title: "Design Integration",
    description:
      "We identify where RFIS fits into your system architecture.",
  },
  {
    number: "02",
    title: "System Co-Development",
    description:
      "We embed RFIS into your product — tailored to chemistry, form factor, and use case.",
  },
  {
    number: "03",
    title: "Validation & Certification",
    description:
      "We generate the test data required for UL, NFPA, and AHJ approval.",
  },
  {
    number: "04",
    title: "Commercial Scale",
    description:
      "We support licensing, manufacturing, and deployment at volume.",
  },
];

const programContexts = [
  "Department of Defense — platform and facility programs",
  "Intelligence community — secure facility and remote power applications",
  "DHS and federal civilian — critical infrastructure protection programs",
  "Department of Energy — grid storage and research facility applications",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PartnershipsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <Image
          src="/images/business-meeting.jpg"
          alt="Industrial facility and laboratory environment representing RFIS deployment pathways"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Partnerships</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
            Two Paths To Deployment. One Outcome.
          </h1>
          <p className="text-base text-white max-w-3xl leading-relaxed mb-4">
            RFIS integrates at the operator level and the OEM level — enabling
            deployment across existing infrastructure and new system design
          </p>
          <p className="text-base text-white max-w-2xl leading-relaxed">
            Both pathways deliver the same outcome: controlled failure, no spread
          </p>
        </div>
      </section>

      {/* ── Deploy RFIS Into Your Facility ──────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — title + image */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Deploy RFIS Into Your Facility
                </h2>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/lucid-motors-assembly-line.jpg"
                  alt="Data center facility with battery infrastructure requiring RFIS deployment"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right — engagement process */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-8">
                Engagement Process
              </p>
              <div className="space-y-6 mb-8">
                {facilitySteps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full border border-primary flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono text-primary">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "w-full justify-center gap-2")}
              >
                Schedule Infrastructure Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Embed RFIS Into Your Product ────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — title + image */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Embed RFIS Into Your Product
                </h2>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/rfis-ds1.jpg"
                  alt="RFIS product integration within commercial battery and energy storage systems"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right — engagement process */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-8">
                Engagement Process
              </p>
              <div className="space-y-6 mb-8">
                {oemSteps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full border border-primary flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono text-primary">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact#integration"
                className={cn(buttonVariants({ size: "lg" }), "w-full justify-center gap-2")}
              >
                Start OEM Integration Discussion
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Federal & Mission-Critical ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border" id="federal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — content */}
            <div className="contents lg:block">
              <div className="order-1 lg:order-none">
                <SectionLabel>Federal Pathways</SectionLabel>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    RFIS For Mission-Critical Infrastructure
                  </h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Naberstone supports deployment of RFIS across defense,
                  intelligence, and federal infrastructure programs through
                  procurement-aligned pathways.
                </p>
              </div>
              <div className="order-3 lg:order-none">
                <p className="text-sm text-muted-foreground/60 italic leading-relaxed mb-8">
                  Federal engagement inquiries are handled through direct contact
                  with appropriate clearance and procurement context provided.
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-primary text-primary hover:bg-primary/10"
                  )}
                >
                  See RFIS in Data Centers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — program contexts */}
            <div className="order-2 lg:order-none lg:pt-12">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-8">
                Program Contexts
              </p>
              <div className="space-y-6">
                {programContexts.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
