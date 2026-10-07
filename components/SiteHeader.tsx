import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Small Space Lab home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Small Space Lab</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/studio-apartment-layouts">Layouts</Link>
          <Link href="/small-apartment-storage">Storage</Link>
          <Link href="/furniture-layout">Furniture</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
