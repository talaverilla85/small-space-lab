import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";
import { contentGuides } from "@/lib/content";

const featured = contentGuides.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="container hero">
        <div>
          <span className="eyebrow">Plan more. Fit better. Live bigger.</span>
          <h1>Plan a small home before you buy another thing for it.</h1>
          <p className="lede">Practical studio layouts, original concept plans and simple tools for making compact homes easier to live in.</p>
          <div className="actions">
            <Link className="button primary" href="/studio-apartment-planner">Plan my studio</Link>
            <Link className="button secondary" href="/studio-apartment-layouts">Browse layouts</Link>
          </div>
          <div className="tag-row"><span className="tag">Original concept plans</span><span className="tag">Size-based guides</span><span className="tag">Renter-aware ideas</span></div>
        </div>
        <div><div className="hero-plan">
          <FloorPlan title="Small studio layout example" zones={[
            { x: 68, y: 62, w: 215, h: 145, label: "Sleep", tone: "green" },
            { x: 315, y: 62, w: 245, h: 145, label: "Living", tone: "warm" },
            { x: 315, y: 238, w: 150, h: 100, label: "Work", tone: "neutral" },
            { x: 68, y: 238, w: 215, h: 100, label: "Storage", tone: "green" }
          ]}/>
          <div className="hero-note"><span>Original concept layout</span><span>Start with your measurements</span></div>
        </div></div>
      </section>

      <section className="section tool-band"><div className="container tool-band-inner">
        <div><span className="eyebrow">Free planning tool</span><h2>Start with the room you actually have.</h2><p>Enter the width and length, choose what matters most, and get a layout strategy built around your priorities.</p></div>
        <Link className="button primary" href="/studio-apartment-planner">Open Studio Planner →</Link>
      </div></section>

      <section className="section"><div className="container">
        <div className="section-head"><div><span className="eyebrow">Browse by size</span><h2>Start with square footage.</h2></div><p>Specific dimensions produce better decisions than generic inspiration.</p></div>
        <div className="grid">
          <Link className="card size-card" href="/studio-apartment-layouts/300-sq-ft"><div className="metric">300</div><span> sq ft</span><h3>Compact and disciplined</h3><p>Four clear zones without filling the center.</p></Link>
          <Link className="card size-card" href="/studio-apartment-layouts/400-sq-ft"><div className="metric">400</div><span> sq ft</span><h3>Balanced everyday studio</h3><p>Room for a real lounge, work zone and storage.</p></Link>
          <Link className="card size-card" href="/studio-apartment-layouts/500-sq-ft"><div className="metric">500</div><span> sq ft</span><h3>Separation without walls</h3><p>Use the extra room for breathing space, not clutter.</p></Link>
        </div>
      </div></section>

      <section className="section"><div className="container">
        <div className="section-head"><div><span className="eyebrow">Solve one problem</span><h2>Layout, storage or furniture?</h2></div><p>Small-space planning works best when you solve the highest-friction problem first.</p></div>
        <div className="grid">
          <Link className="card" href="/studio-apartment-layouts"><div className="kicker">Layouts</div><h3>Studio apartment layouts</h3><p>Plans by square footage, dimensions and daily use.</p></Link>
          <Link className="card" href="/small-apartment-storage"><div className="kicker">Storage</div><h3>Small apartment storage</h3><p>Systems that reduce daily friction instead of adding containers.</p></Link>
          <Link className="card" href="/furniture-layout"><div className="kicker">Furniture</div><h3>Placement that preserves movement</h3><p>Put the big pieces in the right order.</p></Link>
        </div>
      </div></section>

      <section className="section"><div className="container">
        <div className="section-head"><div><span className="eyebrow">Planning library</span><h2>Specific questions. Specific answers.</h2></div></div>
        <div className="grid">{featured.map((guide) => <Link className="card" href={`/${guide.slug}`} key={guide.slug}><div className="kicker">{guide.category}</div><h3>{guide.title}</h3><p>{guide.description}</p></Link>)}</div>
      </div></section>

      <section className="section"><div className="container notice"><strong>What makes this useful:</strong> our concept plans are created for Small Space Planner and labeled as examples. The goal is to help you make a decision, not just scroll through pretty rooms.</div></section>
    </>
  );
}
