'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShieldIcon from '@mui/icons-material/Shield';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import heroSectionStyle from '../styles/heroSectionStyle';
import hexafortData from '../constant/dataFile';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { description, callToAction } = hexafortData.heroSection;

  // const metrics = [
  //   { value: '3', label: 'Certifications' },
  //   { value: '8', label: 'Weeks' },
  //   { value: '$7K', label: 'Investment' }
  // ];

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

            {/* <Box sx={heroSectionStyle.metricsContainer}>
              {metrics.map((metric, index) => (
                <Box key={metric.label} sx={heroSectionStyle.metricItem}>
                  <Typography sx={heroSectionStyle.metricValue}>
                    {metric.value}
                  </Typography>
                  <Typography sx={heroSectionStyle.metricLabel}>
                    {metric.label}
                  </Typography>
                </Box>
              ))}
            </Box> */}
          </Box>

          <Box sx={heroSectionStyle.visualContainer}>
            <Box sx={heroSectionStyle.coreVisual}>
              <Box sx={heroSectionStyle.gridPattern} />
              <Box sx={{...heroSectionStyle.certIcons, ...heroSectionStyle.certIcon1}}>
                <ShieldIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />
              </Box>

              <Box sx={{...heroSectionStyle.certIcons, ...heroSectionStyle.certIcon2}}>
                <SecurityIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />
              </Box>

              <Box sx={{...heroSectionStyle.certIcons, ...heroSectionStyle.certIcon3}}>
                <VerifiedUserIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />
              </Box>

              <Typography variant="body1" sx={heroSectionStyle.placeholderText}>
                Streamlined compliance certification for your startup's growth and security
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;