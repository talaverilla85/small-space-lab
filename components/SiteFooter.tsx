import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <span className="brand-mark-grid footer-mark" aria-hidden="true"><i/><i/><i/><i/></span>
          <h2>SMALL SPACE<br/><em>PLANNER.</em></h2>
          <p>Tools and layouts for making compact homes work harder.</p>
        </div>
        <div className="footer-nav-group">
          <span>EXPLORE</span>
          <Link href="/studio-apartment-planner">Studio Planner</Link>
          <Link href="/tools">Planning Tools</Link>
          <Link href="/studio-apartment-layouts">Layout Library</Link>
          <Link href="/small-apartment-storage">Storage</Link>
          <Link href="/furniture-layout">Furniture</Link>
        </div>
        <div className="footer-nav-group">
          <span>PROJECT</span>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie-policy">Cookies</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>SMALL SPACE PLANNER / PLANNING TOOLS FOR COMPACT HOMES</span>
        <span>PLAN MORE. FIT BETTER. LIVE BIGGER.</span>
      </div>
    </footer>
  );
}
