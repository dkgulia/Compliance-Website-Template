'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraHeroStyle from '../styles/doraHeroStyle';
import Image from 'next/image';
import heroSection2 from '../images/heroSection2.webp';

export default function DoraHeroSection() {
  return (
    <Box sx={DoraHeroStyle.container}>
      <Container sx={DoraHeroStyle.containerBox}>
        <Box sx={DoraHeroStyle.contentBox}>
          <Typography sx={DoraHeroStyle.tagline}>DORA compliance made easy</Typography>
          <Typography variant="h2" sx={DoraHeroStyle.title}>
            {complianceData.heroTitle}
          </Typography>
          <Typography variant="h5" sx={DoraHeroStyle.subtitle}>
            {complianceData.heroSubtitle}
          </Typography>

          <Box sx={DoraHeroStyle.listContainer}>
            {complianceData.heroDescription.map((desc, i) => (
              <Typography key={i} sx={DoraHeroStyle.listItem}>
                {desc}
              </Typography>
            ))}
          </Box>

          <Button variant="contained" sx={DoraHeroStyle.ctaButton} href="/compliance">
            Request a Free Demo
          </Button>
        </Box>

        <Box sx={DoraHeroStyle.imageBox}>
          <Image
            src={heroSection2}
            alt="DORA compliance hero"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Container>
    </Box>
  );
}