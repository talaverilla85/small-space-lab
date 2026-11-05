# AdSense second-application release gate

Status: **NOT READY** until every check is verified against the live production site. A prior application was rejected for low-value content. No approval is guaranteed.

## 1. Production and crawlability
- [ ] Latest production deployment is READY, serves `https://smallspaceplanner.com`, and matches the current main branch.
- [ ] Run `npm run build` and `npm run audit:editorial` successfully; resolve any failures rather than bypassing them.
- [ ] Verify homepage, planner, learning library, key article templates, tools, sitemap.xml, robots.txt and 404 page on mobile and desktop.
- [ ] Check every indexable URL for self-referencing canonical, unique title/H1/description, working internal links, and useful body content.
- [ ] Inspect Google Search Console for indexing errors, duplicates, soft 404s, and manual actions; resolve before application.
- [ ] No thin, placeholder, duplicate, AI-generated filler, or unreviewed articles indexed.

## 2. Demonstrable user value
- [ ] Planner completes the main user journey on Android, iOS and desktop; test representative room sizes and error states.
- [ ] Every public calculator gives accurate units, clear assumptions and useful results, not just a form.
- [ ] Layout diagrams are genuinely helpful and distinguish concept plans from architectural plans.
- [ ] Review highest-impression content for factual accuracy, originality, helpful illustrations, and realistic dimensions.
- [ ] Review safety-related content for authoritative references and limitations.
- [ ] Consolidate overlapping near-duplicate pages; remove or noindex pages that cannot provide distinct value.
- [ ] Confirm the 13 held standalone learning articles remain noindex and outside sitemap until individually approved.

## 3. Trust, navigation and advertising
- [ ] Clear About/editorial methodology, contact, privacy and cookies pages, linked from footer and accessible.
- [ ] Privacy/cookie disclosure accurately matches actual analytics and advertising technologies.
- [ ] Confirm consent management for applicable jurisdictions before activating personalized advertising.
- [ ] Keep AdSense runtime disabled before approval unless needed solely for a documented verification method.
- [ ] Review mobile layout, keyboard navigation, alt text, Core Web Vitals, loading and intrusive overlays.
- [ ] Check no broken navigation, false claims of independent testing, misleading dates, or copied photos.

## 4. Resubmission
- [ ] Capture screenshots and test notes for the main user journeys.
- [ ] Verify live site and indexing on the day of application.
- [ ] Resubmit via the existing AdSense account only after all mandatory checks pass.
- [ ] Record AdSense's actual decision; passing this checklist cannot guarantee approval.

## 5. Experiment after approval
- [ ] Confirm live ads and legal consent behavior.
- [ ] Record finalized earnings, costs and monthly net profit.
- [ ] Review Search Console traffic and AdSense earnings weekly, and monthly break-even.
