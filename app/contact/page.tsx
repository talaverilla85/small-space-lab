import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Corrections",
  description: "Send feedback, report a broken planning tool, or suggest a factual correction to Small Space Planner.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <header className="container guide-hero">
        <div className="breadcrumb"><Link href="/">Home</Link> / Contact</div>
        <span className="eyebrow">FEEDBACK & CORRECTIONS</span>
        <h1>Contact Small Space Planner</h1>
        <p className="lede">Found a broken calculator, a misleading measurement or a factual mistake? We want to hear about it so we can improve the site.</p>
      </header>
      <section className="container guide-layout">
        <div className="prose">
          <h2>Report a problem or suggest a correction</h2>
          <p>Use our public <a href="https://github.com/talaverilla85/small-space-lab/issues/new" target="_blank" rel="noopener noreferrer">GitHub issue form</a> to report a bug, broken link or content correction. A free GitHub account may be required.</p>
          <p>Please include the page URL, what seems wrong and, for a measurement or factual correction, a reliable source or example that helps us verify it. For tool problems, include the dimensions and units you entered and the result you expected.</p>
          <p><strong>Privacy:</strong> GitHub issues are public. Do not post your home address, personal contact details, private floor plans or other sensitive information.</p>
          <h2>About our editorial approach</h2>
          <p>We describe our research process, use of AI and correction standards in the <Link href="/editorial-policy">editorial policy</Link>. Our diagrams are planning concepts, not certified architectural drawings.</p>
        </div>
      </section>
    </main>
  );
}
