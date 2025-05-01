'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import doraBookNowBannerStyle from '../styles/doraBookNowBannerStyle';
import { complianceData } from '../constants/doraData';
import bannerImage from '../images/cta-dora.png';

export default function DoraBookNowBanner() {
  return (
    <Box sx={doraBookNowBannerStyle.box}>
      <Box sx={doraBookNowBannerStyle.container}>
        <Box sx={doraBookNowBannerStyle.content}>
          <Typography variant="h4" sx={doraBookNowBannerStyle.heading}>
            Ready to Elevate Your Digital Resilience?
          </Typography>
          <Typography sx={doraBookNowBannerStyle.description}>
            {complianceData.ctaText}
          </Typography>
          <Button
            variant="contained"
            sx={doraBookNowBannerStyle.button}
            href="/compliance"
          >
            Book Your Demo <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Box sx={doraBookNowBannerStyle.imageWrapper}>
          <Image
            src={bannerImage}
            alt="DORA Compliance"
            width={300}
            height={230}
            style={{ borderRadius: '8px', filter: 'invert(1) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
            }}
            priority 
          />
        </Box>
      </Box>
    </Box>
  );
}
