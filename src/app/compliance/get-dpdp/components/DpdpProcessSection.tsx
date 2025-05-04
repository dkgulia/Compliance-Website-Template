'use client';
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import createProcessSectionStyle from '../styles/processSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpProcessSection: React.FC = () => {
  const theme = useTheme();
  const styles = createProcessSectionStyle(theme);
  const { process } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            {process.title}
          </Typography>
          {process.subtitle && (
            <Typography variant="body1" sx={styles.subtitle}>
              {process.subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={styles.stepsContainer}>
          {process.items.map((step, index) => (
            <Box key={index} sx={styles.stepCard}>
              <Box sx={styles.stepNumber}>{index + 1}</Box>
              <Typography variant="h6" sx={styles.stepTitle}>
                {step.heading}
              </Typography>
              <Typography variant="body2" sx={styles.stepDescription}>
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpProcessSection;