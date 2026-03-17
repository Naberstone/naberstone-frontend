import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Battery,
  Plane,
  Shield,
  Zap,
  Car,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Applications | Naberstone Safety Solutions",
  description:
    "RFIS across critical infrastructure sectors — data centers, energy storage, aviation, defense, charging, and EV environments.",
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface ApplicationSector {
  icon: React.ReactNode;
  name: string;
  whatChanged: string;
  whatFails: string;
  rfisChanges: string;
  details: string[];
}

// ─── Content ─────────────────────────────────────────────────────────────────

const sectors: ApplicationSector[] = [
  {
    icon: <Server className="h-6 w-6 text-primary" />,
    name: "Data Centers",
    whatChanged:
      "Data center power infrastructure has shifted toward high-density lithium battery UPS arrays to meet uptime requirements and reduce footprint. A single data center facility may now hold megawatt-hours of lithium capacity in battery rooms adjacent to critical compute infrastructure.",
    whatFails:
      "A single UPS battery module thermal event can cascade across rack-level or room-level battery systems. Off-gas accumulation in enclosed battery rooms reaches flammability thresholds rapidly. Water-based suppression risks secondary damage to adjacent compute infrastructure. Recovery timelines from uncontrolled events extend from hours to weeks.",
    rfisChanges:
      "RFIS interrupts the propagation pathway at the module boundary — containing the event before it reaches adjacent modules or enters the battery room atmosphere. Documentation supports AHJ and insurance requirements. Operational recovery is measured in hours, not weeks.",
    details: [
      "Module-level sensing and targeted intervention",
      "Off-gas management to reduce secondary ignition risk",
      "Documentation package for facility compliance and insurance",
      "Integration with building management and emergency response systems",
    ],
  },
  {
    icon: <Battery className="h-6 w-6 text-primary" />,
    name: "Energy Storage Systems",
    whatChanged:
      "Grid-scale and commercial battery energy storage systems (BESS) now deploy hundreds to thousands of megawatt-hours of lithium capacity. Containerized ESS installations are operating adjacent to generation assets, substations, and populated areas — raising the consequence stakes of any propagation event.",
    whatFails:
      "Cell-to-cell and module-to-module thermal propagation within containerized BESS can escalate to container-level events. Fire suppression systems inside containers face the same self-oxidizing chemistry problem. NFPA 855 and local AHJ requirements increasingly mandate demonstrated propagation control — not just listed suppression.",
    rfisChanges:
      "RFIS addresses the propagation mechanism within the container and across module boundaries. Early indicator sensing enables intervention before runaway establishes. The documentation evidence produced by RFIS satisfies AHJ performance-based submission requirements.",
    details: [
      "Container and module-level sensing architecture",
      "Integration with battery management system (BMS) data",
      "NFPA 855 and UL 9540A documentation support",
      "Utility and grid operator engagement pathways",
    ],
  },
  {
    icon: <Plane className="h-6 w-6 text-primary" />,
    name: "Aviation & Aerospace",
    whatChanged:
      "Lithium-chemistry batteries are now integral to aircraft auxiliary power units, electric ground support equipment, advanced air mobility platforms, and satellite systems. Each context presents a failure consequence environment where propagation cannot be tolerated.",
    whatFails:
      "Aviation environments have near-zero tolerance for uncontrolled thermal events. Suppression systems are inadequate for self-oxidizing lithium chemistry failure. Regulatory bodies including FAA and EASA are developing requirements that go beyond current suppression-based approaches.",
    rfisChanges:
      "RFIS provides the early intervention and chemistry-layer response that aviation-grade safety requirements demand. Documentable, tested performance evidence supports regulatory submissions. Naberstone engages directly with OEMs and integrators at the design stage.",
    details: [
      "Weight and form-factor constraints addressed at design stage",
      "Regulatory alignment — FAA, EASA, and MIL-SPEC contexts",
      "OEM integration at the battery pack and system design level",
      "Ground support equipment and airport infrastructure applications",
    ],
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    name: "Federal & Defense",
    whatChanged:
      "The Department of Defense and federal civilian agencies are deploying lithium-chemistry energy systems across platforms, facilities, and forward operating environments. Mission-critical power systems, unmanned platforms, and secure facilities all now carry electrification risk.",
    whatFails:
      "Federal and defense environments require safety systems that can be validated, documented, and procured through established federal pathways. Legacy suppression systems do not meet the performance documentation requirements emerging from DoD and federal civilian safety programs.",
    rfisChanges:
      "Naberstone provides federal-pathway engagement, validated performance evidence, and RFIS system architecture aligned to defense and federal civilian requirements. Classified and sensitive facility applications are addressed through appropriate procurement channels.",
    details: [
      "Federal procurement pathway alignment (FAR, DFARS)",
      "DoD and intelligence community facility applications",
      "Forward operating environment and expeditionary deployment contexts",
      "Security-appropriate engagement for classified programs",
    ],
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    name: "Charging Infrastructure",
    whatChanged:
      "High-power electric vehicle charging infrastructure is now deployed in shared environments — parking structures, commercial centers, highway corridors — where multiple vehicles charge simultaneously. A single vehicle thermal event in a charging environment can expose adjacent vehicles, infrastructure, and occupants.",
    whatFails:
      "EVSE operators and property owners face liability exposure from charging-related thermal events. Current infrastructure standards do not adequately address propagation risk in multi-vehicle charging environments. Insurance underwriters are increasingly requiring demonstrated risk mitigation.",
    rfisChanges:
      "RFIS provides bay-level sensing and response capability for EVSE installations — enabling rapid detection and intervention at the vehicle-charger interface before events can propagate across adjacent bays or into facility structure.",
    details: [
      "Bay-level sensing for early thermal event detection",
      "Integration with EVSE management and monitoring platforms",
      "Facility owner and operator engagement pathways",
      "Insurance and liability documentation support",
    ],
  },
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    name: "EV Environments",
    whatChanged:
      "Multi-tenant parking structures, commercial fleets, and shared mobility operations now store and charge significant numbers of electric vehicles in enclosed or semi-enclosed environments. Vehicle battery state, age, and prior damage history vary widely across any given fleet — creating unpredictable propagation risk.",
    whatFails:
      "Parking structure fires involving electric vehicles have demonstrated the inadequacy of current suppression approaches. Extended suppression operations, structural damage from extended thermal events, and contaminated runoff are recurring outcomes of uncontrolled vehicle battery cascade events.",
    rfisChanges:
      "RFIS for EV environments addresses the facility-level propagation risk — providing sensing architecture across parking levels, targeted early intervention, and the documentation evidence that facility operators, insurers, and local fire authorities increasingly require.",
    details: [
      "Facility-level sensing architecture across parking levels",
      "Fleet operator and property management engagement",
      "AHJ and local fire authority documentation support",
      "Insurance underwriting engagement and evidence packages",
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, oklch(0.72 0.175 48 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Applications</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Built for high-consequence infrastructure.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            RFIS is designed for the environments where electrification
            concentrates energy at scale — and where propagation failure carries
            operational, financial, and human consequence.
          </p>
        </div>
      </section>

      {/* Sector detail cards */}
      <section className="border-t border-border">
        {sectors.map((sector, i) => (
          <div
            key={sector.name}
            className={`py-24 lg:py-32 border-b border-border ${
              i % 2 !== 0 ? "bg-card" : ""
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Sector header */}
              <div className="flex items-center gap-4 mb-12">
                {sector.icon}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {sector.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* What Changed */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4">
                    What Changed
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sector.whatChanged}
                  </p>
                </div>

                {/* What Fails */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    What Fails Without RFIS
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sector.whatFails}
                  </p>
                </div>

                {/* What RFIS Changes */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-4">
                    What RFIS Changes
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    {sector.rfisChanges}
                  </p>
                  <ul className="space-y-2">
                    {sector.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Your infrastructure context.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              RFIS deployment is calibrated to the specific asset class, facility
              type, and regulatory environment of each engagement. Naberstone
              works with operators and OEMs to define the right architecture
              before deployment begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
              >
                Request Technical Overview
              </Link>
              <Link
                href="/contact#integration"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Discuss Deployment &amp; Integration →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
