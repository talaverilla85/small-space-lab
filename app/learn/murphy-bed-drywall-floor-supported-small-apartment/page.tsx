import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { robots:{index:false,follow:false}, title:"Murphy Beds and Drywall: Installation and Space Checks",description:"How to evaluate a wall bed in a small rental: anchoring, wall construction, floor support, operating clearance, and alternatives.",alternates:{canonical:"/learn/murphy-bed-drywall-floor-supported-small-apartment"} };
const steps=[
 ["Identify the exact product","Find the model number and current installation manual before buying. Check whether the design requires fixing to the wall, floor, or both. Do not substitute instructions from a visually similar product."],
 ["Confirm the actual wall and floor","Drywall is a finish, not a description of the structure behind it. Determine whether the manufacturer specifies structural studs, masonry, concrete or another approved substrate. A floor-supported cabinet can still require wall restraints against tipping."],
 ["Check permission and qualified installation","Ask your landlord for written permission before permanent fixings. If the manual requires particular structural attachments, have a qualified installer assess whether they can be installed as specified. Do not improvise with generic hollow-wall anchors."],
 ["Measure both operating states","Use the manufacturer's open and closed dimensions. Tape the full unfolded footprint on the floor; include handles, surrounding cabinets, bedding clearance, and space to stand and operate the mechanism."],
 ["Protect circulation and access","Test the route to the entrance, bathroom, kitchen, windows and any required exits with the bed open. Do not rely on a layout that works only with the bed folded away."],
 ["Plan ongoing use","Read the manufacturer's inspection and maintenance instructions. Keep children from playing with the mechanism, follow its operating procedure, and stop using the bed if its restraints or movement appear damaged."]
];
export default function Page(){return <main className="container learn-prose" style={{maxWidth:820,paddingTop:48,paddingBottom:80}}>
<Link href="/learn">← Learning Library</Link><h1>Murphy Beds and Drywall: What to Check Before You Buy</h1>
<p><strong>Quick answer:</strong> A Murphy bed is not automatically suitable—or unsuitable—for a drywall-lined apartment. Safety depends on the exact product, approved anchoring method, underlying structure and correct installation. Never assume that a floor-supported design needs no wall restraint.</p>
<p>Folding beds can reclaim valuable daytime space, but they introduce installation and operating requirements that a standard bed does not. In a rental, the first decision is whether the specified installation can be performed safely and with permission.</p>
<section><h2>Six checks before choosing a wall bed</h2>{steps.map(([title,body],i)=><section key={title}><h3>{i+1}. {title}</h3><p>{body}</p></section>)}</section>
<section><h2>Worked layout example: will it actually save usable space?</h2>
<p>Imagine a studio with a 3.6 m-wide wall and a proposed cabinet that is 2.1 m wide. The cabinet may fit across the wall, but that does not prove the bed works in the room. Suppose the manufacturer's drawing shows a 2.2 m projection when open. Mark that full projection, then check where the desk chair, bathroom door and walking route would be at night. These figures are illustrative, not product specifications.</p>
<p>Compare the room in two states: daytime, when the bed is closed, and nighttime, when it is fully open. The useful benefit is the floor area that becomes functional for another activity—not simply the difference between two furniture footprints.</p>
</section>
<section><h2>Compare alternatives without compromising safety</h2>
<ul><li><strong>Conventional bed:</strong> predictable footprint and no folding mechanism, but occupies the same floor area all day.</li><li><strong>Sofa bed:</strong> no wall-bed installation, but still needs clear unfolding space and may require frequent bedding changes.</li><li><strong>Murphy bed:</strong> potentially more daytime space, with installation, anchoring and maintenance requirements that must be satisfied.</li><li><strong>Daybed or platform storage bed:</strong> can add seating or storage without a vertical folding mechanism, but check each product's safety instructions.</li></ul></section>
<section><h2>Do not treat online photos as installation evidence</h2>
<p>A photograph cannot establish whether anchors are attached to structural framing or whether the unit was installed to the manufacturer's specification. Check the exact model's current manual and relevant product safety notices. For US consumer product recalls, consult the <a href="https://www.cpsc.gov/Recalls" rel="noopener noreferrer">U.S. Consumer Product Safety Commission recall database</a>; elsewhere use your national product-safety authority.</p>
</section>
<section><h2>Pre-purchase decision checklist</h2>
<ul><li>☐ Exact model and current manual obtained</li><li>☐ Approved wall/floor substrate and anchoring method confirmed</li><li>☐ Landlord permission obtained where required</li><li>☐ Qualified installer arranged if the installation calls for one</li><li>☐ Open and closed footprints measured with tape</li><li>☐ Safe access and everyday operation checked</li><li>☐ Product recall and maintenance information reviewed</li></ul>
<p>If any mandatory installation requirement cannot be met, choose a different furniture solution rather than modifying the fixing method yourself.</p>
</section><p><Link href="/studio-apartment-planner">Test the footprint in the Studio Apartment Planner →</Link></p>
</main>}