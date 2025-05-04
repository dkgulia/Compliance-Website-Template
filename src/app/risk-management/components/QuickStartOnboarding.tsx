'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Settings as SettingsIcon, Assessment as AssessmentIcon, AssignmentTurnedIn as AssignmentTurnedInIcon } from '@mui/icons-material';
import quickStartOnboardingStyle from '../styles/quickStartOnboardingStyle';
import { riskManagementData } from '../constants/riskManagementData';

const QuickStartOnboarding: React.FC = () => {
    const onboardingContent = riskManagementData.sections.find(
        (section) => section.Sno === '4' && section.blockType === 'Steps/Process'
    );

    if (!onboardingContent) return null;

    // Map for step numbers and icons
    const iconMap = [
        <CloudUploadIcon key="import" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
        <SettingsIcon key="customize" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
        <AssessmentIcon key="assess" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
        <AssignmentTurnedInIcon key="mitigate" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />
    ];

    return (
        <Box sx={quickStartOnboardingStyle.container}>
            <Box sx={quickStartOnboardingStyle.innerBox}>
                <Typography variant="h2" sx={quickStartOnboardingStyle.heading}>
                    {onboardingContent.content.title}
                </Typography>

                {onboardingContent.content.subtitle && (
                    <Typography variant="subtitle1" sx={quickStartOnboardingStyle.subtitle}>
                        {onboardingContent.content.subtitle}
                    </Typography>
                )}

                <Box sx={quickStartOnboardingStyle.stepsContainer}>
                    {onboardingContent.content.steps.map((step, index) => (
                        <Box key={index} sx={quickStartOnboardingStyle.stepCard}>
                            <Box sx={quickStartOnboardingStyle.stepNumber}>{index + 1}</Box>
                            
                            <Box sx={quickStartOnboardingStyle.imagePlaceholder}>
                                {iconMap[index]}
                            </Box>
                            
                            <Typography sx={quickStartOnboardingStyle.stepHeading}>
                                {step.heading}
                            </Typography>
                            
                            <Typography sx={quickStartOnboardingStyle.stepDescription}>
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default QuickStartOnboarding;