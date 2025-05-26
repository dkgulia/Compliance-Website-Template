"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import gdprData from '../constants/gdprData';
import dataBreachSectionStyle from '../styles/dataBreachSectionStyle';

export default function GdprDataBreachSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "8");
    if (!section) return null;

    return (
        <Box sx={dataBreachSectionStyle.container}>
            <Box sx={dataBreachSectionStyle.innerBox}>
                <Typography variant="h4" sx={dataBreachSectionStyle.heading}>
                    {section.title}
                </Typography>

                <Typography variant="h6" sx={dataBreachSectionStyle.subHeading}>
                    {section.subtitle}
                </Typography>

                <Button
                    variant="contained"
                    sx={dataBreachSectionStyle.ctaButton}
                    href="/compliance"
                >
                    {section.ctaText || 'Implement a Breach Response Plan'}
                </Button>
            </Box>
        </Box>
    );
}