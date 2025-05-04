'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import offerBannerStyle from '../styles/offerBannerStyle';
import { vendorManagementData } from '../constants/vendorManagementData';

const OfferBanner: React.FC = () => {
    const { offer } = vendorManagementData;

    return (
        <Box component="section" sx={offerBannerStyle.section}>
            <Container sx={offerBannerStyle.container}>
                <Typography variant="h3" sx={offerBannerStyle.title}>
                    {offer.title}
                </Typography>
                <Typography variant="subtitle1" sx={offerBannerStyle.subtitle}>
                    {offer.subtitle}
                </Typography>
            </Container>
        </Box>
    );
};

export default OfferBanner;