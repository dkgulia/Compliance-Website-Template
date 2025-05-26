"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Security, Policy, Star } from '@mui/icons-material';
import gdprData from '../constants/gdprData';
import whyMattersSectionStyle from '../styles/whyMattersSectionStyle';

export default function GdprWhyMattersSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "2");
    if (!section) return null;

    const features = section.features || [];

    const iconMap: Record<string, React.ReactElement> = {
        Security: <Security sx={whyMattersSectionStyle.icon} />,
        Policy: <Policy sx={whyMattersSectionStyle.icon} />,
        Star: <Star sx={whyMattersSectionStyle.icon} />,
    };

    return (
        <Box sx={whyMattersSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={whyMattersSectionStyle.headerContainer}>
                    <Typography variant="h3" sx={whyMattersSectionStyle.sectionTitle}>
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={whyMattersSectionStyle.sectionSubtitle}>
                        {section.subtitle}
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={whyMattersSectionStyle.featuresGrid}>
                    {features.map((feature, idx) => (
                        <Grid size={{ xs: 12, md: 4 }} key={idx}>
                            <Card elevation={0} sx={whyMattersSectionStyle.featureCard}>
                                <CardContent sx={whyMattersSectionStyle.cardContent}>
                                    <Box sx={whyMattersSectionStyle.iconContainer}>
                                        {iconMap[feature.muiIcon] || <Security sx={whyMattersSectionStyle.icon} />}
                                    </Box>

                                    <Typography variant="h6" sx={whyMattersSectionStyle.featureTitle}>
                                        {feature.title}
                                    </Typography>

                                    <Typography variant="body2" sx={whyMattersSectionStyle.featureDescription}>
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}