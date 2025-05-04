import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import SupportedFrameworksSection from './components/SupportedFrameworksSection';
import ProfessionalAssistanceSection from './components/ProfessionalAssistanceSection';
import EfficiencyEnhancementsSection from './components/EfficiencyEnhancementsSection';
import UseCasesSection from './components/UseCasesSection';
import CallToActionSection from './components/CallToActionSection';
import TeamInfoSection from './components/TeamInfoSection';
import FAQSection from './components/FAQSection';
import { cspmData } from './constants/cspmData';

export const metadata: Metadata = {
    title: cspmData.pageTitle,
    description: cspmData.pageDescription,
    keywords: cspmData.keywords.join(', '),
};

export default function CSPMPage() {
    return (
        <main style={{ backgroundColor: '#000000' }}>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <ProcessSection />
            <SupportedFrameworksSection />
            <ProfessionalAssistanceSection />
            <EfficiencyEnhancementsSection />
            <UseCasesSection />
            <CallToActionSection />
            <TeamInfoSection />
            <FAQSection />
        </main>
    );
}