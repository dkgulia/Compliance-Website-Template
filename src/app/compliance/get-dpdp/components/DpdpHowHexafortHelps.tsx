'use client';
import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import createHowHexafortHelpsStyle from '../styles/howHexafortHelpsStyle';
import dpdpData from '../constants/dpdpData';

const DpdpHowHexafortHelps: React.FC = () => {
  const theme = useTheme();
  const styles = createHowHexafortHelpsStyle(theme);
  const { howHexafortHelps } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            {howHexafortHelps.title}
          </Typography>
          <Typography variant="body1" sx={styles.subtitle}>
            {howHexafortHelps.subtitle}
          </Typography>
        </Box>

        <Box sx={styles.stepsGrid}>
          {howHexafortHelps.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Box key={index} sx={styles.stepCard}>
                <Icon sx={styles.stepIcon} />
                <Typography sx={styles.stepText}>
                  {step.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpHowHexafortHelps;