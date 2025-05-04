'use client';
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import createHeroSectionStyle from '../styles/heroSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpHeroSection: React.FC = () => {
  const theme = useTheme();
  const styles = createHeroSectionStyle(theme);
  const { hero } = dpdpData.sections;

  return (
    <Box id="dpdp-hero" component="section" sx={styles.container}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.leftContentBox}>
          <Box sx={styles.tag}>
            <Typography variant="body2" sx={styles.tagText}>
              {dpdpData.heroTag}
            </Typography>
          </Box>

          <Typography variant="h3" sx={styles.mainTitle}>
            {hero.title}
            <Box component="span" display="block" sx={styles.highlightText}>
              {hero.subtitle}
            </Box>
          </Typography>

          <Typography sx={styles.description}>
            {hero.description}
          </Typography>

          <Box sx={styles.featuresContainer}>
            {hero.heroBullets.map((item, index) => {
              const Icon = item.icon;
              return (
                <Box key={index} sx={styles.featureItem}>
                  <Box sx={styles.iconWrapper}>
                    <Icon sx={styles.featureIcon} />
                  </Box>
                  <Box sx={styles.featureTextWrapper}>
                    <Typography sx={styles.featureTitle}>
                      {item.title}
                    </Typography>
                    <Typography sx={styles.featureSubtitle}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={styles.formBox}>
          <EnhancedHeroSectionForm />
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpHeroSection;