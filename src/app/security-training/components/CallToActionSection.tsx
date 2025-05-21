'use client';

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import callToActionSectionStyles from '../styles/callToActionSectionStyles';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import securityTrainingSetup from '../images/bookDemo.png';

const CallToActionSection = () => {
  const sectionContent = securityTrainingData.sections[4]?.content || {};
  const { title, subtitle, description, ctaText } = sectionContent;

  return (
    <Box sx={callToActionSectionStyles.container}>
      <Box sx={callToActionSectionStyles.bannerContainer}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} sx={callToActionSectionStyles.contentGrid}>
            {title && (
              <Typography variant="h4" sx={callToActionSectionStyles.title}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body1" sx={callToActionSectionStyles.description}>
                {description}
              </Typography>
            )}
            <Button
              variant="contained"
              sx={callToActionSectionStyles.ctaButton}
              endIcon={<ArrowForward />}
            >
              {ctaText || "Book My Demo"}
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={callToActionSectionStyles.imageGrid}>
            <Image
              src={securityTrainingSetup}
              alt="Quick Setup Wizard"
              width={300}
              height={200}
              style={{
                objectFit: 'contain',
                maxWidth: '100%',
                height: 'auto'
              }}
              priority
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CallToActionSection;