"use client";

import React from 'react';
import { Box, Container, Typography, Stack, Paper, Fade } from '@mui/material';
import gdprData from '../constants/gdprData';
import pitfallsSectionStyle from '../styles/pitfallsSectionStyle';

// Import all your custom images
import icon1 from '../images/third-party-.png';
import icon2 from '../images/outdated-privacy- (1).png';
import icon3 from '../images/data-breach (1).png';

// Create an array of icons in the same order as your pitfalls
const pitfallIcons = [icon1, icon2, icon3];

export default function GdprPitfallsSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "11");
    if (!section) return null;
    const steps = section.content?.steps || [];

    return (
        <Box
            component="section"
            id="gdpr-pitfalls"
            aria-labelledby="pitfalls-section-title"
            sx={pitfallsSectionStyle.container}
        >
            <Container maxWidth="lg">
                <Box sx={pitfallsSectionStyle.headerContainer}>
                    <Typography
                        variant="h2"
                        id="pitfalls-section-title"
                        sx={pitfallsSectionStyle.sectionTitle}
                    >
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={pitfallsSectionStyle.sectionSubtitle}>
                        {section.subtitle || "How to Avoid Non-Compliance"}
                    </Typography>
                </Box>

                <Box sx={pitfallsSectionStyle.pitfallsContainer}>
                    {steps.map((step, index) => {
                        const parts = step.split('Mitigation:');
                        const pitfall = parts[0].replace('Pitfall:', '').trim();
                        const mitigation = parts.length > 1 ? parts[1].trim() : '';

                        return (
                            <Fade in={true} timeout={(index + 1) * 300} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={pitfallsSectionStyle.pitfallItem}
                                    tabIndex={0}
                                >
                                    <Box sx={pitfallsSectionStyle.pitfallHeader}>
                                        <Box sx={pitfallsSectionStyle.warningIconContainer}>
                                            <img
                                                src={pitfallIcons[index]?.src || pitfallIcons[0].src}
                                                alt={`Pitfall ${index + 1}`}
                                                style={{ width: '48px', height: '48px' }}
                                            />
                                        </Box>
                                        <Box sx={pitfallsSectionStyle.pitfallContent}>
                                            <Typography variant="h3" sx={pitfallsSectionStyle.pitfallTitle}>
                                                Common Pitfall {index + 1}
                                            </Typography>
                                            <Typography sx={pitfallsSectionStyle.pitfallText}>
                                                {pitfall}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {mitigation && (
                                        <Box sx={pitfallsSectionStyle.mitigationContainer}>
                                            <Stack
                                                direction="row"
                                                alignItems="flex-start"
                                                spacing={2}
                                            >
                                                <Box>
                                                    <Typography variant="h4" sx={pitfallsSectionStyle.mitigationTitle}>
                                                        Best Practice:
                                                    </Typography>
                                                    <Typography sx={pitfallsSectionStyle.mitigationText}>
                                                        {mitigation}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    )}
                                </Paper>
                            </Fade>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}