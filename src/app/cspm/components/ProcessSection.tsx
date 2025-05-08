'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ScannerIcon from '@mui/icons-material/Scanner';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AssessmentIcon from '@mui/icons-material/Assessment';
import processSectionStyle from '../styles/processSectionStyle';
import { cspmData } from '../constants/cspmData';

const ProcessSection: React.FC = () => {
    // MUI Icons for each step
    const stepIcons = [
        <LinkIcon key="connect" sx={processSectionStyle.icon} />,
        <ScannerIcon key="scan" sx={processSectionStyle.icon} />,
        <PriorityHighIcon key="prioritize" sx={processSectionStyle.icon} />,
        <AssessmentIcon key="report" sx={processSectionStyle.icon} />
    ];

    return (
        <Box component="section" sx={processSectionStyle.box}>
            <Container maxWidth="lg" sx={processSectionStyle.container}>
                <Box sx={processSectionStyle.containerBox}>
                    <Typography variant="h2" sx={processSectionStyle.heading}>
                        {cspmData.process.title}
                    </Typography>
                    <Typography variant="body1" sx={processSectionStyle.subheading}>
                        {cspmData.process.subtitle}
                    </Typography>
                </Box>

                <Box sx={processSectionStyle.processTimeline}>
                    <Box sx={processSectionStyle.lineContainer}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Box key={index} sx={processSectionStyle.stepNumber}>
                                {index + 1}
                            </Box>
                        ))}
                        <Box sx={processSectionStyle.connectingLine}></Box>
                    </Box>

                    <Grid container spacing={2} sx={processSectionStyle.cardsContainer}>
                        {cspmData.process.steps.map((step, index) => (
                            <Grid size={{xs:12,sm:6,md:3}} key={index}>
                                <Box sx={processSectionStyle.stepCard}>
                                    <Box sx={processSectionStyle.iconContainer}>
                                        {stepIcons[index]}
                                    </Box>

                                    <Typography variant="h5" sx={processSectionStyle.stepHeading}>
                                        {step.heading}
                                    </Typography>

                                    <Typography variant="body1" sx={processSectionStyle.stepDescription}>
                                        {step.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;