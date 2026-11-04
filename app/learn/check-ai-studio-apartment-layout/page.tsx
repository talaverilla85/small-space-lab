import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "How to Check an AI Studio Apartment Layout Before Buying Furniture",
  description: "Seven practical checks for AI-generated floor plans, including scale, furniture clearance, access, and a printable verification checklist.",
  alternates: { canonical: "/learn/check-ai-studio-apartment-layout" },
};

const checks = [
  {title:"Verify the scale", detail:"Measure two perpendicular walls and one fixed feature, such as a window opening. Compare each against the drawing. A convincing perspective image is not a scaled floor plan.", test:"If a 3.2 m wall is shown as 4 m, stop: the rest of the plan cannot be trusted."},
  {title:"Mark everything that cannot move", detail:"Trace entry and bathroom doors, windows, kitchen cabinets, radiators, vents, plumbing and electrical points. Note ceiling slopes and protruding columns.", test:"Reject a layout that puts a wardrobe in front of a required vent or assumes the sink can be relocated without building work."},
  {title:"Use exact product dimensions", detail:"Find the manufacturer's dimensions for the specific furniture model. Include depth, arms, handles, legs, and any protrusions rather than relying on generic category labels.", test:"Compare the proposed sofa outline with its real width and depth using tape on the floor."},
  {title:"Draw the furniture in use", detail:"Add the space needed to open wardrobe doors and drawers, pull back dining chairs, extend a table, unfold a sofa bed and access appliance doors.", test:"A 90 cm deep desk may fit against a wall but still fail if a chair cannot move back."},
  {title:"Test continuous movement", detail:"Walk the route from entrance to bathroom, bed and kitchen without stepping through furniture. Consider actual household needs, including mobility aids, children and pets.", test:"Use full-size tape outlines and test the route while someone is seated at the desk."},
  {title:"Check safe installation", detail:"A rendering cannot establish whether a wall supports shelving or a folding bed. Follow product-specific anchoring and installation instructions; consult a qualified installer when needed.", test:"If a tall unit requires a wall restraint and the rental does not permit appropriate fixing, choose a different unit."},
  {title:"Confirm delivery and assembly", detail:"Measure door openings, hallways, stair turns and lift dimensions. Check package sizes, assembly clearance and returns before ordering.", test:"A cabinet that fits its final spot can still be impossible to carry around a narrow stair landing."},
];

export default function Page() {
 return <main className="container learn-prose" style={{maxWidth:820,paddingTop:48,paddingBottom:80}}>
  <Link href="/learn">← Learning Library</Link>
  <h1>Before You Trust an AI Studio Apartment Layout: Seven Real-World Checks</h1>
  <p><strong>Quick answer:</strong> Treat AI room designs as inspiration, not measurements or installation plans. A useful layout must pass scale, fixed-feature, furniture, clearance, movement, safety and delivery checks before you spend money.</p>
  <p>AI images can make a studio look larger by changing proportions or hiding the space needed to use furniture. Even a technically scaled plan may omit door swings, electrical outlets or the room needed to open a sofa bed. The checks below turn an attractive concept into a testable proposal.</p>
  <section><h2>Seven checks to run in order</h2>
   {checks.map((item,i)=><section key={item.title}><h3>{i+1}. {item.title}</h3><p>{item.detail}</p><p><strong>Practical test:</strong> {item.test}</p></section>)}
  </section>
  <section><h2>Worked example: a studio with a sofa bed and dining table</h2>
   <p>Imagine a rectangular 4 m × 6 m studio (24 m²). An AI image places a sofa bed opposite a dining table. The arrangement looks open when the bed is folded, but the critical question is what happens when the bed is extended and a chair is pulled out.</p>
   <p>Suppose the chosen sofa bed is 2.0 m wide and extends 2.1 m into the room when open. Mark that full 2.1 m depth on the plan, then add the actual footprint of the table and chair in use. Check the remaining route to the bathroom and entrance. These dimensions are hypothetical; replace them with the exact manufacturer's specifications.</p>
   <p>A proposal that works only while all furniture is closed is not a practical everyday layout. If the bed blocks the only route at night, try rotating the bed, choosing a different model or moving the dining area.</p>
  </section>
  <section><h2>What AI can and cannot verify</h2>
   <ul><li><strong>Useful:</strong> brainstorming furniture zones, suggesting storage ideas, comparing styles and identifying questions to investigate.</li><li><strong>Not proof:</strong> structural suitability, code compliance, accessibility, electrical safety, real product dimensions or installation feasibility.</li><li><strong>Best workflow:</strong> use AI for alternatives, your measured plan for geometry, product manuals for specifications and qualified advice for safety-critical decisions.</li></ul>
  </section>
  <section><h2>Copyable pre-purchase checklist</h2>
   <ul>{checks.map(x=><li key={x.title}>☐ {x.title}</li>)}</ul>
   <p>Keep your measured drawing and product dimensions together. Recheck the plan after each furniture change; a replacement chair or different bed mechanism can invalidate an earlier fit.</p>
  </section>
  <section><h2>Make your own measured version</h2>
   <p><Link href="/studio-apartment-planner">Open the free Studio Apartment Planner →</Link> Enter your actual room dimensions and compare arrangements before buying. The planner is a layout aid, not a structural or building-code certification.</p>
  </section>
 </main>;
}
