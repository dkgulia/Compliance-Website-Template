"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import gdprData from '../constants/gdprData';
import howToComplySectionStyle from '../styles/howToComplySectionStyle';

export default function GdprHowToComplySection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "4");
    if (!section) return null;
    const listItems = section.list || [];
    const phaseIcons = [
        <LooksOneIcon key="phase1" sx={howToComplySectionStyle.phaseNumberIcon} />,
        <LooksTwoIcon key="phase2" sx={howToComplySectionStyle.phaseNumberIcon} />,
        <Looks3Icon key="phase3" sx={howToComplySectionStyle.phaseNumberIcon} />
    ];
    const getPhaseLabel = (index:number) => {
        const phases = ["Prepare", "Operate", "Maintain"];
        return `Phase ${index + 1}: ${phases[index]}`;
    };

    return (
        <Box component="section" id="how-to-comply" aria-labelledby="how-to-comply-title" sx={howToComplySectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={howToComplySectionStyle.headerContainer}>
                    <Typography variant="h2" id="how-to-comply-title" sx={howToComplySectionStyle.sectionTitle}>
                        {section.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={howToComplySectionStyle.sectionSubtitle}>
                        A Three-Phase Accountability Life Cycle
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {listItems.map((item, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                            <Paper elevation={0} sx={howToComplySectionStyle.phaseCard}>
                                <Box sx={howToComplySectionStyle.phaseContent}>
                                    <Box sx={howToComplySectionStyle.phaseNumberContainer}>
                                        {index < 3 && phaseIcons[index]}
                                    </Box>

                                    <Box sx={howToComplySectionStyle.phaseTextContainer}>
                                        <Typography variant="h6" sx={howToComplySectionStyle.phaseTitle}>
                                            {index < 3 ? getPhaseLabel(index) : `Step ${index + 1}`}
                                        </Typography>

                                        <Typography variant="body1" sx={howToComplySectionStyle.phaseText}>
                                            {item}
                                        </Typography>
                                    </Box>

                                    <Box sx={howToComplySectionStyle.phaseIconContainer}>
                                        <CheckCircleIcon sx={howToComplySectionStyle.phaseIcon} />
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}