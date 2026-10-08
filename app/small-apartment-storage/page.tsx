import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Apartment Storage Ideas That Actually Reduce Clutter",
  description: "Practical small apartment storage systems for kitchens, bathrooms, clothes, bikes, cleaning tools and everyday clutter.",
  alternates: { canonical: "/small-apartment-storage" },
};

const problems = [
  ["Clothes","Build one clear clothing system instead of adding more small organizers.","/small-apartment-storage/clothes"],
  ["Kitchen","Improve cabinet access before adding another cart or cabinet.","/small-apartment-storage/kitchen"],
  ["Bathroom","Keep daily items close and backups out of the prime-access zone.","/small-apartment-storage/bathroom"],
  ["Vacuum + cleaning tools","Store long awkward tools vertically and together.","/small-apartment-storage/vacuum"],
  ["Bike","Choose floor, wall or vertical storage based on weight and daily use.","/small-apartment-storage/bikes"],
  ["Entryway clutter","Create one landing zone for shoes, bags and keys.","/small-apartment-storage/entryway"],
];

export default function StorageHub(){
  return <article>
    <header className="container guide-hero storage-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / Storage</div>
      <span className="micro-label">SMALL APARTMENT STORAGE</span>
      <h1>Store the problem, not the product.</h1>
      <p className="lede">Small apartments rarely need more random containers. They need a clear home for the things that create friction every day — shoes, laundry, cleaning tools, clothes, kitchen items and gear.</p>
    </header>

    <section className="container storage-framework">
      <div className="framework-main">
        <span className="micro-label">THE ORDER THAT WORKS</span>
        <h2>Use fewer storage decisions.</h2>
        <div className="framework-steps">
          <div><b>01</b><strong>Notice what is always out</strong><p>Start with the items that repeatedly land on chairs, floors and counters.</p></div>
          <div><b>02</b><strong>Store near point of use</strong><p>The easiest place to put something away is usually close to where you use it.</p></div>
          <div><b>03</b><strong>Concentrate height</strong><p>One tall storage zone is calmer than several unrelated cabinets around the room.</p></div>
          <div><b>04</b><strong>Keep return friction low</strong><p>If putting something away takes three steps, it probably will not stay organized.</p></div>
        </div>
      </div>
      <aside className="storage-rule"><strong>Simple rule</strong><p>Daily items should be one motion away. Backups can live higher, deeper or farther away.</p></aside>
    </section>

    <section className="container section">
      <div className="section-head"><div><span className="micro-label">SOLVE BY CATEGORY</span><h2>Pick the thing that keeps getting in the way.</h2></div></div>
      <div className="problem-grid storage-problem-grid">
        {problems.map(([title,text,href])=><Link href={href} key={href}><span>STORAGE</span><h3>{title}</h3><p>{text}</p><b>Open guide →</b></Link>)}
      </div>
    </section>

    <section className="planner-feature storage-cta">
      <div className="container planner-feature-grid">
        <div className="planner-feature-copy"><span className="micro-label light">LAYOUT FIRST</span><h2>Storage cannot fix a blocked floor plan.</h2><p>If the big furniture is already consuming the circulation path, solve the room layout before adding another organizer.</p><Link className="button light-button" href="/studio-apartment-planner">Check your room →</Link></div>
        <div className="storage-diagram">
          <div className="storage-wall">TALL STORAGE</div>
          <div className="storage-open">OPEN WALL</div>
          <div className="storage-path">CLEAR PATH</div>
        </div>
      </div>
    </section>
  </article>
}
