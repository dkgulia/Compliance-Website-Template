'use client';
import React from 'react';
import { Box, Typography, Container, Icon } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { vendorManagementData } from '../constants/vendorManagementData';

// Map for MUI icons to use when the exact icon name doesn't match
const iconMap: Record<string, string> = {
    'checklist': 'check_circle',
    'speed': 'speed',
    'auto_fix_high': 'auto_fix_high',
    'radar': 'radar',
};

const BenefitsSection: React.FC = () => {
    const { benefits } = vendorManagementData;

    return (
        <Box component="section" sx={benefitsSectionStyle.section}>
            <Container sx={benefitsSectionStyle.container}>
                <Box sx={benefitsSectionStyle.header}>
                    <Typography variant="h2" sx={benefitsSectionStyle.title}>
                        {benefits.title}
                    </Typography>
                    <Typography variant="body1" sx={benefitsSectionStyle.subtitle}>
                        {benefits.subtitle}
                    </Typography>
                </Box>

                <Box sx={benefitsSectionStyle.grid}>
                    {benefits.features.map((benefit, index) => (
                        <Box key={index} sx={benefitsSectionStyle.card}>
                            <Box sx={benefitsSectionStyle.iconContainer}>
                                <Icon>{iconMap[benefit.muiIcon] || benefit.muiIcon}</Icon>
                            </Box>
                            <Typography variant="h6" sx={benefitsSectionStyle.cardTitle}>
                                {benefit.title}
                            </Typography>
                            <Typography variant="body2" sx={benefitsSectionStyle.cardDescription}>
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