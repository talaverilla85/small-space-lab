import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Apartment Layout Ideas by Size, Shape and Lifestyle",
  description: "Browse studio apartment layouts by square footage, room dimensions and lifestyle, with original concept plans and a measured planner.",
  alternates: { canonical: "/studio-apartment-layouts" },
};

const sizes = [
  ["300 sq ft","Compact layouts where every deep piece matters.","/studio-apartment-layouts/300-sq-ft"],
  ["350 sq ft","A useful middle ground for bed, sofa and one strong secondary zone.","/studio-apartment-layouts/350-sq-ft"],
  ["400 sq ft","Five developed concepts for solo living, couples, work and storage.","/studio-apartment-layouts/400-sq-ft"],
  ["450 sq ft","More separation without needing solid walls.","/studio-apartment-layouts/450-sq-ft"],
  ["500 sq ft","Clearer zoning with real breathing room.","/studio-apartment-layouts/500-sq-ft"],
  ["600 sq ft","A larger studio that benefits from restraint.","/studio-apartment-layouts/600-sq-ft"],
];

const shapes = [
  ["10 × 20","Very narrow — plan along the long axis.","/studio-apartment-layouts/10x20"],
  ["12 × 18","Compact rectangle with limited opposing furniture.","/studio-apartment-layouts/12x18"],
  ["12 × 20","Long enough for a useful sequence of zones.","/studio-apartment-layouts/12x20"],
  ["15 × 20","Balanced 300 sq ft rectangle with more width.","/studio-apartment-layouts/15x20"],
  ["20 × 20","Square 400 sq ft room with more placement freedom.","/studio-apartment-layouts/20x20"],
];

const useCases = [
  ["For two people","Shared storage, seating and privacy strategies.","/studio-apartment-layouts/for-two-people"],
  ["With a desk","Permanent and shared work-surface options.","/studio-apartment-layouts/with-desk"],
  ["For remote work","One room that can switch between work and home.","/studio-apartment-layouts/for-remote-work"],
  ["With a king bed","How to make a large sleep footprint work.","/studio-apartment-layouts/with-king-bed"],
  ["With a Murphy bed","Use daytime floor space more effectively.","/studio-apartment-layouts/with-murphy-bed"],
  ["With a balcony","Protect daylight and the indoor-outdoor path.","/studio-apartment-layouts/with-balcony"],
  ["With a dining table","Choose a table that earns its footprint.","/studio-apartment-layouts/with-dining-table"],
];

export default function LayoutHub(){
  return <article>
    <header className="layout-hub-hero">
      <div className="container layout-hub-head">
        <div>
          <span className="micro-label">STUDIO APARTMENT LAYOUT LIBRARY</span>
          <h1>Start with the room you have. Then plan for the life you live.</h1>
          <p className="lede">Browse by square footage, exact room dimensions or the thing your studio needs to do well. Every guide is built around a different constraint — not just a different headline.</p>
          <div className="actions"><Link className="button primary" href="/studio-apartment-planner">Use the measured planner →</Link></div>
        </div>
        <div className="hub-mini-plan">
          <div className="hub-zone hz1">SLEEP</div><div className="hub-zone hz2">LIVE</div><div className="hub-zone hz3">WORK</div><div className="hub-zone hz4">STORE</div>
          <span>ONE ROOM · FOUR CLEAR JOBS</span>
        </div>
      </div>
    </header>

    <section className="container library-section">
      <div className="library-heading"><span className="micro-label">BY SQUARE FOOTAGE</span><h2>How much room are you working with?</h2></div>
      <div className="library-grid size-library">{sizes.map(([title,text,href])=><Link href={href} className="library-card" key={href}><strong>{title}</strong><p>{text}</p><span>View layouts →</span></Link>)}</div>
    </section>

    <section className="shape-library-section">
      <div className="container library-section">
        <div className="library-heading"><span className="micro-label">BY EXACT DIMENSIONS</span><h2>Same area. Different shape. Different answer.</h2><p>A 20×20 room and a 16×25 room can both be 400 sq ft, but they should not be planned the same way.</p></div>
        <div className="library-grid shape-library">{shapes.map(([title,text,href])=><Link href={href} className="library-card dark-card" key={href}><strong>{title}</strong><p>{text}</p><span>View layout →</span></Link>)}</div>
      </div>
    </section>

    <section className="container library-section">
      <div className="library-heading"><span className="micro-label">BY REAL-LIFE NEED</span><h2>What does the room need to do?</h2></div>
      <div className="problem-grid">{useCases.map(([title,text,href])=><Link href={href} key={href}><span>USE CASE</span><h3>{title}</h3><p>{text}</p><b>Explore →</b></Link>)}</div>
    </section>

    <section className="planner-feature hub-planner-cta">
      <div className="container planner-feature-grid">
        <div className="planner-feature-copy"><span className="micro-label light">NOT SURE WHERE TO START?</span><h2>Use your own dimensions.</h2><p>The Studio Planner checks your room footprint, bed and sofa size, priorities and first-pass clearance so you can start with a layout direction that belongs to your room.</p><Link className="button light-button" href="/studio-apartment-planner">Open Studio Planner →</Link></div>
        <div className="hub-stats"><div><strong>6</strong><span>square-footage guides</span></div><div><strong>5</strong><span>exact-dimension guides</span></div><div><strong>7</strong><span>lifestyle guides</span></div><div><strong>1</strong><span>measured planner</span></div></div>
      </div>
    </section>
  </article>
}
