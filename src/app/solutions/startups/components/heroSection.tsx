'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroSectionStyle from '../styles/heroSectionStyle';
import hexafortData from '../constant/dataFile';
import Image from 'next/image';
import heroImage from '../images/heroSection-startup.png'

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { description, callToAction } = hexafortData.heroSection;

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
              HexaFort Secure presents a comprehensive startup package designed to implement and achieve certification for ISO 27001, SOC 2 Type I, and SOC 2 Type II, alongside establishing a foundation for GDPR compliance.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={heroSectionStyle.ctaButton}
            >
              {callToAction || 'Schedule a consultation'}
            </Button>
          </Box>

          <Box sx={heroSectionStyle.visualContainer}>
            <Box sx={heroSectionStyle.coreVisual}>
              <Image
                src={heroImage}
                alt="Compliance certification for startups"
                layout="fill"
                objectFit="contain"
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