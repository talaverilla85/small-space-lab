import Link from "next/link";
import { FloorPlan } from "@/components/FloorPlan";
import { contentGuides } from "@/lib/content";

const featured = contentGuides.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="container hero">
        <div>
          <span className="eyebrow">Small homes, planned properly</span>
          <h1>Make every square foot earn its place.</h1>
          <p className="lede">
            Original studio layouts, storage systems and furniture-placement guides built for real compact homes — not endless inspiration boards.
          </p>
          <div className="actions">
            <Link className="button primary" href="/studio-apartment-layouts">Explore studio layouts</Link>
            <Link className="button secondary" href="/small-apartment-storage">Fix your storage</Link>
          </div>
          <div className="tag-row">
            <span className="tag">Measured concepts</span>
            <span className="tag">Renter-aware</span>
            <span className="tag">No clutter-first advice</span>
          </div>
        </div>
        <div>
          <div className="hero-plan">
            <FloorPlan
              title="Small studio layout example"
              zones={[
                { x: 68, y: 62, w: 215, h: 145, label: "Sleep", tone: "green" },
                { x: 315, y: 62, w: 245, h: 145, label: "Living", tone: "warm" },
                { x: 315, y: 238, w: 150, h: 100, label: "Work", tone: "neutral" },
                { x: 68, y: 238, w: 215, h: 100, label: "Storage", tone: "green" }
              ]}
            />
            <div className="hero-note"><span>Original concept layout</span><span>Built for clarity, not decoration</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Start here</span>
              <h2>Useful before beautiful.</h2>
            </div>
            <p>We organize small-space advice around the decisions that change how a room actually works: circulation, zoning, storage access and furniture footprint.</p>
          </div>
          <div className="grid">
            <Link className="card" href="/studio-apartment-layouts">
              <div className="kicker">Layouts</div>
              <h3>Studio apartment layouts</h3>
              <p>Plans by square footage, dimensions and daily use.</p>
            </Link>
            <Link className="card" href="/small-apartment-storage">
              <div className="kicker">Storage</div>
              <h3>Small apartment storage</h3>
              <p>Systems that reduce daily friction instead of adding containers.</p>
            </Link>
            <Link className="card" href="/furniture-layout">
              <div className="kicker">Furniture</div>
              <h3>Placement that preserves movement</h3>
              <p>Put the big pieces in the right order before decorating around them.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">New guides</span>
              <h2>Specific questions. Specific answers.</h2>
            </div>
          </div>
          <div className="grid">
            {featured.map((guide) => (
              <Link className="card" href={`/${guide.slug}`} key={guide.slug}>
                <div className="kicker">{guide.category}</div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container notice">
          <strong>Built differently:</strong> concept floor plans on Small Space Lab are drawn for this site and clearly labeled as examples. We aim to add measurable utility to every guide rather than publishing generic room-inspiration copy.
        </div>
      </section>
    </>
  );
}
