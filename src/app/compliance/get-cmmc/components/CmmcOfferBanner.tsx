'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import offerBannerStyle from '../styles/offerBannerStyle';
import { cmmcData } from '../constants/cmmcData';

const CmmcOfferBanner: React.FC = () => {
    const offerContent = cmmcData.sections.find(
        (section) => section.Sno === '6' && section.blockType === 'Top/Offer'
    );

    if (!offerContent) return null;

    return (
        <Box sx={offerBannerStyle.container}>
            <Container maxWidth="lg">
                <Box sx={offerBannerStyle.content}>
                    <Box sx={offerBannerStyle.iconContainer}>
                        <FindInPageIcon sx={offerBannerStyle.icon} />
                    </Box>
                    
                    <Typography variant="h4" component="h2" sx={offerBannerStyle.heading}>
                        {offerContent.content.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={offerBannerStyle.subtitle}>
                        {offerContent.content.subtitle}
                    </Typography>
                    
                    <Button variant="contained" sx={offerBannerStyle.button}>
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CmmcOfferBanner;