import type { Metadata } from "next";
import Link from "next/link";
import { SofaFitTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Sofa Fit Calculator for Small Rooms",
  description: "Check whether a sofa fits a wall while preserving useful side clearance.",
  alternates: { canonical: "/tools/sofa-fit-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Sofa fit</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Sofa Fit Calculator</h1>
      <p className="lede">A sofa can technically fit and still make a room feel blocked. Check the wall width, sofa width and side clearance before you buy.</p>
    </header>
    <section className="container tool-page"><SofaFitTool/>
      <div className="prose tool-copy"><h2>What this checks</h2><p>This calculator compares the sofa width with the available wall width and the side clearance you want to keep. It does not account for doors, radiators, arm shapes or nearby furniture.</p><h2>Useful rule</h2><p>If a sofa only fits by touching both sides, it may visually dominate the wall and make cleaning, curtains or side tables difficult. A little breathing room often makes a small room feel more intentional.</p></div>
    </section>
  </article>
}
