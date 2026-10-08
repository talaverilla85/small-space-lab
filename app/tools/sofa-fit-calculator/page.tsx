import type { Metadata } from "next";
import Link from "next/link";
import { SofaFitTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Sofa Fit Calculator for Small Rooms",
  description: "Check whether a sofa fits a wall while preserving useful side clearance.",
  alternates: { canonical: "/tools/sofa-fit-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Sofa fit</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Sofa Fit Calculator</h1>
      <p className="lede">A sofa can technically fit and still make a room feel blocked. Check the wall width, sofa width and side clearance before you buy.</p>
    </header>

    <section className="container tool-page">
      <SofaFitTool/>

      <div className="prose tool-copy">
        <h2>What this calculator checks</h2>
        <p>The result compares the sofa width with the usable wall width and the side clearance you want to keep. That leftover space matters for curtains, floor lamps, side tables, cleaning and the visual breathing room around the sofa.</p>

        <h2>Measure the wall you can actually use</h2>
        <p>Do not measure from corner to corner if part of the wall is occupied by a radiator, door swing, outlet you need to reach or a curtain that projects into the room. Use the clear width that is genuinely available for the sofa.</p>
        <ul>
          <li>Measure the sofa at its widest point, including arms.</li>
          <li>Check product depth separately; a sofa can fit the wall and still project too far into the room.</li>
          <li>Mark the footprint with painter&apos;s tape before ordering.</li>
          <li>Include nearby doors and drawers that need room to open.</li>
        </ul>

        <h2>What “tight” means</h2>
        <p>A tight result does not automatically mean the sofa is wrong. It means there is little spare width after the clearances you selected. In a small apartment, that can be acceptable if the sofa is the priority and the surrounding wall does not need to serve another function.</p>

        <div className="planner-cta">
          <div><div className="kicker">Next check</div><h3>Will the sofa leave enough room to walk?</h3><p>Width is only half the decision. Check the gap in front of and beside the sofa too.</p></div>
          <Link className="button primary" href="/tools/furniture-clearance-calculator">Check clearance</Link>
        </div>

        <h2>Related planning guides</h2>
        <div className="grid related-grid">
          <Link className="card" href="/furniture-layout"><div className="kicker">Furniture</div><h3>Small-space furniture layout</h3><p>Place the big pieces in the right order.</p></Link>
          <Link className="card" href="/studio-apartment-layouts/400-sq-ft"><div className="kicker">Layout</div><h3>400 sq ft studio layouts</h3><p>See how compact sofas fit into several different plans.</p></Link>
        </div>
      </div>
    </section>
  </article>
}
