'use client';
import React from 'react';
import { Box, Typography, Button, Icon, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import callToActionSectionStyle from '../styles/callToActionSectionStyle';
import { cspmData } from '../constants/cspmData';
import theme from '../../../theme';

const features = [
  "10-minute tailored demonstration",
  "Live cloud security assessment",
  "Compliance gap report to keep",
  "No sales pressure - just practical insights"
];

const CallToActionSection: React.FC = () => {
    return (
        <Box component="section" sx={callToActionSectionStyle.box}>
            <Container sx={callToActionSectionStyle.container}>
                <Box sx={callToActionSectionStyle.contentWrapper}>
                    <Box sx={callToActionSectionStyle.textContent}>
                        <Typography variant="h2" component="h2" sx={callToActionSectionStyle.title}>
                            {cspmData.callToAction.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={callToActionSectionStyle.subtitle}>
                            {cspmData.callToAction.subtitle}
                        </Typography>
                        <Typography variant="body1" sx={callToActionSectionStyle.description}>
                            {cspmData.callToAction.description}
                        </Typography>
                        
                        <Box sx={callToActionSectionStyle.featureList}>
                            {features.map((feature, index) => (
                                <Box key={index} sx={callToActionSectionStyle.featureItem}>
                                    <CheckCircleOutlineIcon sx={callToActionSectionStyle.featureIcon} />
                                    <Typography sx={callToActionSectionStyle.featureText}>{feature}</Typography>
                                </Box>
                            ))}
                        </Box>
                        
                        <Button 
                            variant="contained" 
                            sx={callToActionSectionStyle.button}
                            startIcon={<CalendarMonthIcon />}
                        >
                            {cspmData.callToAction.ctaText}
                        </Button>
                    </Box>
                    
                    <Box sx={callToActionSectionStyle.imageContainer}>
                        <Box sx={callToActionSectionStyle.placeholderImage}>
                            <PlayCircleFilledIcon sx={{ fontSize: '3rem', mb: 2, color: theme.palette.secondary.main }} />
                            {cspmData.callToAction.imagePrompt}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CallToActionSection;