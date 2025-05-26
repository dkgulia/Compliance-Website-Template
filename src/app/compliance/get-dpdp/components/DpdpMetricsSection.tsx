'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import createMetricsSectionStyle from '../styles/metricsSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpMetricsSection: React.FC = () => {
  const theme = useTheme();
  const styles = createMetricsSectionStyle(theme);
  const { metrics } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.box}>
      <Container maxWidth="lg">
        {(metrics.title || metrics.subtitle) && (
          <Box sx={styles.header}>
            {metrics.title && (
              <Typography variant="h2" sx={styles.title}>
                {metrics.title}
              </Typography>
            )}
            {metrics.subtitle && (
              <Typography variant="body1" sx={styles.subtitle}>
                {metrics.subtitle}
              </Typography>
            )}
          </Box>
        )}

        <Grid container spacing={4} justifyContent="center">
          {metrics.items.map((metric, index) => (
            <Grid size={{xs:12,sm:4}}  key={index}>
              <Box sx={styles.metricCard}>
                <Typography variant="h2" component="p" sx={styles.metricValue}>
                  {metric.value}
                </Typography>
                <Typography variant="h6" sx={styles.metricLabel}>
                  {metric.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DpdpMetricsSection;