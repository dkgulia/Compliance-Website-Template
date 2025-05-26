'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import dpdpData from '../constants/dpdpData';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const dpdpComplianceOptions = [
  'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
  'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
  'ISO 27701', 'DORA', 'CMMC', 'PDPA', 'DPDP'
];

const DpdpHeroSection: React.FC = () => {
  const { hero } = dpdpData.sections;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'ISO 27001',
    'ISO 42001',
    'ISO 27018',
    'DPDP'
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: ComplianceFormValues) => {
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
          <EnhancedComplianceForm
            title="Book Your DPDP Demo Today!"
            subtitle="Get answers to all your questions about DPDP compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.dpdpForm}
            formStyles={heroSectionStyle}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            complianceOptions={dpdpComplianceOptions}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpHeroSection;