'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import createComplianceHubStyle from '../styles/complianceHubStyle';
import dpdpData from '../constants/dpdpData';

const DpdpComplianceHub: React.FC = () => {
  const theme = useTheme();
  const styles = createComplianceHubStyle(theme);
  const { complianceHub } = dpdpData.sections;

  return (
    <Box id="dpdp-compliance-hub" component="section" sx={styles.box}>
      <Container sx={styles.container}>
        <Box sx={styles.containerBox}>
          <Typography
            component="h2"
            variant="h4"
            sx={styles.heading}
          >
            {complianceHub.title}
          </Typography>
          <Typography variant="body1" sx={styles.subHeading}>
            {complianceHub.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {complianceHub.items.map((item, i) => {
            const IconComp = item.icon;
            return (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={styles.stepContainer}>
                  <Box sx={styles.iconContainer}>
                    <IconComp sx={styles.icon} />
                  </Box>

                  <Box sx={styles.textContainer}>
                    <Typography variant="body1" sx={styles.title}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={styles.description}
                    >
                      {item.description}
                    </Typography>
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

export default DpdpComplianceHub;