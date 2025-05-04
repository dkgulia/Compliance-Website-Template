'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const CTASection: React.FC = () => {
    const { cta } = iso42001Data.sections;

    return (
        <Box sx={ctaSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={ctaSectionStyle.innerContainer}>
                    <AccessTimeIcon sx={ctaSectionStyle.icon} />
                    
                    <Typography variant="h2" sx={ctaSectionStyle.title}>
                        {cta.title}
                    </Typography>
                    
                    {cta.subtitle && (
                        <Typography variant="h6" sx={{ ...ctaSectionStyle.description, mb: 1 }}>
                            {cta.subtitle}
                        </Typography>
                    )}
                    
                    <Typography sx={ctaSectionStyle.description}>
                        {cta.description}
                    </Typography>
                    
                    <Button variant="contained" sx={ctaSectionStyle.button}>
                        {cta.ctaText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;