import React from 'react';
import { Metadata } from 'next';
import { iso22301Data } from './constants/iso22301Data';
import ISO22301HeroSection from './components/ISO22301HeroSection';
import ISO22301WhyItMatters from './components/ISO22301WhyItMatters';
import ISO22301CoreElements from './components/ISO22301CoreElements';
import ISO22301FaqSection from './components/ISO22301FaqSection';
import ISO22301SimpleInfoBlock from './components/ISO22301SimpleInfoBlock';
import ISO22301StepsProcessBlock from './components/ISO22301StepsProcessBlock';
import ISO22301ListBlock from './components/ISO22301ListBlock';
import ISO22301FeaturesBlock from './components/ISO22301FeaturesBlock';
import ISO22301CertificationJourney from './components/ISO22301CertificationJourney';
import pageStyles from './styles/pageStyle';
import { Box } from '@mui/material';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
	title: 'ISO 22301 – Building Organizational Resilience | HexaFort',
	description:
		'Discover how HexaFort can help your business implement ISO 22301:2019 for business continuity management. Stay operational through disruptive incidents.',
	keywords: iso22301Data.keywords,
};

const Page = () => {
	return (
		<>
			<Box sx={pageStyles.root}>
				<ISO22301HeroSection />
				<ISO22301WhyItMatters />
				<ISO22301SimpleInfoBlock sectionId="1" />
				<ISO22301CoreElements />
				<ISO22301StepsProcessBlock />
				<ISO22301ListBlock sectionId="6" />
				<ISO22301FeaturesBlock />
				<ISO22301CertificationJourney />
				<BookADemo />
				<ISO22301FaqSection />
			</Box>
		</>
	);
};

export default Page;
