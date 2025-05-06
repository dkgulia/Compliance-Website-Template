'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import offerBannerStyle from '../styles/offerBannerStyle';
import { cmmcData } from '../constants/cmmcData';
import cmmcBannerImg from '../images/cmmc-demo.png';

const CmmcOfferBanner: React.FC = () => {
    const offerContent = cmmcData.sections.find(
        (section) => section.Sno === '6' && section.blockType === 'Top/Offer'
    );

    if (!offerContent) return null;

    return (
        <Box sx={offerBannerStyle.box}>
            <Box sx={offerBannerStyle.container}>
                <Box sx={offerBannerStyle.content}>
                    <Typography variant="h4" sx={offerBannerStyle.heading}>
                        {offerContent.content.title}
                    </Typography>
                    <Typography variant="body1" sx={offerBannerStyle.description}>
                        {offerContent.content.subtitle}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={offerBannerStyle.button}
                        href="/compliance"
                        endIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
                    >
                        Book Your Demo
                    </Button>
                </Box>
                <Box sx={offerBannerStyle.imageWrapper}>
                    <Image
                        src={cmmcBannerImg}
                        alt="CMMC Compliance"
                        width={300}
                        height={150}
                        style={{ borderRadius: '8px' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CmmcOfferBanner;