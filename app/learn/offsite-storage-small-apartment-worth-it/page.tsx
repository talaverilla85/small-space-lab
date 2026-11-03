import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Is a Storage Unit Worth It for a Small Apartment? | Small Space Planner",
  description: "Compare 12-month storage costs, access time, and floor space recovered with a worked example and a decision worksheet.",
  alternates: { canonical: "/learn/offsite-storage-small-apartment-worth-it" },
};

const rows = [
  ["Monthly rent after promotions", "$85", "$1,020"],
  ["One-time setup and lock", "$35", "$35"],
  ["Insurance, if required", "$12/month", "$144"],
  ["Moving supplies and transport", "$90", "$90"],
  ["Six collection trips (travel cost)", "$14/trip", "$84"],
];

export default function Page() {
  return <main className="container learn-prose" style={{ maxWidth: 800, paddingTop: 48, paddingBottom: 80 }}>
    <Link href="/learn">← Learning Library</Link>
    <h1>Is a Storage Unit Worth It for a Small Apartment?</h1>
    <p><strong>Quick answer:</strong> It can be worth renting off-site storage when you need to keep valuable or seasonal belongings and the usable space you recover justifies the recurring bill. Calculate the full first-year cost and the inconvenience of retrieving items before signing.</p>
    <p>Storage is not automatically a space-saving bargain. A low advertised monthly price can hide transport, insurance, access costs, or a higher rate after an introductory period. The example below is hypothetical, not a market quote.</p>

    <section><h2>Step 1: Identify what would actually leave your home</h2>
      <p>Make three piles: items used every month, items used occasionally, and items you have not used in a year. Keep frequently needed items accessible at home. For everything else, record its dimensions, condition, replacement cost, and whether it tolerates the unit's temperature and humidity conditions.</p>
      <p><strong>Try this:</strong> Photograph and label the boxes you would store. If you cannot name a realistic future use for an item, compare selling, donating, or recycling it before committing to monthly rent.</p>
    </section>

    <section><h2>Step 2: Measure usable floor space recovered</h2>
      <p>Measure the floor footprint of each item as currently stored, not the volume of a hypothetical stack. If a box already fits on an existing shelf or under a bed, removing it might not free any usable walking or living area.</p>
      <p>For a rough comparison, a 1.2 m by 0.6 m cabinet occupies 0.72 m² of floor. Removing that cabinet only helps if the newly open area improves a real activity: pulling out a chair, opening a door, or walking comfortably between zones.</p>
      <p><Link href="/studio-apartment-planner">Map the freed space in the studio planner →</Link></p>
    </section>

    <section><h2>Step 3: Calculate the full first-year cost</h2>
      <p>Use: <strong>(regular monthly rent × paid months) + mandatory fees + insurance + moving costs + access trips − confirmed discounts</strong>. Check whether promotional pricing expires and whether the operator can change the rate during your planned stay.</p>
      <div style={{overflowX:"auto"}}><table><caption>Illustrative example in US dollars — replace every figure with your own quotes</caption><thead><tr><th scope="col">Cost</th><th scope="col">Assumption</th><th scope="col">First year</th></tr></thead><tbody>{rows.map(([item,assumption,total])=><tr key={item}><td>{item}</td><td>{assumption}</td><td>{total}</td></tr>)}<tr><th scope="row">Total</th><td>12 months</td><th>$1,373</th></tr></tbody></table></div>
      <p>At an assumed 1.5 m² of genuinely usable space recovered, this example costs about <strong>$915 per m² per year</strong>. That figure is a decision aid, not a standard storage-industry metric. It does not account for the value of your time.</p>
    </section>

    <section><h2>Step 4: Add the time cost of retrieval</h2>
      <p>Imagine six visits a year, each taking 50 minutes door to door. That is five hours of travel and handling, before searching through the unit. If you expect to retrieve something every week, a cheaper distant unit may be a poor fit.</p>
      <p>Ask about access hours, lift availability, parking, loading distance, and whether you can reach one box without unpacking the entire space.</p>
    </section>

    <section><h2>Step 5: Compare three realistic alternatives</h2>
      <ul>
        <li><strong>Keep and reorganize:</strong> use existing vertical storage and containers; measure whether this improves daily circulation without creating a safety problem.</li>
        <li><strong>Store off-site:</strong> preserve belongings and recover space, but pay recurring fees and accept retrieval friction.</li>
        <li><strong>Reduce belongings:</strong> sell, donate, or responsibly dispose of items you no longer need; consider future replacement cost before letting go of expensive seasonal equipment.</li>
      </ul>
    </section>

    <section><h2>Questions to ask before signing</h2>
      <ul>
        <li>What is the regular rate after any promotion, and how are increases communicated?</li>
        <li>Is there a minimum term, notice period, deposit, administration fee, or required lock?</li>
        <li>Is insurance mandatory? What belongings and types of damage are excluded?</li>
        <li>What are the access hours, security arrangements, and restrictions on stored goods?</li>
        <li>Is climate control appropriate for your belongings, and what does it actually cover?</li>
      </ul>
      <p>Read the agreement for your specific facility. Do not assume that a climate-controlled label guarantees a particular temperature or humidity level.</p>
    </section>

    <section><h2>Your 15-minute decision worksheet</h2>
      <ol>
        <li>Write down the exact items you would store and the reason for keeping each one.</li>
        <li>Measure the usable floor area that will truly become available.</li>
        <li>Get the full written quote for twelve months, including any post-promotion rates.</li>
        <li>Estimate the number and duration of retrieval trips.</li>
        <li>Compare the total against reorganizing, donating, selling, or replacing items later.</li>
      </ol>
      <p><strong>Decision rule:</strong> Choose storage only if you can name the benefit of the space regained, afford the ongoing cost, and accept the retrieval burden. Recheck the decision before renewal.</p>
    </section>

    <section><h2>Related planning tools</h2><p><Link href="/studio-apartment-planner">Studio Apartment Planner</Link> helps you test whether removing stored items would improve a real layout. Prices and contract terms vary by operator and location, so use local written quotes rather than relying on generic averages.</p></section>
  </main>;
}
