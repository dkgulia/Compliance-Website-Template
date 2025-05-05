'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EnhancedCcpaHeroSectionForm from './EnhancedCcpaHeroSectionForm';
import ccpaHeroSectionStyles from '../styles/heroSectionStyle';
import theme from '../../../../theme';

const CcpaHeroSection = () => {
  return (
    <Box sx={ccpaHeroSectionStyles.container}>
      <Container sx={ccpaHeroSectionStyles.containerBox}>
        <Box sx={ccpaHeroSectionStyles.leftContentBox}>
          <Box sx={ccpaHeroSectionStyles.tag}>
            <Typography variant="body2" sx={ccpaHeroSectionStyles.tagText}>
              🔒 CCPA Compliance, Made Simple
            </Typography>
          </Box>
          <Typography variant="h3" sx={ccpaHeroSectionStyles.mainTitle}>
            California Consumer Privacy Act:
            <Box component="span" display="block" sx={ccpaHeroSectionStyles.highlightText}>
              Protect Data & Build Trust
            </Box>
          </Typography>
          <Typography sx={ccpaHeroSectionStyles.description}>
          HexaFort streamlines your journey to CCPA compliance with automated data inventories, DSAR tracking, and robust security controls. Empower consumers and protect their data while maintaining regulatory compliance.
          </Typography>
          <Box sx={ccpaHeroSectionStyles.featuresContainer}>
            <Box sx={ccpaHeroSectionStyles.featureItem}>
              <Box sx={ccpaHeroSectionStyles.iconWrapper}>
                <VerifiedUserIcon sx={ccpaHeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={ccpaHeroSectionStyles.featureTextWrapper}>
                <Typography sx={ccpaHeroSectionStyles.featureTitle}>Simplified</Typography>
                <Typography sx={ccpaHeroSectionStyles.featureSubtitle}>DSAR Management</Typography>
              </Box>
            </Box>
            <Box sx={ccpaHeroSectionStyles.featureItem}>
              <Box sx={ccpaHeroSectionStyles.iconWrapper}>
                <SecurityIcon sx={ccpaHeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={ccpaHeroSectionStyles.featureTextWrapper}>
                <Typography sx={ccpaHeroSectionStyles.featureTitle}>Complete</Typography>
                <Typography sx={ccpaHeroSectionStyles.featureSubtitle}>Data Protection</Typography>
              </Box>
            </Box>
            <Box sx={ccpaHeroSectionStyles.featureItem}>
              <Box sx={ccpaHeroSectionStyles.iconWrapper}>
                <CheckCircleOutlineIcon sx={ccpaHeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={ccpaHeroSectionStyles.featureTextWrapper}>
                <Typography sx={ccpaHeroSectionStyles.featureTitle}>100%</Typography>
                <Typography sx={ccpaHeroSectionStyles.featureSubtitle}>Compliance Rate</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={ccpaHeroSectionStyles.formBox}>
          <EnhancedCcpaHeroSectionForm />
        </Box>
      </Container>
    </Box>
  );
};

export default CcpaHeroSection;