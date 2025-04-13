"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import bannerStyle from '../styles/bannerStyle';
import { ArrowForward } from '@mui/icons-material';
import pciDssData from '../constants/pciDssData';
import pciDssLockIcon from '../images/this-image-visually-represents-pci-compliance--emp.svg';
import Image from 'next/image';

const PciDssBanner: React.FC = () => {
    return (
        <Box sx={bannerStyle.box}>
            <Box sx={bannerStyle.bannerContainer}>
                <Box sx={bannerStyle.content}>
                    <Typography variant="h4" sx={bannerStyle.heading}>
                        {pciDssData.bannerTitle.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Typography>

                    <Typography variant="body1" sx={bannerStyle.description}>
                        {pciDssData.bannerDescription.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Typography>

                    <Button sx={bannerStyle.button} href="/compliance">
                        {pciDssData.bannerButtonLabel} <ArrowForward />
                    </Button>
                </Box>

                <Box sx={bannerStyle.iconWrapper}>
                    <Image src={pciDssLockIcon} alt="PCI DSS Lock" width={350} height={350} />
                </Box>
            </Box>
        </Box>
    );
};

export default PciDssBanner;