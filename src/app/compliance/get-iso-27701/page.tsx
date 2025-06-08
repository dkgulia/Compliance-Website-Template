import React from 'react';
import { Metadata } from 'next';
import Iso27701HeroSection from './components/Iso27701HeroSection';
import Iso27701FeaturesSection from './components/Iso27701FeaturesSection';
import Iso27701StepsSection from './components/Iso27701StepsSection';
import Iso27701ExtendedContentSection from './components/Iso27701ExtendedContentSection';
import Iso27701PitfallsSection from './components/Iso27701PitfallsSection';
import Iso27701RealWorldSection from './components/Iso27701RealWorldSection';
import Iso27701ComparisonSection from './components/Iso27701ComparisonSection';
import Iso27701CtaSection from './components/Iso27701CtaSection';
import Iso27701FaqSection from './components/Iso27701FaqSection';
import iso27701Data from './constants/iso27701Data';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
	title: 'ISO 27701 | Hexafort',
	description:
		'Explore how Hexafort can help you extend your ISMS with ISO 27701 for robust data privacy and security compliance.',
	keywords: iso27701Data.keywords,
};

const Page = () => {
	return (
		<>
			{/* Hero */}
			<Iso27701HeroSection />

			{/* Move Features right after Hero */}
			<Iso27701FeaturesSection />

			{/* Then Steps */}
			<Iso27701StepsSection />

			{/* Extended Content */}
			<Iso27701ExtendedContentSection />

			{/* Pitfalls */}
			<Iso27701PitfallsSection />

			{/* Real-World */}
			<Iso27701RealWorldSection />

			{/* CTA */}
			<BookADemo/>

			{/* Comparison near the bottom */}
			<Iso27701ComparisonSection />

			{/* FAQs */}
			<Iso27701FaqSection />
		</>
	);
};

export default Page;

