'use client'

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import overviewSectionStyle from '../styles/overviewSectionStyle';
import hexafortSecureData from '../constants/hexafortSecureData';

const OverviewSection = () => {
    const { overview, keyFeatures } = hexafortSecureData;

    return (
        <Box component="section" sx={overviewSectionStyle.section}>
            <Container sx={overviewSectionStyle.container}>
                <Typography variant="h2" sx={overviewSectionStyle.title}>
                    {overview.title}
                </Typography>

                <Box sx={overviewSectionStyle.descriptionContainer}>
                    {overview.description.map((paragraph, index) => (
                        <Typography key={index} sx={overviewSectionStyle.paragraph}>
                            {paragraph}
                        </Typography>
                    ))}
                </Box>

                <Box sx={overviewSectionStyle.keyFeaturesContainer}>
                    <Typography variant="h3" sx={overviewSectionStyle.keyFeaturesTitle}>
                        {keyFeatures.title}
                    </Typography>

                    <Box sx={overviewSectionStyle.featuresGrid}>
                        {keyFeatures.features.map((feature, index) => (
                            <Box key={index} sx={overviewSectionStyle.featureCard}>
                                <Typography variant="h6" sx={overviewSectionStyle.featureTitle}>
                                    {feature.title}
                                </Typography>
                                <Typography sx={overviewSectionStyle.featureDescription}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OverviewSection;