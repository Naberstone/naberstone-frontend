import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/shop/", "/shop"],
    },
    sitemap: "https://www.naberstone.com/sitemap.xml",
  };
}
