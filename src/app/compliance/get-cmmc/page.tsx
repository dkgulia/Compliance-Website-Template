import React from 'react';
import { Metadata } from 'next';

import Head from 'next/head';
import { cmmcData } from './constants/cmmcData';
import CmmcHeroSection from './components/CmmcHeroSection';
import CmmcBenefitsSection from './components/CmmcBenefitsSection';
import CmmcPlatformWalkthrough from './components/CmmcPlatformWalkthrough';
import CmmcJourneySteps from './components/CmmcJourneySteps';
import CmmcOfferBanner from './components/CmmcOfferBanner';
import CmmcFaqSection from './components/CmmcFaqSection';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
	title: cmmcData.pageTitle,
	description: cmmcData.pageDescription.join(' '),
	keywords: cmmcData.keywords,
};

const CmmcPage = () => {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'CMMC Compliance Services',
		description: cmmcData.pageDescription.join(' '),
		brand: 'ComplianceHub',
	};

	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(structuredData)}</script>
			</Head>

			<main style={{ backgroundColor: '#000000' }}>
				<CmmcHeroSection />
				<CmmcBenefitsSection />
				<CmmcPlatformWalkthrough />
				<CmmcJourneySteps />
				<BookADemo />
				<CmmcFaqSection />
			</main>
		</>
	);
};

export default CmmcPage;
