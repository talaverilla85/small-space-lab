"use client";

import { useMemo, useState } from "react";

export function SofaFitTool(){
  const [roomWidth,setRoomWidth]=useState(12);
  const [sofaWidth,setSofaWidth]=useState(72);
  const [sideClearance,setSideClearance]=useState(18);

  const r=useMemo(()=>{
    const roomIn=Math.max(1,roomWidth)*12;
    const remaining=roomIn-sofaWidth-(sideClearance*2);
    return {
      remaining,
      fits:remaining>=0,
      verdict:remaining>=24?"Comfortable":remaining>=0?"Tight":"Does not fit",
    };
  },[roomWidth,sofaWidth,sideClearance]);

  return <div className="mini-tool">
    <div className="mini-tool-controls">
      <label>Wall width (ft)<input type="number" min="5" step=".5" value={roomWidth} onChange={e=>setRoomWidth(Number(e.target.value))}/></label>
      <label>Sofa width (in)<input type="number" min="40" step="1" value={sofaWidth} onChange={e=>setSofaWidth(Number(e.target.value))}/></label>
      <label>Desired side clearance (in)<input type="number" min="0" step="1" value={sideClearance} onChange={e=>setSideClearance(Number(e.target.value))}/></label>
    </div>
    <div className={"mini-tool-result "+(r.fits?"ok":"bad")}>
      <span>Fit check</span><strong>{r.verdict}</strong>
      <p>{r.fits ? Math.max(0,r.remaining).toFixed(0)+" inches remain after the sofa and side clearances." : "You are short by "+Math.abs(r.remaining).toFixed(0)+" inches."}</p>
    </div>
  </div>;
}

export function ClearanceTool(){
  const [gap,setGap]=useState(30);
  const [use,setUse]=useState<"walk"|"chair"|"bed">("walk");

  const target=use==="walk"?30:use==="chair"?36:24;
  const verdict=gap>=target?"Good":"Tight";

  return <div className="mini-tool">
    <div className="mini-tool-controls">
      <label>Clear space (in)<input type="number" min="0" step="1" value={gap} onChange={e=>setGap(Number(e.target.value))}/></label>
      <label>What is this clearance for?
        <select value={use} onChange={e=>setUse(e.target.value as typeof use)}>
          <option value="walk">Main walking path</option>
          <option value="chair">Behind a chair</option>
          <option value="bed">Bedside access</option>
        </select>
      </label>
    </div>
    <div className={"mini-tool-result "+(verdict==="Good"?"ok":"warn")}>
      <span>Result</span><strong>{verdict}</strong>
      <p>{gap}" available. A practical starting target for this use is about {target}".</p>
    </div>
  </div>;
}

export function RugTool(){
  const [sofa,setSofa]=useState(72);
  const [room,setRoom]=useState(12);

  const rec=useMemo(()=>{
    const roomIn=room*12;
    let label="5 × 8 ft";
    if(sofa>=84 || roomIn>=168) label="8 × 10 ft";
    else if(sofa>=72 || roomIn>=144) label="6 × 9 ft";
    return {label};
  },[sofa,room]);

  return <div className="mini-tool">
    <div className="mini-tool-controls">
      <label>Sofa width (in)<input type="number" min="40" value={sofa} onChange={e=>setSofa(Number(e.target.value))}/></label>
      <label>Room width (ft)<input type="number" min="6" step=".5" value={room} onChange={e=>setRoom(Number(e.target.value))}/></label>
    </div>
    <div className="mini-tool-result ok">
      <span>Starting rug size</span><strong>{rec.label}</strong>
      <p>Use this as a starting point, then verify that the rug does not block doors or create awkward edge gaps.</p>
    </div>
  </div>;
}

export function TvDistanceTool(){
  const [size,setSize]=useState(55);
  const feetMin=(size*1.2)/12;
  const feetMax=(size*1.8)/12;

  return <div className="mini-tool">
    <div className="mini-tool-controls">
      <label>TV size (in)<input type="number" min="24" max="100" value={size} onChange={e=>setSize(Number(e.target.value))}/></label>
    </div>
    <div className="mini-tool-result ok">
      <span>Comfortable starting range</span><strong>{feetMin.toFixed(1)}–{feetMax.toFixed(1)} ft</strong>
      <p>Screen resolution, eyesight and personal preference can move this range closer or farther.</p>
    </div>
  </div>;
}
