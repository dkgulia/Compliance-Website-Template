'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const cmmcComplianceOptions = [
  'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
  'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
  'ISO 27701', 'DORA', 'CMMC', 'PDPA'
];

const CmmcHeroSection: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['CMMC']);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: ComplianceFormValues) => {
    console.log('Submitted with Values and Options:', { ...values, selectedOptions });
  };

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.leftContentBox}>
          <Box sx={heroSectionStyle.tag}>
            <Typography variant="body2" sx={heroSectionStyle.tagText}>
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
          <EnhancedComplianceForm
            title="Book Your CMMC Demo Today!"
            subtitle="Get answers to all your questions about CMMC compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.cmmcForm}
            formStyles={heroSectionStyle}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            complianceOptions={cmmcComplianceOptions}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CmmcHeroSection;