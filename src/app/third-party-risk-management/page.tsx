import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import AIQuestionnaireSection from './components/AIQuestionnaireSection';
import ContinuousMonitoringSection from './components/ContinuousMonitoringSection';
import PlatformHighlightsSection from './components/PlatformHighlightsSection';
import PitfallsSection from './components/PitfallsSection';
import CallToActionSection from '../components/CallToActionSection';

import FAQSection from './components/FAQSection';
import { thirdPartyRiskManagementData } from './constants/thirdPartyRiskManagementData';

export const metadata: Metadata = {
    title: thirdPartyRiskManagementData.pageTitle,
    description: thirdPartyRiskManagementData.pageDescription,
    keywords: thirdPartyRiskManagementData.keywords.join(', '),
};

export default function ThirdPartyRiskManagementPage() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <AIQuestionnaireSection />
            <ProcessSection />
            <PlatformHighlightsSection />
            <ContinuousMonitoringSection />
            <PitfallsSection />
             <CallToActionSection/>
            <FAQSection />
        </>
    );
}