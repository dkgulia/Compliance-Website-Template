'use client';

import React from 'react';
import { Box, Typography, useTheme ,Grid} from '@mui/material';
import styles from '../styles/benefitsSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const BenefitsSection: React.FC = () => {
  const data = trustCenterPageData.sections.benefits;
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
          {data.features.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={styles.card}>
                  <Box sx={styles.iconContainer}>
                    <IconComponent sx={styles.icon} />
                  </Box>
                  <Typography sx={styles.cardTitle}>
                    {benefit.title}
                  </Typography>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={styles.cardDescription}>
                      {benefit.description}
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

 export default BenefitsSection;