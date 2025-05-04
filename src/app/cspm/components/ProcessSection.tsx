'use client';
import React from 'react';
import { Box, Typography, Icon, Container } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { cspmData } from '../constants/cspmData';

// Icons for each step
const stepIcons = [
    'link', // Connect
    'radar', // Scan
    'priority_high', // Prioritize
    'summarize' // Report & Monitor
];

const ProcessSection: React.FC = () => {
    return (
        <Box component="section" sx={processSectionStyle.box}>
            <Container sx={processSectionStyle.container}>
                <Box sx={processSectionStyle.containerBox}>
                    <Typography variant="h2" sx={processSectionStyle.heading}>
                        {cspmData.process.title}
                    </Typography>
                    <Typography variant="body1" sx={processSectionStyle.subheading}>
                        {cspmData.process.subtitle}
                    </Typography>
                </Box>
                
                <Box sx={processSectionStyle.stepsContainer}>
                    {cspmData.process.steps.map((step, index) => (
                        <Box 
                            key={index} 
                            sx={processSectionStyle.stepCard}
                        >
                            <Box sx={processSectionStyle.stepNumber} className="step-number">
                                {index + 1}
                            </Box>
                            {index < cspmData.process.steps.length - 1 && (
                                <Box sx={processSectionStyle.connector} />
                            )}
                            <Box sx={processSectionStyle.imageContainer}>
                                <Icon sx={processSectionStyle.imageIcon} className="step-icon">
                                    {stepIcons[index]}
                                </Icon>
                            </Box>
                            <Typography variant="h3" sx={processSectionStyle.stepHeading}>
                                {step.heading}
                            </Typography>
                            <Typography variant="body1" sx={processSectionStyle.stepDescription}>
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;