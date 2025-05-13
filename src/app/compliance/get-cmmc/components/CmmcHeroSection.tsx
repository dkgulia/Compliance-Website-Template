'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { FormValues } from './EnhancedHeroSectionForm';


const cmmcOptionsArray = ['Level 1 (Foundational)', 'Level 2 (Advanced)', 'Level 3 (Expert)'];

const CmmcHeroSection: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([cmmcOptionsArray[0]]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: FormValues) => {
    console.log('Submitted with Values and Options:', { ...values, selectedOptions });
  };

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
            CMMC Compliance—Clear, Quick,
            <Box component="span" display="block" sx={heroSectionStyle.highlightText}>
              Automated
            </Box>
          </Typography>

          <Typography sx={heroSectionStyle.description}>
            Set your target level (Foundational 1, Advanced 2, or Expert 3), let
            HexaFort surface every gap, and generate evidence packs ready for
            your assessor.
          </Typography>

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

export default CmmcHeroSection;