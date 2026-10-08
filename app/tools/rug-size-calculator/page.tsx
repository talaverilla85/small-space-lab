import type { Metadata } from "next";
import Link from "next/link";
import { RugTool } from "@/components/PlanningTools";

export const metadata: Metadata = {
  title: "Rug Size Calculator for Small Living Rooms",
  description: "Get a practical starting rug size based on your sofa width and room width.",
  alternates: { canonical: "/tools/rug-size-calculator" },
};

export default function Page(){
  return <article>
    <header className="container guide-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / Rug size</div>
      <span className="eyebrow">FREE CALCULATOR</span>
      <h1>Rug Size Calculator</h1>
      <p className="lede">A rug should connect the seating zone without swallowing the whole room. Use your sofa and room width to get a practical starting size.</p>
    </header>
    <section className="container tool-page"><RugTool/>
      <div className="prose tool-copy"><h2>Use the result as a starting point</h2><p>Door swings, room shape, coffee tables and furniture placement can all change the best rug size. In compact rooms, keeping the front legs of the sofa on the rug is often enough to visually connect the seating area.</p></div>
    </section>
  </article>
}
