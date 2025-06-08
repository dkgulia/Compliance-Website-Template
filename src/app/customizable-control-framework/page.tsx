import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';

const ControlFrameworkPage: React.FC = () => {
    return (
        <Box component="main" sx={{ backgroundColor: "#000000" }}>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <ProcessSection />
            <CallToActionSection />
            <FAQSection />
        </Box>
    );
};

export default ControlFrameworkPage;