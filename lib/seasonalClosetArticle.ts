import type { LearnArticle } from "./learnArticles";
import { seasonalClosetPart1 } from "./seasonalClosetPart1";
import { seasonalClosetPart2 } from "./seasonalClosetPart2";
import { seasonalClosetPart3 } from "./seasonalClosetPart3";
export const seasonalClosetArticle: LearnArticle = {
 slug:"seasonal-closet-rotation-small-apartments",
 title:"Seasonal Closet Rotation in a Small Apartment: A Space-First Method",
 description:"Rotate seasonal clothes in a tiny closet without buying organizers. Measure storage, plan three access zones and protect garments from dampness.",
 category:"Storage",updated:"2026-10-20",readTime:"10 min",
 intro:"A seasonal wardrobe reset sounds simple until your only closet also holds shoes, coats and bedding. Start with a measured plan that protects daily access.",
 quickAnswer:"Keep everyday clothes in easy reach, transition layers nearby and genuinely off-season pieces in a clean, dry reserve area. Measure first, pack only fully dry garments and check humidity.",
 illustration:{src:"/illustrations/seasonal-closet-rotation-zones.svg",alt:"Original three-zone wardrobe diagram with daily, transition and reserve storage, plus an illustrative 80 cm rail calculation.",caption:"Three access zones, not three new furniture purchases. Dimensions are hypothetical."},
 sections:[...seasonalClosetPart1,...seasonalClosetPart2,...seasonalClosetPart3],
 checklist:["Measured usable dimensions and retrieval clearance","Separated daily, transition and reserve clothes","Tested hanging width and folded stacks","Packed clean, fully dry garments","Checked moisture and garment care","Kept doors and walking routes clear","Set a two-week review"],
 sources:[
 {label:"Southern Living — October 2026 closet cleanout advice",url:"https://www.southernliving.com/how-often-clean-closet-12178569"},
 {label:"Smithsonian — storing delicate textiles",url:"https://www.si.edu/faqs/antique-textile-storage"},
 {label:"US EPA — closet humidity and mold",url:"https://www.epa.gov/mold/interactive-mold-house-tour"},
 {label:"Penn State Extension — clothes moths, updated May 2026",url:"https://extension.psu.edu/clothes-moth"}
 ],
 related:["small-apartment-storage-audit","under-bed-storage-that-stays-usable","renter-friendly-storage-without-drilling"]
};