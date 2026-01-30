import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import FeaturesSection from './components/FeaturesSection';
import PlatformFeaturesCarousel from './components/PlatformFeaturesCarousel';
import { platformData } from './constants/platformData';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
    title: platformData.pageTitle,
    description: platformData.pageDescription,
    keywords: platformData.keywords.join(', '),
};

export default function ComplianceHubSecurePage() {
    return (
        <>
            <HeroSection />
            <OverviewSection />
            <FeaturesSection />
            <CallToActionSection/>
            <PlatformFeaturesCarousel
                title="Explore ComplianceHub Security Platform"
                subtitle="Discover our full suite of security solutions designed to protect your business"
                features={platformData.platformFeatures}
            />
        </>
    );
}