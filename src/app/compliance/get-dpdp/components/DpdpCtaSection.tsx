'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import createCtaSectionStyle from '../styles/ctaSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpCtaSection: React.FC = () => {
  const theme = useTheme();
  const styles = createCtaSectionStyle(theme);
  const { callToAction } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          {callToAction.title}
        </Typography>

        {callToAction.subtitle && (
          <Typography variant="h6" sx={styles.subtitle}>
            {callToAction.subtitle}
          </Typography>
        )}

        <Typography variant="body1" sx={styles.description}>
          {callToAction.description}
        </Typography>

        <Button
          variant="contained"
          startIcon={<CalendarTodayIcon />}
          endIcon={<ArrowForwardIcon />}
          sx={styles.button}
        >
          {callToAction.ctaText}
        </Button>
      </Container>
    </Box>
  );
};

export default DpdpCtaSection;