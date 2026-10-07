import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";
import { contentGuides } from "@/lib/content";

const notes = contentGuides.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-editorial">
          <div className="hero-copy">
            <div className="issue-line">
              <span>SMALL SPACE PLANNER</span>
              <span>SPATIAL TOOLKIT / 01</span>
            </div>
            <h1><span>PLAN</span><span>SMALL.</span><em>LIVE BIGGER.</em></h1>
            <p className="hero-deck">A practical design system for studios and compact homes: measured layouts, original floor-plan concepts and tools that help you decide before you buy.</p>
            <div className="actions">
              <Link className="button primary signal" href="/studio-apartment-planner">Open the planner <span>↗</span></Link>
              <Link className="text-link" href="/studio-apartment-layouts">Explore the layout library <span>→</span></Link>
            </div>
          </div>

          <div className="blueprint-stage">
            <div className="blueprint-label top-left">CONCEPT / 400 SQ FT</div>
            <div className="blueprint-label top-right">16' × 25' REFERENCE</div>
            <div className="dimension-line dimension-top"><span>25 ft</span></div>
            <div className="dimension-line dimension-side"><span>16 ft</span></div>
            <div className="blueprint-card">
              <FloorPlan
                title="Small Space Planner 400 square foot concept"
                zones={[
                  { x: 68, y: 62, w: 215, h: 145, label: "SLEEP", tone: "green" },
                  { x: 315, y: 62, w: 245, h: 145, label: "LIVE", tone: "warm" },
                  { x: 315, y: 238, w: 150, h: 100, label: "WORK", tone: "neutral" },
                  { x: 68, y: 238, w: 215, h: 100, label: "STORE", tone: "green" }
                ]}
              />
            </div>
            <div className="blueprint-caption"><span>ORIGINAL CONCEPT</span><span>NOT TO SCALE</span><span>REV. 01</span></div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          <div><strong>300–600</strong><span>sq ft layouts</span></div>
          <div><strong>01</strong><span>interactive planner</span></div>
          <div><strong>5</strong><span>400 sq ft concepts</span></div>
          <div><strong>0</strong><span>generic moodboards</span></div>
        </div>
      </section>

      <section className="container editorial-section">
        <div className="section-index">01</div>
        <div className="editorial-intro">
          <span className="micro-label">START WITH SPACE, NOT STUFF</span>
          <h2>Your apartment does not need more inspiration. It needs a plan.</h2>
          <p>Most small-space advice starts with products. We start with the footprint, circulation and the way you actually live — then decide what deserves the floor area.</p>
        </div>
        <div className="principle-stack">
          <div className="principle"><span>01</span><div><strong>Protect movement</strong><p>Walking paths are part of the design, not leftover space.</p></div></div>
          <div className="principle"><span>02</span><div><strong>Give every zone a job</strong><p>Sleep, work, storage and living should read clearly without needing walls.</p></div></div>
          <div className="principle"><span>03</span><div><strong>Buy last</strong><p>Furniture should fit the layout — the layout should not bend around furniture.</p></div></div>
        </div>
      </section>

      <section className="layout-gallery-section">
        <div className="container">
          <div className="gallery-heading">
            <div><span className="section-index inline">02</span><span className="micro-label">LAYOUT LIBRARY</span></div>
            <h2>Choose the footprint.<br/>Then choose the life.</h2>
          </div>
          <div className="layout-gallery">
            <Link className="layout-ticket ticket-300" href="/studio-apartment-layouts/300-sq-ft">
              <span className="ticket-no">A / 300</span>
              <div className="ticket-size"><strong>300</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>Compact discipline</h3><p>Four useful zones. Nothing accidental.</p></div>
              <span className="ticket-arrow">↗</span>
            </Link>
            <Link className="layout-ticket ticket-featured" href="/studio-apartment-layouts/400-sq-ft">
              <span className="ticket-no">B / 400</span>
              <div className="ticket-size"><strong>400</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>Five ways to live</h3><p>Balanced, remote work, couple, storage-first and Murphy-bed plans.</p></div>
              <span className="ticket-badge">5 PLANS</span>
              <span className="ticket-arrow">↗</span>
            </Link>
            <Link className="layout-ticket ticket-500" href="/studio-apartment-layouts/500-sq-ft">
              <span className="ticket-no">C / 500</span>
              <div className="ticket-size"><strong>500</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>Room to breathe</h3><p>Separation without filling every square foot.</p></div>
              <span className="ticket-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="planner-feature">
        <div className="container planner-feature-grid">
          <div className="planner-feature-copy">
            <span className="micro-label light">SPATIAL TOOL / 01</span>
            <h2>Make the room answer back.</h2>
            <p>Enter the footprint, bed and priorities. The planner turns constraints into a starting layout strategy — instantly.</p>
            <Link className="button light-button" href="/studio-apartment-planner">Launch Studio Planner <span>↗</span></Link>
          </div>
          <div className="planner-demo">
            <div className="demo-window">
              <div className="demo-toolbar"><span></span><span></span><span></span><b>16 × 24 FT / QUEEN / WORK</b></div>
              <div className="demo-plan">
                <div className="demo-zone dz-bed">BED</div>
                <div className="demo-zone dz-live">LIVING</div>
                <div className="demo-zone dz-work">WORK</div>
                <div className="demo-zone dz-store">STORAGE</div>
                <div className="demo-route">MAIN PATH</div>
              </div>
              <div className="demo-footer"><span>384 SQ FT</span><span>BALANCED ZONING</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container editorial-section notes-section">
        <div className="section-index">03</div>
        <div className="notes-head">
          <span className="micro-label">FIELD NOTES</span>
          <h2>Useful details for the awkward bits.</h2>
        </div>
        <div className="notes-list">
          {notes.map((guide, index) => (
            <Link href={`/${guide.slug}`} className="note-row" key={guide.slug}>
              <span className="note-number">0{index + 1}</span>
              <div><span>{guide.category}</span><h3>{guide.title}</h3></div>
              <p>{guide.description}</p>
              <span className="note-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container closing-statement">
        <span className="micro-label">SMALL SPACE PLANNER</span>
        <p>Less guessing.<br/><em>More living.</em></p>
        <Link href="/studio-apartment-planner">Plan your space <span>→</span></Link>
      </section>
    </>
  );
}
