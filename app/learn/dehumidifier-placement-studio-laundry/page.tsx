import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Where to Place a Dehumidifier When Drying Laundry in a Studio",
  description: "A practical guide to dehumidifier placement in a studio: airflow, safe electrical access, laundry spacing, humidity readings and a room-layout test.",
  alternates: { canonical: "/learn/dehumidifier-placement-studio-laundry" },
};

const positions = [
  { name: "Beside the drying rack", benefit: "Short path for air to circulate around damp laundry", risk: "Wet clothes can obstruct vents or drip near the appliance", check: "Follow the appliance's required clearances and keep water away from electrical parts." },
  { name: "At the edge of the living area", benefit: "May keep the appliance and water tank accessible", risk: "Noise, cables and the unit itself can obstruct daily movement", check: "Test the walking route, cable placement, tank removal and airflow." },
  { name: "In a separate utility nook", benefit: "Can reduce visual clutter in the main room", risk: "A tight enclosure may restrict intake and exhaust airflow", check: "Use only where the manufacturer permits operation and ventilation is adequate." },
];

export default function Page() {
  return <main className="container learn-prose" style={{maxWidth:820,paddingTop:48,paddingBottom:80}}>
    <Link href="/learn">← Learning Library</Link>
    <h1>Where to Put a Dehumidifier in a Studio Apartment When Drying Laundry</h1>
    <p><strong>Quick answer:</strong> Place a dehumidifier where its air intake and outlet remain unobstructed, its plug and water tank are accessible, and wet laundry cannot drip onto it. The right spot depends on the exact model, the room and the manufacturer's instructions—not a universal distance from the drying rack.</p>
    <p>In a small studio, a drying rack and a dehumidifier compete for the same circulation space. The aim is to manage moisture without creating an electrical hazard, blocking a route or hiding the machine in a poorly ventilated corner.</p>

    <section><h2>First, check whether you need a dehumidifier</h2>
      <p>Measure relative humidity with a hygrometer at different times, including while laundry dries. Look for condensation, persistent damp patches or a musty smell. Moisture from drying clothes is one possible contributor, but leaks, poor extraction or building defects require their own solutions.</p>
      <p>As a general indoor-air reference, the US Environmental Protection Agency advises keeping indoor humidity below 60%, ideally between 30% and 50%, to help limit mold growth. That is general guidance, not a promise that every studio or appliance will perform identically. See the <a href="https://www.epa.gov/mold/mold-course-chapter-2" rel="noopener noreferrer">EPA's moisture and mold guidance</a>.</p>
    </section>

    <section><h2>Compare three possible locations</h2>
      <div style={{overflowX:"auto"}}><table><thead><tr><th scope="col">Position</th><th scope="col">Potential advantage</th><th scope="col">What can go wrong</th></tr></thead><tbody>{positions.map(x=><tr key={x.name}><th scope="row">{x.name}</th><td>{x.benefit}</td><td>{x.risk}</td></tr>)}</tbody></table></div>
      {positions.map(x=><p key={x.name}><strong>{x.name}:</strong> {x.check}</p>)}
    </section>

    <section><h2>Measure the operating envelope, not just the footprint</h2>
      <p>Find the exact model's required clearances for intake and exhaust vents. Add space for removing the water tank, reaching controls and accessing the plug. Do not place the appliance beneath dripping laundry, cover it with clothing or run the power cable where someone can trip over it.</p>
      <p>Use a suitable wall outlet and follow the manufacturer's electrical instructions. Do not assume that an extension lead or power strip is approved for your appliance.</p>
    </section>

    <section><h2>A worked studio layout test</h2>
      <p>Imagine a 4 m × 5 m studio with a folding drying rack, a sofa and a route between the bed and bathroom. Mark the rack's full footprint when loaded, then mark the dehumidifier plus its model-specific airflow clearances. Finally, draw the path people use at night.</p>
      <p>If the appliance fits beside the rack but blocks that path or forces the exhaust against a curtain, reject that position. Try the edge of the living zone instead, provided the vents remain clear. The room dimensions are illustrative; the required clearances must come from the actual manual.</p>
      <p><Link href="/studio-apartment-planner">Sketch the room in the Studio Apartment Planner →</Link></p>
    </section>

    <section><h2>How to tell whether the setup helps</h2>
      <ol><li>Record humidity before laundry is hung.</li><li>Record it again while the clothes are drying and after the cycle.</li><li>Check for window condensation and damp surfaces.</li><li>Review tank fill, noise and electricity consumption over several uses.</li><li>Reposition only within the manufacturer's permitted installation conditions.</li></ol>
      <p>Do not claim a specific drying time from placement alone: laundry quantity, fabric, temperature, ventilation and appliance capacity all matter. Keep suitable fresh-air ventilation; a dehumidifier does not replace ventilation or repair leaks.</p>
    </section>

    <section><h2>Before you buy: five specifications to compare</h2>
      <ul><li><strong>Operating temperature range:</strong> make sure it suits the room.</li><li><strong>Extraction capacity:</strong> compare ratings under stated test conditions rather than assuming advertised figures apply in your home.</li><li><strong>Noise:</strong> consider whether the machine will run near your bed or desk.</li><li><strong>Tank and drainage:</strong> check whether you can empty the tank without moving furniture.</li><li><strong>Energy consumption:</strong> estimate running cost using the manufacturer's power data and your tariff.</li></ul>
    </section>

    <section><h2>Practical placement checklist</h2>
      <ul><li>☐ Intake and exhaust clearances match the manual</li><li>☐ No water can drip onto the appliance or its electrical connection</li><li>☐ Tank, controls and plug are accessible</li><li>☐ Cable and machine do not block a walking route</li><li>☐ Indoor humidity is measured rather than guessed</li><li>☐ Ventilation and any underlying damp problem are addressed</li></ul>
    </section>
  </main>;
}
