'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import supportedFrameworksStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const SupportedFrameworksSection: React.FC = () => {
    const frameworksText = cspmData.supportedFrameworks.description[0];
    const frameworks = frameworksText
        .split('•')
        .map(item => item.trim())
        .filter(item => item.length > 0);

    return (
        <Box sx={supportedFrameworksStyle.section}>
            <Box sx={supportedFrameworksStyle.headerContainer}>
                <Typography sx={supportedFrameworksStyle.tagline}>COMPLIANCE READY</Typography>
                <Typography sx={supportedFrameworksStyle.title}>
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
        </Box>
    );
};

export default SupportedFrameworksSection;