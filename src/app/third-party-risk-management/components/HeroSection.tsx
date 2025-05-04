'use client';
import React from 'react';
import { Box, Typography, Button, Icon } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

const HeroSection: React.FC = () => {
  const { hero } = thirdPartyRiskManagementData;

  return (
    <Box sx={heroSectionStyle.container}>
      <Box sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.contentBox}>
          <Typography variant="body1" sx={heroSectionStyle.tagline}>
            Third-Party Risk Management
          </Typography>
          <Typography variant="h1" sx={heroSectionStyle.title}>
            {hero.title}
          </Typography>
          <Typography variant="h2" sx={heroSectionStyle.subtitle}>
            {hero.subtitle}
          </Typography>

          {hero.description.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={heroSectionStyle.description}
            >
              {paragraph}
            </Typography>
          ))}

          <Button variant="contained" sx={heroSectionStyle.ctaButton}>
            {hero.ctaText}
          </Button>
        </Box>

        <Box sx={heroSectionStyle.imageBox}>
          <Box>
            <Icon sx={{ fontSize: '2rem', mr: 1 }}>dashboard</Icon>
            {hero.imagePrompt}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
