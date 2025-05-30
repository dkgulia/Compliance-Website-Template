'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import offerBannerStyle from '../styles/offerBannerStyle';
import { riskManagementData } from '../constants/riskManagementData';

const OfferBanner: React.FC = () => {
   const offerContent = riskManagementData.sections.find(
       (section) => section.Sno === '6' && section.blockType === 'Top/Offer'
   );

   return (
       <Box sx={offerBannerStyle.section}>
           <Box sx={offerBannerStyle.headerContainer}>
               <AccessTimeIcon sx={offerBannerStyle.icon} />

               <Typography sx={offerBannerStyle.title}>
                   Free 14-Day Trial • No Credit Card
               </Typography>

               <Typography sx={offerBannerStyle.subtitle}>
                   Lightning Fast Setup in Minutes
               </Typography>
           </Box>
       </Box>
   );
};

export default OfferBanner;