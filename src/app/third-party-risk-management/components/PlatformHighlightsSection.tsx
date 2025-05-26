'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import platformHighlightsStyle from '../styles/platformHighlightsStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

const PlatformHighlightsSection: React.FC = () => {
    const { platformHighlights } = thirdPartyRiskManagementData;

    return (
        <Box component="section" sx={platformHighlightsStyle.section}>
            <Container sx={platformHighlightsStyle.container}>
                <Box sx={platformHighlightsStyle.header}>
                    <Typography variant="h2" sx={platformHighlightsStyle.title}>
                        {platformHighlights.title}
                    </Typography>
                    <Typography variant="body1" sx={platformHighlightsStyle.subtitle}>
                        {platformHighlights.subtitle}
                    </Typography>
                </Box>

                <Box sx={platformHighlightsStyle.grid}>
                    {platformHighlights.features.map((feature, index) => (
                        <Box key={index} sx={platformHighlightsStyle.feature}>
                            <Box sx={platformHighlightsStyle.iconContainer}>
                                <feature.muiIcon sx={platformHighlightsStyle.icon} />
                            </Box>
                            <Typography variant="h6" sx={platformHighlightsStyle.featureTitle}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" sx={platformHighlightsStyle.featureDescription}>
                                {feature.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default PlatformHighlightsSection;