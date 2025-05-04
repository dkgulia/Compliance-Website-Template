'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroSectionStyle from '../styles/heroSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const styles = heroSectionStyle(theme);
  const { hero } = evidenceCollectionData;

  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Typography variant="h1" sx={styles.title}>
            {hero.title}
          </Typography>
          <Typography variant="h2" sx={styles.subtitle}>
            {hero.subtitle}
          </Typography>
          {hero.description.map((paragraph, index) => (
            <Typography key={index} sx={styles.description}>
              {paragraph}
            </Typography>
          ))}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={styles.ctaButton}
          >
            {hero.ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
