import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloorPlan } from "@/components/FloorPlan";
import { getLayoutVariant, layoutVariants } from "@/lib/layoutVariants";

type Props = { params: Promise<{ variant: string }> };

export function generateStaticParams() {
  return layoutVariants.map((item) => ({ variant: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant } = await params;
  const item = getLayoutVariant(variant);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/studio-apartment-layouts/${item.slug}` },
  };
}

export default async function LayoutVariantPage({ params }: Props) {
  const { variant } = await params;
  const item = getLayoutVariant(variant);
  if (!item) notFound();

  const related = item.related
    .map((slug) => layoutVariants.find((candidate) => candidate.slug === slug))
    .filter(Boolean);

  return (
    <article>
      <header className="container guide-hero flagship-hero">
        <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/studio-apartment-layouts">Layouts</Link> / {item.slug}</div>
        <span className="eyebrow">{item.eyebrow}</span>
        <h1>{item.title}</h1>
        <p className="lede">{item.intro}</p>
        <div className="actions">
          <Link className="button primary" href="/studio-apartment-planner">Try your own dimensions</Link>
          <a className="button secondary" href="#plans">See the layouts</a>
        </div>
      </header>

      <section className="container guide-layout flagship-layout">
        <div className="prose">
          <div className="quick-answer">
            <div className="kicker">Quick answer</div>
            <h2>{item.quickTitle}</h2>
            <p>{item.quickAnswer}</p>
          </div>

          <h2 id="plans">{item.plans.length} practical layout directions</h2>
          <p>These are planning concepts. Your real doors, windows, kitchen, bathroom, columns and built-ins always take priority.</p>

          <div className="flagship-plans">
            {item.plans.map((plan, index) => (
              <section className="plan-option" key={plan.title}>
                <div className="plan-option-copy">
                  <span className="eyebrow">{plan.bestFor}</span>
                  <h2>{index + 1}. {plan.title}</h2>
                  <p>{plan.note}</p>
                  <p className="concept-note">{plan.assumption}</p>
                </div>
                <FloorPlan title={plan.title} zones={plan.zones} />
              </section>
            ))}
          </div>

          <h2>What matters most at this size</h2>
          <div className="mistake-grid">
            {item.rules.map((rule) => (
              <div className="card" key={rule.title}>
                <div className="kicker">Planning rule</div>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </div>
            ))}
          </div>

          <h2>Common mistakes</h2>
          <div className="mistake-grid">
            {item.mistakes.map((mistake) => (
              <div className="card" key={mistake.title}>
                <div className="kicker">Avoid</div>
                <h3>{mistake.title}</h3>
                <p>{mistake.text}</p>
              </div>
            ))}
          </div>

          <div className="callout"><strong>Small Space Planner takeaway</strong><br />{item.takeaway}</div>

          <div className="planner-cta">
            <div>
              <div className="kicker">Use your actual room</div>
              <h3>Test your furniture in the measured planner.</h3>
              <p>Enter room size, bed, sofa and priorities to get a first-pass fit check.</p>
            </div>
            <Link className="button primary" href="/studio-apartment-planner">Open planner</Link>
          </div>

          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {item.faq.map((entry) => (
              <details key={entry.q}><summary>{entry.q}</summary><p>{entry.a}</p></details>
            ))}
          </div>

          {related.length ? (
            <section>
              <h2>Compare nearby sizes and shapes</h2>
              <div className="grid related-grid">
                {related.map((entry) => entry ? (
                  <Link key={entry.slug} href={`/studio-apartment-layouts/${entry.slug}`} className="card">
                    <div className="kicker">Layout</div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                  </Link>
                ) : null)}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="sidebar">
          <div className="sidebar-box">
            <strong>Before you copy a layout</strong>
            Measure wall-to-wall dimensions and mark doors, windows, radiators, kitchen depth and built-ins.
          </div>
          <div className="sidebar-box">
            <strong>Use your own footprint</strong>
            <Link href="/studio-apartment-planner">Open the measured planner →</Link>
          </div>
        </aside>
      </section>
    </article>
  );
}
