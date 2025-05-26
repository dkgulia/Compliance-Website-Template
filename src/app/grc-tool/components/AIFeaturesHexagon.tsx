'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import companyLogo from  '../../compliance/get-pci-dss/images/dual-hex-white.png'

const AIFeaturesHexagon = () => {
  const features = [
    { title: "AI-CISO", id: 1 },
    { title: "Cloud Security", id: 2 },
    { title: "Questionnaire", id: 3 },
    { title: "Asset Intelligence", id: 4 },
    { title: "Risk Management", id: 5 },
    { title: "Compliance", id: 6 },
  ];
  const radius = 50;
  const angles = [270, 330, 30, 90, 150, 210];
  const points = angles.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(rad),
      y: 50 + radius * Math.sin(rad),
    };
  });

  const [activeEdge, setActiveEdge] = useState(-1);
  const [glowBox, setGlowBox] = useState(0);


  const segmentTime = 3;
  const overlapTime = 0.5;


  useEffect(() => {
    const edgeTimeout = setTimeout(() => {
      setActiveEdge(0);
    }, 500);

    const edgeInterval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % 6);
    }, (segmentTime - overlapTime) * 1000);

    const glowTimeout = setTimeout(() => {
      setGlowBox(1);
    }, (0.9 * segmentTime + 0.5) * 1000);

    const glowInterval = setInterval(() => {
      setGlowBox((prev) => (prev + 1) % 6);
    }, (segmentTime - overlapTime) * 1000);

    return () => {
      clearTimeout(edgeTimeout);
      clearInterval(edgeInterval);
      clearTimeout(glowTimeout);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      aspectRatio: '1/1',
      margin: '0 auto'
    }}>
      <Box sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <svg
            style={{
              position: 'absolute',
              inset: 0
            }}
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
          >
            {points.map((point, index) => {
              const nextPoint = points[(index + 1) % 6];
              return (
                <path
                  key={`static-${index}`}
                  d={`M${point.x},${point.y} L${nextPoint.x},${nextPoint.y}`}
                  stroke="#262626"
                  strokeWidth="0.7"
                  fill="none"
                />
              );
            })}
          </svg>
          <svg
            style={{
              position: 'absolute',
              inset: 0
            }}
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
                  key={`animate-${index}`}
                  d={pathD}
                  stroke="#115e59"
                  strokeWidth="0.7"
                  strokeDasharray="100"
                  strokeDashoffset={isActive ? "100" : "0"}
                  opacity={isActive ? 1 : 0}
                  fill="none"
                  style={{
                    animation: isActive
                      ? 'edge-travel 3s ease-out forwards'
                      : 'none'
                  }}
                />
              );
            })}
          </svg>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '70px', sm: '90px' },
              height: { xs: '70px', sm: '90px' },
              bgcolor: '#171717',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(17, 94, 89, 0.7)',
              animation: 'glow 2s ease-in-out infinite'
            }}
          >
            <Image
              src={companyLogo} // Use the imported image
              alt="Company Logo"
              width={50}
              height={50}
              style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
          </Box>


          {points.map((point, index) => {
            const isGlowing = glowBox === index;
            const feature = features[index];

            return (
              <Box
                key={`feature-${index}`}
                sx={{
                  position: 'absolute',
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'white',
                  padding: '4px 8px',
                  bgcolor: 'rgba(23, 23, 23, 0.8)',
                  borderRadius: '4px',
                  maxWidth: { xs: '90px', sm: '110px' },
                  border: `2px solid ${isGlowing ? '#115e59' : '#262626'}`,
                  transition: 'border-color 0.5s ease-out',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(5px)',
                  fontSize: { xs: '10px', sm: '12px' }
                }}
              >
                <Box sx={{
                  fontSize: { xs: '12px', sm: '14px' },
                  color: '#115e59',
                  fontWeight: 'bold',
                  mb: '2px'
                }}>
                  {feature.id}
                </Box>
                <Box sx={{
                  fontWeight: '500'
                }}>
                  {feature.title}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes edge-travel {
          0% {
            stroke-dashoffset: 100;
            opacity: 1;
          }
          66.67% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(17, 94, 89, 0.5);
          }
          50% {
            box-shadow: 0 0 15px rgba(17, 94, 89, 1);
          }
        }
      `}</style>
    </Box>
  );
};

export default AIFeaturesHexagon;