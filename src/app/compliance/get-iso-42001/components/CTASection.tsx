'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const CTASection: React.FC = () => {
    const { cta } = iso42001Data.sections;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={ctaSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={ctaSectionStyle.content}>
                    <Typography variant="h3" sx={ctaSectionStyle.title}>
                        {cta.title}
                    </Typography>

                    <Typography variant="body1" sx={ctaSectionStyle.description}>
                        {cta.description}
                    </Typography>

                    <Button
                        variant="contained"
                        sx={ctaSectionStyle.button}
                        onClick={scrollToTop}
                        endIcon={<ArrowForwardIcon />}
                    >
                        {cta.ctaText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;