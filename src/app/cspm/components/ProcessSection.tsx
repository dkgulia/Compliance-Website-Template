'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ScannerIcon from '@mui/icons-material/Scanner';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AssessmentIcon from '@mui/icons-material/Assessment';
import processSectionStyle from '../styles/processSectionStyle';
import { cspmData } from '../constants/cspmData';

const ProcessSection: React.FC = () => {
    const stepIcons = [
        <LinkIcon key="connect" sx={processSectionStyle.icon} />,
        <ScannerIcon key="scan" sx={processSectionStyle.icon} />,
        <PriorityHighIcon key="prioritize" sx={processSectionStyle.icon} />,
        <AssessmentIcon key="report" sx={processSectionStyle.icon} />
    ];

    return (
        <Box sx={processSectionStyle.section}>
            <Box sx={processSectionStyle.headerContainer}>
                <Typography sx={processSectionStyle.title}>
                    {cspmData.process.title}
                </Typography>
                <Typography sx={processSectionStyle.subtitle}>
                    {cspmData.process.subtitle}
                </Typography>
            </Box>

            {/* Step Numbers Flow */}
            <Box sx={processSectionStyle.stepFlow}>
                {[1, 2, 3, 4].map((step, index) => (
                    <React.Fragment key={step}>
                        <Box sx={processSectionStyle.stepBubble}>
                            <Typography sx={processSectionStyle.stepBubbleNumber}>
                                {step}
                            </Typography>
                        </Box>
                        {index < 3 && <Box sx={processSectionStyle.connector} />}
                    </React.Fragment>
                ))}
            </Box>

            {/* Step Cards */}
            <Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%', marginTop: '2rem' }}>
                {cspmData.process.steps.map((step, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Box sx={processSectionStyle.card}>
                            <Box sx={processSectionStyle.iconContainer}>
                                {stepIcons[index]}
                            </Box>

                            <Typography sx={processSectionStyle.cardTitle}>
                                {step.heading}
                            </Typography>

                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography sx={processSectionStyle.cardDescription}>
                                    {step.description}
                                </Typography>
                            </Box>

                            <Box sx={processSectionStyle.stepIndicator}>
                                <Typography sx={processSectionStyle.stepIndicatorText}>
                                    Step {index + 1}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProcessSection;