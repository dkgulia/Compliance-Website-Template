'use client';
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import createMetricsSectionStyle from '../styles/metricsSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpMetricsSection: React.FC = () => {
  const theme = useTheme();
  const styles = createMetricsSectionStyle(theme);
  const { metrics } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
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

        <Box sx={styles.metricsGrid}>
          {metrics.items.map((metric, index) => (
            <Box key={index} sx={styles.metricCard}>
              <Typography variant="h2" sx={styles.metricValue}>
                {metric.value}
              </Typography>
              <Typography variant="h6" sx={styles.metricLabel}>
                {metric.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpMetricsSection;