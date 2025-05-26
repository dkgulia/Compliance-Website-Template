'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import hipaaBannerStyle from '../styles/hipaaBannerStyle';
import healthcareComplianceImg from '../images/bookAdemo.png';

const HipaaBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={hipaaBannerStyle.box}>
      <Box sx={hipaaBannerStyle.container}>
        <Box sx={hipaaBannerStyle.content}>
          <Typography variant="h4" sx={hipaaBannerStyle.heading}>
            Streamline Your Healthcare Compliance
          </Typography>
          <Typography variant="body1" sx={hipaaBannerStyle.description}>
            HIPAA is required for modern healthcare plans, providers, insurers, and clearinghouses, as well as biotech and pharmaceutical organizations.
          </Typography>
          <Button
            variant="contained"
            sx={hipaaBannerStyle.button}
            onClick={scrollToTop}
          >
            Book Your Demo <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box sx={hipaaBannerStyle.imageWrapper}>
          <Image
            src={healthcareComplianceImg}
            alt="Healthcare Compliance"
            width={300}
            height={200}
            style={{ borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HipaaBanner;