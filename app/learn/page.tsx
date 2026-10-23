import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedIdeas } from "@/components/FeaturedIdeas";
import { LearnCardVisual } from "@/components/LearnCardVisual";
import { learnArticles, learnCategories } from "@/lib/learnArticles";

export const metadata: Metadata = {
  title: "Small Space Learning Library",
  description: "Free, practical guides for planning, furnishing, organizing and living well in studios and small apartments.",
  alternates: { canonical: "/learn" },
};

const categoryCopy: Record<string, string> = {
  Planning: "Measure first, protect circulation and make the room support the way you actually live.",
  Furniture: "Choose pieces by real footprint, delivery route and movement space instead of showroom scale.",
  Storage: "Build systems around frequency, access and point of use before buying more containers.",
  Renters: "Solve space problems with reversible, lease-aware ideas that can move with you.",
  "Living Well": "Use a small home comfortably: work, air, lighting, shared routines and everyday safety.",
};

export default function LearnPage() {
  return (
    <main className="learn-hub">
      <section className="learn-hero">
        <div className="container learn-hero-grid">
          <div>
            <span className="eyebrow">FREE SMALL-SPACE SCHOOL</span>
            <h1>Learn how to make a small home work.</h1>
            <p className="lede">
              No course to buy. No design jargon required. These guides explain the decisions behind a good small-space plan so you can measure, compare and choose with more confidence.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#library">Browse the library</a>
              <Link className="button secondary" href="/studio-apartment-planner">Use the free planner</Link>
            </div>
          </div>
          <div className="learn-hero-card">
            <span>START HERE</span>
            <strong>Measure → route → big pieces → storage → details</strong>
            <p>That order solves more small-space problems than buying another organizer.</p>
          </div>
        </div>
      </section>

      <section className="container learn-principles">
        <div>
          <span className="micro-label">OUR APPROACH</span>
          <h2>Useful enough to act on.</h2>
        </div>
        <div className="learn-principle-grid">
          <article><b>01</b><strong>Measure the real space</strong><p>Doors, windows, chair movement and fixed services matter more than advertised square footage.</p></article>
          <article><b>02</b><strong>Explain the trade-off</strong><p>Small-space decisions are rarely perfect. We show what you gain and what you give up.</p></article>
          <article><b>03</b><strong>Keep it practical</strong><p>Guides are written to help you make a decision, not to keep you scrolling for an answer.</p></article>
        </div>
      </section>

      <section className="container" style={{paddingTop:32,paddingBottom:24}}><h2>New practical guides</h2><p><Link href="/learn/half-round-vs-round-drop-leaf-table-studio">Half-Round vs Round vs Drop-Leaf Table in a Studio: The Two-Mode Fit Test →</Link></p></section>
      <section className="container" style={{paddingBottom:32}}><h2>More new practical guides</h2><div className="learn-grid"><article className="learn-card" key="deep-closet-narrow-door-storage"><h3><Link href="/learn/deep-closet-narrow-door-storage">Deep closet: make storage reachable →</Link></h3></article><article className="learn-card" key="studio-apartment-with-toddler-layout"><h3><Link href="/learn/studio-apartment-with-toddler-layout">Studio apartment with a toddler →</Link></h3></article><article className="learn-card" key="air-purifier-placement-studio-cooking"><h3><Link href="/learn/air-purifier-placement-studio-cooking">Air purifier placement in an open-plan studio →</Link></h3></article><article className="learn-card" key="studio-apartment-senior-dog-layout"><h3><Link href="/learn/studio-apartment-senior-dog-layout">Studio layout for an older dog →</Link></h3></article><article className="learn-card" key="dehumidifier-placement-studio-laundry"><h3><Link href="/learn/dehumidifier-placement-studio-laundry">Dehumidifier placement while drying laundry →</Link></h3></article><article className="learn-card" key="window-insulation-film-studio-rental"><h3><Link href="/learn/window-insulation-film-studio-rental">Window insulation film in a rental →</Link></h3></article><article className="learn-card" key="rolling-tv-stand-vs-fixed-studio"><h3><Link href="/learn/rolling-tv-stand-vs-fixed-studio">Rolling TV stand vs fixed setup →</Link></h3></article><article className="learn-card" key="fridge-outside-kitchen-small-apartment"><h3><Link href="/learn/fridge-outside-kitchen-small-apartment">Fridge outside the kitchen →</Link></h3></article><article className="learn-card" key="bookshelves-drywall-small-rental-anchoring"><h3><Link href="/learn/bookshelves-drywall-small-rental-anchoring">Bookcases and drywall in a rental →</Link></h3></article><article className="learn-card" key="offsite-storage-small-apartment-worth-it"><h3><Link href="/learn/offsite-storage-small-apartment-worth-it">Is off-site storage worth it? →</Link></h3></article><article className="learn-card" key="check-ai-studio-apartment-layout"><h3><Link href="/learn/check-ai-studio-apartment-layout">Seven checks for AI studio layouts →</Link></h3></article><article className="learn-card" key="murphy-bed-drywall-floor-supported-small-apartment"><h3><Link href="/learn/murphy-bed-drywall-floor-supported-small-apartment">Murphy beds and drywall →</Link></h3></article></div></section>
      <FeaturedIdeas />

      <section id="library" className="container learn-library">
        {learnCategories.map((category) => {
          const items = learnArticles.filter((article) => article.category === category);
          return (
            <section className="learn-category" key={category}>
              <div className="learn-category-head">
                <div>
                  <span className="micro-label">{category}</span>
                  <h2>{category}</h2>
                </div>
                <p>{categoryCopy[category]}</p>
              </div>
              <div className="learn-grid">
                {items.map((article) => (
                  <Link className="learn-card" href={"/learn/" + article.slug} key={article.slug}>
                    <LearnCardVisual article={article} />
                    <div className="learn-card-meta">
                      <span>{article.readTime}</span>
                      <span>Updated {article.updated}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <strong>Read guide →</strong>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section className="container learn-footer-cta">
        <div>
          <span className="micro-label">PUT IT INTO PRACTICE</span>
          <h2>Test your own room instead of guessing.</h2>
          <p>The planner uses real furniture footprints and your room dimensions to create a measured starting layout.</p>
        </div>
        <Link className="button primary" href="/studio-apartment-planner">Open planner</Link>
      </section>
    </main>
  );
}
