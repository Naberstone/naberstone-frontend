import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Preorder Confirmed | Naberstone Safety Solutions",
  description: "Your preorder has been received.",
};

export default function SuccessPage() {
  return (
    <section className="relative pt-32 pb-24 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
          <CheckCircle className="h-12 w-12 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            Preorder confirmed.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Thank you for your preorder. Your payment has been processed and
            your extinguisher is reserved.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            We&apos;ll send you a confirmation email with your order details and
            estimated delivery timeline. If you have any questions, reach out to
            our team at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className={cn(buttonVariants({ size: "lg" }), "glow-amber")}
            >
              Back to Shop
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
