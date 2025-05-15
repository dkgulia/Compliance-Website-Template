'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import trustedCompaniesSectionStyle from '../styles/trustedCompaniesSectionStyle';

const logos = [
  { src: "/images/finstackk-logo.png", alt: 'Finstackk' },
  { src: "/images/dartle-logo.png", alt: 'Dartle' },
  { src: "/images/ccs-global-logo.png", alt: 'CCS Global Tech' },
  { src: "/images/itpa-logo.png", alt: 'ITPA' },
  { src: "/images/intain-logo.png", alt: 'Intain' },
  { src: "/images/indivillage-logo.png", alt: 'Indivillage' },
  { src: "/images/pazcare-logo.png", alt: 'Pazcare' },
];

const TrustedCompaniesSection: React.FC = () => {
    return (
        <Box component="section" sx={trustedCompaniesSectionStyle.section}>
            <Typography
                variant="body2"
                sx={trustedCompaniesSectionStyle.titleText}
            >
                Trusted by fast-growing companies worldwide
            </Typography>

            <Box sx={trustedCompaniesSectionStyle.marqueeOuter}>
                <Box sx={trustedCompaniesSectionStyle.marqueeContainer}>
                    {logos.map((logo, index) => (
                        <Box key={index} sx={trustedCompaniesSectionStyle.logoBox}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={trustedCompaniesSectionStyle.logoImage}
                            />
                        </Box>
                    ))}

                    {logos.map((logo, index) => (
                        <Box key={`dup-${index}`} sx={trustedCompaniesSectionStyle.logoBox}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={trustedCompaniesSectionStyle.logoImage}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TrustedCompaniesSection;