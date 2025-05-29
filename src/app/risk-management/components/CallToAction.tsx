'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import callToActionStyle from '../styles/callToActionStyle';
import { riskManagementData } from '../constants/riskManagementData';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';

const CallToAction: React.FC = () => {
   const ctaContent = riskManagementData.sections.find(
       (section) => section.Sno === '5' && section.blockType === 'Call to Action'
   );

   if (!ctaContent) return null;

   return (
       <Box sx={callToActionStyle.section}>
           <Box sx={callToActionStyle.headerContainer}>
               <Typography sx={callToActionStyle.tagline}>
                   GET STARTED TODAY
               </Typography>
               <Typography sx={callToActionStyle.title}>
                   {ctaContent.content.title}
               </Typography>
               <Typography sx={callToActionStyle.subtitle}>
                   {ctaContent.content.subtitle}
               </Typography>
           </Box>

           <Box sx={callToActionStyle.contentWrapper}>
               <Box sx={callToActionStyle.textContent}>
                   <Typography sx={callToActionStyle.ctaTitle}>
                       Transform Your Risk Management
                   </Typography>
                   <Typography sx={callToActionStyle.description}>
                       {ctaContent.content.description}
                   </Typography>
               </Box>

               <Box sx={callToActionStyle.formBox}>
                   <Typography sx={callToActionStyle.formTitle}>
                       Book Your Demo Now
                   </Typography>
                   <EnhancedHeroSectionForm />
               </Box>
           </Box>
       </Box>
   );
};

export default CallToAction;