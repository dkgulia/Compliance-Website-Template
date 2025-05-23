'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import createCtaSectionStyle from '../styles/ctaSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpCtaSection: React.FC = () => {
  const theme = useTheme();
  const styles = createCtaSectionStyle(theme);
  const { callToAction } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.container}>
      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Typography variant="h3" sx={styles.title}>
            {callToAction.title}
          </Typography>

          <Typography variant="body1" sx={styles.description}>
            {callToAction.description}
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={styles.button}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {callToAction.ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpCtaSection;