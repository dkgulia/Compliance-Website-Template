'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import supportedFrameworksStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const SupportedFrameworksSection: React.FC = () => {
    // Parse the frameworks from the description string
    const frameworksText = cspmData.supportedFrameworks.description[0];
    const frameworks = frameworksText
        .split('•')
        .map(item => item.trim())
        .filter(item => item.length > 0);

    return (
        <Box component="section" sx={supportedFrameworksStyle.box}>
            <Container maxWidth="lg" sx={supportedFrameworksStyle.container}>
                <Box sx={supportedFrameworksStyle.containerBox}>
                    <Typography variant="h2" sx={supportedFrameworksStyle.heading}>
                        {cspmData.supportedFrameworks.title}
                    </Typography>
                </Box>

                <Box sx={supportedFrameworksStyle.frameworksContainer}>
                    {frameworks.map((framework, index) => (
                        <Box key={index} sx={supportedFrameworksStyle.frameworkItem}>
                            <Box sx={supportedFrameworksStyle.iconContainer}>
                                <CheckCircleIcon sx={supportedFrameworksStyle.checkIcon} />
                            </Box>
                            <Typography sx={supportedFrameworksStyle.frameworkName}>
                                {framework}
                            </Typography>
                        </Box>
                    ))}
                    <Box sx={supportedFrameworksStyle.frameworkItem}>
                        <Box sx={supportedFrameworksStyle.iconContainer}>
                            <CheckCircleIcon sx={supportedFrameworksStyle.checkIcon} />
                        </Box>
                        <Typography sx={supportedFrameworksStyle.frameworkName}>
                            and dozens more...
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body2" sx={supportedFrameworksStyle.note}>
                    All pre-mapped out of the box
                </Typography>
            </Container>
        </Box>
    );
};

export default SupportedFrameworksSection;