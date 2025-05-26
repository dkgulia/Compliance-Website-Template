import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturedIntegrationsSection from './components/FeaturedIntegrationsSection';
import ConclusionSection from './components/ConclusionSection';

const IntegrationsPage: React.FC = () => {
    return (
        <Box component="main" sx={{ backgroundColor: "#000000" }}>
            <HeroSection />
            <IntroductionSection />
            <BenefitsSection />
            <FeaturedIntegrationsSection />
            <ConclusionSection />
        </Box>
    );
};

export default IntegrationsPage;