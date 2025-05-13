'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import { ComplianceOptions } from '../../../constants/complianceData';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { hero } = iso42001Data.sections;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    ComplianceOptions.ISO42001,
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleFormSubmit = (values: any) => {
    console.log('Form submitted with values:', { ...values, selectedOptions });

  };

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.contentBox}>
          <Box sx={heroSectionStyle.tag}>
            <Typography variant="body2" sx={heroSectionStyle.tagText}>
              🤖 ISO / IEC 42001
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyle.mainTitle}>
            {hero.title}
            <Box component="span" display="block" sx={heroSectionStyle.highlightText}>
              {hero.subtitle}
            </Box>
          </Typography>

          <Typography sx={heroSectionStyle.description}>
            {hero.description[0]}
          </Typography>

          {isMobile ? (
            <Box sx={heroSectionStyle.statsContainer}>
              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Verified sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Automated</Typography>
                <Typography sx={heroSectionStyle.statLabel}>AI Governance</Typography>
              </Box>

              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Security sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Robust</Typography>
                <Typography sx={heroSectionStyle.statLabel}>Risk Management</Typography>
              </Box>

              <Box sx={heroSectionStyle.statItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Policy sx={heroSectionStyle.featureIcon} />
                </Box>
                <Typography sx={heroSectionStyle.statValue}>Thorough</Typography>
                <Typography sx={heroSectionStyle.statLabel}>Audit Reports</Typography>
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
                  <Typography sx={heroSectionStyle.featureSubtitle}>AI Governance</Typography>
                </Box>
              </Box>

              <Box sx={heroSectionStyle.featureItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Security sx={heroSectionStyle.featureIcon} />
                </Box>
                <Box sx={heroSectionStyle.featureTextWrapper}>
                  <Typography sx={heroSectionStyle.featureTitle}>Robust</Typography>
                  <Typography sx={heroSectionStyle.featureSubtitle}>Risk Management</Typography>
                </Box>
              </Box>

              <Box sx={heroSectionStyle.featureItem}>
                <Box sx={heroSectionStyle.iconWrapper}>
                  <Policy sx={heroSectionStyle.featureIcon} />
                </Box>
                <Box sx={heroSectionStyle.featureTextWrapper}>
                  <Typography sx={heroSectionStyle.featureTitle}>Thorough</Typography>
                  <Typography sx={heroSectionStyle.featureSubtitle}>Audit Reports</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={heroSectionStyle.formBox}>
          <EnhancedHeroSectionForm
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            onSubmitCallback={handleFormSubmit}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;