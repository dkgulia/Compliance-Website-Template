'use client';
import React from 'react';
import { Box, Typography, Button, Icon } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';

const HeroSection: React.FC = () => {
    const { hero } = hexafortSecureData;
    
    return (
        <Box sx={heroSectionStyle.container}>
            <Box sx={heroSectionStyle.containerBox}>
                <Box sx={heroSectionStyle.contentBox}>
                    <Typography variant="body1" sx={heroSectionStyle.tagline}>
                        Enterprise Security Platform
                    </Typography>
                    <Typography variant="h1" sx={heroSectionStyle.title}>
                        {hero.title}
                    </Typography>
                    <Typography variant="h2" sx={heroSectionStyle.subtitle}>
                        {hero.subtitle}
                    </Typography>
                    
                    {/* Displaying only the first paragraph for a more concise hero section */}
                    {hero.description.length > 0 && (
                        <Typography 
                            variant="body1" 
                            sx={heroSectionStyle.description}
                        >
                            {hero.description[0]}
                        </Typography>
                    )}
                    
                    <Button 
                        variant="contained" 
                        sx={heroSectionStyle.ctaButton}
                        startIcon={<Icon>calendar_today</Icon>}
                    >
                        {hero.ctaText}
                    </Button>
                </Box>
                
                <Box sx={heroSectionStyle.imageBox}>
                    <Box sx={heroSectionStyle.imagePlaceholder}>
                        <Icon sx={{ fontSize: '2rem', mr: 1 }}>dashboard</Icon>
                        {hero.imagePrompt}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;