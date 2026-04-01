"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus first field when modal opens
  useEffect(() => {
    if (open && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
    // Reset form when modal opens
    if (open) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [open]);

  // Escape key support
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: phone || null }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        {status === "success" ? (
          /* ── Success State ─────────────────────────────────────── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              You&apos;re on the list.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We&apos;ll notify you when the next RFIS-X1 release opens.
              Check your email for a confirmation.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center bg-secondary text-foreground font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form State ────────────────────────────────────────── */
          <div className="p-8">
            {/* Header */}
            <div className="mb-6 pr-8">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                RFIS-X1 Waitlist
              </p>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Get notified when it&apos;s back.
              </h3>
              <p className="text-sm text-muted-foreground">
                Join the waitlist for priority access to the next release.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="waitlist-name"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-foreground mb-1.5"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="waitlist-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Your full name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="waitlist-email"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-foreground mb-1.5"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@company.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label
                  htmlFor="waitlist-phone"
                  className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-1.5"
                >
                  Phone Number
                  <span className="text-muted-foreground/50 ml-1 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="waitlist-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <p className="text-[11px] text-muted-foreground/50 mt-1.5">
                  Optional — add your number for priority restock alerts via SMS.
                </p>
              </div>

              {/* Error message */}
              {status === "error" && errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-all active:translate-y-px disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>

              {/* Privacy note */}
              <p className="text-[11px] text-muted-foreground/40 text-center leading-relaxed">
                We&apos;ll only use your information to send RFIS-X1 availability
                and release updates. No spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
