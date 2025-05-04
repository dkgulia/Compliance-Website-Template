'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const CTASection: React.FC = () => {
    const theme = useTheme();
    const styles = ctaSectionStyle(theme);
    const { callToAction } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.textContent}>
                        <Typography variant="h2" sx={styles.title}>
                            {callToAction.title}
                        </Typography>
                        
                        <Typography sx={styles.description}>
                            {callToAction.description}
                        </Typography>
                        
                        <Button 
                            variant="contained" 
                            endIcon={<ArrowForwardIcon />}
                            sx={styles.ctaButton}
                        >
                            {callToAction.ctaText}
                        </Button>
                    </Box>
                    
                    <Box sx={styles.imageContainer}>
                        <Box sx={styles.imagePlaceholder}>
                            {callToAction.imageAlt}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;