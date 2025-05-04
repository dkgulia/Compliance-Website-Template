'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import processSectionStyle from '../styles/processSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const ProcessSection: React.FC = () => {
    const theme = useTheme();
    const styles = processSectionStyle(theme);
    const { process } = controlFrameworkData.sections;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h2" sx={styles.title}>
                        {process.title}
                    </Typography>
                    
                    {process.subtitle && (
                        <Typography sx={styles.subtitle}>
                            {process.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={styles.stepsContainer}>
                    {process.steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Box 
                                sx={{
                                    ...styles.stepWrapper,
                                    ...(index % 2 !== 0 ? styles.stepWrapperAlt : {})
                                }}
                            >
                                <Box sx={styles.stepContent}>
                                    <Typography sx={styles.stepTitle}>
                                        <Box component="span" sx={styles.stepNumber}>
                                            {index + 1}.
                                        </Box>
                                        {step.title}
                                    </Typography>
                                    
                                    <Typography sx={styles.stepDescription}>
                                        {step.description}
                                    </Typography>
                                </Box>
                                
                                <Box sx={styles.imageContainer}>
                                    <Box sx={styles.imagePlaceholder}>
                                        {step.imageAlt}
                                    </Box>
                                </Box>
                            </Box>
                            
                            {index < process.steps.length - 1 && (
                                <Box sx={styles.connector} />
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ProcessSection;