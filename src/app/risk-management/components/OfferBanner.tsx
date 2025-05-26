'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import offerBannerStyle from '../styles/offerBannerStyle';
import { riskManagementData } from '../constants/riskManagementData';

const OfferBanner: React.FC = () => {
    const offerContent = riskManagementData.sections.find(
        (section) => section.Sno === '6' && section.blockType === 'Top/Offer'
    );

    if (!offerContent) return null;

    return (
        <Box sx={offerBannerStyle.container}>
            <Box sx={offerBannerStyle.innerBox}>
                <AccessTimeIcon sx={offerBannerStyle.icon} />

                <Typography variant="h2" sx={offerBannerStyle.heading}>
                    {offerContent.content.title}
                </Typography>

                <Typography sx={offerBannerStyle.subtitle}>
                    Lightning Fast Setup in Minutes
                </Typography>
            </Box>
        </Box>
    );
};

export default OfferBanner;