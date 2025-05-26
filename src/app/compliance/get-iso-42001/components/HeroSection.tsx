'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { hero } = iso42001Data.sections;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'ISO 42001'
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleFormSubmit = (values: ComplianceFormValues) => {
    console.log('Form submitted with values:', { ...values, selectedOptions });
  };

  const complianceOptions = [
    'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
    'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
    'ISO 27701', 'DORA', 'CMMC', 'PDPA'
  ];

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
          <EnhancedComplianceForm
            title="Book Your ISO 42001 Demo Today!"
            subtitle="Get answers to all your questions about ISO 42001 compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.iso42001Form}
            formStyles={heroSectionStyle}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            complianceOptions={complianceOptions}
            onSubmitCallback={handleFormSubmit}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;