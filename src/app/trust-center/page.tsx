'use client';

import React from 'react';
import { Container, useTheme } from '@mui/material';
import Script from 'next/script';

import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import WorkflowSection from './components/WorkflowSection';
import InfoSection1 from './components/InfoSection1';
import FeaturesSection from './components/FeaturesSection';
import PitfallsSection from './components/PitfallsSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import CallToActionSection from '../components/CallToActionSection';

import { trustCenterPageData } from './constants/trustCenterPageData';

const TrustCenterPage = () => {
  const theme = useTheme();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ComplianceHub Trust Center',
    description: trustCenterPageData.pageDescription.join(' '),
    brand: 'ComplianceHub',
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <main style={{ backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <HeroSection />
          <BenefitsSection />
          <WorkflowSection />
          <InfoSection1 />
          <FeaturesSection />
          <PitfallsSection />
          <CallToActionSection />
          <FaqSection />
        </Container>
      </main>
    </>
  );
};

export default TrustCenterPage;