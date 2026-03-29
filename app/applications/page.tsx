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
  id: string;
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
    id: "data-centers",
    icon: <Server className="h-6 w-6 text-primary" />,
    name: "Data Centers",
    boldSubhead: "Hyperscale Outages Can Exceed $5M\u2013$9M Per Hour.",
    body: "Downtime isn\u2019t just disruption \u2014 it\u2019s lost revenue in real time.\n\nWhen one cell fails, heat spreads rack-to-rack \u2014 triggering outages, damaging equipment, and escalating into facility-wide downtime.\n\nRFIS stops the reaction at the source \u2014 preventing cascade, reducing downtime, and protecting revenue, assets, and insurable risk.",
    ctaLabel: "See RFIS in Data Centers",
    ctaHref: "/contact",
    image: "/images/cutaway-installation-view.jpg",
    imageAlt:
      "Data center RFIS deployment showing detection node and containment boundary",
    imageLabels: ["DETECTION NODE", "CONTAINMENT BOUNDARY"],
    imageLeft: false,
  },
  {
    id: "energy-storage",
    icon: <Battery className="h-6 w-6 text-primary" />,
    name: "Energy Storage Systems",
    boldSubhead: "One Failure Can Wipe Out An Entire ESS Site.",
    body: "Grid-scale systems concentrate massive amounts of energy in a single location.\n\nWhen one cell fails, events spread across modules \u2014 destroying assets, triggering shutdowns, and forcing extended downtime.\n\nRFIS stops the reaction early \u2014 preventing sitewide loss, reducing downtime, and protecting insurable value.",
    ctaLabel: "View ESS Protection Model",
    ctaHref: "/contact",
    image: "/images/rfis-bess.jpg",
    imageAlt:
      "Comparison of uncontrolled propagation versus RFIS interruption in energy storage",
    imageLabels: ["UNCONTROLLED PROPAGATION", "RFIS INTERRUPTION"],
    imageLeft: true,
  },
  {
    id: "aviation-aerospace",
    icon: <Plane className="h-6 w-6 text-primary" />,
    name: "Aviation & Aerospace",
    boldSubhead: "One Battery Failure Can Ground An Entire Aircraft.",
    body: "Lithium systems are embedded in aircraft and mission-critical equipment.\n\nWhen failure occurs, there is no room for spread \u2014 a single event can force groundings, delays, and regulatory consequences.\n\nRFIS intervenes before escalation \u2014 protecting operations, reducing risk exposure, and enabling certifiable safety performance.",
    ctaLabel: "See Aviation Integration",
    ctaHref: "/contact",
    image: "/images/rfis-aviation.jpg",
    imageAlt:
      "Aviation battery propagation versus containment comparison",
    imageLabels: ["PROPAGATION", "CONTAINMENT"],
    imageLeft: false,
  },
  {
    id: "federal-defense",
    icon: <Shield className="h-6 w-6 text-primary" />,
    name: "Federal & Defense",
    boldSubhead: "One Failure Can Compromise Mission-Critical Systems.",
    body: "Electrification is moving into high-risk, mission-critical environments.\n\nWhen systems fail without containment, assets are lost, operations are disrupted, and compliance risk increases.\n\nRFIS delivers controlled, documented containment \u2014 protecting mission continuity and meeting federal performance requirements.",
    ctaLabel: "View RFIS Defense",
    ctaHref: "/contact",
    image: "/images/app-defense-v2.png",
    imageAlt:
      "RFIS defense application across weapon military installation and tactical system power grid",
    imageLabels: [
      "SECURE MILITARY INSTALLATION",
      "TACTICAL SYSTEM VISUALIZATION",
    ],
    imageLeft: true,
  },
  {
    id: "charging-infrastructure",
    icon: <Zap className="h-6 w-6 text-primary" />,
    name: "Charging Infrastructure",
    boldSubhead: "One Vehicle Failure Can Shut Down An Entire Site.",
    body: "High-power charging environments concentrate vehicles, energy, and public exposure.\n\nWhen a single vehicle fails, events spread across bays \u2014 forcing shutdowns, damaging infrastructure, and increasing liability.\n\nRFIS stops propagation at the source \u2014 keeping stations operational and reducing repair, downtime, and insurance exposure.",
    ctaLabel: "See Charging Integration",
    ctaHref: "/contact",
    image: "/images/rfis-ev-charging-infra.jpg",
    imageAlt: "RFIS integration with EV charging infrastructure",
    imageLeft: false,
  },
  {
    id: "ev-environments",
    icon: <Car className="h-6 w-6 text-primary" />,
    name: "EV Environments",
    boldSubhead: "One EV Fire Can Destroy An Entire Facility.",
    body: "Shared EV environments concentrate vehicles in confined spaces.\n\nWhen failure occurs, fires spread across vehicles and infrastructure \u2014 leading to costly repairs, downtime, and insurance claims.\n\nRFIS contains the event early \u2014 minimizing damage, reducing losses, and keeping facilities operational.",
    ctaLabel: "View RFIS for EV Environments",
    ctaHref: "/contact",
    image: "/images/maritime-shipping-freight.jpg",
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
        {/* Background architecture diagram */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/cell-system-flow-v3.jpg"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionLabel>Applications</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Built For High-Consequence Infrastructure.
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed mb-4">
            When energy is concentrated at scale, failure doesn&rsquo;t stay local. RFIS prevents
            propagation that leads to downtime, asset loss, and operational disruption.
          </p>
          <p className="text-base text-white font-medium max-w-2xl">
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
              id={sector.id}
              className={cn(
                "py-24 lg:py-32 border-b border-border scroll-mt-20",
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
                  <div className={cn("order-2 lg:order-none flex flex-col justify-center", isImageLeft && "items-end text-right")}>
                    <div className="flex items-center gap-3 mb-6">
                      {sector.icon}
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {sector.name}
                      </h2>
                    </div>

                    <p className="text-lg font-bold text-foreground mb-6 leading-snug">
                      {sector.boldSubhead}
                    </p>

                    <p className="text-base text-white leading-relaxed mb-8 whitespace-pre-line">
                      {sector.body}
                    </p>

                    <div>
                      <Link
                        href={sector.ctaHref}
                        className={cn(
                          isImageLeft
                            ? cn(buttonVariants({ size: "lg" }))
                            : cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 border-primary text-primary hover:bg-primary/10")
                        )}
                      >
                        {sector.ctaLabel}
                        {!isImageLeft && <ArrowRight className="h-4 w-4" />}
                      </Link>
                    </div>
                  </div>

                  {/* ── Image column ── */}
                  <div className="order-1 lg:order-none relative">
                    {!isImageLeft && (
                      <div className="absolute -inset-2 rounded-xl bg-primary/35 blur-lg" />
                    )}
                    <div className={cn(
                      "relative rounded-xl overflow-hidden bg-black",
                      isImageLeft && "border-2 border-primary"
                    )}>
                      <Image
                        src={sector.image}
                        alt={sector.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 lg:py-0 lg:h-[450px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ev-fleet-fire.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex items-center h-full">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Protect What Your Infrastructure Can&apos;t Afford To Lose.
            </h2>
            <div className="space-y-4 mb-10">
              <p className="text-base text-white/80 leading-relaxed">
                Every system fails differently — but the cost of failure is always high
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                RFIS is engineered around your infrastructure, your risk exposure, and your downtime cost
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                Deployment is defined before failure happens — so it never becomes a cascade event
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
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
                  "gap-2 border-white text-white hover:bg-white/10 bg-transparent"
                )}
              >
                Schedule Deployment Discussion
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
