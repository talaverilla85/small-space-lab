import React from "react";

function inline(value: string): React.ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*\*?|\[[^\]]+\]\(https?:\/\/[^)]+\)|https?:\/\/[^\s)]+)/g;
  return value.split(pattern).filter(Boolean).map((part,i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2,-2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1,-1)}</em>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={i} href={link[2]} rel="noopener noreferrer">{link[1]}</a>;
    if (/^https?:\/\//.test(part)) return <a key={i} href={part} rel="noopener noreferrer">{part}</a>;
    return part;
  });
}

export default function ArticleMarkdown({source}:{source:string}) {
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(x=>x && x!=="---");
  return <>{blocks.map((block,i)=>{
    if (block.startsWith("|") && block.includes("\n")) {
      const lines=block.split("\n").filter(x=>x.trim().startsWith("|"));
      const cells=lines.map(line=>line.split("|").slice(1,-1).map(x=>x.trim()));
      const headers=cells[0]||[];
      const body=cells.slice(1).filter(row=>!row.every(x=>/^:?-{2,}:?$/.test(x)));
      return <div key={i} style={{overflowX:"auto"}}><table><thead><tr>{headers.map((x,j)=><th scope="col" key={j}>{inline(x)}</th>)}</tr></thead><tbody>{body.map((row,j)=><tr key={j}>{row.map((x,k)=><td key={k}>{inline(x)}</td>)}</tr>)}</tbody></table></div>;
    }
    const h=block.match(/^(#{1,4})\s+([^\n]+)$/);
    if(h){const value=inline(h[2]);return h[1].length===1?<h1 key={i}>{value}</h1>:h[1].length===2?<h2 key={i}>{value}</h2>:<h3 key={i}>{value}</h3>;}
    const lines=block.split("\n");
    if(lines.every(x=>/^\d+\.\s/.test(x)))return <ol key={i}>{lines.map((x,j)=><li key={j}>{inline(x.replace(/^\d+\.\s/,""))}</li>)}</ol>;
    if(lines.every(x=>/^[-*]\s/.test(x)))return <ul key={i}>{lines.map((x,j)=><li key={j}>{inline(x.slice(2))}</li>)}</ul>;
    return <p key={i}>{lines.map((x,j)=><React.Fragment key={j}>{j>0?" ":null}{inline(x)}</React.Fragment>)}</p>;
  })}</>;
}
