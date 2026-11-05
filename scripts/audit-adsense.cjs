// Conservative automated checks. These do not replace a human editorial review.
const fs = require("node:fs");
const path = require("node:path");
const failures = [];
const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const layout = read("app/layout.tsx");
const sitemap = read("app/sitemap.ts");
const robots = read("app/robots.ts");
const footer = read("components/SiteFooter.tsx");
const ads = read("components/AdSlot.tsx");
if (!layout.includes("metadataBase")) failures.push("Missing canonical metadata base");
if (!layout.includes("google-adsense-account")) failures.push("Missing AdSense site verification metadata");
if (/pagead2\.googlesyndication\.com/.test(layout)) failures.push("AdSense runtime loaded before approval/consent review");
if (!ads.includes('NEXT_PUBLIC_ADSENSE_APPROVED === "true"')) failures.push("Ad placements are not approval-gated");
if (!robots.includes("NEXT_PUBLIC_ALLOW_INDEXING")) failures.push("Robots indexing setting missing");
if (!sitemap.includes("heldForEditorialReview")) failures.push("Held articles may enter sitemap");
if (/lastModified:\s*siteUpdated/.test(sitemap)) failures.push("Undefined or invented sitemap update date");
for (const href of ["/about", "/editorial-policy", "/privacy", "/cookie-policy", "/terms"]) {
  if (!footer.includes('href="' + href + '"')) failures.push("Missing footer trust link: " + href);
}
const held = [...sitemap.matchAll(/^\s+"([^"]+)",?$/gm)].map((m) => m[1]).filter((s) => fs.existsSync(path.join(root, "app/learn", s, "page.tsx")));
for (const slug of held) {
  const page = read("app/learn/" + slug + "/page.tsx");
  if (!/index:\s*false/.test(page)) failures.push("Held guide accidentally indexable: " + slug);
}
if (failures.length) {
  console.error("AdSense preflight failed:\n" + failures.map((f) => "- " + f).join("\n"));
  process.exitCode = 1;
} else {
  console.log("AdSense preflight passed (" + held.length + " held guides checked). Manual editorial, UX and live checks still required.");
}
