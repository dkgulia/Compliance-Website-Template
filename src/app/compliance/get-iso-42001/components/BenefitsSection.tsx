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
                <Grid container spacing={3}>
                    {benefits.items.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Box sx={benefitsSectionStyle.card}>
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
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default BenefitsSection;