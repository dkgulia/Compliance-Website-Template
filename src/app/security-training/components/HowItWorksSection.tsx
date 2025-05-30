'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import theme from '../../../theme';
import Image from 'next/image';
import standardStyles from '../styles/howItWorksSectionStyles';
const HowItWorksSection = () => {
  const { title, subtitle, steps } = securityTrainingData.sections[3].content;



  return (
    <Box sx={standardStyles.section}>
      <Box sx={standardStyles.headerContainer}>
        <Typography sx={standardStyles.tagline}>IMPLEMENTATION PROCESS</Typography>
        <Typography sx={standardStyles.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={standardStyles.subtitle}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
        {steps?.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box sx={standardStyles.card}>
              <Typography sx={standardStyles.stepNumber}>
                {index + 1}
              </Typography>
              <Typography sx={standardStyles.cardTitle}>
                {step.heading}
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography sx={standardStyles.cardDescription}>
                  {step.description}
                </Typography>
                {step.image && (
                  <Box sx={{ position: 'relative', width: '100%', height: '80px', marginTop: '1rem' }}>
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;