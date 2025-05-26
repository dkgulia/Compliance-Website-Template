
import React from 'react';
import { Metadata } from 'next';
import CcpaHeroSection from './components/CcpaHeroSection';
import CcpaFeaturesSection from './components/CcpaFeaturesSection';
import CcpaImplementationFlow from './components/CcpaImplementationFlow';
import CcpaBanner from './components/CcpaBanner';
import CcpaFaqSection from './components/CcpaFaqSection';
import CcpaImagesSection from './components/CcpaImagesSection';
import CcpaRightsSection from './components/CcpaRightsSection';

export const metadata: Metadata = {
  title: 'CCPA Compliance | HexaFort',
  description:
    'Comply with the California Consumer Privacy Act (CCPA) by leveraging HexaFort automation to handle DSARs, opt-outs, and data mapping.',
  keywords: ['ccpa', 'california consumer privacy act', 'compliance', 'privacy', 'dsar', 'data protection'],
};

const Page = () => {
  return (
    <>
      <CcpaHeroSection />
      <CcpaFeaturesSection />
      <CcpaImplementationFlow />
      <CcpaImagesSection />
      <CcpaBanner />
			<CcpaRightsSection />
      <CcpaFaqSection />
    </>
  );
};

export default Page;