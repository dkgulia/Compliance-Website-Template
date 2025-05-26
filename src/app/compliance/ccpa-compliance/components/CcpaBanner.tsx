'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import ccpaCtaBannerStyles from '../styles/bannerStyle';
import ccpaBannerImg from '../images/bookAdemo.png';

const CcpaBookDemo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={ccpaCtaBannerStyles.box}>
      <Box sx={ccpaCtaBannerStyles.bannerContainer}>
        <Box sx={ccpaCtaBannerStyles.textContainer}>
          <Typography variant="h4" sx={ccpaCtaBannerStyles.heading}>
            Take control of your CCPA compliance journey.
          </Typography>
          <Typography variant="body1" sx={ccpaCtaBannerStyles.description}>
            Get in touch to discover how HexaFort can streamline your CCPA compliance process and help protect consumer data while managing privacy requirements.
          </Typography>
          <Button
            variant="contained"
            sx={ccpaCtaBannerStyles.button}
            onClick={scrollToTop}
          >
            Book a Demo <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box sx={ccpaCtaBannerStyles.imageWrapper}>
          <Image
            src={ccpaBannerImg}
            alt="CCPA Compliance"
            width={300}
            height={200}
            style={{ borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CcpaBookDemo;