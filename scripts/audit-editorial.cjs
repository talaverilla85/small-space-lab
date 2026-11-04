// Editorial release gate for standalone learning articles.
// Run: npm run audit:editorial
const fs = require("node:fs");
const path = require("node:path");
const base = path.join(process.cwd(), "app", "learn");
const slugs = fs.readdirSync(base).filter((name) => {
  const p = path.join(base, name, "page.tsx");
  return fs.existsSync(p) && name !== "[slug]";
});
const problems = [];
for (const slug of slugs) {
  const source = fs.readFileSync(path.join(base, slug, "page.tsx"), "utf8");
  const title = source.match(/title\s*:\s*"([^"]+)"/)?.[1];
  const description = source.match(/description\s*:\s*"([^"]+)"/)?.[1];
  const canonical = source.match(/canonical\s*:\s*"([^"]+)"/)?.[1];
  const noindex = /index\s*:\s*false/.test(source);
  const h1Markup = /<h1\b/.test(source);
  const markdown = source.match(/(?:const\s+(?:content|markdown|text)\s*=\s*")([^]*?)(?:";)/)?.[1];
  const markdownH1 = markdown ? /^#\s+[^#]/.test(markdown) : false;
  if (!title || title.length < 25) problems.push(slug + ": missing or short SEO title");
  if (!description || description.length < 70 || description.length > 180) problems.push(slug + ": missing or poorly sized meta description");
  if (canonical !== "/learn/" + slug) problems.push(slug + ": incorrect canonical");
  if (!h1Markup && !markdownH1) problems.push(slug + ": missing H1");
  if (!noindex) problems.push(slug + ": standalone guide must remain noindex until approved");
  if (/Suggested internal links|TODO:|lorem ipsum/i.test(source)) problems.push(slug + ": editorial placeholder");
}
if (problems.length) {
  console.error("Editorial QA failed:\n" + problems.map((x) => " - " + x).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Editorial QA passed for " + slugs.length + " standalone guides (release gate remains noindex).");
}
