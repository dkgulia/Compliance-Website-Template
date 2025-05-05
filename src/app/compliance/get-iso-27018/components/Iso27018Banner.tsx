'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import iso22301BannerStyle from '../styles/bannerStyle';
import businessContinuityImg from '../images/iso27018-cta.png';

const ISO22301Banner = () => {
  return (
    <Box sx={iso22301BannerStyle.box}>
      <Box sx={iso22301BannerStyle.container}>
        <Box sx={iso22301BannerStyle.content}>
          <Typography variant="h4" sx={iso22301BannerStyle.heading}>
            Strengthen Your Business Continuity
          </Typography>
          <Typography variant="body1" sx={iso22301BannerStyle.description}>
            ISO 22301 helps organizations prepare for, respond to, and recover from disruptions while maintaining critical business functions and minimizing impact.
          </Typography>
          <Button variant="contained" sx={iso22301BannerStyle.button} href="/compliance">
            Book Your Demo <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box sx={iso22301BannerStyle.imageWrapper}>
          <Image
            src={businessContinuityImg}
            alt="Business Continuity"
            width={300}
            height={200}
            style={{ borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ISO22301Banner;