'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import quickStartOnboardingStyle from '../styles/quickStartOnboardingStyle';
import { riskManagementData } from '../constants/riskManagementData';
import rightToKnowImage from '../images/upload (1).png';
import rightToDeleteImage from '../images/score.png';
import rightToOptOutImage from '../images/assets.png';
import noDiscriminationImage from '../images/monitor.png';

interface OnboardingStep {
    heading: string;
    description: string;
    image?: string;
    imagePrompt?: string;
}

const QuickStartOnboarding: React.FC = () => {
    const onboardingContent = riskManagementData.sections.find(
        (section) => section.Sno === '4' && section.blockType === 'Steps/Process'
    );

    if (!onboardingContent || !onboardingContent.content) return null;
    const steps: OnboardingStep[] = onboardingContent.content.steps || [];

    if (steps.length === 0) {
        return (
            <Box sx={quickStartOnboardingStyle.container}>
                <Box sx={quickStartOnboardingStyle.innerBox}>
                    <Typography variant="h2" sx={quickStartOnboardingStyle.heading}>
                        {onboardingContent.content.title || 'Quick-Start Onboarding'}
                    </Typography>
                    <Typography variant="body1">No onboarding steps found</Typography>
                </Box>
            </Box>
        );
    }
    const imageMap = [
        rightToKnowImage,
        rightToDeleteImage,
        rightToOptOutImage,
        noDiscriminationImage
    ];

    return (
        <Box sx={quickStartOnboardingStyle.container}>
            <Box sx={quickStartOnboardingStyle.innerBox}>
                <Typography variant="h2" sx={quickStartOnboardingStyle.heading}>
                    {onboardingContent.content.title || 'Quick-Start Onboarding'}
                </Typography>

                {onboardingContent.content.subtitle && (
                    <Typography variant="subtitle1" sx={quickStartOnboardingStyle.subtitle}>
                        {onboardingContent.content.subtitle}
                    </Typography>
                )}

                <Grid container spacing={3}>
                    {steps.map((step, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box sx={quickStartOnboardingStyle.stepCard}>
                                <Box sx={quickStartOnboardingStyle.imageContainer}>
                                    <Image
                                        src={imageMap[index % imageMap.length]}
                                        alt={step.heading}
                                        width={140}
                                        height={100}
                                        style={{
                                            maxWidth: '100%',
                                            height: '140px',
                                        }}
                                    />
                                </Box>

                                <Box sx={quickStartOnboardingStyle.contentContainer}>
                                    <Typography sx={quickStartOnboardingStyle.stepHeading}>
                                        {step.heading}
                                    </Typography>
                                    <Typography sx={quickStartOnboardingStyle.stepDescription}>
                                        {step.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default QuickStartOnboarding;