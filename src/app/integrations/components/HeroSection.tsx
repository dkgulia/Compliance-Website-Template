'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroSectionStyle from '../styles/heroSectionStyle';
import integrationsData from '../constants/integrationsData';

const HeroSection: React.FC = () => {
    const theme = useTheme();
    const styles = heroSectionStyle(theme);
    const { hero } = integrationsData;

    // Split title to highlight parts
    const titleParts = hero.title.split('of');
    const firstPart = titleParts[0];
    const secondPart = titleParts.length > 1 ? titleParts[1] : '';

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.contentContainer}>
                    <Typography variant="h1" sx={styles.title}>
                        {firstPart}
                        <Box component="span" sx={styles.highlight}>
                            of Integration
                        </Box>
                    </Typography>
                    
                    <Typography sx={styles.subtitle}>
                        {hero.subtitle}
                    </Typography>
                    
                    {hero.description.map((paragraph, index) => (
                        <Typography key={index} sx={styles.description}>
                            {paragraph}
                        </Typography>
                    ))}
                    
                    <Box sx={styles.buttonContainer}>
                        <Button 
                            variant="contained" 
                            endIcon={<ArrowForwardIcon />}
                            sx={styles.button}
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