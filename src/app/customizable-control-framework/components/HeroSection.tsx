'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import heroSectionStyle from '../styles/heroSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const HeroSection: React.FC = () => {
    const theme = useTheme();
    const styles = heroSectionStyle(theme);
    const { hero } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.textContent}>
                        <Typography sx={styles.tagline}>
                            <SettingsIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                            Customizable Framework
                        </Typography>
                        
                        <Typography variant="h1" sx={styles.title}>
                            {hero.title}
                        </Typography>
                        
                        <Typography variant="h2" sx={styles.subtitle}>
                            {hero.subtitle}
                        </Typography>
                        
                        {hero.description.map((paragraph, index) => (
                            <Typography key={index} sx={styles.description}>
                                {paragraph}
                            </Typography>
                        ))}
                        
                        <Button 
                            variant="contained" 
                            endIcon={<ArrowForwardIcon />}
                            sx={styles.ctaButton}
                        >
                            {hero.ctaText}
                        </Button>
                    </Box>

                    <Box sx={styles.imageContainer}>
                        <Box sx={styles.imagePlaceholder}>
                            {hero.imageAlt}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;