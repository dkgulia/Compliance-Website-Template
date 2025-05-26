'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import offerBannerStyle from '../styles/offerBannerStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const OfferBanner: React.FC = () => {
  const data = trustCenterPageData.sections.offer;
  const IconComponent = data.icon;

  return (
    <Box sx={offerBannerStyle.box}>
      <Box sx={offerBannerStyle.gradient} />
      <Box sx={offerBannerStyle.innerBox}>
        <Box sx={offerBannerStyle.content}>
          <Typography variant="h5" sx={offerBannerStyle.title}>
            {data.title}
          </Typography>
          <Typography variant="body1" sx={offerBannerStyle.subtitle}>
            {data.subtitle}
          </Typography>
        </Box>
        
        <Box sx={offerBannerStyle.iconBox}>
          <IconComponent sx={offerBannerStyle.icon} />
        </Box>
      </Box>
    </Box>
  );
};

export default OfferBanner;