'use client';

import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';

const AutomatedEvidenceCollectionPage: React.FC = () => {
	return (
		<Box component="main" sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
			<HeroSection />
			<BenefitsSection />
			<ProcessSection />
			<CallToActionSection />
			<FAQSection />
		</Box>
	);
};

export default AutomatedEvidenceCollectionPage;
