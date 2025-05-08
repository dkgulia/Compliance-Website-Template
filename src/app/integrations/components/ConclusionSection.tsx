'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import conclusionStyle from '../styles/conclusionStyle';
import integrationsData from '../constants/integrationsData';

const ConclusionSection: React.FC = () => {
    const { conclusion } = integrationsData;
    const highlightClosingLine = (text: string) => {
        if (text.includes("Smarter security starts with better connections")) {
            const parts = text.split("Smarter security starts with better connections");

            return (
                <>
                    {parts[0]}
                    <Box component="span" sx={conclusionStyle.highlightText}>
                        Smarter security starts with better connections
                    </Box>
                    {parts[1]}
                </>
            );
        }

        return text;
    };

    return (
        <Box component="section" sx={conclusionStyle.section}>
            <Container sx={conclusionStyle.container}>
                <Box sx={conclusionStyle.contentBox}>
                    <Typography variant="h2" sx={conclusionStyle.title}>
                        {conclusion.title}
                    </Typography>

                    {conclusion.description.map((paragraph, index) => (
                        <Typography key={index} sx={conclusionStyle.description}>
                            {highlightClosingLine(paragraph)}
                        </Typography>
                    ))}

                    <Button
                        variant="contained"
                        startIcon={<LockIcon />}
                        sx={conclusionStyle.ctaButton}
                    >
                        Connect Your Systems Today
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ConclusionSection;