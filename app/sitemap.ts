import type { MetadataRoute } from "next";
import { guides } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://small-space-lab.vercel.app";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...guides.map((guide) => ({
      url: `${base}/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: guide.category === "Legal" ? 0.2 : 0.7,
    })),
  ];
}
