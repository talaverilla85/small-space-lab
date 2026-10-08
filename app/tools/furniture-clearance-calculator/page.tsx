import type { Metadata } from "next";
import Link from "next/link";
import { ClearanceTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Furniture Clearance Calculator",
  description: "Check practical walking, chair and bedside clearances in a small apartment.",
  alternates: { canonical: "/tools/furniture-clearance-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Clearance</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Furniture Clearance Calculator</h1>
      <p className="lede">Measure the gap between pieces and check whether it is likely to feel comfortable for walking, chair movement or bedside access.</p>
    </header>

    <section className="container tool-page">
      <ClearanceTool/>

      <div className="prose tool-copy">
        <h2>Why clearance matters more than “does it fit?”</h2>
        <p>Small rooms often fail because every item fits individually but the gaps between them do not. A sofa, desk and bed can all fit inside the room dimensions while still leaving awkward routes that force you to turn sideways or move a chair every time you pass.</p>

        <h2>Measure the gap at the narrowest point</h2>
        <p>Use the smallest clear distance between the two objects, not the average space around them. For chairs, measure with the chair pulled back to a realistic working or dining position. For a bed, think about how you make the bed and whether one or two people need access.</p>
        <ul>
          <li>Main walking path: measure the route you use most often.</li>
          <li>Desk or dining chair: include pull-back space, not just the chair tucked in.</li>
          <li>Bedside: include drawers or wardrobe doors that may open into the same gap.</li>
          <li>Doorways: always protect the full door swing or sliding-door access.</li>
        </ul>

        <h2>Use the result as a planning signal</h2>
        <p>The tool gives a practical starting target rather than a building-code judgment. Your own mobility, household needs, furniture shapes and local accessibility requirements may call for more space.</p>

        <div className="planner-cta">
          <div><div className="kicker">Whole-room check</div><h3>Test the room, not only one gap.</h3><p>The Studio Planner combines room size, bed, sofa and priorities into a first-pass layout.</p></div>
          <Link className="button primary" href="/studio-apartment-planner">Open Studio Planner</Link>
        </div>

        <h2>Related planning guides</h2>
        <div className="grid related-grid">
          <Link className="card" href="/furniture-layout"><div className="kicker">Furniture</div><h3>Furniture layout sequence</h3><p>Protect circulation before adding secondary pieces.</p></Link>
          <Link className="card" href="/studio-apartment-layouts/10x20"><div className="kicker">Narrow room</div><h3>10 × 20 layout ideas</h3><p>See why clearance becomes critical in a narrow footprint.</p></Link>
        </div>
      </div>
    </section>
  </article>
}
