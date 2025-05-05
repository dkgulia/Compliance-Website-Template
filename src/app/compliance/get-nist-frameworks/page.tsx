import { Metadata } from 'next';
import NistHeroSection from './components/NistHeroSection';
import NistFeaturesSection from './components/NistFeaturesSection';
import NistBanner from './components/NistBanner';
import NistComplianceHub from './components/NistComplianceHub';
import NistComplianceWorkFlow from './components/NistComplianceWorkFlow';
import NistFaqSection from './components/NistFaqSection';

export const metadata: Metadata = {
  title: 'NIST Cybersecurity Framework | HexaFort',
  description: 'Implement and automate NIST compliance with continuous monitoring, policy management, and vendor oversight.',
  keywords: 'NIST compliance, cybersecurity framework, risk management, continuous monitoring, vendor oversight',
};

const Page = () => {
  return (
    <>
      <NistHeroSection />
      <NistFeaturesSection />
      <NistComplianceHub />
      <NistComplianceWorkFlow />
      <NistBanner />
      <NistFaqSection />
    </>
  );
};

export default Page;