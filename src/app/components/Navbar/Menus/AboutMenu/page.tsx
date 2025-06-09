"use client";
import React from 'react';
import { Box } from '@mui/material';
import AboutSection from './components/AboutSection';
import pageStyles from './styles/pageStyles';


const AboutMenuContent: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <Box sx={pageStyles.menuBox}>
      <AboutSection onClose={onClose} />
    </Box>
  );
};

const AboutMenuPage = () => {
  return <AboutMenuContent />;
};

export default AboutMenuPage;