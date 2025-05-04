'use client';
import React from 'react';
import { Box, Typography, Icon } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';

// Maps step index to icons
const stepIcons = [
    'dashboard', // All-in-One Security Platform
    'auto_awesome', // AI-Driven Insights & Automation
    'visibility', // Threat & Asset Visibility
    'people', // User Awareness & Policy Enforcement
];

const FeaturesSection: React.FC = () => {
    const { features } = hexafortSecureData;
    
    return (
        <Box sx={featuresSectionStyle.box}>
            <Box sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.containerBox}>
                    <Typography variant="h2" sx={featuresSectionStyle.heading}>
                        {features.title}
                    </Typography>
                    {features.subtitle && (
                        <Typography variant="body1" sx={featuresSectionStyle.subheading}>
                            {features.subtitle}
                        </Typography>
                    )}
                </Box>
                
                {features.steps.map((step, index) => (
                    <Box 
                        key={index} 
                        sx={{
                            ...featuresSectionStyle.featureStep,
                            ...(index % 2 !== 0 ? featuresSectionStyle.featureStepReverse : {})
                        }}
                    >
                        <Box sx={featuresSectionStyle.textContainer}>
                            <Box sx={featuresSectionStyle.stepNumber}>
                                {index + 1}
                            </Box>
                            <Typography variant="h3" sx={featuresSectionStyle.stepTitle}>
                                {step.heading}
                            </Typography>
                            <Typography variant="body1" sx={featuresSectionStyle.stepDescription}>
                                {step.description}
                            </Typography>
                        </Box>
                        
                        <Box sx={featuresSectionStyle.imageContainer}>
                            <Box sx={featuresSectionStyle.imagePlaceholder}>
                                <Icon sx={{ fontSize: '2rem', mr: 1 }}>{stepIcons[index]}</Icon>
                                {step.imagePrompt}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FeaturesSection;