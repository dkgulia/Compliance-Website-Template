'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const BenefitsSection: React.FC = () => {
    const { benefits } = iso42001Data.sections;

    return (
        <Box sx={benefitsSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={benefitsSectionStyle.innerContainer}>
                    <Box sx={benefitsSectionStyle.titleContainer}>
                        <Typography variant="h2" sx={benefitsSectionStyle.title}>
                            {benefits.title}
                        </Typography>
                        {benefits.subtitle && (
                            <Typography variant="h6" sx={benefitsSectionStyle.subtitle}>
                                {benefits.subtitle}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={benefitsSectionStyle.cardsContainer}>
                        {benefits.items.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <Box key={index} sx={benefitsSectionStyle.card}>
                                    <Box sx={benefitsSectionStyle.iconContainer}>
                                        <Icon sx={benefitsSectionStyle.icon} />
                                    </Box>
                                    <Typography variant="h6" sx={benefitsSectionStyle.cardTitle}>
                                        {benefit.title}
                                    </Typography>
                                    <Typography sx={benefitsSectionStyle.cardDescription}>
                                        {benefit.description}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BenefitsSection;