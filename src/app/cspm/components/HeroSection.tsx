'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import heroSectionStyle from '../styles/heroSectionStyle';
import { cspmData } from '../constants/cspmData';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
    const router = useRouter();
    const handleBookDemo = () => {
        router.push('/get-a-demo');
    };

    return (
        <Box component="section" sx={heroSectionStyle.section}>
            <Container sx={heroSectionStyle.container}>
                <Box sx={heroSectionStyle.containerBox}>
                    <Box sx={heroSectionStyle.contentBox}>
                        <Typography variant="body1" sx={heroSectionStyle.tagline}>
                            <CloudDoneIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                            Cloud Security Posture Management
                        </Typography>
                        <Typography variant="h1" sx={heroSectionStyle.title}>
                            {cspmData.hero.heroTitle}
                        </Typography>
                        <Typography variant="h2" sx={heroSectionStyle.subtitle}>
                            {cspmData.hero.heroSubtitle}
                        </Typography>

                        {cspmData.hero.heroDescription.map((paragraph, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={heroSectionStyle.description}
                            >
                                {paragraph}
                            </Typography>
                        ))}

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={heroSectionStyle.ctaButton}
                            onClick={handleBookDemo}
                        >
                            {cspmData.hero.ctaText}
                        </Button>
                    </Box>

                    <Box sx={heroSectionStyle.imageBox}>
                        <Box sx={heroSectionStyle.imagePlaceholder}>
                            Hero image: HexaFort dashboard showing zero critical misconfigurations with real-time monitoring and compliance status
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;