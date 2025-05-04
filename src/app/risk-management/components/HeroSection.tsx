'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { VideoCall as VideoCallIcon, AccessTime as AccessTimeIcon, VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';

const HeroSection: React.FC = () => {
    const heroContent = riskManagementData.sections.find((section) => section.Sno === '1' && section.blockType === 'Hero');

    if (!heroContent) return null;

    return (
        <Box sx={heroSectionStyle.container}>
            <Container sx={heroSectionStyle.containerBox}>
                {/* Left content section */}
                <Box sx={heroSectionStyle.contentBox}>
                    <Typography sx={heroSectionStyle.tagline}>🛡️ Risk Management Made Simple</Typography>

                    <Typography variant="h1" sx={heroSectionStyle.title}>
                        {heroContent.content.heroTitle}
                    </Typography>

                    <Typography sx={heroSectionStyle.subtitle}>
                        {heroContent.content.heroSubtitle}
                    </Typography>

                    {heroContent.content.heroDescription && (
                        <Box>
                            {heroContent.content.heroDescription.map((desc: string, i: number) => (
                                <Typography key={i} sx={heroSectionStyle.description}>
                                    {desc}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    <Box sx={heroSectionStyle.featuresContainer}>
                        {riskManagementData.heroFeatures.map((feature, index) => (
                            <Box key={index} sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    {feature.icon === 'VideoCallIcon' && (
                                        <VideoCallIcon sx={heroSectionStyle.featureIcon} />
                                    )}
                                    {feature.icon === 'AccessTimeIcon' && (
                                        <AccessTimeIcon sx={heroSectionStyle.featureIcon} />
                                    )}
                                    {feature.icon === 'VerifiedUserIcon' && (
                                        <VerifiedUserIcon sx={heroSectionStyle.featureIcon} />
                                    )}
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>{feature.title}</Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>{feature.subtitle}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right form section */}
                <Box sx={heroSectionStyle.formBox}>
                    <EnhancedHeroSectionForm />
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;