"use client";

import { useState } from "react";
import { Phone, FileText, Cpu, ArrowRight, Send } from "lucide-react";
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
    // Form submission — connect to backend/CMS here
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
                      <option value="federal">Federal Inquiry</option>
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
    </>
  );
}
