import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/heroSection';
import ChallengesSection from './components/challengesSection';
import SolutionsSection from './components/solutionsSection';
import AIFeaturesSection from './components/aiFeaturesSection';
import ImpactSection from './components/impactSection';
import { complianceData } from './constant/dataFile';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
	title: 'ComplianceHub - Revolutionizing GRC for Sustainable Growth',
	description: complianceData.company.description,
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<ChallengesSection />
			<SolutionsSection />
			<AIFeaturesSection />
			<ImpactSection />
			<CallToActionSection/>
		</>
	);
}
