import type { MetadataRoute } from "next";
import { guides } from "@/lib/content";
import { layoutVariants } from "@/lib/layoutVariants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://small-space-lab-bgnb.vercel.app";
  const now = new Date();

  const specialRoutes = new Set([
    "studio-apartment-layouts/300-sq-ft",
    "studio-apartment-layouts/400-sq-ft",
    "studio-apartment-layouts/500-sq-ft",
  ]);

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/studio-apartment-planner`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...layoutVariants.map((item) => ({
      url: `${base}/studio-apartment-layouts/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...guides
      .filter((guide) => !specialRoutes.has(guide.slug))
      .map((guide) => ({
        url: `${base}/${guide.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: guide.category === "Legal" ? 0.2 : 0.7,
      })),
  ];
}
