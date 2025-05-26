import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

const ControlFrameworkPage: React.FC = () => {
    return (
        <Box component="main" sx={{ backgroundColor: "#000000" }}>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <ProcessSection />
            <CTASection />
            <FAQSection />
        </Box>
    );
};

export default ControlFrameworkPage;