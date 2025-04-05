// components/WorldMap.tsx
import React, { useState } from 'react';

const WorldMap: React.FC = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const markers = [
    { id: "na", cx: 200, cy: 150, label: "North America", color: "#22d3ee" },
    { id: "eu", cx: 475, cy: 100, label: "Europe", color: "#f97316" },
    { id: "as", cx: 650, cy: 150, label: "Asia", color: "#10b981" },
    { id: "au", cx: 800, cy: 350, label: "Australia", color: "#a855f7" },
    { id: "sa", cx: 250, cy: 350, label: "South America", color: "#ec4899" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <svg viewBox="0 0 1000 500" className="w-full h-auto" role="img" aria-label="Interactive World Map">
        <rect x="0" y="0" width="1000" height="500" fill="#000000" />
        <path d="M150,100L250,50L300,150L250,250L200,200L150,250Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />
        <path d="M200,300L250,250L300,300L275,400L225,400Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />
        <path d="M400,250L450,200L500,250L475,350L425,350Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />
        <path d="M450,100L500,50L550,100L525,150L475,150Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />
        <path d="M550,100L650,50L750,150L700,250L600,200Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />
        <path d="M750,350L800,300L850,350L825,400L775,400Z" fill="#1f2937" stroke="#9ca3af" strokeWidth="1" />

        {markers.map((marker) => (
          <g
            key={marker.id}
            onMouseEnter={() => setHoveredMarker(marker.id)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <circle
              cx={marker.cx}
              cy={marker.cy}
              r={hoveredMarker === marker.id ? 15 : 10}
              fill={marker.color}
              className="transition-all duration-300 cursor-pointer"
            />
            {hoveredMarker === marker.id && (
              <text
                x={marker.cx + 20}
                y={marker.cy - 10}
                fill="#ffffff"
                fontSize="14"
              >
                {marker.label}
              </text>
            )}
          </g>
        ))}
      </svg>
      <p className="text-center text-gray-400 mt-4 text-sm">
        Our Global Presence - Hover over markers to explore
      </p>
    </div>
  );
};

export default WorldMap;