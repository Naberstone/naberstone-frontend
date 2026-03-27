"use client";

import { useState } from "react";
import {
  Phone,
  FileText,
  Cpu,
  Building2,
  Shield,
  Users,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "@/components/shared/section-label";
import { cn } from "@/lib/utils";

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface ContactPathway {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  forWhom: string;
  cta: string;
}

interface FormState {
  name: string;
  organization: string;
  role: string;
  email: string;
  message: string;
}

interface PartnershipLane {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  forWhom: string;
  process: { step: string; description: string }[];
}

interface StrategicPartner {
  type: string;
  description: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const contactPathways: ContactPathway[] = [
  {
    id: "overview",
    icon: <FileText className="h-5 w-5 text-primary" />,
    title: "Request Technical Overview",
    description:
      "A detailed technical overview of Naberstone's RFIS platform — system architecture, mechanism description, and deployment context. Provided to qualified operators, agencies, and evaluators.",
    forWhom:
      "Infrastructure operators, AHJs, insurance underwriters, and agency evaluators",
    cta: "Request Overview",
  },
  {
    id: "call",
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Schedule Strategic Safety Architecture Call",
    description:
      "A structured technical conversation with Naberstone's engineering team to discuss your specific infrastructure context, propagation risk profile, and RFIS applicability.",
    forWhom:
      "Senior safety and engineering stakeholders at operators, OEMs, and federal programs",
    cta: "Schedule Call",
  },
  {
    id: "integration",
    icon: <Cpu className="h-5 w-5 text-primary" />,
    title: "Request Integration Discussion",
    description:
      "An engineering-level conversation about embedding RFIS capability into your product or infrastructure. Covers design-stage integration, validation approach, and commercial pathway.",
    forWhom:
      "OEM engineering and product teams, system integrators, and platform developers",
    cta: "Request Discussion",
  },
];

const partnershipLanes: PartnershipLane[] = [
  {
    id: "operator",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Operator Deployments",
    description:
      "For facility operators, infrastructure owners, and asset managers evaluating RFIS for their electrified environments. Deployment engagements begin with an infrastructure evaluation and proceed through system specification, validation, and commissioning.",
    forWhom:
      "Data center operators, ESS facility owners, fleet operators, property managers with electrified infrastructure exposure.",
    process: [
      {
        step: "Infrastructure Evaluation",
        description:
          "Assessment of facility propagation exposure, asset class, and regulatory environment — defining the RFIS architecture appropriate to your context.",
      },
      {
        step: "System Specification",
        description:
          "Detailed RFIS specification covering sensing architecture, decisioning parameters, deployment mechanism, and documentation framework.",
      },
      {
        step: "Validation & AHJ Documentation",
        description:
          "Performance validation and production of AHJ submission documentation, insurance evidence packages, and lifecycle records.",
      },
      {
        step: "Commissioning & Lifecycle Support",
        description:
          "System commissioning, operator training, and ongoing lifecycle support including maintenance records and incident documentation.",
      },
    ],
  },
  {
    id: "oem",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "OEM Integrations",
    description:
      "For manufacturers of battery systems, energy storage products, EVSE, and power infrastructure who want to embed RFIS capability at the product level. OEM integration engagements are engineering collaborations beginning at the design stage.",
    forWhom:
      "Battery pack and module manufacturers, ESS container OEMs, EVSE manufacturers, UPS system OEMs, and advanced air mobility platform developers.",
    process: [
      {
        step: "Design Stage Review",
        description:
          "Engineering review of battery system architecture to identify RFIS integration points — sensing placement, intervention mechanism design, and documentation hooks.",
      },
      {
        step: "RFIS Architecture Development",
        description:
          "Co-development of the RFIS architecture embedded within the OEM product — calibrated to the specific battery chemistry, form factor, and use environment.",
      },
      {
        step: "Validation Testing",
        description:
          "Performance validation against UL 9540A and relevant standards — producing the test evidence that supports OEM product compliance claims.",
      },
      {
        step: "Commercial Integration",
        description:
          "Licensing, supply chain, and commercial arrangements for RFIS capability embedded in OEM products at volume.",
      },
    ],
  },
];

const federalPathwayDetails = {
  title: "Federal Pathways",
  description:
    "Naberstone engages with Department of Defense programs, intelligence community facilities, and federal civilian agencies through procurement-aligned processes. Federal engagements require appropriate clearances and procurement vehicles depending on the specific program context.",
  contexts: [
    "Department of Defense — platform and facility programs",
    "Intelligence community — secure facility and remote power applications",
    "DHS and federal civilian — critical infrastructure protection programs",
    "Department of Energy — grid storage and research facility applications",
  ],
  note: "Federal engagement inquiries are handled through direct contact with appropriate clearance and procurement context provided.",
};

const strategicPartners: StrategicPartner[] = [
  {
    type: "AHJ-Facing Integrators",
    description:
      "Fire protection engineering firms and systems integrators with AHJ relationships who can specify and deploy RFIS in their client engagements.",
  },
  {
    type: "Infrastructure Developers",
    description:
      "Data center, ESS facility, and electrified infrastructure developers who want to specify RFIS at the design stage.",
  },
  {
    type: "Channel Partners",
    description:
      "Distribution and channel partners with established relationships in the fire protection, electrical infrastructure, and safety markets.",
  },
  {
    type: "Research Institutions",
    description:
      "University and national laboratory partners supporting materials science research and large-scale fire testing.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    organization: "",
    role: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePathwaySelect(id: string) {
    setSelectedPathway(id);
    const formEl = document.getElementById("contact-form");
    if (formEl) {
      setTimeout(() => {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, oklch(0.72 0.175 48 / 0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.05] mb-8">
            Engage with Naberstone.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Naberstone engages with qualified operators, OEMs, and agencies
            evaluating next-generation infrastructure protection. Select the
            engagement pathway that fits your context.
          </p>
        </div>
      </section>

      {/* Pathway cards */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Engagement Pathways</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mb-16">
            Three pathways. One conversation.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactPathways.map((pathway) => (
              <Card
                key={pathway.id}
                className={cn(
                  "bg-card border cursor-pointer transition-all hover:border-primary/50",
                  selectedPathway === pathway.id
                    ? "border-primary glow-amber"
                    : "border-border"
                )}
                onClick={() => handlePathwaySelect(pathway.id)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">{pathway.icon}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {pathway.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {pathway.description}
                  </p>
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground mb-1">
                      For
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {pathway.forWhom}
                    </p>
                  </div>
                  <button
                    className="flex items-center gap-2 text-xs font-medium text-primary hover:opacity-80 transition-opacity mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePathwaySelect(pathway.id);
                    }}
                  >
                    {pathway.cta} <ArrowRight className="h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="py-24 lg:py-32 bg-card border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: context */}
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Tell us about your context.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Naberstone&apos;s engagement process begins with understanding
                your infrastructure context — the asset class, the regulatory
                environment, and the specific propagation risk you are managing.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                All inquiries are handled with appropriate confidentiality.
                Federal and classified program inquiries will be directed to the
                appropriate engagement channel.
              </p>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="border border-primary/30 rounded-lg p-8 text-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Inquiry received.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Naberstone will review your inquiry and respond through the
                    appropriate channel within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Pathway selector */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                      Engagement Type
                    </label>
                    <select
                      name="context"
                      value={selectedPathway}
                      onChange={(e) => setSelectedPathway(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="">Select an engagement pathway</option>
                      {contactPathways.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title}
                        </option>
                      ))}
                      <option value="operator-deployment">
                        Operator Deployment
                      </option>
                      <option value="oem-integration">OEM Integration</option>
                      <option value="federal">Federal Inquiry</option>
                      <option value="strategic-partnership">
                        Strategic Partnership
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="your@organization.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={formState.organization}
                        onChange={handleChange}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Organization name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formState.role}
                        onChange={handleChange}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Your title or role"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                      placeholder="Brief description of your infrastructure context and what you are evaluating..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full glow-amber"
                  >
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground/50 text-center">
                    Inquiries are reviewed by Naberstone&apos;s technical team
                    and responded to within two business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Lanes */}
      <section className="border-b border-border">
        {partnershipLanes.map((lane, i) => (
          <div
            key={lane.id}
            id={lane.id}
            className={`py-24 lg:py-32 border-b border-border last:border-b-0 ${
              i % 2 !== 0 ? "bg-card" : ""
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Lane overview */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {lane.icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {lane.title}
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {lane.description}
                  </p>
                  <div className="border border-border rounded-lg p-4 bg-secondary/20 mb-8">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      For
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {lane.forWhom}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handlePathwaySelect(
                        lane.id === "operator"
                          ? "operator-deployment"
                          : "oem-integration"
                      )
                    }
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium glow-amber hover:opacity-90 transition-opacity"
                  >
                    Begin Engagement <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

                {/* Process steps */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-8">
                    Engagement Process
                  </p>
                  <div className="space-y-6">
                    {lane.process.map((step, j) => (
                      <div key={j} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="h-6 w-6 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-[9px] font-mono text-primary/60">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                          </div>
                          {j < lane.process.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6 last:pb-0">
                          <h3 className="text-sm font-semibold text-foreground mb-2">
                            {step.step}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Federal Pathways */}
      <section id="federal" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Federal Pathways</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {federalPathwayDetails.title}
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {federalPathwayDetails.description}
              </p>
              <p className="text-xs text-muted-foreground/60 leading-relaxed mb-8 italic">
                {federalPathwayDetails.note}
              </p>
              <button
                onClick={() => handlePathwaySelect("federal")}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Federal Inquiry <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">
                Program Contexts
              </p>
              <ul className="space-y-4">
                {federalPathwayDetails.contexts.map((ctx, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ctx}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section
        id="strategic"
        className="py-24 lg:py-32 bg-card border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Strategic Partnerships</SectionLabel>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Ecosystem relationships.
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-16">
            Naberstone builds strategic relationships with integrators,
            developers, channel partners, and research institutions who expand
            the reach and evidence base of RFIS across the electrified
            infrastructure market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategicPartners.map((partner, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {partner.type}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => handlePathwaySelect("strategic-partnership")}
              className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md text-sm font-medium hover:border-primary/50 transition-colors"
            >
              Discuss a Partnership <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
