import type { Metadata } from "next";
import Link from "next/link";
import { TvDistanceTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "TV Viewing Distance Calculator",
  description: "Estimate a comfortable TV viewing-distance range based on screen size.",
  alternates: { canonical: "/tools/tv-distance-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / TV distance</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>TV Viewing Distance Calculator</h1>
      <p className="lede">Estimate a comfortable starting range so the TV does not force the sofa into an awkward position in a compact room.</p>
    </header>

    <section className="container tool-page">
      <TvDistanceTool/>

      <div className="prose tool-copy">
        <h2>Why TV distance changes a small-room layout</h2>
        <p>A screen is not only a wall object. The viewing position determines where the sofa wants to sit, and that can affect the main walking route, desk placement and access to storage. In a compact room, the best TV size is the one that works with the room rather than forcing the room around it.</p>

        <h2>How to use the range</h2>
        <p>The calculator gives a broad starting range based on screen size. Resolution, eyesight, content and personal preference can move the comfortable position closer or farther away, so test the actual viewing position before mounting the TV.</p>
        <ul>
          <li>Mark the TV outline on the wall with low-tack tape.</li>
          <li>Sit at the real sofa position and test the center of the screen.</li>
          <li>Check that the sofa does not block the main circulation route.</li>
          <li>Verify wall-mount requirements and cable locations before drilling.</li>
        </ul>

        <h2>Do not sacrifice circulation for a formula</h2>
        <p>If the calculated range pushes the sofa into a doorway or leaves an uncomfortable path behind it, change the screen size or layout. A viewing-distance formula is less important than a room that works every day.</p>

        <div className="planner-cta">
          <div><div className="kicker">Furniture placement</div><h3>Plan the sofa and TV as one decision.</h3><p>Use the guide to balance viewing comfort with circulation.</p></div>
          <Link className="button primary" href="/furniture-layout/sofa-tv-distance">Open sofa + TV guide</Link>
        </div>

        <h2>Related planning tools</h2>
        <div className="grid related-grid">
          <Link className="card" href="/tools/sofa-fit-calculator"><div className="kicker">Calculator</div><h3>Sofa Fit Calculator</h3><p>Check whether the sofa actually fits the intended wall.</p></Link>
          <Link className="card" href="/tools/furniture-clearance-calculator"><div className="kicker">Calculator</div><h3>Furniture Clearance</h3><p>Check the route around the final seating position.</p></Link>
        </div>
      </div>
    </section>
  </article>
}
