'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const FeaturesSection: React.FC = () => {
    const { features } = controlFrameworkData.sections;

    return (
        <Box sx={featuresSectionStyle.section}>
            <Box sx={featuresSectionStyle.headerContainer}>
                <Typography sx={featuresSectionStyle.title}>
                    {features.title}
                </Typography>
                {features.subtitle && (
                    <Typography sx={featuresSectionStyle.subtitle}>
                        {features.subtitle}
                    </Typography>
                )}
            </Box>

            <Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
                {features.items.map((feature, index) => {
                    const FeatureIcon = feature.icon;

                    return (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box sx={featuresSectionStyle.card}>
                                <Box sx={featuresSectionStyle.iconContainer}>
                                    <FeatureIcon sx={featuresSectionStyle.icon} />
                                </Box>

                                <Typography sx={featuresSectionStyle.cardTitle}>
                                    {feature.title}
                                </Typography>

                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography sx={featuresSectionStyle.cardDescription}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;