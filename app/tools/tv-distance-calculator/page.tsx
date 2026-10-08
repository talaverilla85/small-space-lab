import type { Metadata } from "next";
import Link from "next/link";
import { TvDistanceTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "TV Viewing Distance Calculator",
  description: "Estimate a comfortable TV viewing-distance range based on screen size.",
  alternates: { canonical: "/tools/tv-distance-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / TV distance</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>TV Viewing Distance Calculator</h1>
      <p className="lede">Estimate a comfortable starting range so the TV does not force the sofa into an awkward position in a compact room.</p>
    </header>
    <section className="container tool-page"><TvDistanceTool/>
      <div className="prose tool-copy"><h2>Why this matters in a small room</h2><p>A larger TV can push the sofa farther away than the room comfortably allows. Use the range as a planning guide, then adjust for resolution, eyesight and personal preference.</p></div>
    </section>
  </article>
}
