'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import offerBannerStyle from '../styles/offerBannerStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

const OfferBanner: React.FC = () => {
    const { offer } = thirdPartyRiskManagementData;

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