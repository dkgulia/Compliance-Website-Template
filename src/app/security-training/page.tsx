import React from 'react';
import { Metadata } from 'next';
import { Box } from '@mui/material';
import { securityTrainingData } from './constants/securityTrainingData';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import FaqSection from './components/FaqSection';

export const metadata: Metadata = {
  title: securityTrainingData.pageTitle,
  description: securityTrainingData.pageDescription[0],
  keywords: securityTrainingData.keywords.join(', '),
};

export default function SecurityTraining() {
  return (
    <Box>
      <HeroSection />
      <BenefitsSection />
      <InfoSection />
      <HowItWorksSection />
      <CallToActionSection />
      <FaqSection />
    </Box>
  );
}
