import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Server,
  Battery,
  Plane,
  Shield,
  Zap,
  Car,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Applications | Naberstone Safety Solutions",
  description:
    "RFIS across critical infrastructure sectors — data centers, energy storage, aviation, defense, charging, and EV environments.",
};

// ─── Sector data ────────────────────────────────────────────────────────────

interface Sector {
  icon: React.ReactNode;
  name: string;
  boldSubhead: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  /** Overlay labels rendered on top of the image */
  imageLabels?: string[];
  /** When true the image is on the left (even-indexed = text-left by default) */
  imageLeft: boolean;
}

const sectors: Sector[] = [
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    name: "Data Centers",
    boldSubhead: "Hyperscale Outages Can Exceed $5M\u2013$9M Per Hour.",
    body: "A single UPS battery module thermal event can cascade across rack-level or room-level battery systems. Off-gas accumulation in enclosed battery rooms reaches flammability thresholds rapidly. RFIS interrupts the propagation pathway at the module boundary \u2014 containing the event before it reaches adjacent modules or enters the battery room atmosphere.",
    ctaLabel: "See RFIS in Data Centers",
    ctaHref: "/contact",
    image: "/images/app-data-centers.jpg",
    imageAlt:
      "Data center RFIS deployment showing detection node and containment boundary",
    imageLabels: ["DETECTION NODE", "CONTAINMENT BOUNDARY"],
    imageLeft: false,
  },
  {
    icon: <Battery className="h-6 w-6 text-primary" />,
    name: "Energy Storage Systems",
    boldSubhead: "One Failure Can Wipe Out An Entire ESS Site.",
    body: "Cell-to-cell and module-to-module thermal propagation within containerized BESS can escalate to container-level events. RFIS addresses the propagation mechanism within the container and across module boundaries. Early indicator sensing enables intervention before runaway establishes.",
    ctaLabel: "View ESS Protection Model",
    ctaHref: "/contact",
    image: "/images/app-energy-storage.jpg",
    imageAlt:
      "Comparison of uncontrolled propagation versus RFIS interruption in energy storage",
    imageLabels: ["UNCONTROLLED PROPAGATION", "RFIS INTERRUPTION"],
    imageLeft: true,
  },
  {
    icon: <Plane className="h-6 w-6 text-primary" />,
    name: "Aviation & Aerospace",
    boldSubhead: "One Battery Failure Can Ground An Entire Aircraft.",
    body: "Aviation environments have near-zero tolerance for uncontrolled thermal events. Suppression systems are inadequate for self-oxidizing lithium chemistry failure. RFIS provides the early intervention and chemistry-layer response that aviation-grade safety requirements demand.",
    ctaLabel: "See Aviation Integration",
    ctaHref: "/contact",
    image: "/images/app-aviation.jpg",
    imageAlt:
      "Aviation battery propagation versus containment comparison",
    imageLabels: ["PROPAGATION", "CONTAINMENT"],
    imageLeft: false,
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    name: "Federal & Defense",
    boldSubhead: "One Failure Can Compromise Mission-Critical Systems.",
    body: "The Department of Defense and federal civilian agencies are deploying lithium-chemistry energy systems across platforms, facilities, and forward operating environments. Naberstone provides federal-pathway engagement, validated performance evidence, and RFIS system architecture aligned to defense and federal civilian requirements.",
    ctaLabel: "View RFIS Defense",
    ctaHref: "/contact",
    image: "/images/app-defense.jpg",
    imageAlt:
      "RFIS defense application across weapon military installation and tactical system power grid",
    imageLabels: [
      "WEAPON MILITARY INSTALLATION",
      "TACTICAL SYSTEM POWER/GRID SYSTEM",
    ],
    imageLeft: true,
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    name: "Charging Infrastructure",
    boldSubhead: "One Vehicle Failure Can Shut Down An Entire Site.",
    body: "High-power electric vehicle charging infrastructure is now deployed in shared environments \u2014 parking structures, commercial centers, highway corridors. RFIS provides bay-level sensing and response capability for EVSE installations, enabling rapid detection and intervention at the vehicle-charger interface before events can propagate.",
    ctaLabel: "See Charging Integration",
    ctaHref: "/contact",
    image: "/images/app-charging.jpg",
    imageAlt: "RFIS integration with EV charging infrastructure",
    imageLeft: false,
  },
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    name: "EV Environments",
    boldSubhead: "One EV Fire Can Destroy An Entire Facility.",
    body: "Multi-tenant parking structures, commercial fleets, and shared mobility operations now store and charge significant numbers of electric vehicles in enclosed environments. RFIS for EV environments provides sensing architecture across parking levels, targeted early intervention, and the documentation evidence that operators and insurers require.",
    ctaLabel: "View RFIS for EV Environments",
    ctaHref: "/contact",
    image: "/images/app-ev.jpg",
    imageAlt: "RFIS protection for EV parking and fleet environments",
    imageLeft: true,
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ApplicationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden bg-background">
        {/* Subtle amber radial glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Isometric wireframe decorative element */}
        <div className="absolute top-16 right-0 w-[480px] h-[400px] pointer-events-none opacity-[0.07] hidden lg:block">
          <svg
            viewBox="0 0 480 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Isometric 3D wireframe grid */}
            <line x1="120" y1="60" x2="240" y2="120" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="360" y1="60" x2="240" y2="120" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="240" y1="120" x2="240" y2="220" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="120" y1="60" x2="120" y2="160" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="360" y1="60" x2="360" y2="160" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="120" y1="160" x2="240" y2="220" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="360" y1="160" x2="240" y2="220" stroke="currentColor" strokeWidth="1" className="text-primary" />
            {/* Second cube layer */}
            <line x1="180" y1="140" x2="300" y2="200" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="420" y1="140" x2="300" y2="200" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="300" y1="200" x2="300" y2="300" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="180" y1="140" x2="180" y2="240" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="420" y1="140" x2="420" y2="240" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="180" y1="240" x2="300" y2="300" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <line x1="420" y1="240" x2="300" y2="300" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            {/* Third cube layer */}
            <line x1="60" y1="180" x2="180" y2="240" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="300" y1="180" x2="180" y2="240" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="180" y1="240" x2="180" y2="340" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="60" y1="180" x2="60" y2="280" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="300" y1="180" x2="300" y2="280" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="60" y1="280" x2="180" y2="340" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="300" y1="280" x2="180" y2="340" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionLabel>Applications</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Built For High-Consequence Infrastructure.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
            RFIS prevents propagation at the chemistry layer — before fire
            starts, before suppression fails, before the event becomes
            unrecoverable.
          </p>
          <p className="text-base text-foreground/80 font-medium max-w-2xl">
            Data centers. Grid storage. EV infrastructure. Defense systems.
          </p>
        </div>
      </section>

      {/* ── Sector profiles ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        {sectors.map((sector, i) => {
          const isImageLeft = sector.imageLeft;

          return (
            <div
              key={sector.name}
              className={cn(
                "py-24 lg:py-32 border-b border-border",
                i % 2 !== 0 && "bg-card"
              )}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                    isImageLeft && "lg:[direction:rtl] lg:[&>*]:![direction:ltr]"
                  )}
                >
                  {/* ── Text column ── */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      {sector.icon}
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {sector.name}
                      </h2>
                    </div>

                    <p className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-snug">
                      {sector.boldSubhead}
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
                      {sector.body}
                    </p>

                    <div>
                      <Link
                        href={sector.ctaHref}
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" }),
                          "gap-2"
                        )}
                      >
                        {sector.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* ── Image column ── */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
                    <Image
                      src={sector.image}
                      alt={sector.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Image overlay labels */}
                    {sector.imageLabels && sector.imageLabels.length > 0 && (
                      <div className="absolute inset-0 flex flex-col justify-end p-4 gap-2 pointer-events-none">
                        <div className="flex flex-wrap gap-2">
                          {sector.imageLabels.map((label) => (
                            <span
                              key={label}
                              className="inline-flex items-center rounded bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-primary"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/app-data-centers.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        {/* Amber glow accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, oklch(0.72 0.175 48 / 0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Protect What Your Infrastructure Can&apos;t Afford To Lose.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              RFIS deployment is calibrated to the specific asset class,
              facility type, and regulatory environment of each engagement.
              Naberstone works with operators and OEMs to define the right
              architecture before deployment begins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Technical Overview
              </Link>
              <Link
                href="/contact#integration"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2"
                )}
              >
                Discuss Deployment & Integration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
