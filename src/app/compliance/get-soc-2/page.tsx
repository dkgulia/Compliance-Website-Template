import React from 'react';
import HowItWorks from './components/HowItWorks';
import AuditTable from './components/AuditTable';
import HeroSection from './components/HeroSection';
import BookDemo from './components/BookaDemo';
import FaqSOC2 from './components/Faq';
import GettingStarted from './components/GettingStarted';

const page = () => {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			<BookDemo />
			<AuditTable />
			<GettingStarted />
			<FaqSOC2 />
		</>
	);
};

export default page;
