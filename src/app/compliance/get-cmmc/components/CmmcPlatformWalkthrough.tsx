'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import platformWalkthroughStyle from '../styles/platformWalkthroughStyle';
import { cmmcData } from '../constants/cmmcData';

const CmmcPlatformWalkthrough: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const walkthroughSection = cmmcData.sections.find(
        (section) => section.Sno === '3' && section.blockType === 'Screenshots'
    );
    
    if (!walkthroughSection) return null;

    const screenshots = walkthroughSection.content.screenshots;
    const slideCount = screenshots.length;

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
        <Box sx={platformWalkthroughStyle.box}>
            <Box sx={platformWalkthroughStyle.container}>
                <Box sx={platformWalkthroughStyle.headerBox}>
                    <Typography variant="h4" component="h2" sx={platformWalkthroughStyle.heading}>
                        {walkthroughSection.content.title}
                    </Typography>
                    
                    {walkthroughSection.content.subtitle && (
                        <Typography variant="body1" sx={platformWalkthroughStyle.subheading}>
                            {walkthroughSection.content.subtitle}
                        </Typography>
                    )}
                </Box>
                
                <Box sx={platformWalkthroughStyle.carouselContainer}>
                    <Box sx={platformWalkthroughStyle.navigationArrows}>
                        <IconButton onClick={handlePrev} sx={platformWalkthroughStyle.navArrow}>
                            <ArrowBackIcon />
                        </IconButton>
                        
                        <Box sx={platformWalkthroughStyle.slidePrevNext}>
                            <Typography variant="body2" sx={platformWalkthroughStyle.slideCountText}>
                                {currentSlide + 1} / {slideCount}
                            </Typography>
                        </Box>
                        
                        <IconButton onClick={handleNext} sx={platformWalkthroughStyle.navArrow}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                    
                    <Box sx={platformWalkthroughStyle.slideContent}>
                        {screenshots.map((screenshot, index) => (
                            <Box 
                                key={index}
                                sx={{
                                    ...platformWalkthroughStyle.slide,
                                    display: currentSlide === index ? 'flex' : 'none'
                                }}
                            >
                                <Box sx={platformWalkthroughStyle.imagePlaceholder}>
                                    <Typography variant="body2" color="textSecondary">
                                        {screenshot.imagePrompt}
                                    </Typography>
                                </Box>
                                
                                <Box sx={platformWalkthroughStyle.captionBox}>
                                    <Typography variant="h6" sx={platformWalkthroughStyle.caption}>
                                        {screenshot.caption}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    
                    <Box sx={platformWalkthroughStyle.dotsContainer}>
                        {screenshots.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => handleDotClick(index)}
                                sx={{
                                    ...platformWalkthroughStyle.dot,
                                    ...(currentSlide === index && { 
                                        backgroundColor: 'rgba(16, 185, 129, 0.7)',
                                        transform: 'scale(1.2)'
                                    })
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CmmcPlatformWalkthrough;