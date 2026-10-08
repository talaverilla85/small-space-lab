import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Small Space Planner home">
          <span className="brand-mark-grid" aria-hidden="true"><i/><i/><i/><i/></span>
          <span className="brand-type"><strong>SMALL SPACE</strong><small>PLANNER</small></span>
        </Link>

        <nav className="nav-links desktop-nav" aria-label="Primary navigation">
          <Link className="nav-planner" href="/studio-apartment-planner">Planner ↗</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/studio-apartment-layouts">Layouts</Link>
          <Link href="/small-apartment-storage">Storage</Link>
          <Link href="/furniture-layout">Furniture</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="mobile-actions">
          <Link className="mobile-planner-link" href="/studio-apartment-planner">Planner ↗</Link>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <Link href="/tools">Tools</Link>
              <Link href="/studio-apartment-layouts">Layouts</Link>
              <Link href="/small-apartment-storage">Storage</Link>
              <Link href="/furniture-layout">Furniture</Link>
              <Link href="/about">About</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
