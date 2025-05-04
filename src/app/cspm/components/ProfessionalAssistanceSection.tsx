'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import simpleInfoSectionStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const ProfessionalAssistanceSection: React.FC = () => {
    return (
        <Box sx={simpleInfoSectionStyle.box}>
            <Box sx={simpleInfoSectionStyle.container}>
                <Box sx={{
                    ...simpleInfoSectionStyle.contentWrapper,
                    ...simpleInfoSectionStyle.imageReverse
                }}>
                    <Box sx={simpleInfoSectionStyle.textContent}>
                        <Typography variant="h2" component="h2" sx={simpleInfoSectionStyle.title}>
                            {cspmData.professionalAssistance.title}
                        </Typography>
                        
                        {cspmData.professionalAssistance.subtitle && (
                            <Typography variant="subtitle1" sx={simpleInfoSectionStyle.subtitle}>
                                {cspmData.professionalAssistance.subtitle}
                            </Typography>
                        )}
                        
                        {cspmData.professionalAssistance.highlightText && (
                            <Box sx={simpleInfoSectionStyle.highlightText}>
                                {cspmData.professionalAssistance.highlightText}
                            </Box>
                        )}
                        
                        <Typography variant="body1" sx={simpleInfoSectionStyle.description}>
                            {cspmData.professionalAssistance.description}
                        </Typography>
                    </Box>
                    
                    <Box sx={simpleInfoSectionStyle.imageContainer}>
                        {/* Placeholder for image */}
                        <Box sx={simpleInfoSectionStyle.placeholderImage}>
                            {cspmData.professionalAssistance.imageIdea}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfessionalAssistanceSection;