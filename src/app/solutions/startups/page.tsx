
import BenefitsSection from './components/benefitsSection';
import ComplianceFrameworks from './components/complianceFrameworks';
//import CostBreakdown from './components/costBreakdown';
import HeroSection from './components/heroSection';
import ImplementationMethodology from './components/implementationMethodology';
import ImplementationTimeline from './components/ImplementationTimeline';
import PackageOverview from './components/packageOverview';

const StartupsPage = () => {
  return (
    <main>
      <HeroSection />
      <PackageOverview />
      <ComplianceFrameworks/>
      <ImplementationTimeline/>
      <BenefitsSection/>
      {/* <CostBreakdown/> */}
      <ImplementationMethodology/>
    </main>
  );
};

export default StartupsPage;