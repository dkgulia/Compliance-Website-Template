'use client';
import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import createBannerStyle from '../styles/bannerStyle';
import dpdpBannerImg from '../images/dpdpDemo.png';

const DpdpBanner: React.FC = () => {
  const theme = useTheme();
  const styles = createBannerStyle(theme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box component="section" sx={styles.box}>
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Typography variant="h4" sx={styles.heading}>
            Safeguard Personal Data
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            Protect user data and build trust. DPDP compliance is essential for any business processing personal information in India.
          </Typography>
          <Button
            variant="contained"
            sx={styles.button}
            onClick={scrollToTop}
            endIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
          >
            Book Your Demo
          </Button>
        </Box>
        <Box sx={styles.imageWrapper}>
          <Image
            src={dpdpBannerImg}
            alt="DPDP Compliance"
            width={300}
            height={200}
            style={{ borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DpdpBanner;