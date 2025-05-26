'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import Image from 'next/image';

import step1Image from '../images/howitworks1.png';
import step2Image from '../images/howitworks2.png';
import step3Image from '../images/howitworks3.png';
import step4Image from '../images/ChatGPT Image May 22, 2025, 04_18_20 PM.png';

const stepImages = [step1Image, step2Image, step3Image, step4Image];

const ProcessSection: React.FC = () => {
    const { process } = thirdPartyRiskManagementData;

    return (
        <Box component="section" sx={processSectionStyle.section}>
            <Container sx={processSectionStyle.container}>
                <Box sx={processSectionStyle.header}>
                    <Typography variant="h2" sx={processSectionStyle.title}>
                        {process.title}
                    </Typography>
                    <Typography variant="body1" sx={processSectionStyle.subtitle}>
                        {process.subtitle}
                    </Typography>
                </Box>

                <Box sx={processSectionStyle.stepsContainer}>
                    {process.steps.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                ...processSectionStyle.step,
                                ...(index % 2 !== 0 ? processSectionStyle.stepReversed : {})
                            }}
                        >
                            <Box sx={processSectionStyle.stepContent}>
                                <Typography variant="h5" sx={processSectionStyle.stepHeading}>
                                    {step.heading}
                                </Typography>
                                <Typography variant="body1" sx={processSectionStyle.stepDescription}>
                                    {step.description}
                                </Typography>
                            </Box>

                            <Box sx={processSectionStyle.stepImageContainer}>
                                <Box sx={processSectionStyle.stepImageWrapper}>
                                    {index < stepImages.length ? (
                                        <Image
                                            src={stepImages[index]}
                                            alt={step.imagePrompt || `Step ${index + 1}: ${step.heading}`}
                                            fill
                                            style={processSectionStyle.stepImage}
                                            priority={index < 2}
                                        />
                                    ) : (
                                        <Box sx={processSectionStyle.stepImagePlaceholder}>
                                            {step.imagePrompt}
                                        </Box>
                                    )}
                                </Box>
                            </Box>


                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;