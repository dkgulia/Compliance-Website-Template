import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import WhyUs from './components/WhyUs';
import FeaturesGRC from './components/FeaturesGRC';
import Compliance from './components/Compliance';
import Testimonials from './components/Testimonials';
import BookADemo from './components/BookADemo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Compliance | ComplianceHub',
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
				<PainPoints />
				<WhyUs />
				<BookADemo />
				<Compliance />
				<FeaturesGRC />
				<Testimonials />
			</main>
		</>
	);
};

export default Page;
