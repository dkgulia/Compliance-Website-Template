'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import integrationsData from '../constants/integrationsData';


const BenefitsSection: React.FC = () => {
    const { benefits } = integrationsData;

    return (
        <Box component="section" sx={benefitsSectionStyle.section}>
            <Container sx={benefitsSectionStyle.container}>
                <Box sx={benefitsSectionStyle.headerBox}>
                    <Typography variant="h2" sx={benefitsSectionStyle.title}>
                        {benefits.title}
                    </Typography>

                    <Typography sx={benefitsSectionStyle.description}>
                        {benefits.description}
                    </Typography>
                </Box>

                <Box sx={benefitsSectionStyle.benefitsGrid}>
                    {benefits.items.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;

                        return (
                            <Box key={index} sx={benefitsSectionStyle.benefitCard}>
                                <Box sx={benefitsSectionStyle.iconContainer}>
                                    <BenefitIcon sx={benefitsSectionStyle.benefitIcon} />
                                </Box>

                                <Typography sx={benefitsSectionStyle.benefitTitle}>
                                    {benefit.title}
                                </Typography>

                                <Typography sx={benefitsSectionStyle.benefitDescription}>
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