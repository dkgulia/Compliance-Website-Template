'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import supportedFrameworksStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const ProfessionalAssistanceSection: React.FC = () => {
    return (
        <Box component="section" sx={supportedFrameworksStyle.box}>
            <Container maxWidth="lg" sx={supportedFrameworksStyle.container}>
                <Box sx={supportedFrameworksStyle.assistanceContainer}>
                    <Box sx={supportedFrameworksStyle.assistanceContent}>
                        <Box sx={supportedFrameworksStyle.textSection}>
                            {cspmData.professionalAssistance.highlightText && (
                                <Box sx={supportedFrameworksStyle.tag}>
                                    <Typography variant="body2" sx={supportedFrameworksStyle.tagText}>
                                        {cspmData.professionalAssistance.highlightText}
                                    </Typography>
                                </Box>
                            )}

                            <Typography variant="h2" sx={supportedFrameworksStyle.assistanceTitle}>
                                {cspmData.professionalAssistance.title}
                            </Typography>

                            {cspmData.professionalAssistance.subtitle && (
                                <Typography variant="subtitle1" sx={supportedFrameworksStyle.assistanceSubtitle}>
                                    {cspmData.professionalAssistance.subtitle}
                                </Typography>
                            )}

                            <Typography variant="body1" sx={supportedFrameworksStyle.assistanceDescription}>
                                {cspmData.professionalAssistance.description}
                            </Typography>
                        </Box>

                        <Box sx={supportedFrameworksStyle.imageSection}>
                            <Box sx={supportedFrameworksStyle.assistanceImageContainer}>
                                <SupportIcon sx={supportedFrameworksStyle.assistanceIcon} />
                                <Typography sx={supportedFrameworksStyle.imagePlaceholder}>
                                    {cspmData.professionalAssistance.imageIdea}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ProfessionalAssistanceSection;