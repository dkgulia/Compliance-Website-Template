'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import soc2HeroSectionStyles from '../styles/HeroSectionStyles';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const Soc2HeroSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'SOC 2'
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
    <Box sx={soc2HeroSectionStyles.container}>
      <Container sx={soc2HeroSectionStyles.containerBox}>
        <Box sx={soc2HeroSectionStyles.contentBox}>
          <Box sx={soc2HeroSectionStyles.tag}>
            <Typography variant="body2" sx={soc2HeroSectionStyles.tagText}>
              🚀 SOC 2 Compliance, Made Easy
            </Typography>
          </Box>

          <Typography variant="h3" sx={soc2HeroSectionStyles.mainTitle}>
            SOC 2 Compliance Ready in Weeks: <br />
            <Box component="span" sx={soc2HeroSectionStyles.highlightText}>
              Secure Compliance Without the Stress
            </Box>
          </Typography>

          <Typography sx={soc2HeroSectionStyles.description}>
            Use ComplianceHub to map risks to the SOC 2 controls and run a fully-automated SOC 2 compliance checklist to ensure
            continuous compliance and a smooth SOC 2 audit report.
          </Typography>

          <Box sx={soc2HeroSectionStyles.featuresContainer}>
            <Box sx={soc2HeroSectionStyles.featureItem}>
              <Box sx={soc2HeroSectionStyles.iconWrapper}>
                <VideoCallIcon sx={soc2HeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={soc2HeroSectionStyles.featureTextWrapper}>
                <Typography sx={soc2HeroSectionStyles.featureTitle}>1:1 session</Typography>
                <Typography sx={soc2HeroSectionStyles.featureSubtitle}>Platform Implementation</Typography>
              </Box>
            </Box>

            <Box sx={soc2HeroSectionStyles.featureItem}>
              <Box sx={soc2HeroSectionStyles.iconWrapper}>
                <AccessTimeIcon sx={soc2HeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={soc2HeroSectionStyles.featureTextWrapper}>
                <Typography sx={soc2HeroSectionStyles.featureTitle}>10X</Typography>
                <Typography sx={soc2HeroSectionStyles.featureSubtitle}>Fast Audits</Typography>
              </Box>
            </Box>

            <Box sx={soc2HeroSectionStyles.featureItem}>
              <Box sx={soc2HeroSectionStyles.iconWrapper}>
                <CheckCircleOutlineIcon sx={soc2HeroSectionStyles.featureIcon} />
              </Box>
              <Box sx={soc2HeroSectionStyles.featureTextWrapper}>
                <Typography sx={soc2HeroSectionStyles.featureTitle}>100%</Typography>
                <Typography sx={soc2HeroSectionStyles.featureSubtitle}>Audit Success</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={soc2HeroSectionStyles.formBox}>
          <EnhancedComplianceForm
            title="Book Your SOC 2 Demo Today!"
            subtitle="Get answers to all your questions about SOC 2 compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.soc2Form}
            formStyles={soc2HeroSectionStyles}
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

export default Soc2HeroSection;