'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import { useRouter } from 'next/navigation';
import heroSectionStyle from '../styles/heroSectionStyle';
import integrationsData from '../constants/integrationsData';

const HeroSection: React.FC = () => {
   const { hero } = integrationsData;
   const router = useRouter();

   const titleParts = hero.title.split('of');
   const firstPart = titleParts[0];

   const handleBookDemo = () => {
       router.push('/get-a-demo');
   };

   return (
       <Box sx={heroSectionStyle.section}>
           <Box sx={heroSectionStyle.headerContainer}>
               <Typography sx={heroSectionStyle.tagline}>
                   SEAMLESS CONNECTIVITY
               </Typography>

               <Typography sx={heroSectionStyle.title}>
                   {firstPart}
                   <Box component="span" sx={heroSectionStyle.highlight}>
                       of Integration
                   </Box>
               </Typography>

               <Typography sx={heroSectionStyle.subtitle}>
                   {hero.subtitle}
               </Typography>

               {hero.description.map((paragraph, index) => (
                   <Typography key={index} sx={heroSectionStyle.description}>
                       {paragraph}
                   </Typography>
               ))}

               <Button
                   endIcon={<ArrowForwardIcon />}
                   onClick={handleBookDemo}
                   sx={heroSectionStyle.button}
               >
                   {hero.ctaText}
               </Button>
           </Box>
       </Box>
   );
};

export default HeroSection;