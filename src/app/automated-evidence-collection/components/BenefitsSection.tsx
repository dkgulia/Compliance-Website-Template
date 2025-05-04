'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const BenefitsSection: React.FC = () => {
  const theme = useTheme();
  const styles = benefitsSectionStyle(theme);
  const { benefits } = evidenceCollectionData;

  return (
    <Box component="section" id="benefits" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.headerBox}>
          <Typography component="h2" variant="h4" sx={styles.title}>
            {benefits.title}
          </Typography>
          {benefits.subtitle && (
            <Typography sx={styles.subtitle}>{benefits.subtitle}</Typography>
          )}
        </Box>

        <Grid container spacing={2}>
          {benefits.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box sx={styles.featureCard}>
                  <Box sx={styles.contentWrapper}>
                    <Box sx={styles.iconContainer}>
                      <IconComponent sx={styles.featureIcon} />
                    </Box>

                    <Box sx={styles.typographyContainer}>
                      <Typography variant="h6" sx={styles.featureTitle}>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={styles.featureDescription}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
