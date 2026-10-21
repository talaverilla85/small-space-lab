export type LayoutVariantAudit = {
  purpose: string;
  measureFirst: string[];
  tradeoffs: { choice: string; cost: string }[];
  goodFit: string;
  poorFit: string;
  deepDive: { href: string; label: string };
};

export const layoutVariantAudits: Record<string, LayoutVariantAudit> = {
  "350-sq-ft": {
    purpose: "This guide is about the compromise point between a true micro-studio and a room large enough to support one permanent secondary zone. The decision is not whether furniture can technically fit; it is which function deserves to stay permanent.",
    measureFirst: [
      "Usable wall length after doors, windows and fixed kitchen elements",
      "The full outside depth of the sofa, not only seat depth",
      "Bed-frame dimensions rather than mattress dimensions",
      "The route from entrance to bathroom and kitchen with chairs pulled out"
    ],
    tradeoffs: [
      { choice: "Permanent desk", cost: "Dining usually needs to share a surface or become fold-away." },
      { choice: "Queen bed", cost: "The sofa and storage depth need tighter control." },
      { choice: "Long storage wall", cost: "You gain capacity but lose one flexible furniture edge." }
    ],
    goodFit: "Use these plans when one person needs a real bed, real seating and one strong secondary function such as work, dining or storage.",
    poorFit: "A 350 sq ft template is a weak starting point when two people both need permanent workstations, generous dining and large independent wardrobes.",
    deepDive: { href: "/learn/how-to-measure-a-studio-apartment", label: "Measure the room before choosing the layout" }
  },
  "450-sq-ft": {
    purpose: "This guide focuses on using the extra area for separation and better circulation rather than simply scaling every piece of furniture up.",
    measureFirst: [
      "Where the primary daylight enters and which wall can take tall storage",
      "Clear width around the bed and the wardrobe when both are in use",
      "The true footprint of dining chairs or an office chair when pulled back",
      "Any pinch point between the living zone and kitchen or bathroom"
    ],
    tradeoffs: [
      { choice: "More visual separation", cost: "Dividers can reduce daylight and make the room feel fragmented." },
      { choice: "Larger sofa", cost: "Less flexible open floor for dining, exercise or guests." },
      { choice: "Dedicated work zone", cost: "Storage may need to become more concentrated elsewhere." }
    ],
    goodFit: "Use these plans when you want a studio to read as several intentional zones while keeping it visibly open.",
    poorFit: "Do not copy the zoning pattern if your only large window would end up behind tall storage or an opaque divider.",
    deepDive: { href: "/learn/how-to-zone-a-studio-apartment", label: "Learn how to zone a studio without building walls" }
  },
  "600-sq-ft": {
    purpose: "This guide is about restraint. At 600 sq ft, the risk is often not fitting too little but filling the room until the advantages of the larger footprint disappear.",
    measureFirst: [
      "The longest uninterrupted sightline through the main room",
      "Which areas genuinely need furniture and which can remain flexible",
      "The distance between major zones before adding filler pieces",
      "Storage capacity already provided by closets or built-ins"
    ],
    tradeoffs: [
      { choice: "Larger furniture", cost: "You can lose the breathing room that makes a 600 sq ft studio valuable." },
      { choice: "More separate zones", cost: "Too many boundaries can make one generous room feel chopped up." },
      { choice: "Extra storage pieces", cost: "They may duplicate built-in capacity and add visual weight." }
    ],
    goodFit: "Use these plans when you have a relatively generous studio and want stronger zoning without turning it into a collection of mini rooms.",
    poorFit: "A square-footage plan is less useful if much of the 600 sq ft is occupied by a separate kitchen, long entry hall or unusually large bathroom.",
    deepDive: { href: "/learn/make-a-small-apartment-feel-bigger", label: "See how sightlines and visual weight change a small room" }
  },
  "10x20": {
    purpose: "A 10 × 20 room is a width problem first. This guide tests how to preserve a usable long-axis route when deep furniture can quickly consume the narrow dimension.",
    measureFirst: [
      "The true clear width after baseboards, radiators or shallow cabinetry",
      "Sofa and bed depth across the 10-foot dimension",
      "Door swings that open into the long circulation strip",
      "Handlebars, chair backs or drawers that project into the route"
    ],
    tradeoffs: [
      { choice: "Furniture on both long walls", cost: "The center route can become a narrow corridor." },
      { choice: "Bed across a short wall", cost: "It creates a strong sleep zone but consumes one full end of the room." },
      { choice: "Deep sofa", cost: "Opposing storage or media furniture must become shallower." }
    ],
    goodFit: "Use these plans when the main living/sleeping room is genuinely close to 10 feet wide and roughly twice as long.",
    poorFit: "Do not rely on the diagram if kitchen cabinets or built-ins already occupy a large part of the 10-foot width; redraw the remaining usable envelope instead.",
    deepDive: { href: "/learn/furniture-measuring-checklist", label: "Measure furniture and its operating footprint" }
  },
  "12x18": {
    purpose: "This guide looks at a compact rectangle where neither dimension is generous enough to waste. The room can support clear zones, but opposing deep pieces need careful control.",
    measureFirst: [
      "Which 12-foot or 18-foot wall is interrupted least by openings",
      "Bed width plus the access side you actually need",
      "The combined depth of any two pieces that face one another",
      "The location of the brightest window for work or daytime living"
    ],
    tradeoffs: [
      { choice: "Bed on the short wall", cost: "You preserve the long axis but commit a large part of one end to sleep." },
      { choice: "Desk near the window", cost: "Living furniture may need to shift away from the brightest edge." },
      { choice: "Two opposing storage runs", cost: "Usable width disappears quickly." }
    ],
    goodFit: "Use these plans when the room is a compact rectangle and you need a bed, seating and one smaller work or storage zone.",
    poorFit: "If the bathroom, kitchenette or entry occupies part of the stated 12 × 18 footprint, plan the remaining open room rather than the advertised dimensions.",
    deepDive: { href: "/learn/how-to-measure-a-studio-apartment", label: "Create a reliable usable-room drawing first" }
  },
  "12x20": {
    purpose: "The extra two feet of length compared with a 12 × 18 room create a useful sequencing opportunity: sleep, living and flex functions can follow the long axis instead of competing across the width.",
    measureFirst: [
      "The uninterrupted length available after the entrance and kitchenette",
      "Whether the bed works better across a short end or along a long wall",
      "The narrowest point of the through-route once furniture is in use",
      "Any window or balcony door that must stay visually and physically open"
    ],
    tradeoffs: [
      { choice: "Linear sequence of zones", cost: "The room can feel tunnel-like if every piece hugs the same two walls." },
      { choice: "Cross-room furniture", cost: "It creates separation but can interrupt the long sightline." },
      { choice: "Dining in the center", cost: "Chair movement can occupy the main circulation strip." }
    ],
    goodFit: "Use these plans when your room is long and narrow enough that a clear sequence of zones is more practical than a central furniture grouping.",
    poorFit: "A 12 × 20 concept is a poor proxy for an L-shaped room or a studio where the kitchen projects deeply into the main rectangle.",
    deepDive: { href: "/learn/how-to-zone-a-studio-apartment", label: "Use zoning without turning a long room into compartments" }
  },
  "15x20": {
    purpose: "At 15 feet wide, a 300 sq ft rectangle can support more side-by-side activity than a narrower room. This guide is about spending that width on useful zoning rather than oversized furniture.",
    measureFirst: [
      "How much of the 15-foot width remains after any kitchen run or built-in wardrobe",
      "Bed orientation and the clear route past its foot or side",
      "Whether seating can form a zone without blocking the entrance-to-bathroom path",
      "Dining or desk chair movement in the wider half of the room"
    ],
    tradeoffs: [
      { choice: "Floating sofa", cost: "It can improve zoning but needs a clean route behind or around it." },
      { choice: "Wider bed access", cost: "Less uninterrupted wall remains for storage." },
      { choice: "Separate desk and dining", cost: "The room starts to lose the width advantage to duplicate surfaces." }
    ],
    goodFit: "Use these plans when you have a relatively balanced 15 × 20 rectangle and want stronger visual zones than a 10- or 12-foot-wide studio allows.",
    poorFit: "If the 15-foot width exists only on paper because fixed cabinetry occupies several feet, compare the usable rectangle instead.",
    deepDive: { href: "/learn/compare-two-studio-apartment-layouts", label: "Compare two candidate layouts with a repeatable scorecard" }
  },
  "20x20": {
    purpose: "A 20 × 20 square has no obvious long axis, so the main planning problem is creating direction and circulation without leaving a confused cluster in the center.",
    measureFirst: [
      "Which edge contains the entrance and where the natural destination path runs",
      "The position of windows before placing tall pieces",
      "The central area needed for circulation between four potential zones",
      "Whether the kitchen or bathroom breaks the nominal square"
    ],
    tradeoffs: [
      { choice: "Furniture floating in the room", cost: "It can create excellent zones but requires disciplined circulation around every side." },
      { choice: "Everything on the perimeter", cost: "The center may feel empty while the edges become visually heavy." },
      { choice: "Large central rug", cost: "It anchors living well but can blur the path to other functions." }
    ],
    goodFit: "Use these plans when the main room is close to square and you want to create a clear orientation rather than simply line the walls.",
    poorFit: "If major fixed rooms carve the square into an irregular open area, treat those fixed boundaries as the real shape.",
    deepDive: { href: "/learn/compare-two-studio-apartment-layouts", label: "Score alternative layouts before committing" }
  },
  "for-two-people": {
    purpose: "This page is specifically about simultaneous use by two people: two storage owners, two routines and two places to be. It is not simply a larger version of a solo studio.",
    measureFirst: [
      "Whether both people need access to the bed from separate sides",
      "Wardrobe and drawer access when the other person is seated or working",
      "Two usable sitting or activity positions at the same time",
      "Where personal everyday items can live without becoming shared clutter"
    ],
    tradeoffs: [
      { choice: "Two-sided bed access", cost: "The bed consumes more circulation width." },
      { choice: "Two permanent work positions", cost: "Dining or lounge space usually needs to become more flexible." },
      { choice: "More individual storage", cost: "A larger share of the perimeter becomes cabinetry." }
    ],
    goodFit: "Use these plans when two adults share one main room and need the layout to support overlapping routines rather than merely fit two sets of belongings.",
    poorFit: "If both people work from home full time or keep very different schedules, a generic couple layout may not be enough; test the exact daily routines.",
    deepDive: { href: "/learn/living-as-a-couple-in-a-studio-apartment", label: "Plan the routines and storage ownership for two people" }
  },
  "with-desk": {
    purpose: "This page is about the physical fit of a desk: desktop depth, chair pull-back, daylight and the route around the workstation. The remote-work guide addresses the broader daily routine.",
    measureFirst: [
      "Desktop width and depth including monitor stands or equipment",
      "Chair footprint when pulled back far enough to stand up",
      "Distance to power and a cable route that does not cross circulation",
      "Window position and likely screen glare at working hours"
    ],
    tradeoffs: [
      { choice: "Permanent desk", cost: "A separate dining table may duplicate the same footprint." },
      { choice: "Window-side desk", cost: "Glare or balcony access can make the position worse than it looks." },
      { choice: "Deep professional workstation", cost: "The chair and desk together can consume an entire circulation edge." }
    ],
    goodFit: "Use these plans when the desk itself is the constraint you are trying to fit into an otherwise workable studio.",
    poorFit: "If the bigger problem is separating work from home life, calls, equipment storage or two work schedules, use the remote-work planning guide instead.",
    deepDive: { href: "/learn/remote-work-zone-in-a-studio-apartment", label: "Plan the full remote-work zone, not only the desk" }
  },
  "with-king-bed": {
    purpose: "This guide treats the king bed as the non-negotiable object and shows what the rest of the studio has to give up to support it.",
    measureFirst: [
      "Exact outside dimensions of the frame, not the nominal mattress size",
      "Approach space on the side or sides used every day",
      "Drawer, wardrobe and bathroom routes around the bed",
      "Whether the frame, headboard and mattress can reach the room through the delivery path"
    ],
    tradeoffs: [
      { choice: "Two-sided king access", cost: "A large amount of width becomes sleep circulation." },
      { choice: "King plus full sofa", cost: "Work, dining or storage often becomes compressed." },
      { choice: "Bulky bed frame", cost: "Decorative rails and headboards can erase inches needed elsewhere." }
    ],
    goodFit: "Use these plans when a king bed is a deliberate priority and you are willing to keep secondary furniture compact.",
    poorFit: "Do not use mattress dimensions alone to decide fit, and avoid this strategy if the bed would block essential storage or the main route.",
    deepDive: { href: "/learn/bed-size-for-a-studio-apartment", label: "Compare the real footprint of common bed sizes" }
  },
  "with-murphy-bed": {
    purpose: "This guide is about a room with two states: bed open and bed closed. The layout has to work in both states, not only in the attractive daytime version.",
    measureFirst: [
      "Manufacturer-specified cabinet and open-bed envelope",
      "The complete swing/opening zone in front of the unit",
      "Where movable daytime furniture goes every night",
      "Wall, floor or mounting requirements specified for the exact model"
    ],
    tradeoffs: [
      { choice: "More daytime floor", cost: "You accept a daily transformation routine." },
      { choice: "Furniture in front of the bed", cost: "It must be light, movable or specifically integrated with the system." },
      { choice: "Large wall-bed cabinet", cost: "You gain hidden sleep space but lose a substantial storage/furniture wall." }
    ],
    goodFit: "Use these plans when daytime living or work space is more valuable to you than leaving the bed permanently ready.",
    poorFit: "A Murphy bed is a weak solution when opening it requires moving heavy furniture every night or when the wall/mounting conditions are unsuitable.",
    deepDive: { href: "/learn/furniture-measuring-checklist", label: "Measure both closed and operating furniture footprints" }
  },
  "with-balcony": {
    purpose: "This page treats the balcony door and daylight as part of the floor plan. The goal is to keep the indoor-outdoor route useful instead of treating glazing like spare wall space.",
    measureFirst: [
      "Door type, opening direction and the full approach zone",
      "The primary daylight path from the glazing into the room",
      "Furniture height near the window or balcony edge",
      "The route from entrance or kitchen to the balcony with furniture in use"
    ],
    tradeoffs: [
      { choice: "Living zone facing the balcony", cost: "Media placement may become less convenient." },
      { choice: "Desk by the glazing", cost: "Glare and door access need active management." },
      { choice: "Storage near the balcony", cost: "Tall pieces can reduce daylight and visual depth." }
    ],
    goodFit: "Use these plans when balcony access and the view are frequent parts of daily life and deserve a protected circulation axis.",
    poorFit: "If the balcony is rarely used but storage is severely limited, the priorities may be different; still keep the legal and practical exit/access requirements clear.",
    deepDive: { href: "/learn/how-to-zone-a-studio-apartment", label: "Create zones while preserving the room's main sightline" }
  },
  "with-dining-table": {
    purpose: "This guide is about the table plus the people around it. A tabletop can fit while chair movement makes the zone unusable.",
    measureFirst: [
      "Tabletop dimensions in both normal and extended positions",
      "Chair depth and pull-back area on every regularly used side",
      "The path around the occupied table, not the empty table",
      "Whether the same surface can realistically handle work or food prep"
    ],
    tradeoffs: [
      { choice: "Four permanent seats", cost: "Unused chairs consume circulation every day." },
      { choice: "Round table", cost: "Easier corners but less efficient use of a long wall." },
      { choice: "Separate desk and dining table", cost: "Two surfaces may duplicate the same function in a studio." }
    ],
    goodFit: "Use these plans when sitting down to eat is an important daily function and the table deserves a deliberate zone.",
    poorFit: "If dining is occasional, a large permanent table may be a poor use of the floor compared with a drop-leaf or shared work surface.",
    deepDive: { href: "/learn/dining-table-for-a-small-apartment", label: "Choose table shape by real chair movement" }
  },
  "for-remote-work": {
    purpose: "This page is about the entire workday: concentration, calls, equipment, storage and switching the studio back to home mode. It deliberately goes beyond simply finding a wall for a desk.",
    measureFirst: [
      "Desk and chair operating footprint",
      "Camera background, daylight direction and likely glare",
      "Storage volume for work equipment that should disappear after hours",
      "How the work zone interacts with another person's sleep or living routine"
    ],
    tradeoffs: [
      { choice: "Permanent office edge", cost: "A meaningful part of the studio remains work-oriented all week." },
      { choice: "Shared dining/work surface", cost: "Work has to be packed away before meals or other uses." },
      { choice: "Visually screened office", cost: "A divider can reduce light or make the room feel smaller." }
    ],
    goodFit: "Use these plans when working from home is a recurring routine and the apartment needs a reliable work mode and home mode.",
    poorFit: "If you only need somewhere to place a laptop occasionally, a dedicated office zone may be unnecessary; the dining or console surface may be enough.",
    deepDive: { href: "/learn/remote-work-zone-in-a-studio-apartment", label: "Build a remote-work zone that can reset after hours" }
  }
};

export function getLayoutVariantAudit(slug: string) {
  return layoutVariantAudits[slug];
}
