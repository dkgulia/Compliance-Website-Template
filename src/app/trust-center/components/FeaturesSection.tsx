'use client';

import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import styles from '../styles/featuresSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const FeaturesSection: React.FC = () => {
  const data = trustCenterPageData.sections.features;
  const theme = useTheme();

  return (
    <Box sx={styles.section}>
      <Box sx={styles.headerContainer}>
        <Typography sx={styles.title}>
          {data.title}
        </Typography>
        <Typography sx={styles.subtitle}>
          {data.subtitle}
        </Typography>
      </Box>

      <Box sx={styles.gridContainer}>
        <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
          {data.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={styles.card}>
                  <Box sx={styles.iconContainer}>
                    <IconComponent sx={styles.icon} />
                  </Box>
                  <Typography sx={styles.cardTitle}>
                    {feature.title}
                  </Typography>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={styles.cardDescription}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
 };

 export default FeaturesSection;