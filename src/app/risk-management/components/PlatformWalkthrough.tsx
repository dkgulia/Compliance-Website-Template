'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIos as ArrowBackIosIcon } from '@mui/icons-material';
import platformWalkthroughStyle from '../styles/platformWalkthroughStyle';
import { riskManagementData } from '../constants/riskManagementData';

const PlatformWalkthrough: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const carouselContent = riskManagementData.sections.find((section) => section.Sno === '3' && section.blockType === 'Screenshots');
    
    if (!carouselContent || !carouselContent.content.screenshots || carouselContent.content.screenshots.length === 0) {
        return null;
    }

    const screenshots = carouselContent.content.screenshots;
    const slideCount = screenshots.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <Box sx={platformWalkthroughStyle.container}>
            <Box sx={platformWalkthroughStyle.innerBox}>
                <Typography variant="h2" sx={platformWalkthroughStyle.heading}>
                    {carouselContent.content.title}
                </Typography>

                {carouselContent.content.subtitle && (
                    <Typography variant="subtitle1" sx={platformWalkthroughStyle.subtitle}>
                        {carouselContent.content.subtitle}
                    </Typography>
                )}

                <Box sx={platformWalkthroughStyle.carouselContainer}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <IconButton onClick={prevSlide} sx={{ color: '#fff' }}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        
                        <Box sx={{ flex: 1 }}>
                            {screenshots.map((screenshot, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: currentSlide === index ? 'block' : 'none'
                                    }}
                                >
                                    <Box sx={index % 2 === 0 ? platformWalkthroughStyle.carouselItem : platformWalkthroughStyle.carouselItemReverse}>
                                        <Box sx={platformWalkthroughStyle.imageBox}>
                                            <Box sx={platformWalkthroughStyle.imagePlaceholder}>
                                                <Typography variant="body2" color="textSecondary">
                                                    {screenshot.imagePrompt}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={platformWalkthroughStyle.contentBox}>
                                            <Typography sx={platformWalkthroughStyle.caption}>
                                                {screenshot.caption}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        
                        <IconButton onClick={nextSlide} sx={{ color: '#fff' }}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                    
                    <Box sx={platformWalkthroughStyle.navigationDots}>
                        {screenshots.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => goToSlide(index)}
                                sx={{
                                    ...platformWalkthroughStyle.dot,
                                    ...(currentSlide === index ? platformWalkthroughStyle.activeDot : {})
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PlatformWalkthrough;