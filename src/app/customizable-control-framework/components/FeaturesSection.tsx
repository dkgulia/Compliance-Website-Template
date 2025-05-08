'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const FeaturesSection: React.FC = () => {
    const { features } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={featuresSectionStyle.section}>
            <Container maxWidth="lg" sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.header}>
                    <Typography variant="h2" sx={featuresSectionStyle.title}>
                        {features.title}
                    </Typography>

                    {features.subtitle && (
                        <Typography sx={featuresSectionStyle.subtitle}>
                            {features.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={featuresSectionStyle.featuresGrid}>
                    {features.items.map((feature, index) => {
                        const FeatureIcon = feature.icon;

                        return (
                            <Box key={index} sx={featuresSectionStyle.featureCard}>
                                <Box sx={featuresSectionStyle.iconContainer}>
                                    <FeatureIcon sx={featuresSectionStyle.featureIcon} />
                                </Box>

                                <Typography sx={featuresSectionStyle.featureTitle}>
                                    {feature.title}
                                </Typography>

                                <Typography sx={featuresSectionStyle.featureDescription}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturesSection;