"use client";
import React from 'react';
import { Box } from '@mui/material';
import SolutionsSection from '../SolutionMenu/components/SolutionSection';
import pageStyles from './styles/pageStyles';

function SolutionsMenu() {
  return (
    <Box sx={pageStyles.menuBox}>
      <SolutionsSection />
    </Box>
  );
}

export default SolutionsMenu;