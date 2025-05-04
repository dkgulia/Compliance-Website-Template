'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import efficiencyEnhancementsSectionStyle from '../styles/efficiencyEnhancementsSectionStyle';
import { cspmData } from '../constants/cspmData';

const EfficiencyEnhancementsSection: React.FC = () => {
  return (
    <Box sx={efficiencyEnhancementsSectionStyle.box}>
      <Box sx={efficiencyEnhancementsSectionStyle.container}>
        <Box sx={efficiencyEnhancementsSectionStyle.containerBox}>
          <Typography
            variant="h2"
            sx={efficiencyEnhancementsSectionStyle.heading}
          >
            {cspmData.efficiencyEnhancements.title}
          </Typography>
          <Typography
            variant="body1"
            sx={efficiencyEnhancementsSectionStyle.subheading}
          >
            {cspmData.efficiencyEnhancements.subtitle}
          </Typography>
        </Box>

        <Box sx={efficiencyEnhancementsSectionStyle.enhancementsGrid}>
          {cspmData.efficiencyEnhancements.enhancements.map(
            (enhancement, index) => (
              <Box
                key={index}
                sx={efficiencyEnhancementsSectionStyle.enhancementCard}
              >
                <Box sx={efficiencyEnhancementsSectionStyle.iconContainer}>
                  <enhancement.muiIcon sx={efficiencyEnhancementsSectionStyle.icon} />
                </Box>
                <Typography
                  variant="h5"
                  sx={efficiencyEnhancementsSectionStyle.enhancementTitle}
                >
                  {enhancement.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={efficiencyEnhancementsSectionStyle.enhancementDescription}
                >
                  {enhancement.description}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EfficiencyEnhancementsSection;
