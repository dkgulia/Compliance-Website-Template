'use client'

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import overviewSectionStyle from '../styles/overviewSectionStyle';
import hexafortSecureData from '../constants/hexafortSecureData';

const OverviewSection = () => {
   const { overview, keyFeatures } = hexafortSecureData;

   return (
       <Box sx={overviewSectionStyle.section}>
           <Box sx={overviewSectionStyle.headerContainer}>
               <Typography sx={overviewSectionStyle.tagline}>
                   PLATFORM OVERVIEW
               </Typography>

               <Typography sx={overviewSectionStyle.title}>
                   {overview.title}
               </Typography>

               {overview.description.map((paragraph, index) => (
                   <Typography key={index} sx={overviewSectionStyle.description}>
                       {paragraph}
                   </Typography>
               ))}
           </Box>

           <Box sx={overviewSectionStyle.featuresHeaderContainer}>
            
               <Typography sx={overviewSectionStyle.featuresTitle}>
                   {keyFeatures.title}
               </Typography>
           </Box>

           <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
               {keyFeatures.features.map((feature, index) => (
                   <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                       <Box sx={overviewSectionStyle.card}>
                           <Typography sx={overviewSectionStyle.cardTitle}>
                               {feature.title}
                           </Typography>
                           <Typography sx={overviewSectionStyle.cardDescription}>
                               {feature.description}
                           </Typography>
                       </Box>
                   </Grid>
               ))}
           </Grid>
       </Box>
   );
};

export default OverviewSection;