'use client';
import React from 'react';
import { Box, Typography, Container, Icon } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

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
                                <Box sx={processSectionStyle.stepImagePlaceholder}>
                                    <Icon sx={{ fontSize: '2rem', mr: 1 }}>
                                        {index === 0 ? 'category' : 
                                         index === 1 ? 'auto_fix_high' : 
                                         index === 2 ? 'assessment' : 
                                         'handshake'}
                                    </Icon>
                                    {step.imagePrompt}
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