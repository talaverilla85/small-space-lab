import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { FloorPlan } from "@/components/FloorPlan";
import { getGuide, guides } from "@/lib/content";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug.split("/") }));
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

  return (
    <>
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
                <p style={{fontSize: "14px", color: "#68766f"}}>Concept only. Verify your own room dimensions, doors, windows and fixed services before buying furniture.</p>
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

            {guide.takeaway ? <div className="callout"><strong>Small Space Lab takeaway</strong><br />{guide.takeaway}</div> : null}

            {related.length ? (
              <section>
                <h2>Keep planning</h2>
                <div className="grid" style={{gridTemplateColumns:"repeat(2, minmax(0,1fr))"}}>
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
            {guide.category !== "Legal" && guide.category !== "About" ? <AdSlot /> : null}
          </aside>
        </div>
      </article>
    </>
  );
}
