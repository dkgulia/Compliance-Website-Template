'use client';
import React from 'react';
import { Box } from '@mui/material';
import ProductHeroSection from './components/ProductHeroSection';
import TrustedCompaniesSection from './components/TrustedCompaniesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';

const GetAProductDemoPage = () => {
	return (
		<Box component="div">
			<ProductHeroSection />
			<TrustedCompaniesSection />
			<TestimonialSection />
			<FAQSection />
		</Box>
	);
};

export default GetAProductDemoPage;