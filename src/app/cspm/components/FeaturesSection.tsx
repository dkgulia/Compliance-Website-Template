'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { cspmData } from '../constants/cspmData';

const FeaturesSection: React.FC = () => {
    return (
        <Box component="section" sx={featuresSectionStyle.box}>
            <Container sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.containerBox}>
                    <Typography variant="h2" sx={featuresSectionStyle.heading}>
                        {cspmData.features.title}
                    </Typography>
                    <Typography variant="body1" sx={featuresSectionStyle.subheading}>
                        {cspmData.features.subtitle}
                    </Typography>
                </Box>
                
                <Box sx={featuresSectionStyle.featuresGrid}>
                    {cspmData.features.featuresList.map((feature, index) => (
                        <Box key={index} sx={featuresSectionStyle.featureCard}>
                            <Box sx={featuresSectionStyle.iconContainer}>
                                <feature.muiIcon sx={featuresSectionStyle.icon} className="feature-icon" />
                            </Box>
                            <Box sx={featuresSectionStyle.typography.container}>
                                <Typography variant="h3" sx={featuresSectionStyle.featureTitle}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" sx={featuresSectionStyle.featureDescription}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturesSection;