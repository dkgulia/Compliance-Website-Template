"use client";

import React from 'react';
import { Box, Container, Typography, Paper, Grid, Fade } from '@mui/material';
import { School, LaptopMac, MenuBook, ImportContacts } from '@mui/icons-material';
import gdprData from '../constants/gdprData';
import eLearningSectionStyle from '../styles/eLearningSectionStyle';

export default function GdprELearningSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "7");
    if (!section) return null;
    const listItems = section.list || [];
    const learningIcons = [
        <School sx={eLearningSectionStyle.icon} />,
        <LaptopMac sx={eLearningSectionStyle.icon} />,
        <MenuBook sx={eLearningSectionStyle.icon} />,
        <ImportContacts sx={eLearningSectionStyle.icon} />
    ];

    return (
        <Box
            component="section"
            id="gdpr-elearning"
            aria-labelledby="gdpr-elearning-title"
            sx={eLearningSectionStyle.container}
        >
            <Container maxWidth="lg">
                <Box sx={eLearningSectionStyle.innerBox}>
                    <Typography
                        variant="h2"
                        id="gdpr-elearning-title"
                        sx={eLearningSectionStyle.heading}
                    >
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={eLearningSectionStyle.subHeading}>
                        {section.subtitle || "Continuous Staff & Processor Education"}
                    </Typography>

                    <Box sx={eLearningSectionStyle.cardsWrapper}>
                        {listItems.map((item, index) => (
                            <Fade in={true} timeout={(index + 1) * 300} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={eLearningSectionStyle.learningCard}
                                    tabIndex={0}
                                >
                                    <Box sx={eLearningSectionStyle.iconContainer}>
                                        {learningIcons[index % learningIcons.length]}
                                    </Box>

                                    <Box sx={eLearningSectionStyle.contentContainer}>
                                        <Typography
                                            variant="body1"
                                            sx={eLearningSectionStyle.learningText}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Fade>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}