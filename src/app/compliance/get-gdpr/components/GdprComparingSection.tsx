"use client";

import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Fade } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import gdprData from '../constants/gdprData';
import comparingSectionStyle from '../styles/comparingSectionStyle';

export default function GdprComparingSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "10");
    if (!section) return null;
    const listItems = section.list || [];

    return (
        <Box
            component="section"
            id="gdpr-vs-ccpa"
            aria-labelledby="comparing-section-title"
            sx={comparingSectionStyle.container}
        >
            <Container maxWidth="lg">
                <Box sx={comparingSectionStyle.headerContainer}>
                    <Typography
                        variant="h2"
                        id="comparing-section-title"
                        sx={comparingSectionStyle.sectionTitle}
                    >
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={comparingSectionStyle.sectionSubtitle}>
                        {section.subtitle || "Key Differences & Overlaps"}
                    </Typography>
                </Box>

                <Paper elevation={0} sx={comparingSectionStyle.comparisonContainer}>
                    <List disablePadding sx={comparingSectionStyle.list}>
                        {listItems.map((item, idx) => (
                            <Fade in={true} timeout={(idx + 1) * 200} key={idx}>
                                <ListItem
                                    sx={comparingSectionStyle.listItem}
                                    tabIndex={0}
                                >
                                    <ListItemIcon sx={comparingSectionStyle.listItemIcon}>
                                        <ArrowForwardIosIcon sx={comparingSectionStyle.arrowIcon} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{ sx: comparingSectionStyle.listItemText }}
                                    />
                                </ListItem>
                            </Fade>
                        ))}
                    </List>

                    <Box sx={comparingSectionStyle.additionalInfo}>
                        <Box sx={comparingSectionStyle.infoHeader}>
                            <InfoIcon sx={comparingSectionStyle.infoIcon} />
                            <Typography variant="h6" sx={comparingSectionStyle.additionalInfoTitle}>
                                Why Understanding Both Matters
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={comparingSectionStyle.additionalInfoText}>
                            Organizations operating globally often need to comply with multiple privacy
                            regulations. Understanding the differences between GDPR and CCPA helps
                            create a comprehensive data protection strategy that satisfies both requirements.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}