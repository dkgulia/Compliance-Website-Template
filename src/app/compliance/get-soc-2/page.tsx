import React from 'react';
import HowItWorks from './components/HowItWorks';
import AuditTable from './components/AuditTable';
import HeroSection from './components/HeroSection';
import FaqSOC2 from './components/Faq';
import GettingStarted from './components/GettingStarted';
import BookADemo from '../components/BookADemo';

const page = () => {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			<AuditTable />
			<GettingStarted />
			<BookADemo/>
			<FaqSOC2 />
		</>
	);
};

export default page;
