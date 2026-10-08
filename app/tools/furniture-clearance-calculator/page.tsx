import type { Metadata } from "next";
import Link from "next/link";
import { ClearanceTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Furniture Clearance Calculator",
  description: "Check practical walking, chair and bedside clearances in a small apartment.",
  alternates: { canonical: "/tools/furniture-clearance-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Clearance</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Furniture Clearance Calculator</h1>
      <p className="lede">Measure the gap between pieces and check whether it is likely to feel comfortable for walking, chair movement or bedside access.</p>
    </header>
    <section className="container tool-page"><ClearanceTool/>
      <div className="prose tool-copy"><h2>Why clearance matters</h2><p>Small apartments often fail because the furniture fits on paper but the gaps between pieces do not. Chair pull-back space and daily walking routes need to be planned as real floor area.</p></div>
    </section>
  </article>
}
