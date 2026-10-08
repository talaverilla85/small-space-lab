import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f3f0e7",
          color: "#11130f",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "58%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{ width: "58px", height: "58px", border: "3px solid #11130f", display: "flex", flexWrap: "wrap" }}>
              <div style={{ width: "50%", height: "50%", background: "#17372f" }} />
              <div style={{ width: "50%", height: "50%", borderLeft: "2px solid #11130f" }} />
              <div style={{ width: "50%", height: "50%", borderTop: "2px solid #11130f" }} />
              <div style={{ width: "50%", height: "50%", background: "#cf4a2c", borderLeft: "2px solid #11130f", borderTop: "2px solid #11130f" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontWeight: 800, letterSpacing: "2px", fontSize: "22px" }}>
              <span>SMALL SPACE</span><span style={{ fontSize: "16px", letterSpacing: "6px" }}>PLANNER</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "76px", lineHeight: 0.9, fontWeight: 900, letterSpacing: "-5px" }}>PLAN SMALL.</div>
            <div style={{ fontSize: "58px", lineHeight: 1, color: "#cf4a2c", marginTop: "14px" }}>Live bigger.</div>
            <div style={{ fontSize: "24px", color: "#5f625a", marginTop: "22px", maxWidth: "600px" }}>Practical layouts and planning tools for studios and compact homes.</div>
          </div>
        </div>
        <div style={{ width: "42%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "400px", height: "420px", background: "#17372f", padding: "30px", display: "flex" }}>
            <div style={{ width: "100%", height: "100%", background: "#fbfaf6", border: "4px solid #11130f", display: "flex", flexWrap: "wrap", padding: "18px", gap: "14px" }}>
              <div style={{ width: "47%", height: "47%", background: "#dce9df", border: "2px solid #5b635c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>SLEEP</div>
              <div style={{ width: "47%", height: "47%", background: "#ead4bf", border: "2px solid #5b635c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>LIVE</div>
              <div style={{ width: "47%", height: "47%", background: "#e7e8e2", border: "2px solid #5b635c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>STORE</div>
              <div style={{ width: "47%", height: "47%", background: "#f0eadf", border: "2px solid #5b635c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>WORK</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
