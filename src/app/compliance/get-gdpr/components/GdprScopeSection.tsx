'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import gdprData from '../constants/gdprData';
import scopeSectionStyle from '../styles/scopeSectionStyle';
import gdprGlobeImage from '../images/create-a-minimalist-digital-illustration-represent.png';

interface SectionContent {
    heading?: string;
    subheading?: string;
    imageIdea?: string;
}

interface SectionData {
    Sno: string;
    title: string;
    subtitle: string;
    designGuidelines?: string;
    contentType?: string;
    interactiveElement?: string;
    content?: SectionContent;
    features?: any[];
}

export default function GdprScopeSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === '3') as SectionData | undefined;
    if (!section) return null;

    const content = section.content || {};

    return (
        <Box sx={scopeSectionStyle.container}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={scopeSectionStyle.imageContainer}>
                            <Box sx={scopeSectionStyle.imageWrapper}>
                                <Image
                                    src={gdprGlobeImage}
                                    alt="Global GDPR Impact"
                                    style={scopeSectionStyle.imageStyle}
                                    width={280}
                                    height={280}
                                    priority
                                />
                            </Box>
        
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={scopeSectionStyle.contentContainer}>
                            <Typography variant="h3" sx={scopeSectionStyle.sectionTitle}>
                                {section.title}
                            </Typography>

                            <Typography variant="subtitle1" sx={scopeSectionStyle.sectionSubtitle}>
                                {section.subtitle}
                            </Typography>

                            {content.heading && (
                                <Typography variant="h4" sx={scopeSectionStyle.contentHeading}>
                                    {content.heading}
                                </Typography>
                            )}

                            {content.subheading && (
                                <Typography variant="body1" sx={scopeSectionStyle.contentDescription}>
                                    {content.subheading}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={scopeSectionStyle.applicabilityContainer}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={scopeSectionStyle.applicabilityCard}>
                                <CardContent sx={scopeSectionStyle.cardContent}>
                                    <Typography variant="h6" sx={scopeSectionStyle.applicabilityTitle}>
                                        EU Organizations
                                    </Typography>
                                    <Typography variant="body2" sx={scopeSectionStyle.applicabilityText}>
                                        Any organization established in the EU, regardless of where the data processing takes place
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={scopeSectionStyle.applicabilityCard}>
                                <CardContent sx={scopeSectionStyle.cardContent}>
                                    <Typography variant="h6" sx={scopeSectionStyle.applicabilityTitle}>
                                        Non-EU Organizations
                                    </Typography>
                                    <Typography variant="body2" sx={scopeSectionStyle.applicabilityText}>
                                        Organizations outside the EU that offer goods or services to EU residents
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={scopeSectionStyle.applicabilityCard}>
                                <CardContent sx={scopeSectionStyle.cardContent}>
                                    <Typography variant="h6" sx={scopeSectionStyle.applicabilityTitle}>
                                        Monitoring Activities
                                    </Typography>
                                    <Typography variant="body2" sx={scopeSectionStyle.applicabilityText}>
                                        Organizations that monitor the behavior of individuals within the EU
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}