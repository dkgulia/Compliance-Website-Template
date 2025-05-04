'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import screenshotsSectionStyle from '../styles/screenshotsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const ScreenshotsSection: React.FC = () => {
    const { screenshots } = iso42001Data.sections;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % screenshots.items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + screenshots.items.length) % screenshots.items.length);
    };

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Box sx={screenshotsSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={screenshotsSectionStyle.innerContainer}>
                    <Box sx={screenshotsSectionStyle.titleContainer}>
                        <Typography variant="h2" sx={screenshotsSectionStyle.title}>
                            {screenshots.title}
                        </Typography>
                        {screenshots.subtitle && (
                            <Typography variant="h6" sx={screenshotsSectionStyle.subtitle}>
                                {screenshots.subtitle}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={screenshotsSectionStyle.carouselContainer}>
                        <IconButton 
                            onClick={handlePrev} 
                            sx={{
                                ...screenshotsSectionStyle.navButton,
                                ...screenshotsSectionStyle.prevButton,
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Box sx={screenshotsSectionStyle.slideContainer}>
                            <Box sx={screenshotsSectionStyle.imageContainer}>
                                <Box sx={screenshotsSectionStyle.imagePlaceholder}>
                                    {screenshots.items[activeIndex].imagePrompt}
                                </Box>
                            </Box>
                            <Box sx={screenshotsSectionStyle.contentContainer}>
                                <Typography sx={screenshotsSectionStyle.caption}>
                                    {screenshots.items[activeIndex].caption}
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton 
                            onClick={handleNext} 
                            sx={{
                                ...screenshotsSectionStyle.navButton,
                                ...screenshotsSectionStyle.nextButton,
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                        <Box sx={screenshotsSectionStyle.navigationContainer}>
                            {screenshots.items.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    sx={{
                                        ...screenshotsSectionStyle.navDot,
                                        ...(index === activeIndex && screenshotsSectionStyle.activeNavDot),
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ScreenshotsSection;