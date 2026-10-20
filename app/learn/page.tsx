import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
                    {article.photo ? <div style={{ marginBottom: "1rem", overflow: "hidden", borderRadius: "12px", aspectRatio: "16 / 10" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={article.photo.src} alt={article.photo.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div> : article.illustration ? <div style={{ marginBottom: "1rem", overflow: "hidden", borderRadius: "12px", aspectRatio: "16 / 10" }}><Image src={article.illustration.src} alt={article.illustration.alt} width={640} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div> : null}
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
