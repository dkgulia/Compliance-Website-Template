import React from 'react';
import { Metadata } from 'next';
import dpdpData from './constants/dpdpData';
import DpdpHeroSection from './components/DpdpHeroSection';
import DpdpBenefitsSection from './components/DpdpBenefitsSection';
import DpdpMetricsSection from './components/DpdpMetricsSection';
import DpdpScreenshotsSection from './components/DpdpScreenshotsSection';
import DpdpProcessSection from './components/DpdpProcessSection';
import DpdpCtaSection from './components/DpdpCtaSection';
import DpdpFaqSection from './components/DpdpFaqSection';
import DpdpComplianceHub from './components/DpdpComplianceHub';
import DpdpHowHexafortHelps from './components/DpdpHowHexafortHelps';
import DpdpBookDemo from './components/DpdpBookDemo';
import DpdpBanner from './components/DpdpBanner';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
	title: dpdpData.pageTitle,
	description: dpdpData.pageDescription[0],
	keywords: dpdpData.keywords,
};

export default function Page() {
	return (
		<>
			<DpdpHeroSection />
			<DpdpBenefitsSection />
			<DpdpHowHexafortHelps />
			<DpdpBanner />
			<DpdpComplianceHub />
			<DpdpMetricsSection />
			<DpdpProcessSection />
			<DpdpScreenshotsSection />
			<BookADemo />
			<DpdpFaqSection />
			<DpdpCtaSection />
		</>
	);
}
