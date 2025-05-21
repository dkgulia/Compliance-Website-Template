'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import Image from 'next/image';

import step1Image from '../images/visual-control-mapping-between-different-framework.png';
import step2Image from '../images/an-icon-representing-consumer-data-access-and-dele (1).png';
import step3Image from '../images/a-clean--vector-style-illustration-of-cybersecurit.png';
import step4Image from '../images/visual-control-mapping-between-different-framework.png';

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
                                            priority={index < 2} // Prioritize loading first two images
                                        />
                                    ) : (
                                        <Box sx={processSectionStyle.stepImagePlaceholder}>
                                            {step.imagePrompt}
                                        </Box>
                                    )}
                                </Box>
                            </Box>

                            {index < process.steps.length - 1 && (
                                <Box sx={processSectionStyle.connector} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;