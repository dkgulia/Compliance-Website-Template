'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { FormValues } from './EnhancedHeroSectionForm';
import dpdpData from '../constants/dpdpData';

const DpdpHeroSection: React.FC = () => {
  const { hero } = dpdpData.sections;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'ISO 27001',
    'ISO 42001',
    'ISO 27018'
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: FormValues) => {
    console.log('Submitted with Values and Compliance Options:', {
      ...values,
      complianceOptions: selectedOptions
    });
  };

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.leftContentBox}>
          <Box sx={heroSectionStyle.tag}>
            <Typography variant="body2" sx={heroSectionStyle.tagText}>
              {dpdpData.heroTag}
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyle.mainTitle}>
            {hero.title}
            <Box component="span" display="block" sx={heroSectionStyle.highlightText}>
              {hero.subtitle}
            </Box>
          </Typography>

          <Typography sx={heroSectionStyle.description}>
            {hero.description}
          </Typography>

          <Box sx={heroSectionStyle.featuresContainer}>
            <Box sx={heroSectionStyle.featureItem}>
              <Box sx={heroSectionStyle.iconWrapper}>
                <Verified sx={heroSectionStyle.featureIcon} />
              </Box>
              <Box sx={heroSectionStyle.featureTextWrapper}>
                <Typography sx={heroSectionStyle.featureTitle}>Automated</Typography>
                <Typography sx={heroSectionStyle.featureSubtitle}>Consent Engine</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyle.featureItem}>
              <Box sx={heroSectionStyle.iconWrapper}>
                <Security sx={heroSectionStyle.featureIcon} />
              </Box>
              <Box sx={heroSectionStyle.featureTextWrapper}>
                <Typography sx={heroSectionStyle.featureTitle}>Robust</Typography>
                <Typography sx={heroSectionStyle.featureSubtitle}>Breach Playbooks</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyle.featureItem}>
              <Box sx={heroSectionStyle.iconWrapper}>
                <Policy sx={heroSectionStyle.featureIcon} />
              </Box>
              <Box sx={heroSectionStyle.featureTextWrapper}>
                <Typography sx={heroSectionStyle.featureTitle}>Thorough</Typography>
                <Typography sx={heroSectionStyle.featureSubtitle}>Penalty Dashboard</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={heroSectionStyle.formBox}>
          <EnhancedHeroSectionForm
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpHeroSection;