'use client';
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import heroSectionStyle from '../styles/heroSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701HeroSection: React.FC = () => {
  return (
    <Box sx={heroSectionStyle.mainContainer} id="hero-section">
      <Box sx={heroSectionStyle.contentWrapper}>
        <Box sx={heroSectionStyle.chip}>
          <Typography variant="body1" sx={heroSectionStyle.chipTypography}>
            {iso27701Data.heroTitle}
          </Typography>
        </Box>

        <Box sx={heroSectionStyle.textContainer}>
          <Typography variant="h1" sx={heroSectionStyle.heading}>
            Extend Your ISMS for Cutting-Edge Data Security and Privacy Compliance
          </Typography>
          <Typography variant="h6" sx={heroSectionStyle.subheading}>
            Enhance Your Privacy Management Framework
          </Typography>

          <Typography variant="body1" sx={heroSectionStyle.description}>
            Use ISO 27701 to map risks to data privacy controls and run a fully-automated compliance checklist to ensure
            continuous compliance and a smooth audit report.
          </Typography>
        </Box>

        <Box sx={heroSectionStyle.statsContainer}>
          <Box sx={heroSectionStyle.statCard}>
            <Box sx={heroSectionStyle.statContent}>
              <Typography variant="h3" sx={heroSectionStyle.statValue}>1:1</Typography>
              <Box sx={heroSectionStyle.statDetails}>
                <Box sx={heroSectionStyle.statIconBox}>
                  <AssignmentIcon sx={heroSectionStyle.statIcon} />
                </Box>
                <Typography variant="body2" sx={heroSectionStyle.statLabel}>
                  Platform Implementation
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={heroSectionStyle.statCard}>
            <Box sx={heroSectionStyle.statContent}>
              <Typography variant="h3" sx={heroSectionStyle.statValue}>10X</Typography>
              <Box sx={heroSectionStyle.statDetails}>
                <Box sx={heroSectionStyle.statIconBox}>
                  <AccessTimeIcon sx={heroSectionStyle.statIcon} />
                </Box>
                <Typography variant="body2" sx={heroSectionStyle.statLabel}>
                  Fast Audits
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={heroSectionStyle.statCard}>
            <Box sx={heroSectionStyle.statContent}>
              <Typography variant="h3" sx={heroSectionStyle.statValue}>100%</Typography>
              <Box sx={heroSectionStyle.statDetails}>
                <Box sx={heroSectionStyle.statIconBox}>
                  <CheckCircleIcon sx={heroSectionStyle.statIcon} />
                </Box>
                <Typography variant="body2" sx={heroSectionStyle.statLabel}>
                  Audit Success
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          href="/compliance"
          sx={heroSectionStyle.ctaButton}
          aria-label="Start Your ISO 27701 Journey"
        >
          Start Your ISO 27701 Journey
        </Button>
      </Box>
    </Box>
  );
};

export default Iso27701HeroSection;