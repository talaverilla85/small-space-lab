import type { Metadata } from "next";
import Link from "next/link";
import { StudioPlanner } from "@/components/StudioPlanner";

export const metadata: Metadata = {
  title: "Free Studio Apartment Layout Planner",
  description: "Enter your studio dimensions, bed size and priorities to get a practical small-space layout strategy and concept plan.",
  alternates: { canonical: "/studio-apartment-planner" },
};

export default function StudioApartmentPlannerPage() {
  return (
    <>
      <header className="container guide-hero planner-hero">
        <div className="breadcrumb"><Link href="/">Home</Link> / Planner</div>
        <span className="eyebrow">Free interactive tool</span>
        <h1>Studio Apartment Layout Planner</h1>
        <p className="lede">Tell us the room size and what needs to fit. We will turn those constraints into a practical starting layout you can adjust around your real doors, windows and fixed services.</p>
      </header>
      <section className="container planner-wrap"><StudioPlanner /></section>
      <section className="container section planner-explainer">
        <h2>What this planner does — and what it does not</h2>
        <div className="grid">
          <div className="card"><div className="kicker">Useful for</div><h3>Early layout decisions</h3><p>Compare priorities before buying furniture or adding storage.</p></div>
          <div className="card"><div className="kicker">Based on</div><h3>Room footprint + needs</h3><p>Width, length, bed choice, work or dining needs and your main priority.</p></div>
          <div className="card"><div className="kicker">Not a substitute for</div><h3>Measured floor plans</h3><p>Always verify doors, windows, utilities, lease rules and exact product dimensions.</p></div>
        </div>
      </section>
    </>
  );
}
