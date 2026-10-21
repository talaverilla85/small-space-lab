export type LearnDepth = {
  purpose: string;
  measureFirst: string[];
  workedExample: string;
  decisionRule: string;
  avoid: string;
};

export const learnArticleDepth: Record<string, LearnDepth> = {
  "small-bathroom-storage-system": {
    purpose: "The useful question is not how many organizers fit in the bathroom. It is which items deserve the easiest access and which categories can move somewhere drier or less crowded.",
    measureFirst: [
      "The clear width beside the sink and toilet, including door and drawer movement",
      "The usable depth of any under-sink space after pipes and traps",
      "The height available above the toilet or door without creating a head-level obstacle",
      "How much of the counter is actually needed for daily use"
    ],
    workedExample: "Example only: if a 24-inch-wide vanity has a 6-inch plumbing zone through the middle, do not treat the cabinet as one 24-inch storage box. Divide the remaining space into accessible side zones and reserve the easiest shelf for items used every day. Backups can live higher or outside the bathroom.",
    decisionRule: "Give prime bathroom space to daily-use items; move bulk backups before buying another cabinet.",
    avoid: "Do not solve humidity, leaks or ventilation problems by hiding them behind storage."
  },
  "under-bed-storage-that-stays-usable": {
    purpose: "Under-bed storage is valuable only when items can be retrieved without dismantling the room. The real design problem is access frequency, container height and the obstacles created by center legs or rails.",
    measureFirst: [
      "The lowest clear height under the frame at several points",
      "The width between center supports, legs and side rails",
      "How far a container must slide before it clears the bed",
      "Which side of the bed is actually reachable in daily life"
    ],
    workedExample: "Example only: a bed may have 8 inches of apparent clearance but a center rail that drops to 6.5 inches. In that case, a 7-inch box is not a fit even though the edge looks tall enough. Use the smallest measured clearance and keep weekly-use items on the easiest side.",
    decisionRule: "Design the system around retrieval, not maximum cubic volume.",
    avoid: "Do not fill the entire footprint with mixed boxes that require several other boxes to move first."
  },
  "small-living-room-furniture-layout": {
    purpose: "This method exists to stop the common habit of moving every piece at once. The layout should be solved in a fixed order so circulation and the room's main purpose are protected before secondary furniture is added.",
    measureFirst: [
      "Door, window and fixed-service locations",
      "The main path through the room when people are seated",
      "The full sofa footprint and the route around it",
      "The operating space of chairs, drawers and any extendable furniture"
    ],
    workedExample: "Example only: if a room is 10 × 12 feet, placing a 38-inch-deep sofa opposite a 20-inch-deep media unit uses 58 inches before any walking space is counted. That simple sum explains why depth can matter more than width in a compact living room.",
    decisionRule: "Place the sofa only after the main route is visible; add the secondary function after the sofa works.",
    avoid: "Do not use an empty wall as a reason to add furniture if the room already performs its main jobs."
  },
  "small-apartment-lighting-layers": {
    purpose: "The goal of layered lighting is not to add more lamps. It is to let one room support movement, focused tasks and evening relaxation without forcing one ceiling light to do everything.",
    measureFirst: [
      "Where you actually read, cook, work and relax",
      "Which surfaces already have safe access to power",
      "Whether a floor lamp base would sit in a walking route",
      "Where glare appears on screens or reflective surfaces"
    ],
    workedExample: "Example only: a studio with one ceiling fixture may need only two additions—a desk lamp for focused work and a small evening lamp beside the sofa or bed. That creates three lighting modes without adding a lamp to every corner.",
    decisionRule: "Add light to a task or mood you cannot currently support; do not add a fixture simply to fill a dark-looking corner.",
    avoid: "Keep cords and lamp bases out of circulation paths and follow the fixture manufacturer's electrical instructions."
  },
  "small-entryway-storage-system": {
    purpose: "An entryway system should reduce the number of objects that travel deeper into the apartment. The correct layout follows the first thirty seconds after you come through the door.",
    measureFirst: [
      "The complete door swing and the clear exit route",
      "The depth available before storage projects into the walking path",
      "The number of shoes, coats and bags used in a normal week",
      "Where parcels can wait without becoming floor obstacles"
    ],
    workedExample: "Example only: if a corridor is 42 inches wide, a 14-inch-deep shoe bench leaves 28 inches before coats or bags project beyond it. A shallower closed cabinet may work better if the opposite wall already has hooks.",
    decisionRule: "Give every high-frequency arrival item a home within one or two movements of the door.",
    avoid: "Never trade an easy exit route for a little more shoe or coat capacity."
  },
  "small-kitchen-counter-space": {
    purpose: "Counter space is working space, not just storage space. The most useful improvement is usually creating one continuous preparation zone rather than spreading small empty gaps between appliances.",
    measureFirst: [
      "The longest uninterrupted counter run",
      "Which appliances are used daily, weekly and rarely",
      "Where cabinet doors and drawers need to open",
      "Where a temporary cart or board would go when not in use"
    ],
    workedExample: "Example only: three appliances each 10–12 inches wide can consume most of a 48-inch counter. Moving two weekly-use appliances into a cabinet can recover a continuous preparation zone without buying any new storage.",
    decisionRule: "A counter appliance earns permanent space through frequency of use, not purchase price.",
    avoid: "Do not add a rolling cart if it simply moves the obstruction from the counter into the main kitchen route."
  },
  "furnish-a-studio-apartment-on-a-budget": {
    purpose: "A budget studio is easier to furnish when spending follows function. Buying inexpensive versions of unnecessary pieces is still wasted money and floor area.",
    measureFirst: [
      "The maximum bed, sofa and storage footprints before shopping",
      "The delivery path for large pieces",
      "Which activities truly need separate furniture",
      "What storage already exists in closets, cabinets and under the bed"
    ],
    workedExample: "Example only: if a dining table and desk would both occupy the same six-to-eight square feet at different times of day, one comfortable dual-purpose table may cost less and preserve more floor than two cheap surfaces.",
    decisionRule: "Buy the piece that solves the most frequent unsolved problem next.",
    avoid: "Do not spend the first part of the budget on matching decor, organizers or occasional-use furniture before sleep, seating and daily storage work."
  },
  "moving-into-a-studio-apartment-checklist": {
    purpose: "The first week is a measurement period. Delaying non-essential purchases gives you real evidence about routes, clutter points and routines before the room becomes difficult to change.",
    measureFirst: [
      "Empty-room wall dimensions and fixed obstacles before boxes arrive",
      "The route from entrance to bathroom and kitchen",
      "Where unpacked daily items naturally accumulate",
      "Which empty corners remain genuinely unused after several days"
    ],
    workedExample: "Example only: if bags repeatedly land on the same chair for five days, the problem is not 'general storage.' It is a missing bag landing zone near the route you already use. That observation produces a much more specific purchase.",
    decisionRule: "Wait until a problem repeats before buying furniture or storage to solve it.",
    avoid: "Do not fill empty corners during move-in simply because they look unfinished."
  },
  "make-a-small-apartment-feel-bigger": {
    purpose: "Feeling larger is usually the result of fewer visual interruptions, clearer routes and better sightlines—not a particular color, mirror or decorating trick.",
    measureFirst: [
      "The longest sightline from the entrance or main seating position",
      "Which tall pieces interrupt the main window or view across the room",
      "How many separate storage pieces create repeated visual edges",
      "Which furniture pieces duplicate the same function"
    ],
    workedExample: "Example only: replacing two narrow cabinets on opposite walls with one taller storage run can reduce the number of furniture edges in view while keeping similar capacity. The gain is visual continuity, not magically increased floor area.",
    decisionRule: "Remove or consolidate an interruption before buying an object advertised as space-enhancing.",
    avoid: "Do not sacrifice useful seating, storage or privacy merely to make the room photograph as emptier."
  },
  "furniture-measuring-checklist": {
    purpose: "Furniture has three footprints: packaged, installed and in use. A purchase is only a fit when it survives all three tests.",
    measureFirst: [
      "Product width, depth and height plus removable components",
      "Packaging dimensions when the manufacturer provides them",
      "Every doorway, turn, stair landing and elevator on the delivery route",
      "The open or pulled-out footprint of drawers, chairs, recliners and wall beds"
    ],
    workedExample: "Example only: a 78-inch sofa may fit an 84-inch wall but still fail at a 30-inch doorway with a tight 90-degree turn. The final-wall measurement and the delivery-route measurement answer different questions.",
    decisionRule: "Do not order until both the delivery route and the operating footprint work.",
    avoid: "Never assume legs, arms or backs are removable unless the manufacturer says they are."
  },
  "small-apartment-storage-audit": {
    purpose: "The audit separates a true lack of capacity from bad placement. Many objects stay visible because putting them away costs too many movements, not because the apartment has zero storage.",
    measureFirst: [
      "Which items are left out repeatedly for three normal days",
      "How far each item's current home is from where it is used",
      "How many movements are required to put it away",
      "Whether its container is too small, too large or blocked"
    ],
    workedExample: "Example only: if cleaning spray lives behind a stack of towels in a bedroom closet, buying another basket may not help. Moving a small cleaning caddy closer to the bathroom can reduce friction without increasing total storage.",
    decisionRule: "Fix location and access before adding capacity.",
    avoid: "Do not buy organizers for a category until you know its stable quantity and point of use."
  },
  "living-as-a-couple-in-a-studio-apartment": {
    purpose: "Two-person planning is about simultaneous use. The room has to support two routines at once, not simply contain twice as many possessions.",
    measureFirst: [
      "Whether both people need bed access from separate sides",
      "Two places to sit, work or relax at the same time",
      "How wardrobe and drawer access overlaps with the other person's routine",
      "Where each person's everyday personal items will live"
    ],
    workedExample: "Example only: if one person works at the dining table while the other needs it for meals, the conflict is a scheduling and surface problem. A small dedicated desk may add more value than another decorative storage piece.",
    decisionRule: "Design for the moments when both people need the room at the same time.",
    avoid: "Do not treat all storage as vaguely shared; assigned zones are easier to maintain."
  },
  "studio-room-divider-ideas-that-do-not-block-light": {
    purpose: "A divider should solve a privacy or zoning problem while preserving the window's ability to serve the whole room. The lightest effective boundary is usually the best starting point.",
    measureFirst: [
      "The direct path between the main window and the darker part of the studio",
      "The height and opacity of the proposed divider",
      "The width needed to pass beside or around it",
      "Whether the divider adds storage or another useful function"
    ],
    workedExample: "Example only: a 72-inch-high solid screen can visually close a sleeping area but also block a large part of a single window's light path. A curtain that opens fully or a lower cabinet may solve the same privacy problem more flexibly.",
    decisionRule: "Use the least permanent, least opaque divider that solves the actual problem.",
    avoid: "Do not add a divider when furniture orientation, a rug and lighting already make the zones clear."
  },
  "renter-friendly-storage-without-drilling": {
    purpose: "Renter-friendly does not mean attachment-free at any cost. It means choosing reversible solutions while still following load limits, anti-tip instructions and lease restrictions.",
    measureFirst: [
      "The floor and wall footprint of a freestanding piece",
      "Door thickness and hinge clearance for over-door storage",
      "Ceiling and floor conditions for tension systems",
      "The weight of the objects the system must actually hold"
    ],
    workedExample: "Example only: a narrow freestanding shelf may look safer than wall mounting, but a tall unit can still require anti-tip restraint under the manufacturer's instructions. The lease and product safety requirements both matter.",
    decisionRule: "Choose reversibility after you confirm the system can be used safely.",
    avoid: "Do not use adhesive, tension or freestanding products beyond their stated surfaces or loads simply to avoid drilling."
  },
  "remote-work-zone-in-a-studio-apartment": {
    purpose: "A remote-work zone has to work while you are seated and disappear psychologically when work ends. Desk size alone does not solve glare, calls, cables or work-life separation.",
    measureFirst: [
      "Desk depth plus the pulled-back chair envelope",
      "Screen glare at the hours you normally work",
      "Power, cable and equipment-storage locations",
      "What the camera sees during calls and what the room needs after work"
    ],
    workedExample: "Example only: a 20-inch-deep desk may appear to fit a 24-inch wall recess, but a chair can require several additional feet while in use. Mark both footprints with tape before deciding the niche is a functional office.",
    decisionRule: "Measure the workstation in use, then plan where work objects go when the day ends.",
    avoid: "Do not create a permanent office footprint for occasional laptop use if a shared surface already works."
  },
  "dining-table-for-a-small-apartment": {
    purpose: "The table is only part of the dining footprint. Chairs, bodies and the route around them decide whether the setup is comfortable.",
    measureFirst: [
      "Table dimensions in normal and extended positions",
      "Chair depth plus the distance needed to sit down and stand up",
      "The route around the occupied table",
      "Whether the surface also needs to support work, hobbies or food preparation"
    ],
    workedExample: "Example only: a 36-inch round table may look compact, but four pulled-out chairs create a much larger operating zone. If only two seats are used daily, storing occasional guest chairs elsewhere can preserve circulation.",
    decisionRule: "Size the permanent setup for normal household use and add flexibility for guests.",
    avoid: "Do not compare table shapes by tabletop area alone."
  },
  "choose-a-sofa-for-a-small-living-room": {
    purpose: "The sofa decision is mostly about depth, arm thickness and circulation. Two sofas with the same width can create very different amounts of usable seating and remaining floor.",
    measureFirst: [
      "Overall width and total depth, not only seat dimensions",
      "Arm width and the usable seat area inside the outside footprint",
      "The route in front of and behind the sofa",
      "The building-to-room delivery route"
    ],
    workedExample: "Example only: two 72-inch sofas can differ by several inches in depth and by many inches of usable seat width if one has thick rolled arms. Tape the outside rectangle first, then compare how much of that rectangle is actually seating.",
    decisionRule: "Choose the smallest outside footprint that still provides the seating comfort you use regularly.",
    avoid: "Do not buy by seat count alone; 'three-seat' is not a standardized room-fit measurement."
  },
  "bed-size-for-a-studio-apartment": {
    purpose: "A mattress size is a sleep choice and a space-planning choice. The important comparison is not only bed area but what larger sizes displace from the rest of the studio.",
    measureFirst: [
      "Exact frame dimensions beyond the nominal mattress",
      "The side or sides that need everyday access",
      "Under-bed drawer or storage movement",
      "The route between bed, bathroom, wardrobe and entrance"
    ],
    workedExample: "Example only: moving from a queen to a king adds substantial width before the frame and bedside access are counted. Mark both options on the floor and compare what happens to the sofa, desk or wardrobe route rather than asking only whether the larger rectangle fits.",
    decisionRule: "Choose the largest sleep setup that leaves your highest-priority daytime functions usable.",
    avoid: "Do not center a bed for symmetry if that creates worse access or wastes the only useful storage wall."
  },
  "how-to-zone-a-studio-apartment": {
    purpose: "Zoning is successful when activities become easier to understand without creating extra obstacles. The strongest boundaries often come from orientation, light and rugs before any physical divider is added.",
    measureFirst: [
      "The main route through the room",
      "Which activity needs the most privacy or separation",
      "Where daylight needs to travel",
      "Which furniture can create a boundary through its orientation"
    ],
    workedExample: "Example only: rotating a sofa so its back faces the bed can define living and sleeping zones without adding another object. If that rotation blocks the entrance route, the visual gain is not worth the circulation cost.",
    decisionRule: "Create the boundary with existing furniture first; add a divider only if a real problem remains.",
    avoid: "Do not create a miniature room for every activity in a studio that depends on shared light and flexible floor area."
  },
  "compare-two-studio-apartment-layouts": {
    purpose: "A comparison should make trade-offs explicit instead of relying on which drawing looks cleaner. The scorecard on this page is an editorial decision tool, not a scientific rating.",
    measureFirst: [
      "Use the same scale and the same furniture in both drawings",
      "Include doors, drawers and chairs in their operating positions",
      "Reject any option that fails a non-negotiable access or safety requirement",
      "Score only the remaining options against the same priorities"
    ],
    workedExample: "Example only: if one layout scores higher because it adds storage but forces the desk chair into the entrance route, circulation should be treated as a failed constraint rather than something extra storage can compensate for. A weighted score is useful only after hard constraints pass.",
    decisionRule: "Eliminate impossible layouts first; score preferences second.",
    avoid: "Do not let a single total score hide a failure in an essential route, required clearance or daily routine."
  }
};

export function getLearnArticleDepth(slug: string) {
  return learnArticleDepth[slug];
}
