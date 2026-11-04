# AI profitability experiment — Small Space Planner

**Question:** Can an AI-managed content website earn more verified money than its operating costs?

## Ground rules
- No fabricated revenue, traffic, clicks, rankings, product testing, or credentials.
- Never count AI-feature impressions as citations, visitors or revenue.
- Do not publish mass-produced thin content or bypass ad-consent requirements.
- Keep experimental editorial pages noindex until reviewed; preserve working canonical URLs.
- Every production change needs a successful deployment and a dated change entry. Run `npm run audit:editorial` separately before releasing held guides; the audit does not block ordinary production builds.

## Baseline (Google Search Console, exports supplied 2026-11-04)
- Search: 13 clicks / 829 impressions / 1.57% CTR.
- AI search features: 46 impressions across 17 pages. This is **visibility, not earnings**.
- Highest opportunity: /studio-apartment-layouts/500-sq-ft (120 impressions, zero clicks), /studio-apartment-layouts/10x20 (95 impressions, six clicks), /studio-apartment-layouts/450-sq-ft (52 impressions, zero clicks).
- AdSense revenue and monthly operating expenses: **not yet supplied**, so net profit cannot be calculated.

## Execution priorities
1. **Technical foundation:** unique canonical per page; no accidental noindex; mobile accessibility, indexable sitemap, no broken internal links, no misleading last-modified dates.
2. **Organic acquisition:** improve existing pages with observed impressions and relevant queries; direct answers, accurate dimensions, unique useful plans, navigable comparisons, internal links to calculators and planner.
3. **User value and conversion:** measure planner visits and useful interactions; avoid intrusive ad placements and layout shift.
4. **Monetization:** verify AdSense approval, real ad delivery, consent handling and revenue. Optimize placement only with compliance and UX safeguards.
5. **Feedback loop:** weekly equivalent-period comparisons and monthly net-profit assessment. Record changes and avoid attributing ranking movements to one change without sufficient data.

## Measurement and decision rules
- Search CTR = clicks / impressions; measure on equivalent date ranges.
- Verified revenue = finalized AdSense earnings (or other documented receipts), not RPM estimates.
- Net profit = verified revenue minus hosting, domain, subscriptions, content and other actual cash costs.
- Break-even sessions (scenario only) = monthly cash costs / (measured revenue per 1,000 sessions) × 1,000; do not compute before RPM is known.
- Log experiments with date, URL, hypothesis, changed files, deployment status, and post-change metrics.
- **Six-month review:** profitable / not yet profitable / inconclusive due to missing data. Report cumulative net profit and hours of AI/human supervision separately where measurable.

## Data needed for a real financial result
- Monthly AdSense earnings export or connected authorized AdSense data.
- Monthly actual costs (domain, hosting, paid tools and other relevant cash outlays).
- Regular GSC exports or working Search Console connection. If only CSVs are available, compare identical-duration periods and retain original files outside the public repository.

## Automation
A weekly scheduled task named **Experimento IA: tráfico y beneficio neto** reviews the experiment and requests only missing data. The schedule is external to this repository; repository commits alone do not cause a monitoring run.
