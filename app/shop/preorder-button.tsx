"use client";

import { useState } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Minus, Plus, Loader2 } from "lucide-react";

interface PreorderButtonProps {
  productId: string;
}

export function PreorderButton({ productId }: PreorderButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePreorder = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Quantity selector */}
      <div className="flex items-center border border-border rounded-md">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="px-3 py-1.5 text-sm font-medium text-foreground min-w-[2rem] text-center tabular-nums">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => Math.min(50, q + 1))}
          className="px-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Preorder button */}
      <button
        onClick={handlePreorder}
        disabled={loading}
        className={cn(
          buttonVariants({ size: "sm" }),
          "glow-amber flex-1",
          loading && "opacity-70 cursor-wait"
        )}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Preorder Now"
        )}
      </button>
    </div>
  );
}
