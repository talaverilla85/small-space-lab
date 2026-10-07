export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  eyebrow?: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  takeaway?: string;
  tags?: string[];
  related?: string[];
  floorPlan?: {
    title: string;
    zones: { x: number; y: number; w: number; h: number; label: string; tone?: "green" | "warm" | "neutral" }[];
  };
};

export const guides: Guide[] = [
  {
    slug: "studio-apartment-layouts",
    title: "Studio apartment layouts that make small spaces work harder",
    description: "A practical starting point for planning a studio apartment around sleep, storage, work and everyday movement.",
    category: "Layouts",
    intro: "A good studio layout is less about squeezing in more furniture and more about giving every square foot a clear job. Start with movement, then place the biggest pieces, then use storage to define zones without closing the room in.",
    sections: [
      { heading: "The order that makes planning easier", paragraphs: ["Measure the room, mark doors and windows, and protect a comfortable route from the entrance to the bathroom and kitchen. Only then place the bed and sofa. Small pieces should adapt to the layout, not dictate it."], bullets: ["Keep the main walking path visually clear.", "Use rugs, lighting and open shelving to define zones.", "Choose furniture with a second function whenever it genuinely saves space."] },
      { heading: "Choose a layout by how you actually live", paragraphs: ["A person who works from home needs a different plan from someone who mainly sleeps at home. A couple may value two usable seats and wardrobe access more than a large dining table. Treat your daily routines as the brief."] }
    ],
    takeaway: "Design the walking path first. It is the part of a studio layout you use most often.",
    tags: ["studio layout", "small apartment", "space planning"],
    related: ["studio-apartment-layouts/300-sq-ft", "studio-apartment-layouts/400-sq-ft", "studio-apartment-layouts/500-sq-ft"]
  },
  {
    slug: "studio-apartment-layouts/300-sq-ft",
    title: "300 sq ft studio apartment layout: one room, four useful zones",
    description: "A compact 300-square-foot studio concept with distinct sleep, lounge, work and storage zones.",
    category: "Layouts",
    eyebrow: "300 SQ FT",
    intro: "At 300 square feet, the goal is not to recreate four separate rooms. It is to create four recognizable zones without blocking light or movement. A wall-side bed, compact lounge and shallow work surface can do that with surprisingly little furniture.",
    floorPlan: {
      title: "300 sq ft studio concept plan",
      zones: [
        { x: 70, y: 62, w: 215, h: 130, label: "Sleep", tone: "green" },
        { x: 315, y: 62, w: 245, h: 130, label: "Lounge", tone: "warm" },
        { x: 315, y: 220, w: 150, h: 115, label: "Work", tone: "neutral" },
        { x: 485, y: 220, w: 75, h: 115, label: "Storage", tone: "green" }
      ]
    },
    sections: [
      { heading: "Why this arrangement works", paragraphs: ["The largest pieces stay against the perimeter, keeping the center open. The desk sits close to the living zone so the same chair can serve more than one purpose. Storage is concentrated rather than scattered around the room."], bullets: ["Use a 48–60 inch wide bed if sleeping space is the priority.", "Prefer a loveseat or armless sofa over a full sectional.", "Keep tall storage on one wall so the rest of the room feels lighter."] },
      { heading: "What to measure before buying anything", paragraphs: ["Measure wall-to-wall dimensions, door swings, window sills, heater or radiator clearances and the depth of kitchen cabinets. Those fixed elements matter more than the advertised square footage."] }
    ],
    takeaway: "In a 300 sq ft studio, one uninterrupted open strip through the room is usually worth more than one extra piece of furniture.",
    tags: ["300 sq ft", "studio", "floor plan"],
    related: ["studio-apartment-layouts/400-sq-ft", "small-apartment-storage"]
  },
  {
    slug: "studio-apartment-layouts/400-sq-ft",
    title: "400 sq ft studio apartment layout: a balanced everyday plan",
    description: "A 400-square-foot studio layout with a real lounge, sleep zone, compact dining/work area and concentrated storage.",
    category: "Layouts",
    eyebrow: "400 SQ FT",
    intro: "Four hundred square feet is enough to create a studio that feels deliberate rather than improvised. The key is to spend the extra room on circulation and separation, not simply on larger furniture.",
    floorPlan: {
      title: "400 sq ft studio concept plan",
      zones: [
        { x: 65, y: 60, w: 220, h: 145, label: "Sleep", tone: "green" },
        { x: 320, y: 60, w: 245, h: 145, label: "Lounge", tone: "warm" },
        { x: 320, y: 235, w: 155, h: 105, label: "Dining / Work", tone: "neutral" },
        { x: 65, y: 235, w: 220, h: 105, label: "Storage", tone: "green" }
      ]
    },
    sections: [
      { heading: "Use the extra square footage for separation", paragraphs: ["A low bookcase, curtain track or open shelf can give the bed visual privacy without creating a dark box. Leave enough open floor between the sleeping and living zones that each reads as a separate area."], bullets: ["Keep partitions below eye level if natural light is limited.", "A round table is easier to walk around than a rectangular one in a tight corner.", "Place frequently used storage where you can open it without moving another piece first."] },
      { heading: "A good default furniture strategy", paragraphs: ["Start with a standard full or queen bed, a compact two- or three-seat sofa and a table that can work for both dining and laptop use. Add only the storage pieces that solve a defined problem."] }
    ],
    takeaway: "At 400 sq ft, aim for four clear zones and one generous path between them.",
    tags: ["400 sq ft", "studio layout", "small-space living"],
    related: ["studio-apartment-layouts/300-sq-ft", "studio-apartment-layouts/500-sq-ft", "furniture-layout"]
  },
  {
    slug: "studio-apartment-layouts/500-sq-ft",
    title: "500 sq ft studio apartment layout: room for separation without walls",
    description: "A 500-square-foot studio layout concept with a generous lounge, bed zone, dining/work area and useful storage.",
    category: "Layouts",
    eyebrow: "500 SQ FT",
    intro: "At 500 square feet, a studio can support larger functional zones, but it can still feel cramped if furniture floats randomly through the middle. Use the perimeter strategically and give each zone a visual anchor.",
    floorPlan: {
      title: "500 sq ft studio concept plan",
      zones: [
        { x: 66, y: 62, w: 230, h: 150, label: "Sleep", tone: "green" },
        { x: 330, y: 62, w: 235, h: 150, label: "Living", tone: "warm" },
        { x: 330, y: 242, w: 235, h: 100, label: "Dining / Work", tone: "neutral" },
        { x: 66, y: 242, w: 230, h: 100, label: "Wardrobe / Storage", tone: "green" }
      ]
    },
    sections: [
      { heading: "Make the room feel larger, not fuller", paragraphs: ["The easiest mistake at this size is buying apartment furniture and then adding full-size furniture because there appears to be room. Instead, keep a few generous empty areas so the eye can travel through the room."], bullets: ["Use one larger rug to anchor the living zone.", "Keep the dining/work table visually light.", "Create one continuous storage wall rather than several unrelated cabinets."] },
      { heading: "When a divider is worth it", paragraphs: ["A divider earns its space when it adds privacy or storage without blocking the primary window. Open shelving, curtains and slatted screens are usually more flexible than a solid freestanding wall."] }
    ],
    takeaway: "Five hundred square feet gives you permission to create breathing room, not an obligation to fill it.",
    tags: ["500 sq ft", "studio floor plan", "layout ideas"],
    related: ["studio-apartment-layouts/400-sq-ft", "small-apartment-storage", "furniture-layout"]
  },
  {
    slug: "studio-apartment-layouts/12x20",
    title: "12x20 studio apartment layout: how to use a long, narrow room",
    description: "A practical 12-by-20-foot studio arrangement that keeps the center path open and prevents a tunnel-like feel.",
    category: "Layouts",
    intro: "A 12x20 room is narrow enough that furniture depth matters. Put the deepest pieces at opposite ends rather than opposite sides, and use the long walls for shallow storage, a desk or media.",
    sections: [
      { heading: "Work with the long axis", paragraphs: ["Create a clear line of sight from one end to the other. A bed across one short wall and a lounge at the other end can make the room feel wider than placing both along the same long wall."], bullets: ["Avoid two deep pieces facing each other across the narrow dimension.", "Use wall-mounted or shallow storage where possible.", "Keep dining furniture compact and easy to move."] }
    ],
    takeaway: "In a narrow studio, protect width. The long dimension is the one you can afford to spend.",
    tags: ["12x20", "narrow studio", "layout"]
  },
  {
    slug: "studio-apartment-layouts/15x20",
    title: "15x20 studio apartment layout: a flexible 300 sq ft rectangle",
    description: "A simple 15-by-20-foot studio layout strategy with enough width to create distinct zones.",
    category: "Layouts",
    intro: "A 15x20 rectangle gives you more options than a narrower 300-square-foot room. You can orient the bed or sofa across the width and still preserve a usable circulation path.",
    sections: [
      { heading: "Use width to create zones", paragraphs: ["With fifteen feet to work with, a rug and sofa can define a living area without forcing everything against the walls. Keep one side looser so the route through the room remains obvious."], bullets: ["Try the bed on the shorter wall first.", "Keep the sofa within a clearly defined rug zone.", "Use a narrow table that can double as a desk."] }
    ],
    takeaway: "A 15-foot width gives you flexibility; use it for zoning rather than oversized furniture.",
    tags: ["15x20", "300 sq ft", "studio"]
  },
  {
    slug: "small-apartment-storage",
    title: "Small apartment storage: build a system before buying containers",
    description: "A practical framework for adding storage to a small apartment without filling it with organizers.",
    category: "Storage",
    intro: "The best small-apartment storage begins with fewer storage decisions, not more products. Group similar things, decide where they are used, then give each group the smallest convenient home.",
    sections: [
      { heading: "Start with high-friction items", paragraphs: ["Shoes, laundry, cleaning tools, bags and everyday kitchen items create visual clutter because they are used constantly. Solve those first. Hidden storage for rarely used items will not make the apartment feel organized if the daily items still have nowhere to go."], bullets: ["Give shoes a defined landing area.", "Keep cleaning tools together and vertically.", "Store items near where they are actually used.", "Use closed storage for visually noisy categories."] },
      { heading: "Use vertical space selectively", paragraphs: ["Tall storage is useful when it replaces multiple small pieces. It becomes oppressive when every wall is covered. Concentrate height in one or two areas and leave some walls visually quiet."] }
    ],
    takeaway: "Storage should reduce daily friction. If an organizer makes an item harder to put away, it is probably the wrong organizer.",
    tags: ["storage", "organization", "small apartment"],
    related: ["small-apartment-storage/kitchen", "small-apartment-storage/bathroom", "small-apartment-storage/bikes"]
  },
  {
    slug: "small-apartment-storage/kitchen",
    title: "Small apartment kitchen storage without adding bulky cabinets",
    description: "Use cabinet interiors, narrow gaps and vertical zones to gain kitchen storage without making a small kitchen feel crowded.",
    category: "Storage",
    intro: "Small kitchens usually have enough total volume but poor access. Before adding a cart or cabinet, improve the storage you already have: shelf spacing, door backs, drawers and the dead air above short items.",
    sections: [
      { heading: "Fix access before adding volume", paragraphs: ["A deep cabinet becomes more useful when items are grouped in removable bins or trays. A tall cabinet shelf becomes more useful when a riser creates a second level. The goal is to see and reach what you own."], bullets: ["Use shelf risers for short pantry items.", "Keep daily cookware in the easiest-to-reach zone.", "Use door-mounted storage only for light items and only if clearance allows."] }
    ],
    takeaway: "The first extra shelf is often more useful than the first extra cabinet.",
    tags: ["kitchen storage", "small kitchen", "renters"]
  },
  {
    slug: "small-apartment-storage/bathroom",
    title: "Small apartment bathroom storage that stays easy to use",
    description: "Practical storage zones for towels, toiletries, cleaning supplies and backups in a compact bathroom.",
    category: "Storage",
    intro: "A small bathroom works best when the things used every day are visible or one motion away, while backups and cleaning products are stored higher or farther from the sink.",
    sections: [
      { heading: "Separate daily items from backups", paragraphs: ["Keep the sink zone deliberately small: toothbrushes, daily skincare and hand soap. Backups, bulk packages and rarely used tools can move to an over-toilet cabinet, high shelf or another room."], bullets: ["Use narrow vertical storage rather than deep floor cabinets.", "Avoid storing too many categories on the countertop.", "Make towels easy to return after use."] }
    ],
    takeaway: "A calm bathroom usually has fewer items in the prime-access zone, not more storage products.",
    tags: ["bathroom storage", "small bathroom", "organization"]
  },
  {
    slug: "small-apartment-storage/bikes",
    title: "Bike storage in a small apartment: floor, wall or vertical?",
    description: "How to choose an indoor bike storage method based on floor space, wall permission, bike weight and how often you ride.",
    category: "Storage",
    intro: "The right bike storage method depends less on the apartment size than on how often you use the bike and what your lease allows. Daily riders need a solution that is fast enough to use without turning storage into a chore.",
    sections: [
      { heading: "Choose by frequency and permission", paragraphs: ["A vertical floor stand is renter-friendly and compact. A wall hook saves more floor space but requires secure fixing. A horizontal wall rack can turn the bike into a visual feature, but it uses more wall width."], bullets: ["Daily rider: prioritize fast access.", "Heavy e-bike: avoid high lifting positions.", "Rental: check drilling rules before wall mounting.", "Entryway: protect walls and floors from wet tires."] }
    ],
    takeaway: "The best bike rack is the one you will actually use every day without moving three other things first.",
    tags: ["bike storage", "apartment", "renters"]
  },
  {
    slug: "furniture-layout",
    title: "Small-space furniture layout: place the big pieces first",
    description: "A simple sequence for arranging furniture in small rooms so circulation and function come before decoration.",
    category: "Furniture",
    intro: "Furniture layout becomes much easier when you stop moving every item at once. Lock in the room's fixed constraints, protect the main path, place the largest piece, and only then solve the secondary functions.",
    sections: [
      { heading: "A five-step layout sequence", paragraphs: ["Start with doors, windows and fixed utilities. Next, draw the main walking path. Place the bed or sofa. Add the second major function, such as work or dining. Finally, fill storage gaps only where access remains comfortable."], bullets: ["Fixed elements first.", "Walking path second.", "Largest furniture third.", "Secondary function fourth.", "Storage and decoration last."] },
      { heading: "Why this beats decorating first", paragraphs: ["Small rooms punish early purchases. A beautiful chair can remove the only useful place for a desk; an extra cabinet can narrow the only comfortable route through the room. Layout is a sequence problem before it is a style problem."] }
    ],
    takeaway: "If you cannot draw a comfortable route through the room, do not add another piece yet.",
    tags: ["furniture", "layout", "small rooms"],
    related: ["furniture-layout/desk-in-studio-apartment", "furniture-layout/sofa-tv-distance", "furniture-layout/rug-placement-small-living-room"]
  },
  {
    slug: "furniture-layout/desk-in-studio-apartment",
    title: "Where to put a desk in a studio apartment",
    description: "Four practical desk locations for a studio apartment, with trade-offs for light, privacy, circulation and flexibility.",
    category: "Furniture",
    intro: "A studio desk works best when it borrows an underused edge of the room rather than creating a new island of furniture. Window walls, the back of a sofa, shallow wall niches and convertible dining areas are the usual candidates.",
    sections: [
      { heading: "Pick the location by work pattern", paragraphs: ["If you work all day, prioritize natural light and a permanent chair. If you only use a laptop occasionally, a dining table or console can do double duty and preserve more open space."], bullets: ["Window: best light, but watch glare.", "Behind sofa: creates zoning without a divider.", "Wall niche: keeps work visually contained.", "Dining table: best for occasional work."] }
    ],
    takeaway: "Permanent work deserves a permanent ergonomic zone; occasional work does not always need a dedicated desk.",
    tags: ["desk", "studio apartment", "work from home"]
  },
  {
    slug: "furniture-layout/sofa-tv-distance",
    title: "Sofa-to-TV distance in a small room: a practical starting point",
    description: "A simple way to think about sofa and TV placement in compact living rooms without sacrificing circulation.",
    category: "Furniture",
    intro: "In a small room, viewing distance is only one constraint. You also need space to walk, open doors and use storage. Treat TV distance as a range rather than a single perfect number and test the layout before mounting anything.",
    sections: [
      { heading: "Start with the room, not the screen", paragraphs: ["Place the sofa where it preserves the best circulation. Then test the screen size and viewing comfort from that position. If the TV forces the sofa into the main walkway, the screen is controlling the room rather than serving it."], bullets: ["Tape the TV outline on the wall before mounting.", "Sit at your normal posture and check comfort.", "Protect the main walkway even if that means a slightly shorter viewing distance."] }
    ],
    takeaway: "In a compact room, a comfortable walkway is more valuable than a theoretically perfect viewing distance.",
    tags: ["TV", "sofa", "living room"]
  },
  {
    slug: "furniture-layout/rug-placement-small-living-room",
    title: "Rug placement in a small living room: three layouts that look intentional",
    description: "Three reliable rug placement strategies for compact living rooms and studio lounge zones.",
    category: "Furniture",
    intro: "A rug should visually collect the seating area rather than float between pieces. In a small room, the easiest rule is to connect the rug to at least the front legs of the main seating.",
    sections: [
      { heading: "Three layouts that usually work", paragraphs: ["Use all furniture on the rug when the rug is large enough, front legs on when space is tight, or a smaller centered rug only when it still relates clearly to the seating. Avoid a tiny rug that sits like an island under the coffee table."], bullets: ["All legs on: most unified look.", "Front legs on: best small-room compromise.", "Centered small rug: use carefully and keep proportions deliberate."] }
    ],
    takeaway: "A rug should connect furniture visually; if it only connects to the coffee table, it is probably too small.",
    tags: ["rug", "living room", "layout"]
  },
  {
    slug: "about",
    title: "About Small Space Planner",
    description: "Why Small Space Planner focuses on practical layouts, measured ideas and useful small-home systems.",
    category: "About",
    intro: "Small Space Planner is an independent publishing project focused on helping people make compact homes work better. We create practical planning guides, original concept layouts and clear storage frameworks.",
    sections: [
      { heading: "Our approach", paragraphs: ["We prefer specific, usable guidance over generic inspiration. Concept plans are clearly labeled as examples, and readers should verify their own measurements, building rules and product requirements before making permanent changes."] },
      { heading: "How we fund the site", paragraphs: ["We plan to support the site with display advertising and may use clearly disclosed affiliate links in the future. Advertising does not determine our editorial conclusions."] }
    ]
  },
  {
    slug: "contact",
    title: "Contact",
    description: "How to contact Small Space Planner.",
    category: "About",
    intro: "Small Space Planner is currently in its launch phase. A dedicated contact address will be published when the permanent domain goes live.",
    sections: [
      { heading: "Corrections and feedback", paragraphs: ["If you spot an error in a layout, measurement assumption or page, we want to know. The permanent contact channel will be added here before public launch."] }
    ]
  },
  {
    slug: "privacy",
    title: "Privacy policy",
    description: "Privacy information for Small Space Planner.",
    category: "Legal",
    intro: "This policy is a launch-stage summary and will be finalized for the permanent domain, analytics setup and advertising configuration before the site is submitted to advertising partners.",
    sections: [
      { heading: "Analytics and advertising", paragraphs: ["The production site may use privacy-respecting analytics, Google services and advertising technology. Where required, visitors will be offered consent controls before advertising or measurement cookies are used."], bullets: ["We will disclose the services in use.", "We will provide consent controls where legally required.", "We will update this policy when the production domain and advertising IDs are configured."] }
    ]
  },
  {
    slug: "cookie-policy",
    title: "Cookie policy",
    description: "Cookie information for Small Space Planner.",
    category: "Legal",
    intro: "The launch version does not intentionally set advertising cookies. Before Google AdSense is enabled, the site will use an appropriate consent-management solution for visitors in regions where consent is required.",
    sections: [
      { heading: "Advertising cookies", paragraphs: ["Advertising will remain disabled until the permanent domain, publisher account and consent setup are complete. This page will then list the cookie categories and controls available to visitors."] }
    ]
  },
  {
    slug: "terms",
    title: "Terms of use",
    description: "Terms for using Small Space Planner.",
    category: "Legal",
    intro: "Small Space Planner provides general informational and planning content. Concept layouts are not architectural drawings and should not be used as a substitute for professional advice where structural, electrical, plumbing, accessibility or safety requirements apply.",
    sections: [
      { heading: "Use of information", paragraphs: ["Readers are responsible for verifying dimensions, lease restrictions, building requirements and product instructions before making purchases or permanent changes."] }
    ]
  }
];

export function getGuide(slugParts: string[]) {
  return guides.find((guide) => guide.slug === slugParts.join("/"));
}

export const contentGuides = guides.filter((guide) => !["About", "Legal"].includes(guide.category));
