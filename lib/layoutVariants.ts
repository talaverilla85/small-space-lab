export type LayoutVariant = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  quickTitle: string;
  quickAnswer: string;
  plans: {
    title: string;
    bestFor: string;
    note: string;
    assumption: string;
    zones: { x:number; y:number; w:number; h:number; label:string; tone?:"green"|"warm"|"neutral" }[];
  }[];
  rules: { title:string; text:string }[];
  mistakes: { title:string; text:string }[];
  takeaway: string;
  faq: { q:string; a:string }[];
  related: string[];
};

export const layoutVariants: LayoutVariant[] = [
  {
    slug:"350-sq-ft",
    title:"350 Sq Ft Studio Apartment Layout Ideas",
    description:"Practical 350 sq ft studio apartment layouts for everyday living, remote work and better storage.",
    eyebrow:"350 SQ FT · 3 DISTINCT LAYOUTS",
    intro:"Three hundred and fifty square feet sits in a useful middle ground: larger than a micro-studio, but still small enough that every deep piece of furniture affects circulation. The best layouts give one or two priorities real space and keep the center easy to move through.",
    quickTitle:"What usually fits in 350 sq ft?",
    quickAnswer:"A full or queen bed, compact sofa, meaningful storage and either a desk or dining surface can fit comfortably in many 350 sq ft studios. Trying to make every function fully separate is where the room starts to feel crowded.",
    plans:[
      {
        title:"Balanced everyday layout",
        bestFor:"Solo living with mixed needs",
        note:"A queen bed and compact sofa can work if storage stays concentrated and one surface handles work or dining.",
        assumption:"Reference footprint: about 14 × 25 ft open living area.",
        zones:[
          {x:66,y:62,w:220,h:140,label:"Queen Bed",tone:"green"},
          {x:320,y:62,w:235,h:140,label:"Living",tone:"warm"},
          {x:66,y:232,w:210,h:105,label:"Storage",tone:"neutral"},
          {x:310,y:232,w:245,h:105,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Work-first layout",
        bestFor:"Remote work several days a week",
        note:"The desk gets a permanent wall position while dining becomes flexible or folds away.",
        assumption:"Reference footprint: about 14 × 25 ft, desk on the brighter wall.",
        zones:[
          {x:66,y:62,w:205,h:140,label:"Bed",tone:"green"},
          {x:300,y:62,w:255,h:140,label:"Living",tone:"warm"},
          {x:66,y:232,w:175,h:105,label:"Storage",tone:"neutral"},
          {x:275,y:232,w:280,h:105,label:"Office",tone:"green"},
        ]
      },
      {
        title:"Storage-wall layout",
        bestFor:"Clothes, sports gear or hobby storage",
        note:"A single continuous storage run keeps the rest of the perimeter available for living.",
        assumption:"Reference footprint: about 14 × 25 ft with one uninterrupted long wall.",
        zones:[
          {x:66,y:62,w:205,h:140,label:"Bed",tone:"green"},
          {x:305,y:62,w:250,h:140,label:"Living",tone:"warm"},
          {x:66,y:232,w:300,h:105,label:"Storage Wall",tone:"green"},
          {x:400,y:232,w:155,h:105,label:"Flex",tone:"neutral"},
        ]
      }
    ],
    rules:[
      {title:"Choose one permanent secondary zone",text:"A dedicated desk or a dedicated dining table is easier to support than both."},
      {title:"Keep furniture depth under control",text:"A few extra inches on a sofa or cabinet can remove the comfortable route through the room."},
      {title:"Use vertical storage selectively",text:"One tall storage zone is calmer than tall furniture on every wall."}
    ],
    mistakes:[
      {title:"Trying to copy a 500 sq ft apartment",text:"More separate furniture does not automatically create more function."},
      {title:"Centering everything",text:"Small rooms often work better when major pieces use the perimeter and leave the middle open."},
      {title:"Oversized bed plus oversized sofa",text:"Both can technically fit while making the room unpleasant to move through."},
      {title:"Ignoring door swings",text:"A workable diagram can fail immediately when a door or closet needs clearance."}
    ],
    takeaway:"At 350 sq ft, the best plan usually has one clear compromise. Decide what can share a surface or remain flexible, then protect the functions you use every day.",
    faq:[
      {q:"Can a queen bed fit in a 350 sq ft studio?",a:"Often yes, especially in a rectangular room. The question is whether the remaining sofa depth, storage and circulation still feel comfortable."},
      {q:"Is 350 sq ft too small for a desk?",a:"No. A shallow desk can work well, but a separate dining table may need to become flexible."},
      {q:"Can two people live in 350 sq ft?",a:"It is possible, but shared storage, seating and personal routines become more important than adding more furniture."}
    ],
    related:["300-sq-ft","400-sq-ft","12x20"]
  },
  {
    slug:"450-sq-ft",
    title:"450 Sq Ft Studio Apartment Layout Ideas",
    description:"Three practical 450 sq ft studio layouts with room for a queen bed, real lounge and useful work or dining zones.",
    eyebrow:"450 SQ FT · 3 PRACTICAL CONCEPTS",
    intro:"Four hundred and fifty square feet gives a studio enough room to create real separation between sleep, living and work without needing solid walls. The strongest layouts spend the extra area on distance between zones rather than automatically buying larger furniture.",
    quickTitle:"What changes at 450 sq ft?",
    quickAnswer:"A queen bed, comfortable sofa, dedicated desk and meaningful storage can coexist in many 450 sq ft studios. The main opportunity is to stop stacking functions on top of each other and let the room breathe.",
    plans:[
      {
        title:"Balanced open layout",
        bestFor:"Most solo households",
        note:"Sleep and living occupy opposite sides, while work or dining sits between them without blocking circulation.",
        assumption:"Reference footprint: about 18 × 25 ft.",
        zones:[
          {x:66,y:62,w:230,h:145,label:"Queen Bed",tone:"green"},
          {x:330,y:62,w:235,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:215,h:100,label:"Storage",tone:"neutral"},
          {x:315,y:238,w:250,h:100,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Soft-separated sleep zone",
        bestFor:"People who want visual privacy",
        note:"A curtain or open shelf can signal a bedroom zone without sacrificing daylight.",
        assumption:"Reference footprint: about 18 × 25 ft with main window near living zone.",
        zones:[
          {x:66,y:62,w:245,h:145,label:"Sleep Zone",tone:"green"},
          {x:345,y:62,w:220,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:245,h:100,label:"Wardrobe",tone:"neutral"},
          {x:345,y:238,w:220,h:100,label:"Desk / Dining",tone:"green"},
        ]
      },
      {
        title:"Work-from-home layout",
        bestFor:"A permanent desk setup",
        note:"The office gets a defined edge so the sofa does not become the default workplace.",
        assumption:"Reference footprint: about 18 × 25 ft, office on one long wall.",
        zones:[
          {x:66,y:62,w:215,h:145,label:"Bed",tone:"green"},
          {x:315,y:62,w:250,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:200,h:100,label:"Storage",tone:"neutral"},
          {x:300,y:238,w:265,h:100,label:"Office",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Use extra area to separate",text:"A little empty floor between zones is more valuable than upgrading every piece to a larger size."},
      {title:"Keep one visual anchor",text:"A rug, sofa or storage wall can organize the room without needing several dividers."},
      {title:"Let light travel",text:"Open shelves and curtains are usually friendlier to daylight than solid partitions."}
    ],
    mistakes:[
      {title:"Buying a sectional by default",text:"A larger studio still benefits from flexible seating and visible floor."},
      {title:"Building a bedroom wall too early",text:"Permanent separation can reduce light and make future layouts harder."},
      {title:"Adding a second dining surface",text:"A desk and dining table may still compete for the same valuable wall space."},
      {title:"Ignoring negative space",text:"The room should contain visible empty areas; not every corner needs a function."}
    ],
    takeaway:"At 450 sq ft, the layout should start to feel intentionally zoned rather than merely fitted. Spend the extra area on separation and circulation first.",
    faq:[
      {q:"Can 450 sq ft feel like a one-bedroom?",a:"It can feel more separated with a curtain, open shelf or furniture placement, but it remains one open living space unless the building layout provides a separate room."},
      {q:"Is a queen bed comfortable at 450 sq ft?",a:"Usually much easier than in smaller studios, provided the bed is not paired with unnecessarily deep furniture."},
      {q:"Can I have both a desk and dining table?",a:"Often yes, but a compact dining table or shared surface may still produce a calmer room."}
    ],
    related:["400-sq-ft","500-sq-ft","20x20"]
  },
  {
    slug:"600-sq-ft",
    title:"600 Sq Ft Studio Apartment Layout Ideas",
    description:"Practical 600 sq ft studio layouts for zoning, couples, home office and generous storage without overfilling the room.",
    eyebrow:"600 SQ FT · 3 LARGER-STUDIO CONCEPTS",
    intro:"At six hundred square feet, a studio has enough area to feel generous if the layout resists the urge to fill every wall. This size can support distinct sleep, lounge, dining, work and storage zones, but the room still benefits from one strong circulation route and controlled furniture depth.",
    quickTitle:"What can 600 sq ft support?",
    quickAnswer:"A queen or king bed, comfortable sofa, real dining area, dedicated desk and substantial storage can coexist in many 600 sq ft studios. The design challenge shifts from fitting functions to making them feel related and intentional.",
    plans:[
      {
        title:"Open loft-style layout",
        bestFor:"People who enjoy one generous room",
        note:"Large zones stay visually connected, with rugs and furniture orientation providing the separation.",
        assumption:"Reference footprint: about 20 × 30 ft.",
        zones:[
          {x:66,y:62,w:245,h:150,label:"Sleep",tone:"green"},
          {x:345,y:62,w:220,h:150,label:"Living",tone:"warm"},
          {x:66,y:242,w:245,h:100,label:"Storage",tone:"neutral"},
          {x:345,y:242,w:220,h:100,label:"Dining / Work",tone:"green"},
        ]
      },
      {
        title:"Couple-friendly layout",
        bestFor:"Two adults with separate routines",
        note:"The room supports two usable seats, shared storage and a table that does not need to become an office every day.",
        assumption:"Reference footprint: about 20 × 30 ft with broad central clearance.",
        zones:[
          {x:66,y:62,w:245,h:150,label:"Queen / King",tone:"green"},
          {x:345,y:62,w:220,h:150,label:"Lounge",tone:"warm"},
          {x:66,y:242,w:245,h:100,label:"Shared Storage",tone:"neutral"},
          {x:345,y:242,w:220,h:100,label:"Dining",tone:"green"},
        ]
      },
      {
        title:"Dedicated office layout",
        bestFor:"Full-time remote work",
        note:"A permanent desk zone can feel separate without becoming a second room or blocking the main window.",
        assumption:"Reference footprint: about 20 × 30 ft, office against side wall.",
        zones:[
          {x:66,y:62,w:225,h:150,label:"Bed",tone:"green"},
          {x:325,y:62,w:240,h:150,label:"Living",tone:"warm"},
          {x:66,y:242,w:210,h:100,label:"Storage",tone:"neutral"},
          {x:310,y:242,w:255,h:100,label:"Office + Dining",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Create distance, not barriers",text:"The room is large enough for zones to feel separate without solid partitions."},
      {title:"Keep furniture grouped",text:"Related functions should still read as one composition rather than many isolated islands."},
      {title:"Protect daylight",text:"Place taller storage where it does not interrupt the main light source."}
    ],
    mistakes:[
      {title:"Treating it like several tiny rooms",text:"Too many dividers can make a generous studio feel fragmented."},
      {title:"Buying large furniture just because it fits",text:"Oversized pieces can still damage circulation and flexibility."},
      {title:"Creating duplicate seating zones",text:"One strong lounge is usually better than several underused chairs."},
      {title:"Ignoring acoustic needs",text:"Work and sleep zones may need soft materials or distance even if visual separation looks good."}
    ],
    takeaway:"At 600 sq ft, restraint becomes the design skill. Give each major activity a clear zone, but preserve enough open floor that the apartment still feels like one generous space.",
    faq:[
      {q:"Can a king bed work in 600 sq ft?",a:"Often yes, especially in a wider footprint. The best result still depends on clear access around the bed and the size of the sofa and storage."},
      {q:"Should I divide a 600 sq ft studio?",a:"Soft separation can help, but permanent walls are not automatically better. Light and flexibility are valuable at this size."},
      {q:"Can two people work from home in 600 sq ft?",a:"It is more feasible than in smaller studios, but two desks should be planned around noise, calls and circulation rather than simply placed wherever they fit."}
    ],
    related:["500-sq-ft","20x20","450-sq-ft"]
  },
  {
    slug:"10x20",
    title:"10×20 Studio Apartment Layout Ideas",
    description:"Layout ideas for a narrow 10 by 20 foot room, including sleep, lounge, work and storage strategies.",
    eyebrow:"10 × 20 FT · NARROW-ROOM PLANNING",
    intro:"A 10×20 room is only 200 square feet, and the 10-foot width is the real constraint. The safest strategy is to organize furniture along the long axis and avoid placing deep pieces directly opposite each other.",
    quickTitle:"What is the main challenge in a 10×20 room?",
    quickAnswer:"Width. A bed and sofa may both fit, but opposing deep furniture can leave an uncomfortable corridor between them. Long-axis placement and shallow storage are usually more important than total square footage.",
    plans:[
      {
        title:"Long-axis everyday layout",
        bestFor:"One person with simple furniture",
        note:"Bed and sofa sit in sequence rather than facing each other across the narrow width.",
        assumption:"Exact room: 10 × 20 ft.",
        zones:[
          {x:68,y:62,w:180,h:145,label:"Bed",tone:"green"},
          {x:278,y:62,w:280,h:145,label:"Living",tone:"warm"},
          {x:68,y:238,w:180,h:95,label:"Storage",tone:"neutral"},
          {x:278,y:238,w:280,h:95,label:"Desk / Flex",tone:"green"},
        ]
      },
      {
        title:"Work-first narrow layout",
        bestFor:"A real desk is essential",
        note:"The desk stays shallow and uses the end wall so it does not compete with the main walking line.",
        assumption:"Exact room: 10 × 20 ft with desk at one end.",
        zones:[
          {x:68,y:62,w:180,h:145,label:"Bed",tone:"green"},
          {x:278,y:62,w:280,h:145,label:"Living",tone:"warm"},
          {x:68,y:238,w:180,h:95,label:"Storage",tone:"neutral"},
          {x:278,y:238,w:280,h:95,label:"Office",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Think lengthwise",text:"Sequence zones from one end to the other instead of building two deep rows."},
      {title:"Use shallow storage",text:"Twelve to eighteen inches of storage depth is easier than full-depth cabinets along both sides."},
      {title:"Keep sightlines open",text:"Low furniture and open floor make the room feel less corridor-like."}
    ],
    mistakes:[
      {title:"Bed on one side, deep sofa opposite",text:"The remaining path can become too narrow even when both items technically fit."},
      {title:"Tall storage on both long walls",text:"This creates a tunnel effect and reduces useful width."},
      {title:"Large coffee table",text:"The center of a 10-foot-wide room is usually too valuable for a bulky table."},
      {title:"Blocking the far window",text:"Narrow rooms depend heavily on a clear line toward natural light."}
    ],
    takeaway:"In a 10×20 room, protect width first. Arrange the room as a sequence of zones and keep the central line visually and physically clear.",
    faq:[
      {q:"Can a queen bed fit in a 10×20 room?",a:"It can, but access around it may be limited. A full bed often gives noticeably more flexibility."},
      {q:"Where should the sofa go?",a:"Usually along the same long-axis sequence as the bed rather than directly opposite it."},
      {q:"Is 10×20 enough for a desk?",a:"Yes, especially with a shallow desk on an end wall or a wall-mounted surface."}
    ],
    related:["12x18","12x20","300-sq-ft"]
  },
  {
    slug:"12x18",
    title:"12×18 Studio Apartment Layout Ideas",
    description:"Practical 12 by 18 foot studio room layouts with a bed, compact living area, desk and storage.",
    eyebrow:"12 × 18 FT · COMPACT RECTANGLE",
    intro:"A 12×18 room offers 216 square feet and a little more flexibility than a 10-foot-wide room. The extra width allows limited furniture to face across the room, but circulation still depends on keeping at least one side visually light.",
    quickTitle:"What works best in a 12×18 room?",
    quickAnswer:"A full bed, compact sofa, shallow desk and concentrated storage can work. The room is wide enough for more than a single-file arrangement, but not wide enough to ignore furniture depth.",
    plans:[
      {
        title:"Balanced rectangle layout",
        bestFor:"Everyday living",
        note:"The bed and living zone share the long dimension while work and storage occupy the opposite end.",
        assumption:"Exact room: 12 × 18 ft.",
        zones:[
          {x:68,y:62,w:205,h:140,label:"Full Bed",tone:"green"},
          {x:307,y:62,w:250,h:140,label:"Living",tone:"warm"},
          {x:68,y:232,w:200,h:102,label:"Storage",tone:"neutral"},
          {x:302,y:232,w:255,h:102,label:"Desk / Dining",tone:"green"},
        ]
      },
      {
        title:"Open-center layout",
        bestFor:"People who value movement",
        note:"Furniture hugs the perimeter so the room keeps one generous patch of open floor.",
        assumption:"Exact room: 12 × 18 ft with compact furniture.",
        zones:[
          {x:68,y:62,w:190,h:140,label:"Bed",tone:"green"},
          {x:335,y:62,w:222,h:140,label:"Sofa",tone:"warm"},
          {x:68,y:245,w:170,h:89,label:"Storage",tone:"neutral"},
          {x:365,y:245,w:192,h:89,label:"Desk",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Use the width selectively",text:"You can face some furniture across the room, but not two deep pieces everywhere."},
      {title:"Preserve one open corner",text:"A visible patch of empty floor helps the whole rectangle feel less packed."},
      {title:"Favor flexible tables",text:"A small round, drop-leaf or wall-mounted surface works better than a bulky four-seat table."}
    ],
    mistakes:[
      {title:"Full-depth wardrobe on the wrong wall",text:"A 24-inch cabinet can dramatically change the usable width."},
      {title:"Too many small storage pieces",text:"The perimeter becomes visually busy and harder to use."},
      {title:"Over-centering the bed",text:"Symmetry can waste wall space that the room needs for circulation."},
      {title:"Adding a large rug everywhere",text:"One rug can define living; multiple rugs may make the room feel chopped up."}
    ],
    takeaway:"A 12×18 room is flexible enough for real zoning, but compact enough that every inch of furniture depth still matters.",
    faq:[
      {q:"Can I fit a queen bed in 12×18?",a:"Often yes, but a full bed gives more freedom for a desk, storage and comfortable side clearance."},
      {q:"Can the sofa face the bed?",a:"Sometimes, provided the sofa is compact and the remaining path is wide enough."},
      {q:"What is the best storage approach?",a:"One main storage wall plus shallow secondary storage usually works better than cabinets on every side."}
    ],
    related:["10x20","12x20","300-sq-ft"]
  },
  {
    slug:"12x20",
    title:"12×20 Studio Apartment Layout Ideas",
    description:"Practical 12 by 20 foot studio apartment layouts with sleep, living, work and storage zones.",
    eyebrow:"12 × 20 FT · 240 SQ FT",
    intro:"A 12×20 room has enough length to create a clear sequence of sleep, living and work zones while still keeping the 12-foot width manageable. This is a strong footprint for compact studio planning because it is narrow enough to guide the layout but not so narrow that everything must sit in a single line.",
    quickTitle:"How should a 12×20 room be organized?",
    quickAnswer:"Use the 20-foot length to sequence major zones and the 12-foot width to support shallow opposing pieces only where circulation remains comfortable.",
    plans:[
      {
        title:"Three-zone layout",
        bestFor:"Simple solo living",
        note:"Sleep, lounge and work each get a clear part of the room without solid dividers.",
        assumption:"Exact room: 12 × 20 ft.",
        zones:[
          {x:68,y:62,w:205,h:140,label:"Bed",tone:"green"},
          {x:307,y:62,w:250,h:140,label:"Living",tone:"warm"},
          {x:68,y:232,w:190,h:102,label:"Storage",tone:"neutral"},
          {x:292,y:232,w:265,h:102,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Storage-first layout",
        bestFor:"More belongings",
        note:"A long storage run uses one side while the rest of the room stays visually lighter.",
        assumption:"Exact room: 12 × 20 ft with one long uninterrupted wall.",
        zones:[
          {x:68,y:62,w:190,h:140,label:"Bed",tone:"green"},
          {x:292,y:62,w:265,h:140,label:"Living",tone:"warm"},
          {x:68,y:232,w:300,h:102,label:"Storage Wall",tone:"green"},
          {x:402,y:232,w:155,h:102,label:"Flex",tone:"neutral"},
        ]
      }
    ],
    rules:[
      {title:"Sequence the room",text:"The 20-foot length is your advantage; let functions flow from one end to the other."},
      {title:"Use the short walls well",text:"Beds, desks or storage can anchor the ends and reduce pressure on the long walls."},
      {title:"Avoid paired deep furniture",text:"Twelve feet is enough width for comfort only if furniture depth is controlled."}
    ],
    mistakes:[
      {title:"Filling both long walls",text:"The room starts to feel like a corridor with no visual release."},
      {title:"Using a large central table",text:"The main path becomes harder to maintain."},
      {title:"Ignoring the entrance view",text:"A cleaner sightline from the door makes a narrow room feel larger."},
      {title:"Stacking dividers",text:"Curtain plus shelf plus screen usually creates more clutter than privacy."}
    ],
    takeaway:"A 12×20 studio works best as a sequence of purposeful zones. Let the length do the organizing and protect the width from deep opposing furniture.",
    faq:[
      {q:"Is 12×20 enough for a queen bed?",a:"Usually yes, but the exact answer depends on where doors, kitchen and storage already occupy the perimeter."},
      {q:"Can I have a dining table?",a:"A small or folding table can work, though a shared work/dining surface may keep the room calmer."},
      {q:"Where should storage go?",a:"A concentrated run on one long wall or one end wall is usually more efficient than scattered cabinets."}
    ],
    related:["12x18","15x20","350-sq-ft"]
  },
  {
    slug:"15x20",
    title:"15×20 Studio Apartment Layout Ideas",
    description:"Practical 15 by 20 foot studio layouts for a queen bed, living zone, work area and storage.",
    eyebrow:"15 × 20 FT · 300 SQ FT",
    intro:"A 15×20 room is a balanced 300-square-foot rectangle. It is wide enough for clearer separation than a narrow studio and long enough to create a real living zone without pushing everything against the same wall.",
    quickTitle:"What makes 15×20 easier to plan?",
    quickAnswer:"The 15-foot width gives you more freedom to place furniture across the room while the 20-foot length still supports distinct sleep and living zones. It is a strong footprint for a compact queen-bed studio.",
    plans:[
      {
        title:"Balanced queen-bed layout",
        bestFor:"Most solo households",
        note:"A queen bed and compact sofa occupy opposite zones while storage and work stay at the perimeter.",
        assumption:"Exact room: 15 × 20 ft.",
        zones:[
          {x:66,y:62,w:220,h:145,label:"Queen Bed",tone:"green"},
          {x:320,y:62,w:235,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:210,h:100,label:"Storage",tone:"neutral"},
          {x:310,y:238,w:245,h:100,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Living-first layout",
        bestFor:"People who entertain or relax at home",
        note:"The lounge gets more visual weight while the sleeping zone stays compact and quiet.",
        assumption:"Exact room: 15 × 20 ft with compact queen or full bed.",
        zones:[
          {x:66,y:62,w:200,h:145,label:"Sleep",tone:"green"},
          {x:300,y:62,w:255,h:145,label:"Large Living",tone:"warm"},
          {x:66,y:238,w:190,h:100,label:"Storage",tone:"neutral"},
          {x:290,y:238,w:265,h:100,label:"Dining / Flex",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Use the width for comfort",text:"A 15-foot room can support more conventional furniture relationships than a narrow studio."},
      {title:"Still protect a main route",text:"Extra width should improve movement, not justify more furniture."},
      {title:"Keep the bed zone visually quiet",text:"Storage and work surfaces should not crowd both sides of the bed."}
    ],
    mistakes:[
      {title:"Scaling up every item",text:"The room benefits more from breathing room than from a larger sofa, table and cabinet all at once."},
      {title:"Putting everything on one long wall",text:"The balanced width allows better zoning than a single-strip layout."},
      {title:"Adding a divider in the center",text:"A central divider can interrupt one of the best features of this footprint: openness."},
      {title:"Underusing corners",text:"A desk or tall storage unit can often use a corner without hurting the center."}
    ],
    takeaway:"A 15×20 studio has enough width to feel balanced. Use that advantage to create comfortable relationships between furniture, not to fill the room.",
    faq:[
      {q:"Can a 15×20 room fit a queen bed and sofa?",a:"Yes, in many arrangements. Compact furniture and clear access around the bed still matter."},
      {q:"Is 15×20 good for two people?",a:"It can work better than narrower 300 sq ft footprints because shared circulation and seating are easier to organize."},
      {q:"Can I add a dining table?",a:"Usually a compact table can fit, though its position should not interfere with the main path."}
    ],
    related:["300-sq-ft","12x20","20x20"]
  },
  {
    slug:"20x20",
    title:"20×20 Studio Apartment Layout Ideas",
    description:"Square 20 by 20 foot studio apartment layouts for balanced zoning, couples and remote work.",
    eyebrow:"20 × 20 FT · 400 SQ FT SQUARE",
    intro:"A 20×20 room is very different from a narrow 400-square-foot studio. The square footprint creates more options, but it also makes it easier to float furniture badly and lose a clear circulation route. Strong zoning matters more than simply pushing everything to the walls.",
    quickTitle:"How is a 20×20 studio different?",
    quickAnswer:"The room has equal width and length, so you can create four clearer quadrants or float furniture more comfortably. The main risk is losing a strong path from the entrance to the fixed services.",
    plans:[
      {
        title:"Four-zone square layout",
        bestFor:"Balanced everyday living",
        note:"The square is divided into four loose functional areas while the middle remains visually connected.",
        assumption:"Exact room: 20 × 20 ft.",
        zones:[
          {x:66,y:62,w:230,h:145,label:"Sleep",tone:"green"},
          {x:330,y:62,w:235,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:230,h:100,label:"Storage",tone:"neutral"},
          {x:330,y:238,w:235,h:100,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Central-living layout",
        bestFor:"A stronger lounge",
        note:"The sofa anchors the center visually while bed, storage and work stay around the perimeter.",
        assumption:"Exact room: 20 × 20 ft with open center.",
        zones:[
          {x:66,y:62,w:210,h:135,label:"Bed",tone:"green"},
          {x:305,y:82,w:250,h:175,label:"Living",tone:"warm"},
          {x:66,y:230,w:190,h:105,label:"Storage",tone:"neutral"},
          {x:300,y:270,w:255,h:65,label:"Work / Dining",tone:"green"},
        ]
      },
      {
        title:"Couple-friendly square",
        bestFor:"Two adults",
        note:"The width allows two comfortable circulation routes and a more generous shared storage zone.",
        assumption:"Exact room: 20 × 20 ft.",
        zones:[
          {x:66,y:62,w:235,h:145,label:"Queen Bed",tone:"green"},
          {x:335,y:62,w:230,h:145,label:"Living",tone:"warm"},
          {x:66,y:238,w:235,h:100,label:"Shared Storage",tone:"neutral"},
          {x:335,y:238,w:230,h:100,label:"Dining / Work",tone:"green"},
        ]
      }
    ],
    rules:[
      {title:"Create an obvious route",text:"A square room can feel directionless unless one circulation line stays easy to read."},
      {title:"Use furniture to define zones",text:"Rugs, sofa orientation and storage can separate functions without partitions."},
      {title:"Do not over-wall the perimeter",text:"Leave some wall visually quiet so the square still feels generous."}
    ],
    mistakes:[
      {title:"Floating everything",text:"Too many isolated pieces can make the room feel like a furniture showroom."},
      {title:"No clear entrance path",text:"A square can become awkward when the route cuts diagonally through several zones."},
      {title:"Over-dividing four quadrants",text:"The layout should read as one room, not four tiny boxes."},
      {title:"Ignoring central negative space",text:"A square benefits enormously from visible breathing room in the middle."}
    ],
    takeaway:"A 20×20 studio is flexible because it is square. Use that flexibility to create strong zones and a clear route rather than scattering furniture evenly everywhere.",
    faq:[
      {q:"Is 20×20 better than 16×25 for 400 sq ft?",a:"Neither is universally better. The square offers more placement options, while a long rectangle naturally creates a sequence of zones."},
      {q:"Can furniture float in a 20×20 studio?",a:"Yes, more easily than in narrow rooms, but floated furniture should still reinforce a clear circulation path."},
      {q:"Can two people live comfortably in 20×20?",a:"The square footprint can make shared circulation and storage easier, though fixed kitchen and bathroom areas still matter."}
    ],
    related:["400-sq-ft","15x20","450-sq-ft"]
  }
];

export function getLayoutVariant(slug:string){
  return layoutVariants.find(v=>v.slug===slug);
}
