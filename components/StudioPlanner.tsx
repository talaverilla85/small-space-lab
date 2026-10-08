"use client";

import { useMemo, useState } from "react";

type Bed = "twin" | "full" | "queen" | "king";
type Sofa = "compact" | "standard" | "large";
type Priority = "balanced" | "storage" | "work" | "living";

const bedData: Record<Bed,{label:string,w:number,l:number}> = {
  twin:{label:"Twin",w:3.17,l:6.25},
  full:{label:"Full / Double",w:4.5,l:6.25},
  queen:{label:"Queen",w:5,l:6.67},
  king:{label:"King",w:6.33,l:6.67},
};

const sofaData: Record<Sofa,{label:string,w:number,d:number}> = {
  compact:{label:"Compact · 60 in",w:5,d:2.67},
  standard:{label:"Standard · 72 in",w:6,d:2.83},
  large:{label:"Large · 84 in",w:7,d:3},
};

const clamp=(v:number,min:number,max:number)=>Math.min(Math.max(v,min),max);

type Piece={id:string;label:string;x:number;y:number;w:number;h:number;fill:string};

function overlaps(a:Piece,b:Piece){
  return !(a.x+a.w<=b.x || b.x+b.w<=a.x || a.y+a.h<=b.y || b.y+b.h<=a.y);
}

export function StudioPlanner(){
  const [width,setWidth]=useState(16);
  const [length,setLength]=useState(24);
  const [bed,setBed]=useState<Bed>("queen");
  const [sofa,setSofa]=useState<Sofa>("standard");
  const [desk,setDesk]=useState(true);
  const [dining,setDining]=useState(false);
  const [twoPeople,setTwoPeople]=useState(false);
  const [priority,setPriority]=useState<Priority>("balanced");

  const result=useMemo(()=>{
    const inputW=clamp(Number(width)||8,8,40);
    const inputL=clamp(Number(length)||10,10,60);
    const roomW=Math.max(inputW,inputL);
    const roomH=Math.min(inputW,inputL);
    const rotated=inputW>inputL;
    const area=Math.round(inputW*inputL);
    const b=bedData[bed];
    const s=sofaData[sofa];
    const margin=.75;

    const pieces:Piece[]=[];
    pieces.push({id:"bed",label:b.label,x:margin,y:margin,w:b.l,h:b.w,fill:"#dce9df"});

    const canShareTop = roomW >= b.l + s.w + 3.2;
    if(canShareTop){
      pieces.push({id:"sofa",label:"Sofa",x:roomW-margin-s.w,y:margin,w:s.w,h:s.d,fill:"#ead4bf"});
    }else{
      pieces.push({id:"sofa",label:"Sofa",x:roomW-margin-s.w,y:roomH-margin-s.d,w:s.w,h:s.d,fill:"#ead4bf"});
    }

    const storageW=priority==="storage"?Math.min(7,roomW*.36):Math.min(5,roomW*.28);
    pieces.push({id:"storage",label:priority==="storage"?"Storage wall":"Storage",x:margin,y:roomH-margin-2,w:storageW,h:2,fill:"#e7e8e2"});

    if(desk&&dining){
      pieces.push({id:"desk",label:"Desk / Dining",x:roomW-margin-4.5,y:roomH-margin-2.5,w:4.5,h:2.5,fill:"#f0eadf"});
    }else if(desk){
      pieces.push({id:"desk",label:"Desk",x:roomW-margin-3.5,y:roomH-margin-2,w:3.5,h:2,fill:"#f0eadf"});
    }else if(dining){
      pieces.push({id:"dining",label:"Dining",x:roomW-margin-3,y:roomH-margin-3,w:3,h:3,fill:"#f0eadf"});
    }

    const collisionPairs:string[]=[];
    for(let i=0;i<pieces.length;i++){
      for(let j=i+1;j<pieces.length;j++){
        if(overlaps(pieces[i],pieces[j])) collisionPairs.push(`${pieces[i].label} + ${pieces[j].label}`);
      }
    }

    const furnitureArea=pieces.reduce((sum,p)=>sum+p.w*p.h,0);
    const occupied=furnitureArea/(roomW*roomH);
    const bottomDepth=Math.max(2,desk&&dining?2.5:desk?2:dining?3:0);
    const centerClearance=roomH-b.w-bottomDepth-(margin*2);

    let fit:"Comfortable"|"Workable"|"Tight"="Comfortable";
    if(collisionPairs.length || centerClearance<2.25 || occupied>.42) fit="Tight";
    else if(centerClearance<3 || occupied>.34) fit="Workable";

    let strategy="Balanced zoning";
    let note="Keep the center of the room readable and use the perimeter for the biggest pieces.";
    if(priority==="storage"){
      strategy="Storage-wall layout";
      note="One concentrated storage run keeps the rest of the room calmer than several scattered cabinets.";
    }else if(priority==="work"){
      strategy="Work-first layout";
      note="Keep the desk permanent and let dining stay flexible rather than asking one surface to do everything.";
    }else if(priority==="living"){
      strategy="Living-first layout";
      note="Protect a real seating zone and reduce secondary furniture before shrinking the main circulation route.";
    }else if(roomH<12){
      strategy="Long-axis layout";
      note="The short dimension is the constraint, so deep furniture should avoid facing deep furniture across the room.";
    }

    const warnings:string[]=[];
    if(collisionPairs.length) warnings.push(`This first-pass arrangement overlaps: ${collisionPairs.join(", ")}. Try smaller furniture or remove one function.`);
    if(centerClearance<2.25) warnings.push("The remaining central clearance is very tight with these assumptions.");
    else if(centerClearance<3) warnings.push("The central path is workable but tight; verify the exact furniture depth before buying.");
    if(twoPeople&&area<350) warnings.push("For two people under roughly 350 sq ft, shared storage and two usable seats become high-priority.");
    if(bed==="king"&&area<425) warnings.push("A king bed uses a large share of the usable footprint in a studio this size.");
    if(desk&&dining&&area<350) warnings.push("A dedicated desk plus separate dining surface may be more space than this footprint comfortably supports.");

    const viewW=620, viewH=390, pad=48;
    const scale=Math.min((viewW-pad*2)/roomW,(viewH-pad*2)/roomH);
    const drawW=roomW*scale, drawH=roomH*scale;
    const ox=(viewW-drawW)/2, oy=(viewH-drawH)/2;

    const svgPieces=pieces.map(p=>({
      ...p,
      x:ox+p.x*scale,
      y:oy+p.y*scale,
      w:p.w*scale,
      h:p.h*scale
    }));

    return {
      inputW,inputL,roomW,roomH,rotated,area,fit,strategy,note,warnings,
      centerClearance:Math.max(0,centerClearance),
      occupied:Math.round(occupied*100),
      svg:{viewW,viewH,ox,oy,drawW,drawH,pieces:svgPieces}
    };
  },[width,length,bed,sofa,desk,dining,twoPeople,priority]);

  return <div className="planner-grid">
    <form className="planner-controls" onSubmit={e=>e.preventDefault()}>
      <div className="planner-section"><span className="planner-step">1</span><div><h2>Room footprint</h2><p>Use inside wall-to-wall measurements for the open room you want to plan.</p></div></div>
      <div className="field-grid">
        <label>Width (ft)<input type="number" min="8" max="40" step="0.5" value={width} onChange={e=>setWidth(Number(e.target.value))}/></label>
        <label>Length (ft)<input type="number" min="10" max="60" step="0.5" value={length} onChange={e=>setLength(Number(e.target.value))}/></label>
      </div>

      <div className="planner-section"><span className="planner-step">2</span><div><h2>Big furniture</h2><p>The largest pieces determine whether the rest of the plan has room to breathe.</p></div></div>
      <div className="field-grid">
        <label>Bed size
          <select value={bed} onChange={e=>setBed(e.target.value as Bed)}>
            <option value="twin">Twin · 38 × 75 in</option>
            <option value="full">Full · 54 × 75 in</option>
            <option value="queen">Queen · 60 × 80 in</option>
            <option value="king">King · 76 × 80 in</option>
          </select>
        </label>
        <label>Sofa size
          <select value={sofa} onChange={e=>setSofa(e.target.value as Sofa)}>
            <option value="compact">Compact · 60 in</option>
            <option value="standard">Standard · 72 in</option>
            <option value="large">Large · 84 in</option>
          </select>
        </label>
      </div>
      <div className="check-row">
        <label className="check-item"><input type="checkbox" checked={desk} onChange={e=>setDesk(e.target.checked)}/> Dedicated desk</label>
        <label className="check-item"><input type="checkbox" checked={dining} onChange={e=>setDining(e.target.checked)}/> Dining surface</label>
        <label className="check-item"><input type="checkbox" checked={twoPeople} onChange={e=>setTwoPeople(e.target.checked)}/> Two people</label>
      </div>

      <div className="planner-section"><span className="planner-step">3</span><div><h2>Top priority</h2><p>Tell the plan what deserves the most floor area.</p></div></div>
      <div className="priority-grid" role="radiogroup" aria-label="Layout priority">
        {([["balanced","Balanced"],["storage","More storage"],["work","Work from home"],["living","Better lounge"]] as const).map(([value,label])=>
          <label className={`priority-card ${priority===value?"selected":""}`} key={value}>
            <input type="radio" name="priority" checked={priority===value} onChange={()=>setPriority(value)}/>
            <span>{label}</span>
          </label>
        )}
      </div>
    </form>

    <div className="planner-result" aria-live="polite">
      <div className="planner-result-head">
        <div><span className="eyebrow">{result.area} sq ft</span><h2>{result.strategy}</h2></div>
        <div className={`fit-badge fit-${result.fit.toLowerCase()}`}><span>Fit check</span><strong>{result.fit}</strong></div>
      </div>

      <div className="planner-plan measured-plan">
        <svg viewBox="0 0 620 390" role="img" aria-label={`Measured concept for a ${result.inputW} by ${result.inputL} foot room`}>
          <rect width="620" height="390" fill="#f6f3eb"/>
          <rect x={result.svg.ox} y={result.svg.oy} width={result.svg.drawW} height={result.svg.drawH} fill="#fff" stroke="#11130f" strokeWidth="4"/>
          {result.svg.pieces.map((p,i)=><g key={p.id}>
            <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="5" fill={p.fill} stroke="#586158" strokeWidth="1.5"/>
            <text x={p.x+p.w/2} y={p.y+p.h/2} textAnchor="middle" dominantBaseline="middle" fontFamily="system-ui, sans-serif" fontSize={Math.max(10,Math.min(14,p.w/7))} fontWeight="750" fill="#11130f">{p.label}</text>
          </g>)}
          <text x={result.svg.ox+result.svg.drawW/2} y={Math.max(16,result.svg.oy-12)} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fill="#686b64">{result.roomW.toFixed(1)} ft</text>
          <text x={Math.max(16,result.svg.ox-16)} y={result.svg.oy+result.svg.drawH/2} textAnchor="middle" transform={`rotate(-90 ${Math.max(16,result.svg.ox-16)} ${result.svg.oy+result.svg.drawH/2})`} fontFamily="system-ui, sans-serif" fontSize="11" fill="#686b64">{result.roomH.toFixed(1)} ft</text>
        </svg>
      </div>

      <div className="planner-metrics">
        <div><span>Furniture footprint</span><strong>{result.occupied}%</strong></div>
        <div><span>Estimated central clearance</span><strong>{result.centerClearance.toFixed(1)} ft</strong></div>
        <div><span>Display</span><strong>{result.rotated?"Rotated for clarity":"Same orientation"}</strong></div>
      </div>

      <div className="result-copy"><strong>Why this direction</strong><p>{result.note}</p></div>

      {result.warnings.length?
        <div className="planner-warnings"><strong>Check before buying</strong><ul>{result.warnings.map(w=><li key={w}>{w}</li>)}</ul></div>
        :
        <div className="planner-ok"><strong>Good first-pass combination.</strong> The assumed furniture footprints fit without an obvious collision in this simplified room.</div>
      }

      <div className="planner-next"><strong>Important</strong><p>This is a measured concept for an open rectangular room, not a construction drawing. Add your real doors, windows, kitchen, bathroom, columns, radiators and built-ins before treating it as a final layout.</p></div>
    </div>
  </div>;
}
