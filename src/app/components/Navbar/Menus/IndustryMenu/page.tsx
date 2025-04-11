'use client';

import React from 'react';
import { Box } from '@mui/material';
import FeaturedSection from './components/FeaturedSection';
import pageStyles from './styles/pageStyles';



const IndustryMenu = () =>{
  return(
    <Box sx={pageStyles.menuBox}>
      <FeaturedSection />
    </Box>
  );
};

export default IndustryMenu;