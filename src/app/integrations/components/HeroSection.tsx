'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import heroSectionStyle from '../styles/heroSectionStyle';
import integrationsData from '../constants/integrationsData';

const HeroSection: React.FC = () => {
    const { hero } = integrationsData;
    const router = useRouter();

    const titleParts = hero.title.split('of');
    const firstPart = titleParts[0];
    const secondPart = titleParts.length > 1 ? titleParts[1] : '';

    const handleBookDemo = () => {
        router.push('/get-a-demo');
    };

    return (
        <Box component="section" sx={heroSectionStyle.section}>
            <Container sx={heroSectionStyle.container}>
                <Box sx={heroSectionStyle.contentContainer}>
                    <Typography variant="h1" sx={heroSectionStyle.title}>
                        {firstPart}
                        <Box component="span" sx={heroSectionStyle.highlight}>
                            of Integration
                        </Box>
                    </Typography>

                    <Typography sx={heroSectionStyle.subtitle}>
                        {hero.subtitle}
                    </Typography>

                    {hero.description.map((paragraph, index) => (
                        <Typography key={index} sx={heroSectionStyle.description}>
                            {paragraph}
                        </Typography>
                    ))}

                    <Box sx={heroSectionStyle.buttonContainer}>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={heroSectionStyle.button}
                            onClick={handleBookDemo}
                        >
                            {hero.ctaText}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
