// HIPAAHeroSection.tsx
'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import hipaaHeroSectionStyles from '../styles/heroSectionStyle';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const HIPAAHeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'ISO 27001',
    'ISO 42001',
    'ISO 27018',
    'HIPAA'
  ]);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: ComplianceFormValues) => {
    console.log('Submitted with Values and Options:', { ...values, selectedOptions });
  };

  const complianceOptions = [
    'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
    'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
    'ISO 27701', 'DORA', 'CMMC', 'PDPA'
  ];

  return (
    <Box sx={hipaaHeroSectionStyles.container}>
      <Container sx={hipaaHeroSectionStyles.containerBox}>
        <Box sx={hipaaHeroSectionStyles.leftContentBox}>
          <Box sx={hipaaHeroSectionStyles.chip}>
            <Typography variant="body2" sx={hipaaHeroSectionStyles.chipTypography}>
              🔒 HIPAA Compliance Made Simple
            </Typography>
          </Box>

          <Typography variant="h3" sx={hipaaHeroSectionStyles.mainTitle}>
            Safeguard Sensitive Healthcare Data: <br />
            <Box component="span" sx={hipaaHeroSectionStyles.highlightText}>
              Automated Compliance & Risk Management
            </Box>
          </Typography>

          <Typography sx={hipaaHeroSectionStyles.description}>
            HIPAA compliance ensures the protection of sensitive healthcare information. Our platform is designed to
            help organizations maintain compliance effortlessly, reduce risks, and safeguard patient data.
          </Typography>

          {isMobile ? (
            <Box>
              <Box sx={hipaaHeroSectionStyles.statItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Verified sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Typography sx={hipaaHeroSectionStyles.statValue}>Automated</Typography>
                <Typography sx={hipaaHeroSectionStyles.statLabel}>Compliance Monitoring</Typography>
              </Box>
              <Box sx={hipaaHeroSectionStyles.statItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Security sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Typography sx={hipaaHeroSectionStyles.statValue}>Robust</Typography>
                <Typography sx={hipaaHeroSectionStyles.statLabel}>Security Controls</Typography>
              </Box>
              <Box sx={hipaaHeroSectionStyles.statItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Policy sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Typography sx={hipaaHeroSectionStyles.statValue}>Thorough</Typography>
                <Typography sx={hipaaHeroSectionStyles.statLabel}>Policy Management</Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={hipaaHeroSectionStyles.featuresContainer}>
              <Box sx={hipaaHeroSectionStyles.featureItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Verified sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Box sx={hipaaHeroSectionStyles.featureTextWrapper}>
                  <Typography sx={hipaaHeroSectionStyles.featureTitle}>Automated</Typography>
                  <Typography sx={hipaaHeroSectionStyles.featureSubtitle}>Compliance Monitoring</Typography>
                </Box>
              </Box>
              <Box sx={hipaaHeroSectionStyles.featureItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Security sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Box sx={hipaaHeroSectionStyles.featureTextWrapper}>
                  <Typography sx={hipaaHeroSectionStyles.featureTitle}>Robust</Typography>
                  <Typography sx={hipaaHeroSectionStyles.featureSubtitle}>Security Controls</Typography>
                </Box>
              </Box>
              <Box sx={hipaaHeroSectionStyles.featureItem}>
                <Box sx={hipaaHeroSectionStyles.iconWrapper}>
                  <Policy sx={hipaaHeroSectionStyles.featureIcon} />
                </Box>
                <Box sx={hipaaHeroSectionStyles.featureTextWrapper}>
                  <Typography sx={hipaaHeroSectionStyles.featureTitle}>Thorough</Typography>
                  <Typography sx={hipaaHeroSectionStyles.featureSubtitle}>Policy Management</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={hipaaHeroSectionStyles.formBox}>
          <EnhancedComplianceForm
            title="Book Your HIPAA Demo Today!"
            subtitle="Get answers to all your questions about HIPAA compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.hipaaForm}
            formStyles={hipaaHeroSectionStyles}
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

export default HIPAAHeroSection;