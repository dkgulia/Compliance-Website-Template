'use client';
import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import createHeroSectionStyle from '../styles/heroSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpHeroSection: React.FC = () => {
  const theme = useTheme();
  const styles = createHeroSectionStyle(theme);
  const { hero } = dpdpData.sections;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="dpdp-hero" component="section" sx={styles.container}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.leftContentBox}>
          <Box sx={styles.chip}>
            <Typography variant="body2" sx={styles.chipTypography}>
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

          {isMobile ? (
            <Box sx={styles.statsContainer}>
              <Box sx={styles.statItem}>
                <Box sx={styles.iconWrapper}>
                  <Verified sx={styles.featureIcon} />
                </Box>
                <Typography sx={styles.statValue}>Automated</Typography>
                <Typography sx={styles.statLabel}>Consent Engine</Typography>
              </Box>

              <Box sx={styles.statItem}>
                <Box sx={styles.iconWrapper}>
                  <Security sx={styles.featureIcon} />
                </Box>
                <Typography sx={styles.statValue}>Robust</Typography>
                <Typography sx={styles.statLabel}>Breach Playbooks</Typography>
              </Box>

              <Box sx={styles.statItem}>
                <Box sx={styles.iconWrapper}>
                  <Policy sx={styles.featureIcon} />
                </Box>
                <Typography sx={styles.statValue}>Thorough</Typography>
                <Typography sx={styles.statLabel}>Penalty Dashboard</Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={styles.featuresContainer}>
              <Box sx={styles.featureItem}>
                <Box sx={styles.iconWrapper}>
                  <Verified sx={styles.featureIcon} />
                </Box>
                <Box sx={styles.featureTextWrapper}>
                  <Typography sx={styles.featureTitle}>Automated</Typography>
                  <Typography sx={styles.featureSubtitle}>Consent Engine</Typography>
                </Box>
              </Box>

              <Box sx={styles.featureItem}>
                <Box sx={styles.iconWrapper}>
                  <Security sx={styles.featureIcon} />
                </Box>
                <Box sx={styles.featureTextWrapper}>
                  <Typography sx={styles.featureTitle}>Robust</Typography>
                  <Typography sx={styles.featureSubtitle}>Breach Playbooks</Typography>
                </Box>
              </Box>

              <Box sx={styles.featureItem}>
                <Box sx={styles.iconWrapper}>
                  <Policy sx={styles.featureIcon} />
                </Box>
                <Box sx={styles.featureTextWrapper}>
                  <Typography sx={styles.featureTitle}>Thorough</Typography>
                  <Typography sx={styles.featureSubtitle}>Penalty Dashboard</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={styles.formBox}>
          <EnhancedHeroSectionForm />
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpHeroSection;