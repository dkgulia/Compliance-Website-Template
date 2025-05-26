import React from 'react';
import { Metadata } from 'next';
import PciDssHeroSection from './components/PciDssHeroSection';
import PciDssFeaturesSection from './components/PciDssFeaturesSection';
import PciDssBanner from './components/PciDssBanner';
import PciDssComplianceHub from './components/PciDssComplianceHub';
import PciDssWorkflowSection from './components/PciDssWorkflowSection';
import PciDssFaqSection from './components/PciDssFaqSection';
import PciDssHowHexafortHelpsStyle from './components/PciDssHowHexafortHelps';
import PciDssBookADemo from './components/PciDssBookADemo';

export const metadata: Metadata = {
	title: 'PCI DSS Compliance | Hexafort',
	description:
		'Learn how Hexafort can streamline PCI DSS compliance, secure payment card data, and protect customer trust through an automated platform.',
	keywords: [
		'pci dss compliance',
		'payment card industry data security standard',
		'credit card security',
		'data protection',
		'pci scanning',
		'merchant compliance',
		'pci dss controls',
	],
};

const Page = () => {
	return (
		<>
			<PciDssHeroSection />

			<PciDssFeaturesSection />

			<PciDssHowHexafortHelpsStyle />

			<PciDssBanner />

			<PciDssComplianceHub />

			<PciDssBookADemo />

			<PciDssWorkflowSection />

			<PciDssFaqSection />
		</>
	);
};

export default Page;
