'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import iso22301BannerStyle from '../styles/nistBannerStyle';
import businessContinuityImg from '../images/bookAdemo.png';

const ISO22301Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={iso22301BannerStyle.box}>
      <Box sx={iso22301BannerStyle.container}>
        <Box sx={iso22301BannerStyle.content}>
          <Typography variant="h4" sx={iso22301BannerStyle.heading}>
            Streamline Your Business Continuity
          </Typography>
          <Typography variant="body1" sx={iso22301BannerStyle.description}>
            ISO 22301 is essential for organizations seeking to establish robust business continuity management systems that protect operations during disruptions and maintain critical functions.
          </Typography>
          <Button
            variant="contained"
            sx={iso22301BannerStyle.button}
            onClick={scrollToTop}
          >
            Book Your Demo <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box sx={iso22301BannerStyle.imageWrapper}>
          <Image
            src={businessContinuityImg}
            alt="Business Continuity"
            width={300}
            height={200}
            style={{ borderRadius: '8px',marginTop:'1rem' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ISO22301Banner;