'use client';
import React from 'react';
import { Box, Typography, Container, Button, Icon } from '@mui/material';
import callToActionStyle from '../styles/callToActionStyle';
import { vendorManagementData } from '../constants/vendorManagementData';

const CallToActionSection: React.FC = () => {
    const { callToAction } = vendorManagementData;

    return (
        <Box component="section" sx={callToActionStyle.section}>
            <Container sx={callToActionStyle.container}>
                <Box sx={callToActionStyle.contentWrapper}>
                    <Box sx={callToActionStyle.textContent}>
                        <Typography variant="h2" sx={callToActionStyle.title}>
                            {callToAction.title}
                        </Typography>
                        <Typography variant="h5" sx={callToActionStyle.subtitle}>
                            {callToAction.subtitle}
                        </Typography>
                        <Typography variant="body1" sx={callToActionStyle.description}>
                            {callToAction.description}
                        </Typography>
                        <Button 
                            variant="contained" 
                            sx={callToActionStyle.ctaButton}
                            startIcon={<Icon>event_available</Icon>}
                        >
                            {callToAction.ctaText}
                        </Button>
                    </Box>
                    <Box sx={callToActionStyle.imageContainer}>
                        <Box sx={callToActionStyle.imagePlaceholder}>
                            <Icon sx={{ fontSize: '2rem', mr: 1 }}>date_range</Icon>
                            {callToAction.imagePrompt}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CallToActionSection;