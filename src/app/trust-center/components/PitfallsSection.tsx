'use client';

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import pitfallsSectionStyle from '../styles/pitfallsSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const PitfallsSection: React.FC = () => {
  const data = trustCenterPageData.sections.pitfalls;
  const theme = useTheme();

  return (
    <Box sx={pitfallsSectionStyle.container}>
      <Box sx={pitfallsSectionStyle.outerContainer}>
        <Box sx={pitfallsSectionStyle.innerBox}>
          <Box sx={pitfallsSectionStyle.titleSection}>
            <Box sx={pitfallsSectionStyle.chip}>Common Challenges</Box>
            <Typography variant="h2" sx={pitfallsSectionStyle.title}>
              {data.title}
            </Typography>
            <Typography sx={pitfallsSectionStyle.subtitle}>
              {data.subtitle}
            </Typography>
          </Box>

          <Box sx={pitfallsSectionStyle.gridContainer}>
            {data.items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Box key={index} sx={pitfallsSectionStyle.pitfallCard}>
                  <Box sx={pitfallsSectionStyle.pitfallContent}>
                    <Box sx={pitfallsSectionStyle.iconContainer}>
                      <IconComponent
                        sx={{
                          ...pitfallsSectionStyle.icon,
                          color: theme.palette.error.light,
                        }}
                      />
                    </Box>
                    <Typography sx={pitfallsSectionStyle.pitfallTitle}>
                      {item.heading}
                    </Typography>
                    <Typography sx={pitfallsSectionStyle.solutionText}>
                      {item.subheading}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PitfallsSection;
