import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Small Space Lab</strong>
          <div>Practical layouts and storage ideas for compact homes.</div>
        </div>
        <div className="footer-links">
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
