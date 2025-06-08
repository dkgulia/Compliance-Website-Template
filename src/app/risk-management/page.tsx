'use client';

import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import KeyCapabilitiesLadder from './components/KeyCapabilitiesLadder';
import PlatformWalkthrough from './components/PlatformWalkthrough';
import QuickStartOnboarding from './components/QuickStartOnboarding';
import CallToActionSection from '../components/CallToActionSection';
import OfferBanner from './components/OfferBanner';
import FaqSection from './components/FaqSection';

const RiskManagementPage = () => {
    return (
        <Box>
            <HeroSection />
            <KeyCapabilitiesLadder />
            <QuickStartOnboarding />
            <PlatformWalkthrough />
            <OfferBanner />
            <CallToActionSection />
            <FaqSection />
        </Box>
    );
};

export default RiskManagementPage;