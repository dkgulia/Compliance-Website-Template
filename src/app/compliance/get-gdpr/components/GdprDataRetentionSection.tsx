"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import gdprData from '../constants/gdprData';
import dataRetentionSectionStyle from '../styles/dataRetentionSectionStyle';
import minimizeIcon from '../images/minimize-data.png';
import retentionIcon from '../images/retention-polices.png';

export default function GdprDataRetentionSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "6");
    if (!section) return null;
    const features = section.features || [];
    const iconImages = [minimizeIcon, retentionIcon];

    return (
        <Box sx={dataRetentionSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={dataRetentionSectionStyle.headerContainer}>
                    <Typography variant="h3" sx={dataRetentionSectionStyle.sectionTitle}>
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={dataRetentionSectionStyle.sectionSubtitle}>
                        {section.subtitle}
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={dataRetentionSectionStyle.featuresGrid}>
                    {features.map((feat, idx) => (
                        <Grid size={{ xs: 12, md: 6 }} key={idx}>
                            <Card elevation={0} sx={dataRetentionSectionStyle.featureCard}>
                                <CardContent sx={dataRetentionSectionStyle.cardContent}>
                                    <Box sx={dataRetentionSectionStyle.iconContainer}>
                                        <Image
                                            src={iconImages[idx % iconImages.length]}
                                            alt={feat.title}
                                            width={38}
                                            height={38}
                                            style={dataRetentionSectionStyle.iconImage}
                                        />
                                    </Box>

                                    <Typography variant="h6" sx={dataRetentionSectionStyle.featureTitle}>
                                        {feat.title}
                                    </Typography>

                                    <Typography variant="body2" sx={dataRetentionSectionStyle.featureDescription}>
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