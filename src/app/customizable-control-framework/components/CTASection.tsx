'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const CTASection: React.FC = () => {
    const { callToAction } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={ctaSectionStyle.section}>
            <Container maxWidth="lg" sx={ctaSectionStyle.container}>
                <Box sx={ctaSectionStyle.contentBox}>
                    <Box sx={ctaSectionStyle.textContent}>
                        <Typography variant="h2" sx={ctaSectionStyle.title}>
                            {callToAction.title}
                        </Typography>

                        <Typography sx={ctaSectionStyle.description}>
                            {callToAction.description}
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={ctaSectionStyle.ctaButton}
                        >
                            {callToAction.ctaText}
                        </Button>
                    </Box>

                    <Box sx={ctaSectionStyle.imageContainer}>
                        <Box sx={ctaSectionStyle.imagePlaceholder}>
                            {callToAction.imageAlt}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;