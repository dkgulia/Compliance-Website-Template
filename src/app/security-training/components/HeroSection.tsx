'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import heroSectionStyles from '../styles/heroSectionStyles';
import Image from 'next/image';

// Define TypeScript interface for the hero content
interface HeroContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string[];
  ctaText: string;
}

const HeroSection: React.FC = () => {
  // Safely access hero content with proper type checking
  const heroSection = securityTrainingData.sections.find(
    (section) => section.Sno === '1' && section.blockType === 'Hero'
  );

  if (!heroSection || !heroSection.content) return null;

  const { heroTitle, heroSubtitle, heroDescription, ctaText } = heroSection.content as HeroContent;

  return (
    <Box sx={heroSectionStyles.container}>
      <Container sx={heroSectionStyles.containerBox}>
        {/* Left content section */}
        <Box sx={heroSectionStyles.leftContentBox}>
          <Box sx={heroSectionStyles.tag}>
            <Typography sx={heroSectionStyles.tagText}>
              Security Awareness Made Easy
            </Typography>
          </Box>

          <Typography variant="h1" sx={heroSectionStyles.title}>
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

        {/* Right image section */}
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