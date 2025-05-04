'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import createBannerStyle from '../styles/bannerStyle';

const DpdpBanner: React.FC = () => {
  const theme = useTheme();
  const styles = createBannerStyle(theme);

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          Safeguard Personal Data
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Protect user data and build trust. DPDP compliance \n is essential for any business processing personal information in India.
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Book Your Demo
        </Button>
      </Container>
    </Box>
  );
};

export default DpdpBanner;