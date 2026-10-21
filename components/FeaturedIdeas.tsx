import Link from "next/link";
import { getTrendGuidePhotos } from "@/lib/trendGuidePhotos";

const stories = [
 {slug:"ikea-xbox-small-apartment-gaming-setup",category:"GAMING + SMALL SPACES",title:"IKEA × Xbox inspiration: a gaming setup that fits",description:"Create a practical work-and-play zone without dedicating an entire room to gaming."},
 {slug:"burrowcore-small-apartment-decor",category:"INTERIOR DESIGN",title:"Burrowcore: make a small apartment feel cozy",description:"Layer warm light and soft textures while keeping a small home open and easy to live in."}
];

export function FeaturedIdeas(){
 return <section className="container trend-feature" aria-labelledby="trend-feature-title">
   <div className="trend-feature-head"><div><span className="micro-label">FRESH DESIGN IDEAS</span><h2 id="trend-feature-title">Ideas worth making room for.</h2></div><p>Timely inspiration translated into practical decisions for small apartments.</p></div>
   <div className="trend-feature-grid">{stories.map(story=>{
     const cover=getTrendGuidePhotos(story.slug)?.hero;
     return <Link href={"/"+story.slug} key={story.slug} className="trend-feature-card">
       {cover ? <div className="trend-feature-image">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={cover.src} alt={cover.alt} width={1200} height={750} loading="lazy" decoding="async" /></div> : null}
       <div className="trend-feature-content"><span className="micro-label">{story.category}</span><h3>{story.title}</h3><p>{story.description}</p><strong>Read the guide →</strong></div>
     </Link>;
   })}</div>
 </section>;
}
