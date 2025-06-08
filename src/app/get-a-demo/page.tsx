import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import { Metadata } from 'next';
import TrustedCompaniesSection from './components/TrustedCompaniesSection';
import FAQSection from './components/FAQSection';
import TestimonialSection from './components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
	title: 'Compliance | HexaFort',
	description:
		'A comprehensive Governance, Risk, and Compliance tool designed to streamline compliance tracking and enhance risk management.',
	keywords:
		'compliance, governance, risk, compliance tool, compliance automation, compliance tracking, risk management ',
};

const Page = () => {
	return (
		<>
			<main>
				<HeroSection />
				<TrustedCompaniesSection/>
				<FAQSection/>
				<TestimonialSection/>
				<CallToActionSection/>

			</main>
		</>
	);
};

export default Page;
