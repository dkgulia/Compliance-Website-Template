import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import FaqSection from './components/FaqSection';
import { securityTrainingData } from './constants/securityTrainingData';

export const metadata: Metadata = {
	title: securityTrainingData.pageTitle,
	description: securityTrainingData.pageDescription[0],
	keywords: securityTrainingData.keywords.join(', '),
};

export default function SecurityTraining() {
	return (
		<main
			style={{
				border: 'none',
				borderTop: 'none',
				borderBottom: 'none',
				boxShadow: 'none',
				outline: 'none',
			}}
		>
			<HeroSection />
			<BenefitsSection />
			<InfoSection />
			<HowItWorksSection />
			<CallToActionSection />
			<FaqSection />
		</main>
	);
}
