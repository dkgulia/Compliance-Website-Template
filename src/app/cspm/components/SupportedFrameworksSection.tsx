'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import simpleInfoSectionStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const SupportedFrameworksSection: React.FC = () => {
    return (
        <Box sx={simpleInfoSectionStyle.box}>
            <Box sx={simpleInfoSectionStyle.container}>
                <Typography variant="h2" sx={simpleInfoSectionStyle.title}>
                    {cspmData.supportedFrameworks.title}
                </Typography>
                
                <Box sx={simpleInfoSectionStyle.contentWrapper}>
                    <Box sx={simpleInfoSectionStyle.textContent}>
                        {cspmData.supportedFrameworks.description.map((paragraph, index) => (
                            <Typography 
                                key={index} 
                                variant="body1" 
                                sx={simpleInfoSectionStyle.descriptionCentered}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                    
                    <Box sx={simpleInfoSectionStyle.imageContainer}>
                        {/* Placeholder for image */}
                        <Box sx={simpleInfoSectionStyle.placeholderImage}>
                            {cspmData.supportedFrameworks.imageIdea}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SupportedFrameworksSection;