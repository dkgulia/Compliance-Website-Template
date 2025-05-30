'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import integrationsData from '../constants/integrationsData';

const BenefitsSection: React.FC = () => {
   const { benefits } = integrationsData;

   return (
       <Box sx={benefitsSectionStyle.section}>
           <Box sx={benefitsSectionStyle.headerContainer}>
               <Typography sx={benefitsSectionStyle.tagline}>
                   KEY BENEFITS
               </Typography>

               <Typography sx={benefitsSectionStyle.title}>
                   {benefits.title}
               </Typography>

               <Typography sx={benefitsSectionStyle.subtitle}>
                   {benefits.description}
               </Typography>
           </Box>

           <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
               {benefits.items.map((benefit, index) => {
                   const BenefitIcon = benefit.icon;

                   return (
                       <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                           <Box sx={benefitsSectionStyle.card}>
                               <Box sx={benefitsSectionStyle.iconContainer}>
                                   <BenefitIcon sx={benefitsSectionStyle.icon} />
                               </Box>

                               <Typography sx={benefitsSectionStyle.cardTitle}>
                                   {benefit.title}
                               </Typography>

                               <Typography sx={benefitsSectionStyle.cardDescription}>
                                   {benefit.description}
                               </Typography>
                           </Box>
                       </Grid>
                   );
               })}
           </Grid>
       </Box>
   );
};

export default BenefitsSection;