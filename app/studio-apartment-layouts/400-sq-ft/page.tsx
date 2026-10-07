import type { Metadata } from "next";
import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";

export const metadata: Metadata = {
  title: "400 Sq Ft Studio Apartment Layout Ideas: 5 Practical Plans",
  description: "Five original 400 sq ft studio apartment layout ideas for solo living, couples, work from home, storage and Murphy-bed setups.",
  alternates: { canonical: "/studio-apartment-layouts/400-sq-ft" },
};

const plans = [
  {
    title: "1. Balanced everyday layout",
    bestFor: "Most people living alone",
    note: "A queen bed, proper lounge, shared dining/work surface and one concentrated storage wall.",
    zones: [
      { x: 65, y: 60, w: 220, h: 145, label: "Queen Bed", tone: "green" as const },
      { x: 320, y: 60, w: 245, h: 145, label: "Lounge", tone: "warm" as const },
      { x: 320, y: 235, w: 155, h: 105, label: "Dining / Work", tone: "neutral" as const },
      { x: 65, y: 235, w: 220, h: 105, label: "Storage", tone: "green" as const },
    ],
  },
  {
    title: "2. Work-from-home layout",
    bestFor: "Full-time remote work",
    note: "The desk gets a permanent zone instead of being forced onto the dining table.",
    zones: [
      { x: 65, y: 60, w: 205, h: 145, label: "Bed", tone: "green" as const },
      { x: 300, y: 60, w: 265, h: 145, label: "Living", tone: "warm" as const },
      { x: 65, y: 235, w: 200, h: 105, label: "Storage", tone: "neutral" as const },
      { x: 300, y: 235, w: 265, h: 105, label: "Desk / Office", tone: "green" as const },
    ],
  },
  {
    title: "3. Couple-friendly layout",
    bestFor: "Two adults sharing the studio",
    note: "Two usable seats, wardrobe access and fewer single-purpose pieces matter more than a large table.",
    zones: [
      { x: 65, y: 60, w: 230, h: 145, label: "Queen Bed", tone: "green" as const },
      { x: 330, y: 60, w: 235, h: 145, label: "2-Seat Lounge", tone: "warm" as const },
      { x: 65, y: 235, w: 230, h: 105, label: "Shared Storage", tone: "neutral" as const },
      { x: 330, y: 235, w: 235, h: 105, label: "Dining / Flex", tone: "green" as const },
    ],
  },
  {
    title: "4. Maximum-storage layout",
    bestFor: "People with lots of clothes, gear or hobby items",
    note: "Storage is grouped into one deliberate run so the rest of the room stays visually quiet.",
    zones: [
      { x: 65, y: 60, w: 210, h: 145, label: "Bed", tone: "green" as const },
      { x: 305, y: 60, w: 260, h: 145, label: "Living", tone: "warm" as const },
      { x: 65, y: 235, w: 300, h: 105, label: "Storage Wall", tone: "green" as const },
      { x: 395, y: 235, w: 170, h: 105, label: "Desk / Table", tone: "neutral" as const },
    ],
  },
  {
    title: "5. Murphy-bed layout",
    bestFor: "People who want the room to feel more like a living room by day",
    note: "The sleeping footprint disappears visually when the bed is closed, freeing the center for daily use.",
    zones: [
      { x: 65, y: 60, w: 180, h: 145, label: "Murphy Bed", tone: "green" as const },
      { x: 275, y: 60, w: 290, h: 145, label: "Large Lounge", tone: "warm" as const },
      { x: 65, y: 235, w: 180, h: 105, label: "Storage", tone: "neutral" as const },
      { x: 275, y: 235, w: 290, h: 105, label: "Dining / Work", tone: "green" as const },
    ],
  },
];

const comparison = [
  ["Balanced", "Queen", "Shared", "Medium", "Best all-rounder"],
  ["Work from home", "Full/Queen", "Dedicated", "Medium", "Remote workers"],
  ["Couple", "Queen", "Shared", "High", "Two people"],
  ["Max storage", "Full/Queen", "Compact", "Very high", "More belongings"],
  ["Murphy bed", "Murphy", "Shared", "Medium", "More daytime floor area"],
];

export default function FourHundredSqFtPage() {
  return (
    <article>
      <header className="container guide-hero flagship-hero">
        <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/studio-apartment-layouts">Layouts</Link> / 400 sq ft</div>
        <span className="eyebrow">400 SQ FT · 5 ORIGINAL CONCEPTS</span>
        <h1>400 Sq Ft Studio Apartment Layout Ideas</h1>
        <p className="lede">Four hundred square feet is enough for a real bed, a proper lounge and useful storage — if the circulation path is protected first. Here are five different ways to use the same approximate footprint depending on how you actually live.</p>
        <div className="actions">
          <Link className="button primary" href="/studio-apartment-planner">Try your own dimensions</Link>
          <a className="button secondary" href="#plans">See all 5 plans</a>
        </div>
      </header>

      <section className="container guide-layout flagship-layout">
        <div className="prose">
          <div className="quick-answer">
            <div className="kicker">Quick answer</div>
            <h2>What fits in a 400 sq ft studio?</h2>
            <p>A 400 sq ft studio can usually support a full or queen bed, a compact two- or three-seat sofa, one work or dining surface and meaningful storage. The biggest mistake is spending the extra room on oversized furniture instead of circulation and zoning.</p>
          </div>

          <h2 id="plans">5 ways to lay out 400 square feet</h2>
          <p>These are concept plans rather than architectural drawings. Your real doors, windows, kitchen, bathroom and fixed services always come first.</p>

          <div className="flagship-plans">
            {plans.map((plan) => (
              <section className="plan-option" key={plan.title}>
                <div className="plan-option-copy">
                  <span className="eyebrow">{plan.bestFor}</span>
                  <h2>{plan.title}</h2>
                  <p>{plan.note}</p>
                </div>
                <FloorPlan title={plan.title} zones={plan.zones} />
              </section>
            ))}
          </div>

          <h2>Which 400 sq ft layout should you choose?</h2>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead><tr><th>Plan</th><th>Bed</th><th>Desk</th><th>Storage</th><th>Best for</th></tr></thead>
              <tbody>
                {comparison.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>

          <h2>Furniture sizes that are easier to work with</h2>
          <p>Exact dimensions vary by product, but compact furniture helps preserve circulation. Before buying anything, tape the footprint onto the floor and walk around it.</p>
          <ul>
            <li><strong>Bed:</strong> full or queen is the easiest default; king beds consume a large share of the usable zone.</li>
            <li><strong>Sofa:</strong> a compact two- or three-seat sofa is usually easier than a sectional.</li>
            <li><strong>Desk:</strong> a shallow desk can work if it does not narrow the main route through the room.</li>
            <li><strong>Dining:</strong> round or drop-leaf tables are easier to circulate around in tight corners.</li>
            <li><strong>Storage:</strong> one taller storage wall is often calmer than several freestanding cabinets.</li>
          </ul>

          <h2>Four mistakes that make 400 sq ft feel smaller</h2>
          <div className="mistake-grid">
            <div className="card"><div className="kicker">Mistake 1</div><h3>Oversized sofa</h3><p>A deep sectional can consume the only comfortable route across the room.</p></div>
            <div className="card"><div className="kicker">Mistake 2</div><h3>Storage everywhere</h3><p>Small cabinets on every wall create visual noise without necessarily adding useful capacity.</p></div>
            <div className="card"><div className="kicker">Mistake 3</div><h3>Too many tables</h3><p>Desk, dining table, console and coffee table can become four versions of the same surface.</p></div>
            <div className="card"><div className="kicker">Mistake 4</div><h3>Blocking daylight</h3><p>Keep tall partitions away from the room's main window whenever possible.</p></div>
          </div>

          <div className="callout">
            <strong>Small Space Planner takeaway</strong><br />
            At 400 sq ft, the best layout is rarely the one that fits the most furniture. It is the one that gives your highest-priority activity a proper zone while preserving one obvious, comfortable path through the room.
          </div>

          <div className="planner-cta">
            <div>
              <div className="kicker">Use your actual room</div>
              <h3>Try the Studio Apartment Layout Planner</h3>
              <p>Enter your width, length, bed size and priorities to generate a starting strategy.</p>
            </div>
            <Link className="button primary" href="/studio-apartment-planner">Open planner</Link>
          </div>

          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            <details><summary>Is 400 sq ft enough for one person?</summary><p>For many people, yes. The room can support distinct sleep, lounge and work or dining zones if furniture depth and circulation are controlled.</p></details>
            <details><summary>Can two people live in a 400 sq ft studio?</summary><p>It can work, but shared storage, seating and personal zones matter more. Fewer single-purpose pieces usually make the space easier to share.</p></details>
            <details><summary>Can a king bed fit in 400 sq ft?</summary><p>Physically, often yes. Practically, it may dominate the layout and reduce lounge or storage space. A queen is usually easier to plan around.</p></details>
            <details><summary>Should the bed be separated from the living room?</summary><p>Only if the divider adds enough privacy without blocking light or circulation. Curtains, open shelving and low dividers are more flexible than solid partitions.</p></details>
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-box">
            <strong>At a glance</strong>
            <div className="sidebar-stat"><span>5</span> layout concepts</div>
            <div className="sidebar-stat"><span>400</span> sq ft target</div>
            <div className="sidebar-stat"><span>1</span> main circulation path</div>
          </div>
          <div className="sidebar-box">
            <strong>Before buying furniture</strong>
            Measure wall-to-wall dimensions, door swings, windows, built-ins, radiators and kitchen depth.
          </div>
          <div className="sidebar-box">
            <strong>Different dimensions?</strong>
            <Link href="/studio-apartment-planner">Use the free planner →</Link>
          </div>
        </aside>
      </section>
    </article>
  );
}
