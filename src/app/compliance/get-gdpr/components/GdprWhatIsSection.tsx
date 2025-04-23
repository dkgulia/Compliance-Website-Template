"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import gdprData from '../constants/gdprData';
import whatIsSectionStyle from '../styles/whatIsSectionStyle';
import gdprImage from '../images/-create-a-minimalist--professional-icon-representi.png'

export default function GdprWhatIsSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "1");
    if (!section) return null;

    const content = section.content;
    if (!content) return null;

    return (
        <Box component="section" id="what-is-gdpr" aria-label="What is GDPR" sx={whatIsSectionStyle.container}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={whatIsSectionStyle.contentContainer}>
                            <Typography variant="h3" sx={whatIsSectionStyle.sectionTitle}>
                                {section.title}
                            </Typography>

                            <Typography variant="subtitle1" sx={whatIsSectionStyle.sectionSubtitle}>
                                {section.subtitle}
                            </Typography>

                            <Typography variant="h4" sx={whatIsSectionStyle.contentHeading}>
                                {content.heading}
                            </Typography>

                            <Typography variant="body1" sx={whatIsSectionStyle.contentDescription}>
                                {content.subheading}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={whatIsSectionStyle.imageContainer}>
                            <Box sx={whatIsSectionStyle.imageWrapper}>
                                <Image
                                    src={gdprImage}
                                    alt="Data Protection Shield"
                                    width={300}
                                    height={300}
                                    style={whatIsSectionStyle.imageStyle}
                                />
                            </Box>
                            <Typography variant="caption" sx={whatIsSectionStyle.iconCaption}>
                                Data Protection Excellence
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={whatIsSectionStyle.highlights}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={whatIsSectionStyle.highlightCard}>
                                <CardContent sx={whatIsSectionStyle.cardContent}>
                                    <Box sx={whatIsSectionStyle.cardIconContainer}>
                                        <LanguageIcon sx={whatIsSectionStyle.cardIcon} />
                                    </Box>
                                    <Typography variant="h6" sx={whatIsSectionStyle.highlightTitle}>
                                        Global Standard
                                    </Typography>
                                    <Typography variant="body2" sx={whatIsSectionStyle.highlightText}>
                                        Widely recognized as the most comprehensive data protection framework
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={whatIsSectionStyle.highlightCard}>
                                <CardContent sx={whatIsSectionStyle.cardContent}>
                                    <Box sx={whatIsSectionStyle.cardIconContainer}>
                                        <PersonIcon sx={whatIsSectionStyle.cardIcon} />
                                    </Box>
                                    <Typography variant="h6" sx={whatIsSectionStyle.highlightTitle}>
                                        User Rights
                                    </Typography>
                                    <Typography variant="body2" sx={whatIsSectionStyle.highlightText}>
                                        Empowers individuals with control over their personal data
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card elevation={0} sx={whatIsSectionStyle.highlightCard}>
                                <CardContent sx={whatIsSectionStyle.cardContent}>
                                    <Box sx={whatIsSectionStyle.cardIconContainer}>
                                        <BusinessCenterIcon sx={whatIsSectionStyle.cardIcon} />
                                    </Box>
                                    <Typography variant="h6" sx={whatIsSectionStyle.highlightTitle}>
                                        Business Impact
                                    </Typography>
                                    <Typography variant="body2" sx={whatIsSectionStyle.highlightText}>
                                        Provides a framework for responsible data handling practices
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