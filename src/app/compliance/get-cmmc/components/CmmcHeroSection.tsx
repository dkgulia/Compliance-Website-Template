'use client';
import React from 'react';
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { cmmcData } from '../constants/cmmcData';

const CmmcHeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const heroContent = cmmcData.sections.find(
    (section) => section.Sno === '1' && section.blockType === 'Hero'
  );

  if (!heroContent) return null;

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.leftContentBox}>
          <Box sx={heroSectionStyle.chip}>
            <Typography variant="body2" sx={heroSectionStyle.chipTypography}>
              🔒 CMMC compliance made easy
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyle.mainTitle}>
            CMMC Compliance—Clear, Quick, <br />
            <Box component="span" sx={heroSectionStyle.highlightText}>
              Automated
            </Box>
          </Typography>

          <Typography sx={heroSectionStyle.description}>
            Set your target level (Foundational 1, Advanced 2, or Expert 3), let
            HexaFort surface every gap, and generate evidence packs ready for
            your assessor.
          </Typography>

          {isMobile ? (
            <Box sx={heroSectionStyle.statsContainer}>
              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Verified sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Automated</Typography>
                <Typography sx={heroSectionStyle.statLabel}>Compliance Monitoring</Typography>
              </Box>

              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Security sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Robust</Typography>
                <Typography sx={heroSectionStyle.statLabel}>Security Controls</Typography>
              </Box>

              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Policy sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Thorough</Typography>
                <Typography sx={heroSectionStyle.statLabel}>Policy Management</Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={heroSectionStyle.featuresContainer}>
              <Box sx={heroSectionStyle.featureItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Verified sx={heroSectionStyle.featureIcon} />
                </Box>
                <Box sx={heroSectionStyle.featureTextWrapper}>
                  <Typography sx={heroSectionStyle.featureTitle}>Automated</Typography>
                  <Typography sx={heroSectionStyle.featureSubtitle}>Compliance Monitoring</Typography>
                </Box>
              </Box>


              <Box sx={heroSectionStyle.featureItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Security sx={heroSectionStyle.featureIcon} />
                </Box>
                <Box sx={heroSectionStyle.featureTextWrapper}>
                  <Typography sx={heroSectionStyle.featureTitle}>Robust</Typography>
                  <Typography sx={heroSectionStyle.featureSubtitle}>Security Controls</Typography>
                </Box>
              </Box>

              <Box sx={heroSectionStyle.featureItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Policy sx={heroSectionStyle.featureIcon} />
                </Box>
                <Box sx={heroSectionStyle.featureTextWrapper}>
                  <Typography sx={heroSectionStyle.featureTitle}>Thorough</Typography>
                  <Typography sx={heroSectionStyle.featureSubtitle}>Policy Management</Typography>
                </Box>
              </Box>
            </Box>
          )}


        </Box>

        <Box sx={heroSectionStyle.formBox}>
          <EnhancedHeroSectionForm />
        </Box>
      </Container>
    </Box>
  );
};

export default CmmcHeroSection;