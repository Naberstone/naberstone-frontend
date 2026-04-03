import { redirect } from "next/navigation";
import type { Metadata } from "next";

// ── UNPUBLISHED ─────────────────────────────────────────────────────────────
// Shop page is temporarily unpublished. To re-enable:
// 1. Restore the ProductPage import and metadata below
// 2. Remove the redirect
// 3. Re-add /shop to sitemap.ts
// 4. Remove /shop from robots.ts disallow list
// 5. Re-add "Shop" to navigation.tsx
// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ShopPage() {
  redirect("/");
}
