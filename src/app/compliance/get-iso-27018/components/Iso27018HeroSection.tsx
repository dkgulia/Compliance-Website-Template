'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import heroSectionStyles from '../styles/heroSectionStyle';
import EnhancedCcpaHeroSectionForm from './EnhancedCcpaHeroSectionForm';
import theme from '../../../../theme';
import { ComplianceOptions } from '../../../constants/complianceData';

const Iso27018HeroSection: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    ComplianceOptions.ISO27018,
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: { fullName: string; email: string }) => {
    console.log('Submitted with Options:', { ...values, selectedOptions });
  };

  return (
    <Box sx={heroSectionStyles.container}>
      <Container sx={heroSectionStyles.containerBox}>
        <Box sx={heroSectionStyles.leftContentBox}>
          <Box sx={heroSectionStyles.tag}>
            <Typography variant="body2" sx={heroSectionStyles.tagText}>
              ISO 27018 Compliance
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyles.mainTitle}>
            Safeguard PII in the Cloud
            <Box component="span" display="block" sx={heroSectionStyles.highlightText}>
              Strengthen Cloud Privacy and Security
            </Box>
          </Typography>

          <Typography sx={heroSectionStyles.description}>
            ISO 27018 adds specialized controls to ISO 27001 for protecting personally identifiable
            information (PII) in cloud environments. Demonstrate your commitment to privacy, build client
            trust, and meet international data protection requirements.
          </Typography>

          <Box sx={heroSectionStyles.featuresContainer}>
            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Verified sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>PII-Focused</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Controls</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Security sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Robust</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Cloud Security</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <Policy sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Compliance</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>& Trust</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={heroSectionStyles.formBox}>
          <EnhancedCcpaHeroSectionForm
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Iso27018HeroSection;