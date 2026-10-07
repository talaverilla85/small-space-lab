type Zone = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone?: "green" | "warm" | "neutral";
};

const fills = {
  green: "#dfeee5",
  warm: "#f1dcc0",
  neutral: "#edf0ec",
};

export function FloorPlan({ title, zones }: { title: string; zones: Zone[] }) {
  return (
    <div className="plan-shell" aria-label={title}>
      <svg viewBox="0 0 640 420" role="img" aria-labelledby="plan-title">
        <title id="plan-title">{title}</title>
        <rect width="640" height="420" fill="#fbfaf7" />
        <rect x="34" y="34" width="572" height="352" rx="8" fill="#fff" stroke="#12211b" strokeWidth="5" />
        {zones.map((zone, index) => (
          <g key={index}>
            <rect
              x={zone.x}
              y={zone.y}
              width={zone.w}
              height={zone.h}
              rx="7"
              fill={fills[zone.tone || "neutral"]}
              stroke="#516158"
              strokeWidth="2"
            />
            <text
              x={zone.x + zone.w / 2}
              y={zone.y + zone.h / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="system-ui, sans-serif"
              fontWeight="700"
              fontSize="15"
              fill="#12211b"
            >
              {zone.label}
            </text>
          </g>
        ))}
        <path d="M34 330 h38 a38 38 0 0 0 -38 38" fill="none" stroke="#12211b" strokeWidth="3" />
        <text x="320" y="408" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12" fill="#68766f">
          Concept plan — always verify measurements in your own space
        </text>
      </svg>
    </div>
  );
}
