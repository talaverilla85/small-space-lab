import type { MetadataRoute } from "next";
import { guides } from "@/lib/content";
import { layoutVariants } from "@/lib/layoutVariants";
import { learnArticles } from "@/lib/learnArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://smallspaceplanner.com";
  const heldForEditorialReview = new Set([
    "half-round-vs-round-drop-leaf-table-studio",
    "deep-closet-narrow-door-storage",
    "studio-apartment-with-toddler-layout",
    "air-purifier-placement-studio-cooking",
    "studio-apartment-senior-dog-layout",
    "dehumidifier-placement-studio-laundry",
    "window-insulation-film-studio-rental",
    "rolling-tv-stand-vs-fixed-studio",
    "fridge-outside-kitchen-small-apartment",
    "bookshelves-drywall-small-rental-anchoring",
    "offsite-storage-small-apartment-worth-it",
    "check-ai-studio-apartment-layout",
    "murphy-bed-drywall-floor-supported-small-apartment",
  ]);


  const specialRoutes = new Set([
    "studio-apartment-layouts/300-sq-ft",
    "studio-apartment-layouts/400-sq-ft",
    "studio-apartment-layouts/500-sq-ft",
    ...layoutVariants.map((item) => "studio-apartment-layouts/" + item.slug),
  ]);

  const toolRoutes = [
    "/tools",
    "/tools/sofa-fit-calculator",
    "/tools/furniture-clearance-calculator",
    "/tools/rug-size-calculator",
    "/tools/tv-distance-calculator",
  ];

  const coreLayoutRoutes = [
    "/studio-apartment-layouts/300-sq-ft",
    "/studio-apartment-layouts/400-sq-ft",
    "/studio-apartment-layouts/500-sq-ft",
  ];

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/studio-apartment-planner", changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/learn", changeFrequency: "weekly", priority: 0.88 },
    { url: base + "/editorial-policy", changeFrequency: "yearly", priority: 0.35 },
    ...learnArticles.filter((article) => !heldForEditorialReview.has(article.slug)).map((article) => ({
      url: base + "/learn/" + article.slug,
      lastModified: new Date(article.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...toolRoutes.map((route,index) => ({
      url: base + route,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 0.78 : 0.8,
    })),
    ...coreLayoutRoutes.map((route) => ({
      url: base + route,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...layoutVariants.map((item) => ({
      url: base + "/studio-apartment-layouts/" + item.slug,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...guides
      .filter((guide) => !specialRoutes.has(guide.slug) && guide.slug !== "contact")
      .map((guide) => ({
        url: base + "/" + guide.slug,
        lastModified: siteUpdated,
        changeFrequency: "monthly" as const,
        priority: guide.category === "Legal" ? 0.2 : 0.7,
      })),
  ];
}
