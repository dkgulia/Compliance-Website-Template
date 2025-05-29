'use client';
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import heroSectionStyle from '../styles/heroSectionStyle';
import hexafortData from '../constant/dataFile';
import Image from 'next/image';
import heroImage from '../images/startupHero copy.png'
import HexaButton from '../../../Button/HexaFortButton';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const { description, callToAction } = hexafortData.heroSection;

  const handleCtaClick = () => {
    router.push('/get-a-demo');
  };

  return (
    <Box sx={heroSectionStyle.container}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={heroSectionStyle.contentContainer}>
          <Box sx={heroSectionStyle.textContent}>
            <Box sx={heroSectionStyle.tagWrapper}>
              <Box sx={heroSectionStyle.tag}>
                <Typography sx={heroSectionStyle.tagText}>
                  Security & Compliance
                </Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyle.titleWrapper}>
              <Typography variant="h1" sx={heroSectionStyle.titleLine}>
                Comprehensive
              </Typography>
              <Typography variant="h1" sx={heroSectionStyle.titleLine}>
                <Box component="span" sx={heroSectionStyle.highlightText}>
                  Compliance
                </Box>
              </Typography>
              <Typography variant="h1" sx={heroSectionStyle.titleLine}>
                Package for Startups
              </Typography>
            </Box>

            <Typography sx={heroSectionStyle.description}>
              HexaFort  presents a comprehensive startup package designed to implement and achieve certification for ISO 27001, SOC 2, alongside establishing a foundation for GDPR compliance.
            </Typography>

            <HexaButton
              endIcon={<ArrowForwardIcon />}
              onClick={handleCtaClick}
            >
              {callToAction || 'Schedule a consultation'}
            </HexaButton>
          </Box>

          <Box sx={heroSectionStyle.visualContainer}>
            <Box sx={heroSectionStyle.coreVisual}>
              <Image
                src={heroImage}
                alt="Compliance certification for startups"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;