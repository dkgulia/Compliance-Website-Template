'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { cmmcData } from '../constants/cmmcData';

const CmmcHeroSection: React.FC = () => {
  const heroContent = cmmcData.sections.find(
    (section) => section.Sno === '1' && section.blockType === 'Hero'
  );

  if (!heroContent) return null;

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Grid container spacing={3}>
          {/* Content Section */}
          <Grid size={{ xs: 6, md: 8 }}>
            <Box sx={heroSectionStyle.contentBox}>
              <Typography sx={heroSectionStyle.tagline}>
                🔒 CMMC compliance made easy
              </Typography>

              <Typography variant="h2" sx={heroSectionStyle.title}>
                {heroContent.content.heroTitle}
              </Typography>

              {heroContent.content.heroDescription && (
                <Box sx={heroSectionStyle.listContainer}>
                  {heroContent.content.heroDescription.map(
                    (desc: string, i: number) => (
                      <Typography key={i} sx={heroSectionStyle.listItem}>
                        {desc}
                      </Typography>
                    )
                  )}
                </Box>
              )}

              <Typography variant="h5" sx={heroSectionStyle.subtitle}>
                {heroContent.content.heroSubtitle}
              </Typography>

              <Button
                variant="contained"
                sx={heroSectionStyle.ctaButton}
                href="/compliance"
              >
                Explore CMMC
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid size={{ xs: 6, md: 8 }}>
            <Box sx={heroSectionStyle.imageBox}>
              <Box sx={heroSectionStyle.imagePlaceholder}>
                <Typography variant="body2" color="textSecondary">
                  CMMC Dashboard Preview
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CmmcHeroSection;
