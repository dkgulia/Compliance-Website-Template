'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import efficiencyEnhancementsSectionStyle from '../styles/efficiencyEnhancementsSectionStyle';
import { cspmData } from '../constants/cspmData';

const EfficiencyEnhancementsSection: React.FC = () => {
  return (
    <Box component="section" sx={efficiencyEnhancementsSectionStyle.box}>
      <Container maxWidth="lg" sx={efficiencyEnhancementsSectionStyle.container}>
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

        <Grid container spacing={2}>
          {cspmData.efficiencyEnhancements.enhancements.map(
            (enhancement, index) => (
              <Grid size={{xs:12,sm:6,md:3}}  key={index}>
                <Box
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
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default EfficiencyEnhancementsSection;