'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import heroSectionStyles from '../styles/heroSectionStyles';
import Image from 'next/image';

const HeroSection = () => {
  const { heroTitle, heroSubtitle, heroDescription, ctaText } = securityTrainingData.sections[0].content;

  return (
    <Box sx={heroSectionStyles.root}>
      <Container sx={heroSectionStyles.container}>
        <Box sx={heroSectionStyles.contentBox}>
          <Typography sx={heroSectionStyles.tagline}>Security Awareness Made Easy</Typography>
          <Typography variant="h2" sx={heroSectionStyles.title}>
            {heroTitle}
          </Typography>
          <Typography variant="h5" sx={heroSectionStyles.subtitle}>
            {heroSubtitle}
          </Typography>

          <Box sx={heroSectionStyles.listContainer}>
            {heroDescription.map((desc, index) => (
              <Typography key={index} sx={heroSectionStyles.listItem}>
                {desc}
              </Typography>
            ))}
          </Box>

          <Button variant="contained" sx={heroSectionStyles.ctaButton}>
            {ctaText}
          </Button>
        </Box>

        <Box sx={heroSectionStyles.imageBox}>
          <Image
            src="/images/security-training-hero.png"
            alt="Security Training Hero"
            width={550}
            height={550}
            style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;