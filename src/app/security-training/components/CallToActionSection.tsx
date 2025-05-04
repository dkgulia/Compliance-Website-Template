'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import callToActionSectionStyles from '../styles/callToActionSectionStyles';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';

const CallToActionSection = () => {
  const { title, subtitle, description, ctaText } = securityTrainingData.sections[4].content;

  return (
    <Box sx={callToActionSectionStyles.container}>
      <Box sx={callToActionSectionStyles.bannerContainer}>
        <Box sx={callToActionSectionStyles.contentBox}>
          <Typography variant="h4" sx={callToActionSectionStyles.title}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" sx={callToActionSectionStyles.subtitle}>
              {subtitle}
            </Typography>
          )}
          <Typography variant="body1" sx={callToActionSectionStyles.description}>
            {description}
          </Typography>
          <Button 
            variant="contained"
            sx={callToActionSectionStyles.ctaButton}
            endIcon={<ArrowForward />}
          >
            {ctaText}
          </Button>
        </Box>
        
        <Box sx={callToActionSectionStyles.imageBox}>
          <Image
            src="/images/security-training-setup.png"
            alt="Quick Setup"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CallToActionSection;