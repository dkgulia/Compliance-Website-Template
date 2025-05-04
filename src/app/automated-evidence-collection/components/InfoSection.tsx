'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import infoSectionStyle from '../styles/infoSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const InfoSection: React.FC = () => {
    const theme = useTheme();
    const styles = infoSectionStyle(theme);
    const { infoSection } = evidenceCollectionData;

    return (
        <Box component="section" sx={styles.section}>
            <Container maxWidth="lg" sx={styles.container}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.imageContainer}>
                        {/* Placeholder for future image */}
                        <Box sx={styles.placeholderBox}>
                            <Typography sx={styles.placeholderText}>
                                {infoSection.imageAlt}
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={styles.textContent}>
                        <Typography variant="h2" sx={styles.title}>
                            {infoSection.title}
                        </Typography>
                        {infoSection.description.map((paragraph, index) => (
                            <Typography key={index} sx={styles.description}>
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default InfoSection;