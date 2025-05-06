'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import screenshotsSectionStyle from '../styles/screenshotsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const ScreenshotsSection: React.FC = () => {
    const { screenshots } = iso42001Data.sections;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = screenshots.items.length;

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <Box sx={screenshotsSectionStyle.box}>
            <Container maxWidth="lg">
                <Box sx={screenshotsSectionStyle.headerBox}>
                    <Typography variant="h4" component="h2" sx={screenshotsSectionStyle.heading}>
                        {screenshots.title}
                    </Typography>
                    {screenshots.subtitle && (
                        <Typography variant="body1" sx={screenshotsSectionStyle.subheading}>
                            {screenshots.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={screenshotsSectionStyle.carouselContainer}>
                    <Box sx={screenshotsSectionStyle.navigationArrows}>
                        <IconButton onClick={handlePrev} sx={screenshotsSectionStyle.navArrow}>
                            <ArrowBackIcon />
                        </IconButton>

                        <Box sx={screenshotsSectionStyle.slidePrevNext}>
                            <Typography variant="body2" sx={screenshotsSectionStyle.slideCountText}>
                                {currentSlide + 1} / {slideCount}
                            </Typography>
                        </Box>

                        <IconButton onClick={handleNext} sx={screenshotsSectionStyle.navArrow}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>

                    <Box sx={screenshotsSectionStyle.slideContent}>
                        {screenshots.items.map((screenshot, index) => (
                            <Box
                                key={index}
                                sx={{
                                    ...screenshotsSectionStyle.slide,
                                    display: currentSlide === index ? 'flex' : 'none'
                                }}
                            >
                                <Box sx={screenshotsSectionStyle.imagePlaceholder}>
                                    <Typography variant="body2" color="textSecondary">
                                        {screenshot.imagePrompt}
                                    </Typography>
                                </Box>

                                <Box sx={screenshotsSectionStyle.captionBox}>
                                    <Typography variant="h6" sx={screenshotsSectionStyle.caption}>
                                        {screenshot.caption}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={screenshotsSectionStyle.dotsContainer}>
                        {screenshots.items.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => handleDotClick(index)}
                                sx={{
                                    ...screenshotsSectionStyle.dot,
                                    ...(currentSlide === index && {
                                        backgroundColor: 'rgba(16, 185, 129, 0.7)',
                                        transform: 'scale(1.2)'
                                    })
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ScreenshotsSection;