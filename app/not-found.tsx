import Link from "next/link";
export default function NotFound() {
  return <section className="container empty-state"><span className="eyebrow">404</span><h1>This space is still empty.</h1><p className="lede">The page you were looking for does not exist, but the planner and layout library are ready.</p><div className="actions"><Link className="button primary" href="/studio-apartment-planner">Open the planner</Link><Link className="button secondary" href="/studio-apartment-layouts">Browse layouts</Link></div></section>;
}
