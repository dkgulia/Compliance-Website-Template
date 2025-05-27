import React from 'react';
import { Metadata } from 'next';
import { Box } from '@mui/material';
import { iso20000Data } from './constants/iso20000Data';
import Iso20000HeroSection from './components/Iso20000HeroSection';
import Iso20000ImageRightTextLeftSection from './components/Iso20000ImageRightTextLeftSection';
import Iso20000FeaturesSection from './components/Iso20000FeaturesSection';
import Iso20000ImplementationStepsSection from './components/Iso20000ImplementationStepsSection';
import Iso20000CompareWith9001Section from './components/Iso20000CompareWith9001Section';
import Iso20000CtaOneSection from './components/Iso20000CtaOneSection';
import Iso20000FaqSection from './components/Iso20000FaqSection';

export const metadata: Metadata = {
	title: iso20000Data.pageTitle,
	description: iso20000Data.pageDescription.join(' '),
	keywords: iso20000Data.keywords,
};

const Page = () => {
	return (
		<Box sx={{ backgroundColor: '#000000', marginTop: '0rem', marginX: { xs: '0rem', sm: '0rem' } }}>
			<Iso20000HeroSection />
			<Iso20000FeaturesSection />
			<Iso20000ImageRightTextLeftSection />
			<Iso20000CompareWith9001Section />
			<Iso20000CtaOneSection />
			<Iso20000FaqSection />
		</Box>
	);
};

export default Page;
