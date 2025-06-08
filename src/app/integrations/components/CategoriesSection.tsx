'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import categoriesStyle from '../styles/categoriesStyle';
import integrationsData from '../constants/integrationsData';

const CategoriesSection: React.FC = () => {
   const { categories } = integrationsData;

   if (!categories) {
       return null;
   }

   return (
       <Box sx={categoriesStyle.section}>
           <Box sx={categoriesStyle.headerContainer}>
               <Typography sx={categoriesStyle.tagline}>
                   INTEGRATION TYPES
               </Typography>

               <Typography sx={categoriesStyle.title}>
                   Integration Categories
               </Typography>

               <Typography sx={categoriesStyle.subtitle}>
                   Comprehensive connectivity across all your security tools
               </Typography>
           </Box>

           <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
               {categories.map((category, index) => {
                   const CategoryIcon = category.icon;

                   return (
                       <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                           <Box sx={categoriesStyle.card}>
                               <Box sx={categoriesStyle.iconContainer}>
                                   <CategoryIcon sx={categoriesStyle.icon} />
                               </Box>

                               <Typography sx={categoriesStyle.cardTitle}>
                                   {category.title}
                               </Typography>

                               <Typography sx={categoriesStyle.cardDescription}>
                                   {category.description}
                               </Typography>
                           </Box>
                       </Grid>
                   );
               })}
           </Grid>
       </Box>
   );
};

export default CategoriesSection;