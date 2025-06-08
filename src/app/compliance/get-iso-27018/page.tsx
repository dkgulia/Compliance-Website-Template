'use client';

import React from 'react';
import Iso27018HeroSection from './components/Iso27018HeroSection';
import Iso27018FeaturesSection from './components/Iso27018FeaturesSection';
import Iso27018ComplianceWorkFlow from './components/Iso27018ComplianceWorkFlow';
import Iso27018FaqSection from './components/Iso27018FaqSection';
import ImplementationSteps from './components/ImplementationSteps';
import BookADemo from '../components/BookADemo';

const Page = () => {
	return (
		<>
			<Iso27018HeroSection />
			<Iso27018FeaturesSection />
			<Iso27018ComplianceWorkFlow />
			<ImplementationSteps />
			<BookADemo/>
			<Iso27018FaqSection />
		</>
	);
};

export default Page;
