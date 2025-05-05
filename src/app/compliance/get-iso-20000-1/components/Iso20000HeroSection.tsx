'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import {iso20000Data} from '../constants/iso20000Data';
import heroSectionStyle from '../styles/heroSectionStyle';
import Iso20000EnhancedForm from '../components/Iso20000EnhancedForm';

const Iso20000HeroSection: React.FC = () => {
    const heroContent = iso20000Data.sections.find(
        (section) => section.blockType === 'Hero'
    )?.content;

    if (!heroContent) return null;

    return (
        <Box sx={heroSectionStyle.container}>
            <Container>
                <Box sx={heroSectionStyle.containerBox}>
                    <Box sx={heroSectionStyle.leftContentBox}>
                        <Box sx={heroSectionStyle.tag}>
                            <Typography sx={heroSectionStyle.tagText}>
                                {heroContent.heroTitle}
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={heroSectionStyle.mainTitle}>
                            {heroContent.heroSubtitle}
                        </Typography>
                        {heroContent.heroDescription?.map((desc: string, i: number) => (
                            <Typography key={i} sx={heroSectionStyle.description}>
                                {desc}
                            </Typography>
                        ))}
                        <Typography sx={heroSectionStyle.description}>
                            Protect your service delivery and enhance reliability by complying with ISO 20000-1. HexaFort helps automate tasks, track processes, and streamline your path to certification.
                        </Typography>
                        <Box sx={heroSectionStyle.featuresContainer}>
                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <VerifiedIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Proven Best Practices
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        ISO Certified
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <ShieldIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Holistic Approach
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        End-to-End Service
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <LockIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Secure Delivery
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        Protection Built-in
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={heroSectionStyle.formBox}>
                        <Iso20000EnhancedForm />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Iso20000HeroSection;