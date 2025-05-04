'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const CTASection: React.FC = () => {
    const theme = useTheme();
    const styles = ctaSectionStyle(theme);
    const { cta } = evidenceCollectionData;

    return (
        <Box component="section" sx={styles.section}>
            <Container maxWidth="lg" sx={styles.container}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.textContent}>
                        <Typography variant="h2" sx={styles.title}>
                            {cta.title}
                        </Typography>
                        {cta.subtitle && (
                            <Typography sx={styles.subtitle}>
                                {cta.subtitle}
                            </Typography>
                        )}
                        <Typography sx={styles.description}>
                            {cta.description}
                        </Typography>
                        <Button 
                            variant="contained" 
                            endIcon={<ArrowForwardIcon />}
                            sx={styles.ctaButton}
                        >
                            {cta.ctaText}
                        </Button>
                    </Box>
                    
                    <Box sx={styles.imageContainer}>
                        {/* Placeholder for future image */}
                        <Box sx={styles.placeholderBox}>
                            <Typography sx={styles.placeholderText}>
                                {cta.imageAlt}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;