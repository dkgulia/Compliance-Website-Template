'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import heroSectionStyle from '../styles/heroSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';
import Image from 'next/image';
import controlFrameworkHero from '../images/ccf-hero.png';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
    const { hero } = controlFrameworkData.sections;
    const router = useRouter();

    return (
        <Box component="section" sx={heroSectionStyle.heroContainer}>
            <Box sx={heroSectionStyle.contentBox}>
                <Typography sx={heroSectionStyle.tagline}>
                    CUSTOMIZABLE FRAMEWORK
                </Typography>

                <Typography sx={heroSectionStyle.title}>
                    {hero.title}
                </Typography>

                <Typography sx={heroSectionStyle.subtitle}>
                    {hero.subtitle}
                </Typography>

                {hero.description.map((paragraph, index) => (
                    <Typography key={index} sx={heroSectionStyle.description}>
                        {paragraph}
                    </Typography>
                ))}

                <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={heroSectionStyle.button}
                    onClick={() => router.push('/get-a-product-demo')}
                >
                    {hero.ctaText}
                </Button>
            </Box>

            <Box sx={heroSectionStyle.imageBox}>
                <Box sx={heroSectionStyle.imageWrapper}>
                    <Image
                        src={controlFrameworkHero}
                        alt={hero.imageAlt || "Control Framework Dashboard"}
                        fill
                        style={heroSectionStyle.heroImage}
                        priority
                        sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 500px"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;