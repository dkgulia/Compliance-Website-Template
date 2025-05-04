'use client';
import React from 'react';
import { Box, Typography, Button, Grid, FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import callToActionStyle from '../styles/callToActionStyle';
import { riskManagementData } from '../constants/riskManagementData';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';

const CallToAction: React.FC = () => {
    const ctaContent = riskManagementData.sections.find(
        (section) => section.Sno === '5' && section.blockType === 'Call to Action'
    );

    if (!ctaContent) return null;

    return (
        <Box sx={callToActionStyle.container}>
            <Box sx={callToActionStyle.innerBox}>
                {/* Content Section */}
                <Box sx={callToActionStyle.contentBox}>
                    <Typography variant="h2" sx={callToActionStyle.heading}>
                        {ctaContent.content.title}
                    </Typography>
                    
                    <Typography sx={callToActionStyle.subtitle}>
                        {ctaContent.content.subtitle}
                    </Typography>
                    
                    <Typography sx={callToActionStyle.description}>
                        {ctaContent.content.description}
                    </Typography>
                </Box>

                {/* Form Section - Reusing Hero Form */}
                <Box sx={callToActionStyle.formBox}>
                    <Typography sx={callToActionStyle.formTitle}>Book Your Demo Now</Typography>
                    <EnhancedHeroSectionForm />
                </Box>
            </Box>
        </Box>
    );
};

export default CallToAction;