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
    intro: "Small kitchens usually have enough total volume but poor access. Before adding a cart or cabinet, improve the storage you already have: shelf spacing, door backs, drawers and the dead air above short items. The goal is not to store more at any cost; it is to make the things you actually use easier to see, reach and put away.",
    sections: [
      { heading: "Fix access before adding volume", paragraphs: ["A deep cabinet becomes more useful when items are grouped in removable bins or trays. A tall cabinet shelf becomes more useful when a riser creates a second level. The goal is to see and reach what you own without unpacking half the cabinet."], bullets: ["Use shelf risers for short pantry items.", "Keep daily cookware in the easiest-to-reach zone.", "Use door-mounted storage only for light items and only if clearance allows.", "Put rarely used appliances in the least convenient zone, not on the counter."] },
      { heading: "Use the narrow spaces deliberately", paragraphs: ["A narrow gap beside a refrigerator or cabinet can hold trays, cutting boards or a slim rolling rack, but only if the rack can be pulled out without blocking the main walkway. Measure the real gap at floor and handle height before buying anything.", "Countertop storage should earn its place. If an item is used less than several times a week, moving it off the counter usually improves both prep space and the visual calm of a small kitchen."] },
      { heading: "Create one pantry logic", paragraphs: ["Group food by how you cook rather than by package shape. Breakfast, baking, quick meals and snacks are easier to maintain than a collection of unrelated containers. Put the most-used group between waist and eye level and use higher shelves for backups."], bullets: ["Decant only when it genuinely improves access.", "Label opaque bins so food does not disappear.", "Keep heavy items low.", "Leave a little empty space so the system can absorb a normal grocery shop."] }
    ],
    takeaway: "The first extra shelf is often more useful than the first extra cabinet. Improve access, then add storage only where a specific category still has no home.",
    tags: ["kitchen storage", "small kitchen", "renters"]
  },
  {
    slug: "small-apartment-storage/bathroom",
    title: "Small apartment bathroom storage that stays easy to use",
    description: "Practical storage zones for towels, toiletries, cleaning supplies and backups in a compact bathroom.",
    category: "Storage",
    intro: "A small bathroom works best when the things used every day are visible or one motion away, while backups and cleaning products are stored higher or farther from the sink. The room feels larger when the prime-access zone is intentionally limited rather than packed with organizers.",
    sections: [
      { heading: "Separate daily items from backups", paragraphs: ["Keep the sink zone deliberately small: toothbrushes, daily skincare and hand soap. Backups, bulk packages and rarely used tools can move to an over-toilet cabinet, high shelf or another room."], bullets: ["Use narrow vertical storage rather than deep floor cabinets.", "Avoid storing too many categories on the countertop.", "Make towels easy to return after use.", "Keep medicines and products that require specific conditions according to their labels, not simply wherever space is available."] },
      { heading: "Use moisture-friendly storage", paragraphs: ["Bathrooms are humid, so paper packaging, spare textiles and products that dislike moisture may be better stored outside the room. Closed containers can reduce visual clutter, but they should not trap wet towels or damp cleaning cloths.", "If you add storage above the toilet or door, check that it is securely fixed and does not create a head-height obstacle."] },
      { heading: "Give cleaning supplies one compact zone", paragraphs: ["A small caddy under the sink or in a nearby utility area is easier to manage than bottles spread across several shelves. Keep the products you use in the bathroom together so cleaning the room does not require searching elsewhere."], bullets: ["Keep frequently used products in front.", "Store backups behind or above daily items.", "Use hooks only where they do not interfere with doors or towels.", "Leave the floor as clear as possible for easier cleaning."] }
    ],
    takeaway: "A calm bathroom usually has fewer items in the prime-access zone, not more storage products. Put daily items close, backups farther away and moisture-sensitive items where they will keep better.",
    tags: ["bathroom storage", "small bathroom", "organization"]
  },
  {
    slug: "small-apartment-storage/bikes",
    title: "Bike storage in a small apartment: floor, wall or vertical?",
    description: "How to choose an indoor bike storage method based on floor space, wall permission, bike weight and how often you ride.",
    category: "Storage",
    intro: "The right bike storage method depends less on the apartment size than on how often you use the bike and what your lease allows. Daily riders need a solution that is fast enough to use without turning storage into a chore, while occasional riders can trade convenience for a smaller footprint.",
    sections: [
      { heading: "Choose by frequency and permission", paragraphs: ["A vertical floor stand is renter-friendly and compact. A wall hook saves more floor space but requires secure fixing. A horizontal wall rack can turn the bike into a visual feature, but it uses more wall width."], bullets: ["Daily rider: prioritize fast access.", "Heavy e-bike: avoid high lifting positions.", "Rental: check drilling rules before wall mounting.", "Entryway: protect walls and floors from wet tires."] },
      { heading: "Plan the real footprint", paragraphs: ["Measure the handlebars, pedals and wheel projection, not just the frame. A bike stored vertically may use little floor area but still project into a walkway at handlebar height.", "For a wall-mounted system, verify the wall construction and use fixings rated for the actual load. The rack manufacturer and your building or lease rules should take priority over a generic mounting recommendation."] },
      { heading: "Make arrival and departure easy", paragraphs: ["A storage solution that looks compact but requires moving furniture every time will quickly become unused. Daily riders benefit from a route that goes door → bike → outside without crossing the bed or main seating zone."], bullets: ["Add a small mat or tray if tires are often wet.", "Keep helmet and lock near the bike.", "Avoid storing a hot or charging e-bike battery in ways that conflict with manufacturer guidance.", "Do not let pedals or handlebars narrow an emergency exit route."] }
    ],
    takeaway: "The best bike rack is the one you will actually use every day without moving three other things first. Measure the full bike envelope and choose access before aesthetics.",
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
    intro: "A studio desk works best when it borrows an underused edge of the room rather than creating a new island of furniture. Window walls, the back of a sofa, shallow wall niches and convertible dining areas are the usual candidates. The desk footprint also includes the chair when it is pulled back, so a seemingly small workstation can consume more circulation than expected.",
    sections: [
      { heading: "Pick the location by work pattern", paragraphs: ["If you work all day, prioritize a permanent chair, useful light and enough depth for the equipment you actually use. If you only use a laptop occasionally, a dining table or console can do double duty and preserve more open space."], bullets: ["Window: good daylight, but watch screen glare.", "Behind sofa: creates zoning without a divider.", "Wall niche: keeps work visually contained.", "Dining table: efficient for occasional work."] },
      { heading: "Protect the chair zone", paragraphs: ["Measure the desk with the chair pulled back to a realistic working position. If that chair blocks the only route to the kitchen, balcony or bed, the location is not as efficient as it looks on a floor plan.", "A shallow desk can be more valuable than a wider one in a narrow studio because reducing depth protects the path through the room."] },
      { heading: "Make work visually end", paragraphs: ["In a one-room home, work equipment can make the entire apartment feel like an office. Keep cables, notebooks and accessories in one contained zone, and use lighting that can be switched off separately when the workday ends."], bullets: ["Use vertical storage above the desk only if it does not make the wall feel heavy.", "Keep video-call backgrounds in mind if calls are frequent.", "Avoid placing the desk where a door opens directly into the chair.", "If two people share the studio, decide whether one permanent desk or two flexible work points reduce more friction."] }
    ],
    takeaway: "Permanent work deserves a permanent ergonomic zone; occasional work does not always need a dedicated desk. The best position is the one that stays usable without stealing the room's main path.",
    tags: ["desk", "studio apartment", "work from home"]
  },
  {
    slug: "furniture-layout/sofa-tv-distance",
    title: "Sofa-to-TV distance in a small room: a practical starting point",
    description: "A simple way to think about sofa and TV placement in compact living rooms without sacrificing circulation.",
    category: "Furniture",
    intro: "In a small room, viewing distance is only one constraint. You also need space to walk, open doors and use storage. Treat TV distance as a range rather than a single perfect number and test the layout before mounting anything. The goal is a comfortable viewing position that does not force the rest of the room into awkward gaps.",
    sections: [
      { heading: "Start with the room, not the screen", paragraphs: ["Place the sofa where it preserves the best circulation. Then test the screen size and viewing comfort from that position. If the TV forces the sofa into the main walkway, the screen is controlling the room rather than serving it."], bullets: ["Tape the TV outline on the wall before mounting.", "Sit at your normal posture and check comfort.", "Protect the main walkway even if that means a slightly shorter viewing distance.", "Check that cabinet doors and drawers can still open."] },
      { heading: "Use a range, not one magic number", paragraphs: ["Viewing comfort changes with screen resolution, eyesight, content and personal preference. A calculator can give you a useful starting band, but the room should decide the final sofa position.", "If a larger TV demands a sofa position that blocks circulation, a smaller screen or a different wall can produce a better overall room even if the theoretical viewing distance is less dramatic."] },
      { heading: "Plan the wall before drilling", paragraphs: ["Mark the screen center and outline with low-tack tape. Sit in the real sofa position and look at the screen center for a few minutes before mounting. Also check power, cable routing and the mount manufacturer's instructions."], bullets: ["Avoid mounting so high that normal viewing requires lifting your chin.", "Keep cables out of walking routes.", "Check glare at the times of day when you watch most often.", "If the sofa floats, leave enough room behind it for the path you actually use."] }
    ],
    takeaway: "In a compact room, a comfortable walkway is more valuable than a theoretically perfect viewing distance. Let the room set the sofa position, then choose the screen size that works with it.",
    tags: ["TV", "sofa", "living room"]
  },
  {
    slug: "furniture-layout/rug-placement-small-living-room",
    title: "Rug placement in a small living room: three layouts that look intentional",
    description: "Three reliable rug placement strategies for compact living rooms and studio lounge zones.",
    category: "Furniture",
    intro: "A rug should visually collect the seating area rather than float between pieces. In a small room, the easiest rule is to connect the rug to at least the front legs of the main seating. The rug should help the lounge read as one zone without interfering with doors, circulation or nearby furniture.",
    sections: [
      { heading: "Three layouts that usually work", paragraphs: ["Use all furniture on the rug when the rug is large enough, front legs on when space is tight, or a smaller centered rug only when it still relates clearly to the seating. Avoid a tiny rug that sits like an island under the coffee table."], bullets: ["All legs on: most unified look.", "Front legs on: strong small-room compromise.", "Centered small rug: use carefully and keep proportions deliberate.", "No rug: sometimes better than a rug that makes the zone look undersized."] },
      { heading: "Check the room edges", paragraphs: ["A rug does not need to be centered in the entire room. It needs to make sense with the seating group. In a studio, that often means the rug is offset toward the sofa while another zone — such as the bed or desk — remains on exposed flooring.", "Leave enough floor around the rug that doors open freely and the edge does not create a trip point in the main path."] },
      { heading: "Test the footprint before ordering", paragraphs: ["Mark the rug dimensions with painter's tape or sheets of paper and place the sofa and coffee table around that outline. This is especially useful because product photos can make rugs look larger than they feel in a real room."], bullets: ["Check that the sofa relates to the rug width.", "Keep the coffee table comfortably inside the rug area.", "Avoid placing a rug edge exactly where people repeatedly step across it.", "Use a suitable rug pad where needed to reduce movement."] }
    ],
    takeaway: "A rug should connect furniture visually; if it only connects to the coffee table, it is probably too small. Choose the size that organizes the seating zone, not the size that merely fits between pieces.",
    tags: ["rug", "living room", "layout"]
  },
  {
    slug: "small-apartment-storage/clothes",
    title: "Small apartment clothes storage without filling the room with wardrobes",
    description: "A practical clothes-storage system for small apartments using one main clothing zone, under-bed space and seasonal rotation.",
    category: "Storage",
    intro: "Clothes storage becomes messy when everyday items, occasional items and seasonal items all compete for the same easy-access space. Give daily clothing the best zone, move seasonal pieces out of the way, and resist spreading small organizers around every wall.",
    sections: [
      { heading: "Build one main clothing zone", paragraphs: ["A single wardrobe run, closet wall or dresser-plus-hanging zone is easier to use than clothes stored in several unrelated corners. Keep the daily categories together so getting dressed and putting things away happen in one place."], bullets: ["Hang only what benefits from hanging.", "Fold dense categories such as T-shirts and knitwear.", "Use the highest shelves for seasonal or rare-use items.", "Keep laundry close enough that worn clothes do not migrate onto furniture."] },
      { heading: "Use under-bed storage for the right things", paragraphs: ["Under-bed space is valuable because it is large but not especially convenient. Use it for bedding, off-season clothing or bulky items rather than the clothes you reach for every morning."] },
      { heading: "Make the system easy to reset", paragraphs: ["The best clothing system is one you can restore in a few minutes. Overly precise folding, too many tiny bins and difficult lids create friction that eventually becomes clutter."] }
    ],
    takeaway: "Give daily clothes the easiest storage, seasonal clothes the least convenient storage and keep the whole system concentrated in one part of the room.",
    tags: ["clothes storage", "small apartment", "wardrobe"],
    related: ["small-apartment-storage", "small-apartment-storage/entryway", "studio-apartment-layouts/for-two-people"]
  },
  {
    slug: "small-apartment-storage/vacuum",
    title: "Where to store a vacuum in a small apartment",
    description: "Practical places to store upright, stick and robot vacuums in a small apartment without blocking daily circulation.",
    category: "Storage",
    intro: "A vacuum is awkward because it is tall, irregular and used often enough that hiding it too well can make cleaning inconvenient. The right location depends on the vacuum type, charging needs and whether you can drill into walls.",
    sections: [
      { heading: "Match the storage spot to the vacuum", paragraphs: ["Stick vacuums work well on a wall dock or narrow utility zone. Upright vacuums need floor depth and are often best beside a wardrobe, inside a utility closet or behind a door where the handle does not interfere with movement. Robot vacuums need open charging access rather than hidden storage."], bullets: ["Stick vacuum: vertical wall or cabinet-side zone.", "Upright vacuum: closet, wardrobe side or dedicated narrow corner.", "Robot vacuum: low open charging bay with clear approach.", "Corded vacuum: store the cord so it does not spill into the walking path."] },
      { heading: "Keep cleaning tools together", paragraphs: ["Mop, broom, dustpan and vacuum accessories are easier to manage as one utility category. A narrow vertical strip often stores more efficiently than several hooks spread through the apartment."] },
      { heading: "Do not hide it behind daily obstacles", paragraphs: ["If using the vacuum requires moving a chair, laundry basket and suitcase first, the storage location is too inconvenient. Frequent-use cleaning tools should be quick to take out and quick to return."] }
    ],
    takeaway: "The best vacuum storage is narrow, vertical and immediately accessible. Convenience matters more than making the vacuum completely invisible.",
    tags: ["vacuum storage", "cleaning tools", "small apartment"],
    related: ["small-apartment-storage", "small-apartment-storage/entryway", "small-apartment-storage/clothes"]
  },
  {
    slug: "small-apartment-storage/entryway",
    title: "Small apartment entryway storage for shoes, bags and everyday clutter",
    description: "Create a compact apartment entryway landing zone for shoes, bags, coats and keys without blocking the door.",
    category: "Storage",
    intro: "Even apartments without a real foyer need a landing zone. The entrance is where shoes, bags, keys and coats naturally collect, so giving those items a deliberate home prevents clutter from spreading into the rest of the room.",
    sections: [
      { heading: "Keep the landing zone shallow", paragraphs: ["Entry storage should not reduce the main route into the apartment. Use shallow shoe storage, wall hooks and a small tray or shelf rather than a deep cabinet that narrows the doorway."], bullets: ["Shoes: keep only the pairs used regularly near the door.", "Keys and wallet: use one small repeatable landing point.", "Bags: one strong hook is better than a pile on the floor.", "Coats: limit the visible hooks to current-season items."] },
      { heading: "Create a clean boundary", paragraphs: ["A rug, narrow console or change in wall treatment can define the entry without adding a physical divider. The goal is to signal where outside items stop before they spread through the studio."] },
      { heading: "Protect the door swing", paragraphs: ["Measure the full door arc before adding hooks, baskets or shoe storage. A good entryway system should make arrival easier, not turn opening the door into a puzzle."] }
    ],
    takeaway: "A small entryway works when every daily item has a one-motion landing place and the doorway remains completely easy to use.",
    tags: ["entryway storage", "shoe storage", "small apartment"],
    related: ["small-apartment-storage", "small-apartment-storage/clothes", "small-apartment-storage/bikes"]
  },
  {
    slug: "about",
    title: "About Small Space Planner",
    description: "Why Small Space Planner focuses on practical layouts, measured ideas and useful small-home systems.",
    category: "About",
    intro: "Small Space Planner is an independent planning resource for people living in studios and compact homes. We build practical layout guides, original concept plans and simple tools that help turn measurements into better decisions.",
    sections: [
      { heading: "Our approach", paragraphs: ["We prefer specific, usable guidance over generic inspiration. Concept plans are created for Small Space Planner and are clearly labeled as examples. We separate total apartment area from the open room or reference footprint whenever that distinction matters, and we use measured furniture footprints in our interactive planning tools.", "Readers should always verify their own walls, doors, windows, fixed services, lease restrictions, building rules and product instructions before making purchases or permanent changes."] },
      { heading: "How we build the guides", paragraphs: ["Guides are organized around real constraints: square footage, room shape, circulation, storage, work, sleeping and shared living. We try to explain the trade-off behind each recommendation rather than present one layout as universally correct.", "When a dimension is presented as a practical target rather than a legal or accessibility requirement, we label it as planning guidance. Building codes, accessibility standards and manufacturer requirements can vary by location and product."] },
      { heading: "How the site stays independent", paragraphs: ["Small Space Planner may use clearly labeled advertising or affiliate links. Commercial relationships do not determine our planning recommendations, and tools or guides are designed to remain useful without requiring a purchase."] }
    ]
  },
  {
    slug: "privacy",
    title: "Privacy policy",
    description: "Privacy information for Small Space Planner.",
    category: "Legal",
    intro: "Small Space Planner may use Google AdSense to fund the site. Advertising is not currently being served while the publisher account and consent setup are being completed. This policy describes the data practices that will apply when Google advertising is enabled and will be updated if additional analytics or advertising services are introduced.",
    sections: [
      { heading: "Google advertising and third-party technologies", paragraphs: ["When Google AdSense is enabled, Google and other third-party vendors may use cookies, web beacons, IP addresses or similar identifiers to serve, measure and protect advertising on this site. Third parties may place or read cookies in your browser as a result of ad serving.", "Google may use information from this site in accordance with its policies for partner sites and apps, including for ad delivery, measurement, fraud prevention and, where permitted and consented to, personalization."], bullets: ["Google's explanation of partner-site data use is available at policies.google.com/technologies/partner-sites.", "Google advertising preferences can be managed through Google's ad settings.", "Where required, non-essential advertising technologies will be controlled through a consent-management platform before they are used."] },
      { heading: "Consent and regional requirements", paragraphs: ["For visitors in regions where consent is required for advertising cookies or personal-data processing, Small Space Planner will use an appropriate consent-management platform and will respect the choices made through that interface."] },
      { heading: "Changes to this policy", paragraphs: ["This policy will be updated when the services used by the site change. The current version should be read together with the Cookie Policy."] }
    ]
  },
  {
    slug: "cookie-policy",
    title: "Cookie policy",
    description: "Cookie information for Small Space Planner.",
    category: "Legal",
    intro: "Small Space Planner does not currently serve display ads while the AdSense review and consent setup are being completed. If Google AdSense or other non-essential measurement technologies are enabled, this page explains the categories involved and the controls available to visitors.",
    sections: [
      { heading: "Advertising cookies and identifiers", paragraphs: ["Google AdSense may use cookies or similar technologies to serve and measure ads, limit repeated ads, detect fraud and, where permitted, personalize advertising. Google and its partners may also receive information such as the page URL, IP address and device or browser information when their services are used."] },
      { heading: "Consent controls", paragraphs: ["Where consent is required, advertising and other non-essential technologies will be managed through a consent-management platform. Visitors will be able to make or change the choices offered by that platform."], bullets: ["Essential site functionality does not depend on accepting personalized advertising.", "Rejecting personalized advertising does not prevent access to the site's planning content.", "Google's advertising settings provide additional controls for Google-served ads."] },
      { heading: "More information", paragraphs: ["More information about how Google uses data from partner sites and apps is available at policies.google.com/technologies/partner-sites. This Cookie Policy will be updated if the technologies used by Small Space Planner change."] }
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
