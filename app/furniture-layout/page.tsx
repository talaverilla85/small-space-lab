import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Space Furniture Layout Guide",
  description: "Plan furniture in a small room by fixing circulation first, then placing the bed, sofa, desk, rug and TV.",
  alternates: { canonical: "/furniture-layout" },
};

const decisions = [
  ["Desk placement","Find a permanent work zone without blocking the room.","/furniture-layout/desk-in-studio-apartment"],
  ["Sofa + TV","Balance viewing comfort with circulation.","/furniture-layout/sofa-tv-distance"],
  ["Rug placement","Use the rug to connect the seating zone.","/furniture-layout/rug-placement-small-living-room"],
  ["Sofa fit","Check wall width and side clearance before buying.","/tools/sofa-fit-calculator"],
  ["Furniture clearance","Check walking paths and chair pull-back space.","/tools/furniture-clearance-calculator"],
  ["TV distance","Estimate a useful viewing range by screen size.","/tools/tv-distance-calculator"],
];

export default function FurnitureHub(){
  return <article>
    <header className="container guide-hero furniture-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / Furniture</div>
      <span className="micro-label">FURNITURE LAYOUT</span>
      <h1>Place the biggest piece. Then earn the rest.</h1>
      <p className="lede">Small rooms become difficult when every object gets equal importance. Fix the room constraints, protect the main route, place the largest piece and only then solve work, dining, storage and decoration.</p>
    </header>

    <section className="container furniture-sequence">
      <div className="sequence-item"><b>01</b><strong>Fixed elements</strong><span>Doors, windows, kitchen, radiators, built-ins.</span></div>
      <div className="sequence-item"><b>02</b><strong>Main path</strong><span>Entrance to the places you use every day.</span></div>
      <div className="sequence-item"><b>03</b><strong>Largest furniture</strong><span>Bed or sofa first — not the side table.</span></div>
      <div className="sequence-item"><b>04</b><strong>Secondary function</strong><span>Work, dining or extra seating.</span></div>
      <div className="sequence-item"><b>05</b><strong>Storage + styling</strong><span>Only after access still feels comfortable.</span></div>
    </section>

    <section className="container section">
      <div className="section-head"><div><span className="micro-label">COMMON DECISIONS</span><h2>Solve the dimensions that change the room.</h2></div></div>
      <div className="problem-grid">
        {decisions.map(([title,text,href])=><Link href={href} key={href}><span>FURNITURE</span><h3>{title}</h3><p>{text}</p><b>Open →</b></Link>)}
      </div>
    </section>

    <section className="container home-section split-story furniture-story">
      <div className="story-copy"><span className="micro-label">BEFORE YOU BUY</span><h2>Tape the footprint onto the floor.</h2><p>A product photo hides the true footprint. Painter's tape lets you see how much floor a sofa, desk or table really consumes — including the space needed to walk around it.</p><Link className="button primary" href="/tools/furniture-clearance-calculator">Check clearance →</Link></div>
      <div className="tape-demo"><div className="tape-sofa">SOFA FOOTPRINT</div><div className="tape-route">WALKING PATH</div><div className="tape-desk">DESK</div></div>
    </section>
  </article>
}
