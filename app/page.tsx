import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";

export default function HomePage() {
  return (
    <>
      <section className="home-hero warm-hero">
        <div className="container hero-editorial human-hero">
          <div className="hero-copy">
            <span className="micro-label">SMALL SPACE PLANNER</span>
            <h1>
              <span>Make a small</span>
              <span>home feel</span>
              <em>thought through.</em>
            </h1>
            <p className="hero-deck">
              Practical layouts and planning tools for studios and compact apartments.
              Start with your room, your furniture and the way you actually live.
            </p>
            <div className="actions hero-actions">
              <Link className="button primary signal" href="/studio-apartment-planner">
                Plan my studio <span>→</span>
              </Link>
              <Link className="text-link" href="/studio-apartment-layouts">
                Browse layout ideas <span>↗</span>
              </Link>
            </div>
            <div className="trust-row">
              <span>Original concept layouts</span>
              <span>Built for small homes</span>
              <span>No account required</span>
            </div>
          </div>

          <div className="home-visual">
            <div className="visual-topline">
              <span>A SMALL HOME, PLANNED AROUND REAL LIFE</span>
              <span>CONCEPT VIEW</span>
            </div>
            <div className="home-plan-card">
              <FloorPlan
                title="Small studio concept"
                zones={[
                  { x: 68, y: 62, w: 215, h: 145, label: "SLEEP", tone: "green" },
                  { x: 315, y: 62, w: 245, h: 145, label: "LIVING", tone: "warm" },
                  { x: 315, y: 238, w: 150, h: 100, label: "WORK", tone: "neutral" },
                  { x: 68, y: 238, w: 215, h: 100, label: "STORAGE", tone: "green" }
                ]}
              />
            </div>
            <div className="visual-notes">
              <div><strong>Start with movement</strong><span>Keep one comfortable path clear.</span></div>
              <div><strong>Give zones a purpose</strong><span>Sleep, live, work and store without adding walls.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="container service-grid">
          <Link href="/studio-apartment-planner"><strong>Studio Planner</strong><span>Use your own room size →</span></Link>
          <Link href="/studio-apartment-layouts"><strong>Layout Library</strong><span>Browse by square footage →</span></Link>
          <Link href="/small-apartment-storage"><strong>Storage Guides</strong><span>Make everyday things easier →</span></Link>
          <Link href="/furniture-layout"><strong>Furniture Placement</strong><span>Fit the big pieces first →</span></Link>
        </div>
      </section>

      <section className="container home-section split-story">
        <div className="story-copy">
          <span className="micro-label">A BETTER STARTING POINT</span>
          <h2>Do not decorate around a bad layout.</h2>
          <p>
            In a small apartment, every large piece changes how the room works. We help you make the
            layout decision first — before another sofa, desk, shelf or storage unit gets in the way.
          </p>
          <div className="principle-list">
            <div><b>01</b><span><strong>Measure the room</strong><small>Doors, windows and fixed services come first.</small></span></div>
            <div><b>02</b><span><strong>Protect the main path</strong><small>Movement is part of the design.</small></span></div>
            <div><b>03</b><span><strong>Place the biggest pieces</strong><small>Then solve work, dining and storage around them.</small></span></div>
          </div>
        </div>
        <div className="lifestyle-panel" aria-label="Small-space planning principle">
          <div className="lifestyle-sun"></div>
          <div className="lifestyle-window"></div>
          <div className="lifestyle-sofa"></div>
          <div className="lifestyle-table"></div>
          <div className="lifestyle-rug"></div>
          <div className="lifestyle-plant"></div>
          <div className="lifestyle-caption">A room can feel calm before it feels large.</div>
        </div>
      </section>

      <section className="layout-gallery-section softer-gallery">
        <div className="container">
          <div className="gallery-heading clear-heading">
            <div><span className="micro-label">LAYOUTS BY SIZE</span></div>
            <h2>Start with a footprint that looks like yours.</h2>
          </div>
          <div className="layout-gallery">
            <Link className="layout-ticket ticket-300" href="/studio-apartment-layouts/300-sq-ft">
              <span className="ticket-no">SMALL STUDIO</span>
              <div className="ticket-size"><strong>300</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>Compact and disciplined</h3><p>Four clear zones without crowding the middle.</p></div>
              <span className="ticket-arrow">↗</span>
            </Link>

            <Link className="layout-ticket ticket-featured" href="/studio-apartment-layouts/400-sq-ft">
              <span className="ticket-no">MOST DEVELOPED GUIDE</span>
              <div className="ticket-size"><strong>400</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>Five practical ways to live</h3><p>Solo, couple, work-from-home, storage-first and Murphy-bed ideas.</p></div>
              <span className="ticket-badge">5 LAYOUTS</span>
              <span className="ticket-arrow">↗</span>
            </Link>

            <Link className="layout-ticket ticket-500" href="/studio-apartment-layouts/500-sq-ft">
              <span className="ticket-no">LARGER STUDIO</span>
              <div className="ticket-size"><strong>500</strong><span>SQ FT</span></div>
              <div className="ticket-copy"><h3>More separation, less clutter</h3><p>Use the extra space for breathing room, not more furniture.</p></div>
              <span className="ticket-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="planner-feature warmer-planner">
        <div className="container planner-feature-grid">
          <div className="planner-feature-copy">
            <span className="micro-label light">FREE INTERACTIVE PLANNER</span>
            <h2>Try your room before you rearrange it.</h2>
            <p>
              Enter the width, length, bed size and what matters most. The planner gives you a practical
              starting strategy and flags combinations that may be awkward.
            </p>
            <Link className="button light-button" href="/studio-apartment-planner">
              Open the planner <span>→</span>
            </Link>
          </div>
          <div className="planner-demo refined-demo">
            <div className="demo-window">
              <div className="demo-toolbar"><span></span><span></span><span></span><b>YOUR ROOM / YOUR PRIORITIES</b></div>
              <div className="demo-plan">
                <div className="demo-zone dz-bed">BED</div>
                <div className="demo-zone dz-live">LIVING</div>
                <div className="demo-zone dz-work">WORK</div>
                <div className="demo-zone dz-store">STORAGE</div>
                <div className="demo-route">CLEAR PATH</div>
              </div>
              <div className="demo-footer"><span>STARTING LAYOUT</span><span>ADJUST TO YOUR REAL ROOM</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container home-section problem-section">
        <div className="problem-head">
          <span className="micro-label">SOLVE ONE THING AT A TIME</span>
          <h2>What is making your small home harder to live in?</h2>
        </div>
        <div className="problem-grid">
          <Link href="/furniture-layout/desk-in-studio-apartment"><span>WORK</span><h3>I need a desk without losing the room.</h3><b>Explore →</b></Link>
          <Link href="/small-apartment-storage"><span>STORAGE</span><h3>I have nowhere sensible to put everyday things.</h3><b>Explore →</b></Link>
          <Link href="/furniture-layout/rug-placement-small-living-room"><span>LIVING</span><h3>The room feels disconnected or visually messy.</h3><b>Explore →</b></Link>
          <Link href="/studio-apartment-layouts"><span>LAYOUT</span><h3>I do not know where the main furniture should go.</h3><b>Explore →</b></Link>
        </div>
      </section>

      <section className="container closing-statement calmer-closing">
        <span className="micro-label">SMALL SPACE PLANNER</span>
        <p>Less guessing.<br/><em>More room to live.</em></p>
        <Link href="/studio-apartment-planner">Start with your space <span>→</span></Link>
      </section>
    </>
  );
}
