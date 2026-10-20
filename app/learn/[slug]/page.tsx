import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { getLearnArticle, learnArticles } from "@/lib/learnArticles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return learnArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: "/learn/" + article.slug },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) notFound();

  const related = (article.related || [])
    .map((relatedSlug) => learnArticles.find((candidate) => candidate.slug === relatedSlug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.updated,
    dateModified: article.updated,
    author: {
      "@type": "Organization",
      name: "Small Space Planner Editorial Team",
      url: "https://smallspaceplanner.com/editorial-policy",
    },
    publisher: {
      "@type": "Organization",
      name: "Small Space Planner",
      url: "https://smallspaceplanner.com",
    },
    mainEntityOfPage: "https://smallspaceplanner.com/learn/" + article.slug,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="learn-article">
        <header className="container learn-article-hero">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/learn">Learn</Link> / {article.category}</div>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="lede">{article.intro}</p>
          <div className="article-byline">
            <span>By Small Space Planner Editorial Team</span>
            <span>{article.readTime} read</span>
            <span>Updated {article.updated}</span>
          </div>
        </header>

        <div className="container learn-article-layout">
          <div className="prose learn-prose">
            <section className="quick-answer">
              <span>QUICK ANSWER</span>
              <p>{article.quickAnswer}</p>
            </section>

            {article.photo ? (
              <figure style={{ margin: "1.5rem 0 2rem" }}>
                {/* Pexels CDN: photograph is licensed for commercial editorial use. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.photo.src} alt={article.photo.alt} width={1200} height={800} loading="eager" decoding="async" style={{ display: "block", width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover", maxHeight: "560px" }} />
                <figcaption style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: "0.65rem" }}>
                  {article.photo.caption} Photo: <a href={article.photo.source} target="_blank" rel="noopener noreferrer">{article.photo.credit}</a>.
                </figcaption>
              </figure>
            ) : null}

            {article.illustration ? (
              <figure style={{ margin: "1.5rem 0 2rem" }}>
                <Image src={article.illustration.src} alt={article.illustration.alt} width={960} height={520} style={{ display: "block", width: "100%", height: "auto", borderRadius: "16px" }} />
                <figcaption style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: "0.65rem" }}>{article.illustration.caption}</figcaption>
              </figure>
            ) : null}

            <section className="article-outline">
              <strong>In this guide</strong>
              <ol>
                {article.sections.map((section) => (
                  <li key={section.heading}><a href={"#" + section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}>{section.heading}</a></li>
                ))}
              </ol>
            </section>

            <AdSlot />

            {article.sections.map((section) => {
              const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <section id={id} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              );
            })}

            {article.checklist ? (
              <section className="article-checklist">
                <span>CHECKLIST</span>
                <h2>Before you finish</h2>
                <ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}

            <section className="method-note">
              <span>HOW THIS GUIDE WAS BUILT</span>
              <p>
                Small Space Planner combines measured furniture footprints, circulation-first planning and practical renter constraints.
                Numerical product dimensions should always be checked against the exact manufacturer model, your lease and your building conditions.
              </p>
              <Link href="/editorial-policy">Read our editorial and research policy →</Link>
            </section>

            {article.sources?.length ? (
              <section className="article-sources">
                <h2>Sources & further reading</h2>
                <p>For safety, building-system or health-related points, we prefer primary public-agency guidance.</p>
                <ul>
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="planner-cta">
              <div>
                <div className="kicker">TRY YOUR OWN ROOM</div>
                <h3>Turn the advice into a measured starting plan.</h3>
                <p>Enter your dimensions, bed choice and priorities in the free studio planner.</p>
              </div>
              <Link className="button primary" href="/studio-apartment-planner">Open planner</Link>
            </div>

            {related.length ? (
              <section>
                <h2>Keep learning</h2>
                <div className="grid related-grid">
                  {related.map((item) => item ? (
                    <Link href={"/learn/" + item.slug} className="card" key={item.slug}>
                      <div className="kicker">{item.category}</div>
                      <h3>{item.title}</h3>
                    </Link>
                  ) : null)}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="sidebar learn-sidebar">
            <div className="sidebar-box">
              <strong>Use this as a decision guide</strong>
              Measure your own apartment before buying furniture. Product instructions, lease terms and local building requirements take priority over generic planning advice.
            </div>
            <div className="sidebar-box">
              <strong>Free tools</strong>
              <Link href="/studio-apartment-planner">Studio planner →</Link>
              <Link href="/tools/sofa-fit-calculator">Sofa fit calculator →</Link>
              <Link href="/tools/furniture-clearance-calculator">Clearance calculator →</Link>
            </div>
            <AdSlot />
          </aside>
        </div>
      </article>
    </>
  );
}
