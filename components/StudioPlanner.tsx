"use client";

import { useMemo, useState } from "react";

type Bed = "twin" | "full" | "queen" | "king";
type Priority = "balanced" | "storage" | "work" | "living";

const bedLabels: Record<Bed, string> = { twin: "Twin", full: "Full / Double", queen: "Queen", king: "King" };
const clamp = (v:number,min:number,max:number) => Math.min(Math.max(v,min),max);

export function StudioPlanner() {
  const [width,setWidth]=useState(16), [length,setLength]=useState(24);
  const [bed,setBed]=useState<Bed>("queen");
  const [desk,setDesk]=useState(true), [dining,setDining]=useState(false), [twoPeople,setTwoPeople]=useState(false);
  const [priority,setPriority]=useState<Priority>("balanced");

  const result=useMemo(()=>{
    const w=clamp(Number(width)||8,8,40), l=clamp(Number(length)||10,10,60), sqft=Math.round(w*l);
    const narrow=w<13, compact=sqft<325;
    let strategy="Balanced zoning", note="Keep the center circulation path open and group tall storage on one wall.";
    if(priority==="storage"){strategy="Storage-wall layout";note="Concentrate wardrobes and closed storage into one continuous run rather than scattering cabinets.";}
    else if(priority==="work"){strategy="Work-first layout";note="Give the desk a permanent edge with daylight if possible, then let dining share that surface when needed.";}
    else if(priority==="living"){strategy="Living-first layout";note="Protect a real seating zone and reduce secondary furniture before shrinking circulation.";}
    else if(narrow){strategy="Long-axis layout";note="Use the short walls for the deepest furniture and protect the narrow dimension from opposing bulky pieces.";}
    const warnings:string[]=[];
    if(compact&&bed==="king") warnings.push("A king bed will dominate this footprint; test a queen before committing.");
    if(compact&&desk&&dining) warnings.push("At this size, desk and dining should probably share one surface.");
    if(twoPeople&&sqft<350) warnings.push("For two people, prioritize closed personal storage and two clear places to sit.");
    if(narrow) warnings.push("Avoid placing deep furniture directly opposite deep furniture.");
    const sleepW=bed==="king"?235:bed==="queen"?215:bed==="full"?190:155;
    const workLabel=desk&&dining?"Desk / Dining":desk?"Work":dining?"Dining":"Flexible";
    return {sqft,strategy,note,warnings,zones:[
      {x:58,y:58,w:sleepW,h:compact?125:145,label:bedLabels[bed]},
      {x:Math.min(335,85+sleepW),y:58,w:520-Math.min(335,85+sleepW),h:compact?125:145,label:"Living"},
      {x:58,y:235,w:250,h:95,label:workLabel},
      {x:340,y:235,w:priority==="storage"?220:185,h:95,label:priority==="storage"?"Storage wall":"Storage"}
    ]};
  },[width,length,bed,desk,dining,twoPeople,priority]);

  return <div className="planner-grid">
    <form className="planner-controls" onSubmit={e=>e.preventDefault()}>
      <div className="planner-section"><span className="planner-step">1</span><div><h2>Room size</h2><p>Use inside wall-to-wall measurements.</p></div></div>
      <div className="field-grid"><label>Width (ft)<input type="number" min="8" max="40" step="0.5" value={width} onChange={e=>setWidth(Number(e.target.value))}/></label><label>Length (ft)<input type="number" min="10" max="60" step="0.5" value={length} onChange={e=>setLength(Number(e.target.value))}/></label></div>
      <div className="planner-section"><span className="planner-step">2</span><div><h2>What has to fit?</h2><p>Choose the biggest commitments first.</p></div></div>
      <label>Bed size<select value={bed} onChange={e=>setBed(e.target.value as Bed)}><option value="twin">Twin</option><option value="full">Full / Double</option><option value="queen">Queen</option><option value="king">King</option></select></label>
      <div className="check-row"><label className="check-item"><input type="checkbox" checked={desk} onChange={e=>setDesk(e.target.checked)}/> Dedicated desk</label><label className="check-item"><input type="checkbox" checked={dining} onChange={e=>setDining(e.target.checked)}/> Dining surface</label><label className="check-item"><input type="checkbox" checked={twoPeople} onChange={e=>setTwoPeople(e.target.checked)}/> Two people</label></div>
      <div className="planner-section"><span className="planner-step">3</span><div><h2>Top priority</h2><p>What matters most in the room?</p></div></div>
      <div className="priority-grid" role="radiogroup" aria-label="Layout priority">{([["balanced","Balanced"],["storage","More storage"],["work","Work from home"],["living","Better lounge"]] as const).map(([value,label])=><label className={`priority-card ${priority===value?"selected":""}`} key={value}><input type="radio" name="priority" checked={priority===value} onChange={()=>setPriority(value)}/><span>{label}</span></label>)}</div>
    </form>
    <div className="planner-result" aria-live="polite">
      <div className="planner-result-head"><div><span className="eyebrow">{result.sqft} sq ft</span><h2>{result.strategy}</h2></div></div>
      <div className="planner-plan"><svg viewBox="0 0 620 390" role="img" aria-label={`Concept layout for a ${result.sqft} square foot studio`}><rect width="620" height="390" rx="18" fill="#fbfaf7"/><rect x="32" y="28" width="556" height="330" rx="8" fill="#fff" stroke="#12211b" strokeWidth="5"/>{result.zones.map((z,i)=><g key={i}><rect x={z.x} y={z.y} width={z.w} height={z.h} rx="8" fill={i===0?"#deeee5":i===1?"#f1dcc0":"#edf0ec"} stroke="#52645a" strokeWidth="2"/><text x={z.x+z.w/2} y={z.y+z.h/2} textAnchor="middle" dominantBaseline="middle" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#12211b">{z.label}</text></g>)}</svg></div>
      <div className="result-copy"><strong>Why this direction</strong><p>{result.note}</p></div>
      {result.warnings.length?<div className="planner-warnings"><strong>Watch-outs</strong><ul>{result.warnings.map(w=><li key={w}>{w}</li>)}</ul></div>:<div className="planner-ok"><strong>Good starting combination.</strong> Your selected functions can be separated without an obvious compromise.</div>}
      <div className="planner-next"><strong>Next step</strong><p>Mark doors, windows, radiators, closets and kitchen depth on your real room before buying furniture.</p></div>
    </div>
  </div>;
}
