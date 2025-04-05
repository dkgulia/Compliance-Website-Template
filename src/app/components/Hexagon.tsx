'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LuScanSearch, LuShieldCheck, LuCopyCheck, LuGavel } from "react-icons/lu";
import { TbAutomation, TbChartInfographic } from "react-icons/tb";
const Hexagon: React.FC = () => {
  // Features as an array of objects with title and icon
  const features = [
    { title: "Detection", icon: <LuScanSearch /> },
    { title: "Prevention", icon: <LuShieldCheck /> },
    { title: "Response", icon: <LuCopyCheck /> },
    { title: "Governance", icon: <LuGavel /> },
    { title: "Automation", icon: <TbAutomation /> },
    { title: "Visibility", icon: <TbChartInfographic /> },
  ];

  // Hexagon vertex positions (center at 50, 50)
  const radius = 50;
  const angles = [270, 330, 30, 90, 150, 210]; // Degrees, starting at top
  const points = angles.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(rad),
      y: 50 + radius * Math.sin(rad),
    };
  });

  // State to track the active edge and glowing box
  const [activeEdge, setActiveEdge] = useState(-1); // Start before first edge
  const [glowBox, setGlowBox] = useState(0); // Start with "Detection" glowing

  // Animation timing
  const segmentTime = 3; // 3 seconds per edge
  const overlapTime = 0.5; // 0.5s overlap for continuity
  const triggerPoint = 0.9; // Trigger next box glow at 90% (2.7s)

  // Cycle through edges and trigger glow
  useEffect(() => {
    // Start with "Detection" illuminated, then begin edge animation
    const edgeTimeout = setTimeout(() => {
      setActiveEdge(0); // Start light from "Detection" to "Prevention"
    }, 500); // Brief delay to show "Detection" glowing first

    const edgeInterval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % 6);
    }, (segmentTime - overlapTime) * 1000); // Next edge after 2.5s

    // Glow trigger for next box at 90% progress
    const glowTimeout = setTimeout(() => {
      setGlowBox(1); // "Prevention" glows when light reaches it
    }, (triggerPoint * segmentTime + 0.5) * 1000); // 0.5s initial delay + 2.7s

    const glowInterval = setInterval(() => {
      setGlowBox((prev) => (prev + 1) % 6);
    }, (segmentTime - overlapTime) * 1000); // Sync with edge cycle

    return () => {
      clearTimeout(edgeTimeout);
      clearInterval(edgeInterval);
      clearTimeout(glowTimeout);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square mt-14 mb-14">
      {/* Hexagon Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Static Gray Edges */}
          <svg
            className="absolute inset-0"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
          >
            {points.map((point, index) => {
              const nextPoint = points[(index + 1) % 6];
              return (
                <path
                  key={index}
                  d={`M${point.x},${point.y} L${nextPoint.x},${nextPoint.y}`}
                  stroke="#262626" // gray-600
                  strokeWidth="0.7"
                  fill="none"
                />
              );
            })}
          </svg>

          {/* Animated Teal Light Paths */}
          <svg
            className="absolute inset-0"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
          >
            {points.map((point, index) => {
              const nextPoint = points[(index + 1) % 6];
              const pathD = `M${point.x},${point.y} L${nextPoint.x},${nextPoint.y}`;
              const isActive = activeEdge === index;
              return (
                <path
                  key={index}
                  d={pathD}
                  stroke="#0d9488" // teal-500
                  strokeWidth="0.7"
                  fill="none"
                  strokeDasharray="100"
                  className={isActive ? "animate-edge" : "opacity-0"}
                />
              );
            })}
          </svg>

          {/* Central Logo Div with Glowing Border */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-kite-dark-2 rounded-full flex items-center justify-center animate-glow">
            <Image src="/images/dual-hex-white.png" alt="Hexafort Logo" width={40} height={40} />
          </div>

          {/* Feature Text Boxes with Icons */}
          {points.map((point, index) => {
            const isGlowing = glowBox === index; // Glow when light reaches this box
            const { title, icon } = features[index];
            return (
              <div
                key={index}
                className="absolute text-center text-white text-xs sm:text-sm px-4 py-1 bg-kite-dark-2 rounded-md max-w-[100px] sm:max-w-[120px] border-2 flex flex-col items-center justify-center"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: "translate(-50%, -50%)",
                  borderColor: isGlowing ? "#0D9488" : "#262626",
                  transition: "border-color 0.5s ease-out",
                }}
              >
                <span className="text-lg text-teal-500">{icon}</span>
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// CSS Animations
const styles = `
  @keyframes edge-travel {
    0% {
      stroke-dashoffset: 100;
      opacity: 1;
    }
    66.67% { // 2/3 of 3s = 2s
      stroke-dashoffset: 0;
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0;
    }
  }
  .animate-edge {
    stroke-dasharray: 100;
    animation: edge-travel 3s ease-out forwards;
  }
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(20, 184, 166, 0.5);
    }
    50% {
      box-shadow: 0 0 15px rgba(20, 184, 166, 1);
    }
  }
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
`;

// Component for styles
const GlobalStyles: React.FC = () => <style>{styles}</style>;

export { Hexagon, GlobalStyles };