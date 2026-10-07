import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><strong>Small Space Planner</strong><div>Plan more. Fit better. Live bigger.</div></div>
        <div className="footer-links">
          <Link href="/studio-apartment-planner">Planner</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie-policy">Cookies</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
