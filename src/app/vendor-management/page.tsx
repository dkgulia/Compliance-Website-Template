import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import AIQuestionnaireSection from './components/AIQuestionnaireSection';
import ContinuousMonitoringSection from './components/ContinuousMonitoringSection';
import PlatformHighlightsSection from './components/PlatformHighlightsSection';
import PitfallsSection from './components/PitfallsSection';
import CallToActionSection from './components/CallToActionSection';
import OfferBanner from './components/OfferBanner';
import FAQSection from './components/FAQSection';
import { vendorManagementData } from './constants/vendorManagementData';

export const metadata: Metadata = {
    title: vendorManagementData.pageTitle,
    description: vendorManagementData.pageDescription,
    keywords: vendorManagementData.keywords.join(', '),
};

export default function VendorManagementPage() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <ProcessSection />
            <AIQuestionnaireSection />
            <ContinuousMonitoringSection />
            <PlatformHighlightsSection />
            <PitfallsSection />
            <OfferBanner />
            <CallToActionSection />
            <FAQSection />
        </>
    );
}