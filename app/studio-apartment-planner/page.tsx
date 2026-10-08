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
      <header className="planner-page-hero">
        <div className="container planner-page-head">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> / Planner</div>
            <span className="micro-label">FREE TOOL · NO SIGN-UP</span>
            <h1>Plan the room you actually have.</h1>
            <p className="lede">
              Add your studio dimensions, choose the furniture that matters and tell us what the room
              needs to do. You will get a practical starting layout — not a decorating moodboard.
            </p>
          </div>
          <div className="planner-page-points">
            <div><strong>1</strong><span>Enter room size</span></div>
            <div><strong>2</strong><span>Choose priorities</span></div>
            <div><strong>3</strong><span>Review the layout direction</span></div>
          </div>
        </div>
      </header>

      <section className="container planner-wrap"><StudioPlanner /></section>

      <section className="container planner-confidence">
        <div>
          <span className="micro-label">WHAT IT IS GOOD FOR</span>
          <h2>A fast first decision before you move furniture around.</h2>
        </div>
        <div className="confidence-grid">
          <div><strong>Compare priorities</strong><p>See how a desk, dining area or larger bed changes the balance of the room.</p></div>
          <div><strong>Spot compromises</strong><p>The planner flags combinations that may make a compact room feel overloaded.</p></div>
          <div><strong>Start a real floor plan</strong><p>Use the result as a direction, then add your actual doors, windows, kitchen and built-ins.</p></div>
        </div>
        <p className="planner-disclaimer">
          Small Space Planner provides concept guidance, not architectural or construction drawings.
          Always verify exact dimensions and fixed elements in your own home.
        </p>
      </section>
    </>
  );
}
