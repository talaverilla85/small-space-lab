import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { FloorPlan } from "@/components/FloorPlan";
import { getGuide, guides } from "@/lib/content";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  const explicitRoutes = new Set([
    "studio-apartment-layouts",
    "studio-apartment-layouts/300-sq-ft",
    "studio-apartment-layouts/400-sq-ft",
    "studio-apartment-layouts/500-sq-ft",
    "small-apartment-storage",
    "furniture-layout",
  ]);
  return guides
    .filter((guide) => !explicitRoutes.has(guide.slug))
    .map((guide) => ({ slug: guide.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = (guide.related || [])
    .map((item) => guides.find((candidate) => candidate.slug === item))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": guide.category === "Legal" || guide.category === "About" ? "WebPage" : "Article",
    headline: guide.title,
    description: guide.description,
    publisher: { "@type": "Organization", name: "Small Space Planner" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="container guide-hero">
          <div className="breadcrumb"><Link href="/">Home</Link> / {guide.category}</div>
          <span className="eyebrow">{guide.eyebrow || guide.category}</span>
          <h1>{guide.title}</h1>
          <p className="lede">{guide.intro}</p>
          {guide.tags ? <div className="tag-row">{guide.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div> : null}
        </header>

        <div className="container guide-layout">
          <div className="prose">
            {guide.floorPlan ? (
              <>
                <FloorPlan title={guide.floorPlan.title} zones={guide.floorPlan.zones} />
                <p className="concept-note">Concept only. Verify your own room dimensions, doors, windows and fixed services before buying furniture.</p>
              </>
            ) : null}

            {guide.category !== "Legal" && guide.category !== "About" ? <AdSlot /> : null}

            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </section>
            ))}

            {guide.takeaway ? <div className="callout"><strong>Small Space Planner takeaway</strong><br />{guide.takeaway}</div> : null}

            {guide.category === "Layouts" ? (
              <div className="planner-cta">
                <div>
                  <div className="kicker">Try your own dimensions</div>
                  <h3>Turn this idea into your starting plan.</h3>
                  <p>Use the free planner to compare your room size, bed choice and priorities.</p>
                </div>
                <Link className="button primary" href="/studio-apartment-planner">Open planner</Link>
              </div>
            ) : null}

            {guide.category === "Storage" ? (
              <div className="planner-cta">
                <div>
                  <div className="kicker">Storage system</div>
                  <h3>Solve the whole apartment, not just this category.</h3>
                  <p>Use the storage hub to work through clothes, kitchen, bathroom, entryway, cleaning tools and bikes.</p>
                </div>
                <Link className="button primary" href="/small-apartment-storage">Storage hub</Link>
              </div>
            ) : null}

            {guide.category === "Furniture" ? (
              <div className="planner-cta">
                <div>
                  <div className="kicker">Check the dimensions</div>
                  <h3>Test fit and clearance before buying.</h3>
                  <p>Use the free calculators for sofa fit, furniture clearance, rugs and TV distance.</p>
                </div>
                <Link className="button primary" href="/tools">Open tools</Link>
              </div>
            ) : null}

            {related.length ? (
              <section>
                <h2>Keep planning</h2>
                <div className="grid related-grid">
                  {related.map((item) => item ? (
                    <Link href={`/${item.slug}`} className="card" key={item.slug}>
                      <div className="kicker">{item.category}</div>
                      <h3>{item.title}</h3>
                    </Link>
                  ) : null)}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="sidebar">
            <div className="sidebar-box">
              <strong>How to use this guide</strong>
              Measure your own space first. Treat layouts as starting points and adjust for doors, windows, utilities and lease rules.
            </div>
            <div className="sidebar-box">
              <strong>{guide.category === "Storage" ? "Working on storage?" : guide.category === "Furniture" ? "Checking furniture?" : "Planning your own studio?"}</strong>
              {guide.category === "Storage" ? (
                <Link href="/small-apartment-storage">Open the storage hub →</Link>
              ) : guide.category === "Furniture" ? (
                <Link href="/tools">Use the free planning tools →</Link>
              ) : (
                <Link href="/studio-apartment-planner">Use the free layout planner →</Link>
              )}
            </div>
            {guide.category !== "Legal" && guide.category !== "About" ? <AdSlot /> : null}
          </aside>
        </div>
      </article>
    </>
  );
}
