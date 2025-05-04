'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import integrationsData from '../constants/integrationsData';

const BenefitsSection: React.FC = () => {
    const theme = useTheme();
    const styles = benefitsSectionStyle(theme);
    const { benefits } = integrationsData;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.headerBox}>
                    <Typography variant="h2" sx={styles.title}>
                        {benefits.title}
                    </Typography>
                    
                    <Typography sx={styles.description}>
                        {benefits.description}
                    </Typography>
                </Box>

                <Box sx={styles.benefitsGrid}>
                    {benefits.items.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        
                        return (
                            <Box key={index} sx={styles.benefitCard}>
                                <Box sx={styles.iconContainer}>
                                    <BenefitIcon sx={styles.benefitIcon} />
                                </Box>
                                
                                <Typography sx={styles.benefitTitle}>
                                    {benefit.title}
                                </Typography>
                                
                                <Typography sx={styles.benefitDescription}>
                                    {benefit.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default BenefitsSection;