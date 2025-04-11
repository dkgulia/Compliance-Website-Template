
"use client";
import React from 'react';
import { Box } from '@mui/material';
import AboutSection from './components/AboutSection';
import pageStyles from './styles/pageStyles';

const AboutMenuPage = () => {
  return (
    <Box sx={pageStyles.menuBox}>
      <AboutSection />
    </Box>
  );
};

export default AboutMenuPage;