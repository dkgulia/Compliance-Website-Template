"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import gdprData from '../constants/gdprData';
import legalBasisSectionStyle from '../styles/legalBasisSectionStyle';
// Import the images
import consentIcon from '../images/consent-permisson.png';
import legitimateIcon from '../images/legal-.png';
import contractIcon from '../images/contract.png';

export default function GdprLegalBasisSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "5");
    if (!section) return null;
    const features = section.features || [];

    // Array of icon images to use
    const iconImages = [consentIcon, legitimateIcon, contractIcon];

    return (
        <Box sx={legalBasisSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={legalBasisSectionStyle.headerContainer}>
                    <Typography variant="h3" sx={legalBasisSectionStyle.sectionTitle}>
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={legalBasisSectionStyle.sectionSubtitle}>
                        {section.subtitle}
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={legalBasisSectionStyle.featuresGrid}>
                    {features.map((feat, idx) => (
                        <Grid size={{ xs: 12, md: 4 }} key={idx}>
                            <Card elevation={0} sx={legalBasisSectionStyle.featureCard}>
                                <CardContent sx={legalBasisSectionStyle.cardContent}>
                                    <Box sx={legalBasisSectionStyle.iconContainer}>
                                        <Image
                                            src={iconImages[idx % iconImages.length]}
                                            alt={feat.title}
                                            width={38}
                                            height={38}
                                            style={legalBasisSectionStyle.iconImage}
                                        />
                                    </Box>

                                    <Typography variant="h6" sx={legalBasisSectionStyle.featureTitle}>
                                        {feat.title}
                                    </Typography>

                                    <Typography variant="body2" sx={legalBasisSectionStyle.featureDescription}>
                                        {feat.description}
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