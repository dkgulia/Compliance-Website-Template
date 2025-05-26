'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { cspmData } from '../constants/cspmData';

const BenefitsSection: React.FC = () => {
    return (
        <Box component="section" sx={benefitsSectionStyle.box}>
            <Container sx={benefitsSectionStyle.container}>
                <Box sx={benefitsSectionStyle.containerBox}>
                    <Typography variant="h2" sx={benefitsSectionStyle.heading}>
                        {cspmData.benefits.title}
                    </Typography>
                    {cspmData.benefits.subtitle && (
                        <Typography variant="body1" sx={benefitsSectionStyle.subheading}>
                            {cspmData.benefits.subtitle}
                        </Typography>
                    )}
                </Box>
                
                <Box sx={benefitsSectionStyle.benefitsGrid}>
                    {cspmData.benefits.benefitsList.map((benefit, index) => (
                        <Box key={index} sx={benefitsSectionStyle.benefitCard}>
                            <Box sx={benefitsSectionStyle.iconContainer}>
                                <benefit.muiIcon sx={benefitsSectionStyle.icon} />
                            </Box>
                            <Typography variant="h3" sx={benefitsSectionStyle.benefitTitle}>
                                {benefit.title}
                            </Typography>
                            <Typography variant="body1" sx={benefitsSectionStyle.benefitDescription}>
                                {benefit.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default BenefitsSection;