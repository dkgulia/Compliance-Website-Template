import { Metadata } from 'next';
import HipaaHeroSection from './components/HipaaHeroSection';
import HipaaFeaturesSection from './components/HipaaFeatureSection';
import HipaaBanner from './components/HipaaBanner';
import HipaaComplianceHub from './components/HipaaComplianceHub';
import FaqHipaa from './components/HipaaFaqSection';
import HipaaComplianceWorkFlow from './components/HipaaComplianceWorkflow';
import HIPAACOST from './components/HipaaCost';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
	title: 'HIPAA Compliance | Simplified Solutions',
	description: 'Achieve HIPAA compliance with automated monitoring, policy management, and vendor oversight.',
	keywords: 'HIPAA compliance, healthcare data security, compliance automation, risk management, vendor oversight',
};

const Page = () => {
	return (
		<>
			<HipaaHeroSection />
			<HipaaFeaturesSection/>
			<HipaaBanner/>
			<HipaaComplianceHub/>
			<HipaaComplianceWorkFlow/>
			<HIPAACOST/>
			<BookADemo/>
			<FaqHipaa/>

		</>
	);
};

export default Page;
