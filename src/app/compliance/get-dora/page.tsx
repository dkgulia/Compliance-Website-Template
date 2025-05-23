

import React from 'react';
import { Metadata } from 'next';
import { Box } from '@mui/material';
import { complianceData } from './constants/doraData';
import DoraHeroSection from './components/DoraHeroSection';
import DoraKeyBenefits from './components/DoraKeyBenefits';
import DoraScope from './components/DoraScope';
import DoraHowWeHelp from './components/DoraHowWeHelp';
import DoraRoadmap from './components/DoraRoadmap';
import DoraFeaturesSection from './components/DoraFeaturesSection';
import DoraBookNowBanner from './components/DoraBookNowBanner';
import DoraFaqSection from './components/DoraFaqSection';
import TalkToAnExpertDora from './components/TalkToAnExpertDora';
import DoraFivePillars from './components/DoraFivePillars';

export const metadata: Metadata = {
	title: complianceData.pageTitle,
	description: complianceData.metaDescription,
	keywords: complianceData.keywords,
};

export default function Page() {
	return (
		<Box>
			<DoraHeroSection />
			<DoraScope />
			<DoraKeyBenefits />
                        <DoraFivePillars/>
			<DoraHowWeHelp />
			<DoraRoadmap />
			<DoraFeaturesSection />
			<DoraBookNowBanner />
			<DoraFaqSection />
			<TalkToAnExpertDora />
		</Box>
	);
}
