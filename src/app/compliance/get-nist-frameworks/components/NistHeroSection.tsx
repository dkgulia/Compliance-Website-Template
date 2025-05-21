'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import heroSectionStyles from '../styles/heroSectionStyle';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const NistHeroSection: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'NIST Frameworks'
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: ComplianceFormValues) => {
    console.log('Submitted with Options:', { ...values, selectedOptions });
  };

  const complianceOptions = [
    'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
    'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
    'ISO 27701', 'DORA', 'CMMC', 'PDPA'
  ];

  return (
    <Box sx={heroSectionStyles.container}>
      <Container sx={heroSectionStyles.containerBox}>
        <Box sx={heroSectionStyles.contentBox}>
          <Box sx={heroSectionStyles.tag}>
            <Typography variant="body2" sx={heroSectionStyles.tagText}>
              🔒 NIST Framework Compliance
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyles.mainTitle}>
            Main Framework Title
            <Box component="span" display="block" sx={heroSectionStyles.highlightText}>
              Framework Subtitle Highlight
            </Box>
          </Typography>

          <Typography sx={heroSectionStyles.description}>
            This is the description paragraph that explains the key benefits of this framework compliance and how your
            platform helps customers achieve and maintain compliance.
          </Typography>

          <Box sx={heroSectionStyles.featuresContainer}>
            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <VerifiedUserIcon sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Automated Assessment</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Instantly map controls</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <SecurityIcon sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Continuous Monitoring</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Real-time alerts</Typography>
              </Box>
            </Box>

            <Box sx={heroSectionStyles.featureItem}>
              <Box sx={heroSectionStyles.iconWrapper}>
                <CheckCircleOutlineIcon sx={heroSectionStyles.featureIcon} />
              </Box>
              <Box sx={heroSectionStyles.featureTextWrapper}>
                <Typography sx={heroSectionStyles.featureTitle}>Comprehensive Reporting</Typography>
                <Typography sx={heroSectionStyles.featureSubtitle}>Audit-ready</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={heroSectionStyles.formBox}>
          <EnhancedComplianceForm
            title="Book Your NIST Demo Today!"
            subtitle="Get answers to all your questions about NIST framework compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.nistForm}
            formStyles={heroSectionStyles}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            complianceOptions={complianceOptions}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NistHeroSection;