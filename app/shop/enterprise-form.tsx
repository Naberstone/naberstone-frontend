"use client";

import { useState } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle } from "lucide-react";

export function EnterpriseForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">
          Inquiry received.
        </h3>
        <p className="text-sm text-muted-foreground">
          Our team will be in touch within 1–2 business days to discuss your
          requirements.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-lg p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">
            Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">
            Company
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-foreground mb-1.5">
          Message *
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your deployment requirements, quantity needs, or any questions..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={cn(
          buttonVariants({ size: "lg" }),
          "glow-amber w-full sm:w-auto",
          loading && "opacity-70 cursor-wait"
        )}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}
