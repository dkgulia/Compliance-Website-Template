import React from 'react';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import FeaturesSection from './components/FeaturesSection';
import PlatformFeaturesCarousel from './components/PlatformFeaturesCarousel';
import { hexafortSecureData } from './constants/hexafortSecureData';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
    title: hexafortSecureData.pageTitle,
    description: hexafortSecureData.pageDescription,
    keywords: hexafortSecureData.keywords.join(', '),
};

export default function HexafortSecurePage() {
    return (
        <>
            <HeroSection />
            <OverviewSection />
            <FeaturesSection />
            <CallToActionSection/>
            <PlatformFeaturesCarousel
                title="Explore HexaFort Security Platform"
                subtitle="Discover our full suite of security solutions designed to protect your business"
                features={hexafortSecureData.platformFeatures}
            />
        </>
    );
}