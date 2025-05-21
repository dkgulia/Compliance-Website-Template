'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import heroSectionStyle from '../styles/heroSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';
import Image from 'next/image';
import controlFrameworkHero from '../images/ccf-hero.png';

const HeroSection: React.FC = () => {
    const { hero } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={heroSectionStyle.section}>
            <Container maxWidth="lg" sx={heroSectionStyle.container}>
                <Box sx={heroSectionStyle.contentContainer}>
                    <Box sx={heroSectionStyle.textContent}>
                        <Box sx={heroSectionStyle.tagline}>
                            <SettingsIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                            Customizable Framework
                        </Box>

                        <Typography variant="h1" sx={heroSectionStyle.title}>
                            {hero.title}
                        </Typography>

                        <Typography variant="h2" sx={heroSectionStyle.subtitle}>
                            {hero.subtitle}
                        </Typography>

                        {hero.description.map((paragraph, index) => (
                            <Typography key={index} sx={heroSectionStyle.description}>
                                {paragraph}
                            </Typography>
                        ))}

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={heroSectionStyle.ctaButton}
                        >
                            {hero.ctaText}
                        </Button>
                    </Box>

                    <Box sx={heroSectionStyle.imageContainer}>
                        <Box sx={heroSectionStyle.imageWrapper}>
                            <Image
                                src={controlFrameworkHero}
                                alt={hero.imageAlt || "Control Framework Dashboard"}
                                fill
                                style={heroSectionStyle.heroImage}
                                priority
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;