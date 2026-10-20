import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial & Research Policy",
  description: "How Small Space Planner researches, writes and updates practical small-space guides and planning tools.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <main>
      <section className="container guide-hero editorial-hero">
        <div className="breadcrumb"><Link href="/">Home</Link> / Editorial policy</div>
        <span className="eyebrow">TRANSPARENCY</span>
        <h1>Editorial & research policy</h1>
        <p className="lede">
          Small Space Planner exists to help people make better decisions in studios and compact homes. We publish practical guidance, measured planning tools and original concept layouts. This page explains how we build that material and where its limits are.
        </p>
      </section>

      <section className="container editorial-grid">
        <div className="prose">
          <section>
            <h2>Our primary purpose</h2>
            <p>
              Every article should help a reader complete a real task: measure a room, compare furniture footprints, improve circulation, organize a difficult category or understand a small-space trade-off. We do not publish unrelated topics simply because they are trending.
            </p>
          </section>

          <section>
            <h2>How we research</h2>
            <p>
              We start with the physical problem: room dimensions, furniture envelopes, movement, access and point of use. When an article includes safety, health, building-system or regulatory information, we prefer primary sources such as public agencies, manufacturers and official standards bodies.
            </p>
            <p>
              General planning targets are presented as guidance, not as building-code requirements. Product dimensions and installation requirements can vary, so readers should verify the exact model and local rules before acting.
            </p>
          </section>

          <section>
            <h2>Original layouts and tools</h2>
            <p>
              Floor plans on this site are original concept diagrams created for Small Space Planner. They are intended to explain space-planning ideas, not to replace architectural, engineering, accessibility or code-compliance drawings.
            </p>
            <p>
              Our planner and calculators use measured furniture footprints and simple geometry to help compare options. They are decision aids, not professional design certification.
            </p>
          </section>

          <section>
            <h2>How we use AI</h2>
            <p>
              AI may assist with research organization, drafting, editing, code and repetitive publishing tasks. It is not treated as a source. Articles should have a clear purpose, be checked for internal consistency and add practical value beyond summarizing search results.
            </p>
          </section>

          <section>
            <h2>Updates and corrections</h2>
            <p>
              Guides show an update date when they are part of the learning library. We revise content when source guidance changes, when a tool changes or when a clearer explanation materially improves the page. If we find a factual error, our goal is to correct the page rather than preserve the original wording.
            </p>
          </section>

          <section>
            <h2>Commercial relationships</h2>
            <p>
              Advertising or future affiliate relationships do not determine our recommendations. If a page contains affiliate links or sponsored material, it should be disclosed clearly on that page.
            </p>
          </section>

          <section>
            <h2>What this site cannot know about your apartment</h2>
            <p>
              We cannot see hidden services, structural conditions, local code requirements, your lease, accessibility needs or manufacturer-specific installation requirements. Those conditions take priority over generic advice on this site.
            </p>
          </section>
        </div>

        <aside className="sidebar">
          <div className="sidebar-box">
            <strong>Editorial standard</strong>
            Useful, specific, measured and transparent. If a page does not help a reader make a decision, it does not belong in the library.
          </div>
          <div className="sidebar-box">
            <strong>Questions?</strong>
            <Link href="/about">About Small Space Planner →</Link>
            <Link href="/learn">Browse the learning library →</Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
