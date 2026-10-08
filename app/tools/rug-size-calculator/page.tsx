import type { Metadata } from "next";
import Link from "next/link";
import { RugTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Rug Size Calculator for Small Living Rooms",
  description: "Get a practical starting rug size based on your sofa width and room width.",
  alternates: { canonical: "/tools/rug-size-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Rug size</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Rug Size Calculator</h1>
      <p className="lede">A rug should connect the seating zone without swallowing the whole room. Use your sofa and room width to get a practical starting size.</p>
    </header>

    <section className="container tool-page">
      <RugTool/>

      <div className="prose tool-copy">
        <h2>Use the result as a starting point</h2>
        <p>Room shape, door swings, coffee tables and furniture placement can all change the best rug size. The calculator chooses a common starting size from the sofa width and room width, then you should test that footprint in the actual room.</p>

        <h2>What usually looks intentional</h2>
        <p>In a compact living zone, the rug should relate clearly to the sofa. A useful default is to let at least the front legs of the main seating sit on the rug. A tiny rug floating only under the coffee table can make the furniture feel disconnected.</p>
        <ul>
          <li>Front legs on: a reliable small-room compromise.</li>
          <li>All legs on: more unified, but requires a larger rug and more floor area.</li>
          <li>Small centered rug: use only when the proportions still relate clearly to the seating.</li>
          <li>Leave enough exposed floor that doors and circulation remain easy.</li>
        </ul>

        <h2>Tape the rug outline before ordering</h2>
        <p>Painter&apos;s tape is useful because rug dimensions can feel very different on the floor than they do on a product page. Mark the proposed size, place the sofa and coffee table around it, and walk the room before committing.</p>

        <div className="planner-cta">
          <div><div className="kicker">See the layouts</div><h3>Compare three rug-placement strategies.</h3><p>The guide shows how the rug can connect a compact seating zone.</p></div>
          <Link className="button primary" href="/furniture-layout/rug-placement-small-living-room">Open rug guide</Link>
        </div>

        <h2>Related planning tools</h2>
        <div className="grid related-grid">
          <Link className="card" href="/tools/sofa-fit-calculator"><div className="kicker">Calculator</div><h3>Sofa Fit Calculator</h3><p>Check sofa width before the rug has to work around it.</p></Link>
          <Link className="card" href="/tools/furniture-clearance-calculator"><div className="kicker">Calculator</div><h3>Furniture Clearance</h3><p>Make sure the seating zone still leaves a practical route.</p></Link>
        </div>
      </div>
    </section>
  </article>
}
