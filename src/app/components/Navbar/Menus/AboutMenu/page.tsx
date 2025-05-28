"use client";
import React from 'react';
import { Box } from '@mui/material';
import AboutSection from './components/AboutSection';
import pageStyles from './styles/pageStyles';

interface AboutMenuPageProps {
	onClose?: () => void;
}

const AboutMenuPage: React.FC<AboutMenuPageProps> = ({ onClose }) => {
  return (
    <Box sx={pageStyles.menuBox}>
      <AboutSection onClose={onClose} />
    </Box>
  );
};

export default AboutMenuPage;