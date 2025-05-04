'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import conclusionStyle from '../styles/conclusionStyle';
import integrationsData from '../constants/integrationsData';

const ConclusionSection: React.FC = () => {
    const theme = useTheme();
    const styles = conclusionStyle(theme);
    const { conclusion } = integrationsData;

    // Function to find and style the closing line
    const highlightClosingLine = (text: string) => {
        if (text.includes("Smarter security starts with better connections")) {
            const parts = text.split("Smarter security starts with better connections");
            
            return (
                <>
                    {parts[0]}
                    <Box component="span" sx={styles.highlightText}>
                        Smarter security starts with better connections
                    </Box>
                    {parts[1]}
                </>
            );
        }
        
        return text;
    };

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.contentBox}>
                    <Typography variant="h2" sx={styles.title}>
                        {conclusion.title}
                    </Typography>
                    
                    {conclusion.description.map((paragraph, index) => (
                        <Typography key={index} sx={styles.description}>
                            {highlightClosingLine(paragraph)}
                        </Typography>
                    ))}
                    
                    <Button 
                        variant="contained" 
                        startIcon={<LockIcon />}
                        sx={styles.ctaButton}
                    >
                        Connect Your Systems Today
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ConclusionSection;