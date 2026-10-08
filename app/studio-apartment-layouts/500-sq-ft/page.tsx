import type { Metadata } from "next";
import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";

export const metadata: Metadata = {
  title: "500 Sq Ft Studio Apartment Layout Ideas: 4 Spacious Plans",
  description: "Four original 500 sq ft studio apartment layout ideas for separation, couples, work from home and storage.",
  alternates: { canonical: "/studio-apartment-layouts/500-sq-ft" },
};

const plans = [
  {
    title:"1. Balanced open studio",
    bestFor:"Most solo layouts",
    note:"Use the extra square footage to create breathing room between zones rather than simply scaling every piece up.",
    zones:[
      {x:66,y:62,w:230,h:150,label:"Queen Bed",tone:"green" as const},
      {x:330,y:62,w:235,h:150,label:"Living",tone:"warm" as const},
      {x:330,y:242,w:235,h:100,label:"Dining / Work",tone:"neutral" as const},
      {x:66,y:242,w:230,h:100,label:"Wardrobe",tone:"green" as const},
    ]
  },
  {
    title:"2. Soft-separated bedroom zone",
    bestFor:"More privacy without building walls",
    note:"A curtain, open shelf or low divider can make the bed feel separate while allowing light to travel through the room.",
    zones:[
      {x:66,y:62,w:245,h:150,label:"Sleep Zone",tone:"green" as const},
      {x:345,y:62,w:220,h:150,label:"Living",tone:"warm" as const},
      {x:66,y:242,w:245,h:100,label:"Storage",tone:"neutral" as const},
      {x:345,y:242,w:220,h:100,label:"Dining / Work",tone:"green" as const},
    ]
  },
  {
    title:"3. Couple-friendly layout",
    bestFor:"Two adults sharing one room",
    note:"The extra area can support two comfortable seats, more wardrobe access and a table that does not need to perform every function.",
    zones:[
      {x:66,y:62,w:240,h:150,label:"Queen Bed",tone:"green" as const},
      {x:340,y:62,w:225,h:150,label:"2-Seat Living",tone:"warm" as const},
      {x:66,y:242,w:240,h:100,label:"Shared Storage",tone:"neutral" as const},
      {x:340,y:242,w:225,h:100,label:"Dining",tone:"green" as const},
    ]
  },
  {
    title:"4. Work-from-home layout",
    bestFor:"A dedicated office zone",
    note:"Five hundred square feet can support a real desk without forcing the living zone to become an office after breakfast.",
    zones:[
      {x:66,y:62,w:220,h:150,label:"Bed",tone:"green" as const},
      {x:320,y:62,w:245,h:150,label:"Living",tone:"warm" as const},
      {x:66,y:242,w:220,h:100,label:"Storage",tone:"neutral" as const},
      {x:320,y:242,w:245,h:100,label:"Office",tone:"green" as const},
    ]
  },
];

export default function FiveHundredSqFtPage(){
  return <article>
    <header className="container guide-hero flagship-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/studio-apartment-layouts">Layouts</Link> / 500 sq ft</div>
      <span className="eyebrow">500 SQ FT · 4 ORIGINAL CONCEPTS</span>
      <h1>500 Sq Ft Studio Apartment Layout Ideas</h1>
      <p className="lede">Five hundred square feet gives you enough room to separate daily functions without adding walls. The trick is to spend the extra area on comfort and circulation instead of filling every open corner.</p>
      <div className="actions"><Link className="button primary" href="/studio-apartment-planner">Plan your own room</Link><a className="button secondary" href="#plans">See the 4 layouts</a></div>
    </header>

    <section className="container guide-layout flagship-layout">
      <div className="prose">
        <div className="quick-answer"><div className="kicker">Quick answer</div><h2>What does 500 sq ft change?</h2><p>Compared with a smaller studio, 500 sq ft can support a queen bed, comfortable sofa, meaningful storage and a more independent work or dining zone. The improvement comes from separation and clearance — not just larger furniture.</p></div>

        <h2 id="plans">4 ways to use the extra room</h2>
        <p>These are planning concepts for open studio living areas. Always map the actual fixed elements in your apartment before copying a layout.</p>
        <div className="flagship-plans">{plans.map(plan=><section className="plan-option" key={plan.title}><div className="plan-option-copy"><span className="eyebrow">{plan.bestFor}</span><h2>{plan.title}</h2><p>{plan.note}</p></div><FloorPlan title={plan.title} zones={plan.zones}/></section>)}</div>

        <h2>Where the extra square footage is best spent</h2>
        <ul>
          <li><strong>Circulation:</strong> preserve empty floor between zones so the apartment reads as larger.</li>
          <li><strong>Privacy:</strong> create a visual sleep zone with curtains, shelving or furniture placement.</li>
          <li><strong>Work:</strong> give a daily desk a permanent home if you work remotely.</li>
          <li><strong>Storage:</strong> a continuous wardrobe or cabinet run is easier to live with than scattered pieces.</li>
          <li><strong>Seating:</strong> choose one genuinely comfortable lounge zone instead of several small chairs.</li>
        </ul>

        <h2>Do not make these upgrades automatically</h2>
        <div className="mistake-grid">
          <div className="card"><div className="kicker">Avoid</div><h3>Oversizing every piece</h3><p>A larger apartment does not mean every item should become full-size.</p></div>
          <div className="card"><div className="kicker">Avoid</div><h3>Adding walls too early</h3><p>Solid partitions can cost light, flexibility and usable circulation.</p></div>
          <div className="card"><div className="kicker">Avoid</div><h3>Filling the center</h3><p>The strongest visual luxury at this size is often a generous patch of empty floor.</p></div>
          <div className="card"><div className="kicker">Avoid</div><h3>Duplicating surfaces</h3><p>Desk, dining table and console may still overlap in function.</p></div>
        </div>

        <div className="callout"><strong>Small Space Planner takeaway</strong><br/>At 500 sq ft, the goal shifts from “make everything fit” to “make each zone feel intentional.” The best layouts use the extra area to create distance between functions.</div>
        <div className="planner-cta"><div><div className="kicker">Use your own dimensions</div><h3>See how your furniture changes the plan.</h3><p>Choose bed and sofa size and get a measured first-pass fit check.</p></div><Link className="button primary" href="/studio-apartment-planner">Open planner</Link></div>
      </div>
      <aside className="sidebar">
        <div className="sidebar-box"><strong>Best use of extra area</strong>More circulation and clearer zones, not simply bigger furniture.</div>
        <div className="sidebar-box"><strong>Worth considering</strong>A soft divider for the bed if it does not block the main window.</div>
        <div className="sidebar-box"><strong>Different dimensions?</strong><Link href="/studio-apartment-planner">Use the measured planner →</Link></div>
      </aside>
    </section>
  </article>
}
