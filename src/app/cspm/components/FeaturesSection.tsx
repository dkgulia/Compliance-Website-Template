'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { cspmData } from '../constants/cspmData';

const FeaturesSection: React.FC = () => {
    return (
        <Box component="section" sx={featuresSectionStyle.box}>
            <Container maxWidth="lg" sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.containerBox}>
                    <Typography variant="h2" sx={featuresSectionStyle.heading}>
                        {cspmData.features.title}
                    </Typography>
                    <Typography variant="body1" sx={featuresSectionStyle.subheading}>
                        {cspmData.features.subtitle}
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {cspmData.features.featuresList.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box sx={featuresSectionStyle.featureCard}>
                                <Box sx={featuresSectionStyle.iconContainer}>
                                    <feature.muiIcon sx={featuresSectionStyle.icon} />
                                </Box>
                                <Typography variant="h3" sx={featuresSectionStyle.featureTitle}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" sx={featuresSectionStyle.featureDescription}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturesSection;