'use client';

import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

const AutomatedEvidenceCollectionPage: React.FC = () => {
    return (
        <Box component="main" sx={{ backgroundColor: theme => theme.palette.background.default }}>
            <HeroSection />
            <BenefitsSection />
            <ProcessSection />
            <CTASection />
            <FAQSection />
        </Box>
    );
};

export default AutomatedEvidenceCollectionPage;