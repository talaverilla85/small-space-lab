import type { Metadata } from "next";
import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";

export const metadata: Metadata = {
  title: "500 Sq Ft Apartment Layout: 4 Studio Floor Plan Ideas",
  description: "Explore four 500 sq ft apartment floor plan ideas with illustrated studio layouts for couples, a home office, storage and a separated sleeping zone.",
  alternates: { canonical: "/studio-apartment-layouts/500-sq-ft" },
  authors: [{ name: "Small Space Planner Editorial Team" }],
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

        <section aria-labelledby="five-hundred-size">
          <h2 id="five-hundred-size">How big is a 500 sq ft apartment?</h2>
          <p><strong>500 square feet is approximately 46.5 square meters.</strong> A simple 20 × 25 ft rectangle has 500 sq ft of floor area, but a real apartment may include the bathroom, kitchen, hall and closets within its advertised area. The usable open living zone can therefore be substantially smaller.</p>
          <p>Before choosing furniture, sketch the actual room boundaries and subtract fixed areas. Measure the clear space between the bed, sofa and dining chairs with doors and drawers open. An attractive floor plan is not evidence that the furniture will fit your particular apartment.</p>
          <h3>Choose the layout by your main priority</h3>
          <ul>
            <li><strong>One person, flexible living:</strong> start with the balanced open studio.</li>
            <li><strong>More sleeping privacy:</strong> compare the soft-separated bedroom concept, while checking daylight and access.</li>
            <li><strong>Two people:</strong> prioritize two usable seats, wardrobe access and a shared dining surface.</li>
            <li><strong>Working from home:</strong> protect a dedicated desk zone and its chair clearance.</li>
          </ul>
          <p>For a tighter footprint, compare our <Link href="/studio-apartment-layouts/450-sq-ft">450 sq ft layouts</Link> and <Link href="/studio-apartment-layouts/400-sq-ft">400 sq ft layouts</Link>. If you are starting with a long narrow room, the <Link href="/studio-apartment-layouts/10x20">10 × 20 studio layout</Link> shows how circulation changes the plan.</p>
        </section>

        <h2 id="plans">4 ways to use the extra room</h2>
        <p>These are schematic zone diagrams, not dimensioned or to-scale architectural floor plans. The boxes show relationships between activities, not the square footage assigned to each activity. Always map the actual fixed elements in your apartment before copying a layout.</p>
        <div className="flagship-plans">{plans.map(plan=><section className="plan-option" key={plan.title}><div className="plan-option-copy"><span className="eyebrow">{plan.bestFor}</span><h2>{plan.title}</h2><p>{plan.note}</p></div><FloorPlan title={plan.title} zones={plan.zones}/></section>)}</div>

        <section aria-labelledby="five-hundred-fit-test">
          <h2 id="five-hundred-fit-test">A measurable fit test before you buy furniture</h2>
          <p>Use this example as a worksheet, not as a universal 500 sq ft plan. Suppose the advertised apartment is a 20 × 25 ft rectangle. If a bathroom occupies 8 × 7 ft and a fixed kitchenette occupies 10 × 6 ft, those two footprints account for 116 sq ft. That leaves 384 sq ft before subtracting any additional walls, closets or corridors. The numbers are illustrative: real kitchens, bathrooms and circulation can overlap or have irregular shapes, so measure your own plan rather than subtracting these examples from a listing.</p>
          <ol>
            <li><strong>Draw the fixed zones:</strong> mark the entry, bathroom, kitchen, windows, heating and every door swing. Record their actual dimensions.</li>
            <li><strong>Place the largest item:</strong> a typical queen mattress is about 60 × 80 in, but the frame can be larger. Measure the actual bed frame and the side needed for access.</li>
            <li><strong>Check the working footprint:</strong> a 48 × 24 in desk occupies 8 sq ft as furniture, but the usable setup also needs chair movement and access. Tape out the full operating area on the floor.</li>
            <li><strong>Trace the walking route:</strong> walk from the entrance to the bathroom and kitchen, then to the bed. Open the drawers, chairs and doors in your sketch. If a route becomes obstructed, revise the layout.</li>
            <li><strong>Compare two modes:</strong> test the apartment during everyday use and when a guest is seated, a sofa bed is open or a chair is pulled out. A plan that works only with everything folded away is not a comfortable daily plan.</li>
          </ol>
          <p><strong>Decision rule:</strong> choose the option that keeps essential routes and furniture access usable in both modes, even if it has fewer pieces. For a first-pass comparison, enter your actual room dimensions in the <Link href="/studio-apartment-planner">free studio planner</Link>; then verify the result against doors, fixed services and the furniture manufacturer's dimensions.</p>
        </section>

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
        <div className="sidebar-box"><strong>Editorial method</strong><Link href="/editorial-policy">How we research layouts →</Link><br/><Link href="/learn/make-a-small-apartment-feel-bigger">Use sightlines and visual weight →</Link></div>
        <div className="sidebar-box"><strong>Different dimensions?</strong><Link href="/studio-apartment-planner">Use the measured planner →</Link></div>
      </aside>
    </section>
  </article>
}
