import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Space Planning Tools",
  description: "Free calculators for sofa fit, furniture clearance, rug size and TV viewing distance in small apartments.",
  alternates: { canonical: "/tools" },
};

const tools = [
  ["Sofa Fit Calculator","Check whether a sofa fits a wall while preserving useful side clearance.","/tools/sofa-fit-calculator"],
  ["Furniture Clearance Calculator","Check walking, chair and bedside clearances before buying furniture.","/tools/furniture-clearance-calculator"],
  ["Rug Size Calculator","Get a practical starting rug size based on sofa and room width.","/tools/rug-size-calculator"],
  ["TV Distance Calculator","Estimate a comfortable viewing-distance range for a TV size.","/tools/tv-distance-calculator"],
];

export default function ToolsPage(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / Tools</div>
      <span className="eyebrow">FREE SMALL-SPACE TOOLS</span>
      <h1>Plan the awkward details before you buy.</h1>
      <p className="lede">Quick calculators for the dimensions that make small rooms work: fit, clearance, rugs and viewing distance.</p>
    </header>
    <section className="container section">
      <div className="grid">
        {tools.map(([title,description,href])=><Link key={href} className="card tool-card" href={href}><div className="kicker">Calculator</div><h3>{title}</h3><p>{description}</p><b>Open tool →</b></Link>)}
      </div>
    </section>
  </article>
}
