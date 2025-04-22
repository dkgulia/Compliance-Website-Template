'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHipaaHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyles from '../styles/heroSectionStyle';

const HipaaHeroSection: React.FC = () => {
  return (
    <Box sx={heroSectionStyles.box}>
      <Container sx={heroSectionStyles.containerBox}>
        <Box sx={heroSectionStyles.leftContentBox}>
          <Box sx={heroSectionStyles.chip}>
            <Typography variant="body2" sx={heroSectionStyles.chipTypography}>
              HIPAA Compliance Made Simple
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyles.mainTitle}>
            Safeguard Sensitive Healthcare Data: <br />
            <Box component="span" sx={heroSectionStyles.highlightText}>
              Automated Compliance & Risk Management
            </Box>
          </Typography>

          <Typography sx={heroSectionStyles.description}>
            HIPAA compliance ensures the protection of sensitive healthcare information. Our platform is designed to help
            organizations maintain compliance effortlessly, reduce risks, and safeguard patient data.
          </Typography>

          <Box sx={heroSectionStyles.featuresContainer}>
            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Verified sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Automated</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Compliance Monitoring</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Security sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Robust</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Security Controls</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Policy sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Thorough</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Policy Management</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={heroSectionStyles.formBox}>
          <EnhancedHipaaHeroSectionForm />
        </Box>
      </Container>
    </Box>
  );
};

export default HipaaHeroSection;