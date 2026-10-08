import type { Metadata } from "next";
import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";

export const metadata: Metadata = {
  title: "300 Sq Ft Studio Apartment Layout Ideas: 4 Smart Plans",
  description: "Four original 300 sq ft studio apartment layout ideas for solo living, remote work, storage and flexible furniture.",
  alternates: { canonical: "/studio-apartment-layouts/300-sq-ft" },
};

const plans = [
  {
    title:"1. Clear-center layout",
    bestFor:"A simple everyday setup",
    note:"Keep the biggest pieces against the perimeter and protect one uninterrupted route through the middle.",
    zones:[
      {x:70,y:62,w:210,h:128,label:"Full Bed",tone:"green" as const},
      {x:315,y:62,w:235,h:128,label:"Loveseat",tone:"warm" as const},
      {x:315,y:220,w:145,h:110,label:"Desk",tone:"neutral" as const},
      {x:480,y:220,w:70,h:110,label:"Storage",tone:"green" as const},
    ]
  },
  {
    title:"2. Work-from-home layout",
    bestFor:"Daily remote work",
    note:"Give the desk a permanent wall position and let dining stay flexible or disappear completely.",
    zones:[
      {x:70,y:62,w:205,h:128,label:"Bed",tone:"green" as const},
      {x:305,y:62,w:245,h:128,label:"Living",tone:"warm" as const},
      {x:70,y:220,w:185,h:110,label:"Storage",tone:"neutral" as const},
      {x:285,y:220,w:265,h:110,label:"Work Zone",tone:"green" as const},
    ]
  },
  {
    title:"3. Storage-first layout",
    bestFor:"Clothes, gear and hobby storage",
    note:"One concentrated storage run is more efficient than filling every spare wall with a separate cabinet.",
    zones:[
      {x:70,y:62,w:200,h:128,label:"Bed",tone:"green" as const},
      {x:300,y:62,w:250,h:128,label:"Living",tone:"warm" as const},
      {x:70,y:220,w:300,h:110,label:"Storage Wall",tone:"green" as const},
      {x:400,y:220,w:150,h:110,label:"Flex",tone:"neutral" as const},
    ]
  },
  {
    title:"4. Flexible sleep layout",
    bestFor:"People who value daytime floor space",
    note:"A daybed, sleeper sofa or Murphy-style solution can trade permanent sleeping footprint for a larger daytime room.",
    zones:[
      {x:70,y:62,w:185,h:128,label:"Flex Bed",tone:"green" as const},
      {x:285,y:62,w:265,h:128,label:"Open Living",tone:"warm" as const},
      {x:70,y:220,w:180,h:110,label:"Storage",tone:"neutral" as const},
      {x:280,y:220,w:270,h:110,label:"Table / Work",tone:"green" as const},
    ]
  },
];

export default function ThreeHundredSqFtPage(){
  return <article>
    <header className="container guide-hero flagship-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/studio-apartment-layouts">Layouts</Link> / 300 sq ft</div>
      <span className="eyebrow">300 SQ FT · 4 ORIGINAL CONCEPTS</span>
      <h1>300 Sq Ft Studio Apartment Layout Ideas</h1>
      <p className="lede">At 300 square feet, every deep piece of furniture matters. The goal is not to imitate a larger apartment — it is to make four essential functions work without sacrificing movement.</p>
      <div className="actions"><Link className="button primary" href="/studio-apartment-planner">Plan your own room</Link><a className="button secondary" href="#plans">See the 4 layouts</a></div>
    </header>

    <section className="container guide-layout flagship-layout">
      <div className="prose">
        <div className="quick-answer"><div className="kicker">Quick answer</div><h2>What fits comfortably in 300 sq ft?</h2><p>A full-size bed is usually easier than a queen, a loveseat is easier than a sectional, and one shared table can often replace separate dining and desk surfaces. The most valuable thing to preserve is a clear path through the room.</p></div>

        <h2 id="plans">4 practical 300 sq ft layout directions</h2>
        <p>These examples assume an open rectangular living area. Your actual kitchen, bathroom, windows, doors and built-ins may change what works.</p>
        <div className="flagship-plans">{plans.map(plan=><section className="plan-option" key={plan.title}><div className="plan-option-copy"><span className="eyebrow">{plan.bestFor}</span><h2>{plan.title}</h2><p>{plan.note}</p></div><FloorPlan title={plan.title} zones={plan.zones}/></section>)}</div>

        <h2>Furniture choices that protect the room</h2>
        <ul>
          <li><strong>Bed:</strong> twin or full sizes create noticeably more circulation than a king.</li>
          <li><strong>Sofa:</strong> a 60–72 inch sofa is easier to place than a deep sectional.</li>
          <li><strong>Desk:</strong> shallow desks and wall-mounted surfaces preserve floor depth.</li>
          <li><strong>Dining:</strong> folding, drop-leaf or shared work/dining surfaces earn their footprint.</li>
          <li><strong>Storage:</strong> go taller in one area instead of adding several low cabinets.</li>
        </ul>

        <h2>What usually goes wrong</h2>
        <div className="mistake-grid">
          <div className="card"><div className="kicker">Common problem</div><h3>Too many functions</h3><p>Separate desk, dining, vanity and console surfaces quickly consume the usable perimeter.</p></div>
          <div className="card"><div className="kicker">Common problem</div><h3>Deep furniture facing deep furniture</h3><p>The center path disappears even when the total square footage sounds sufficient.</p></div>
          <div className="card"><div className="kicker">Common problem</div><h3>Storage spread everywhere</h3><p>Scattered organizers create visual clutter and reduce usable wall space.</p></div>
          <div className="card"><div className="kicker">Common problem</div><h3>Buying before measuring</h3><p>A few extra inches of depth can turn a workable plan into an awkward one.</p></div>
        </div>

        <div className="callout"><strong>Small Space Planner takeaway</strong><br/>At 300 sq ft, the room usually feels better when one or two functions share furniture. The space you save between pieces matters as much as the furniture itself.</div>
        <div className="planner-cta"><div><div className="kicker">Use your own dimensions</div><h3>Test your room before buying furniture.</h3><p>The planner now uses bed and sofa footprints and gives a first-pass fit check.</p></div><Link className="button primary" href="/studio-apartment-planner">Open planner</Link></div>
      </div>
      <aside className="sidebar">
        <div className="sidebar-box"><strong>Best default</strong>Full bed + compact sofa + one shared work/dining surface.</div>
        <div className="sidebar-box"><strong>Biggest risk</strong>Too many deep pieces facing each other across the room.</div>
        <div className="sidebar-box"><strong>Different dimensions?</strong><Link href="/studio-apartment-planner">Use the measured planner →</Link></div>
      </aside>
    </section>
  </article>
}
