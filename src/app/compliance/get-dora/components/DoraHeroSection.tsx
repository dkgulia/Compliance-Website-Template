'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraHeroStyle from '../styles/doraHeroStyle';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const doraComplianceOptions = [
  'ISO 27001',
  'ISO 42001',
  'ISO 27018',
  'SOC 2',
  'GDPR',
  'HIPAA',
  'CCPA',
  'PCI DSS',
  'NIST Frameworks',
  'ISO 22301',
  'ISO 20000-1',
  'ISO 27701',
  'DORA',
  'CMMC',
  'PDPA',
];

export default function DoraHeroSection() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['DORA']);

  const handleOptionsChange = (newOptions: string[]) => {
    setSelectedOptions(newOptions);
  };

  const handleSubmitCallback = (values: ComplianceFormValues) => {
    console.log('Submitted with Values and Options:', {
      ...values,
      selectedOptions,
    });
  };

  return (
    <Box sx={DoraHeroStyle.container}>
      <Container sx={DoraHeroStyle.containerBox}>
        <Box sx={DoraHeroStyle.contentBox}>
          <Typography sx={DoraHeroStyle.tagline}>
            DORA compliance made easy
          </Typography>
          <Typography variant="h2" sx={DoraHeroStyle.title}>
            {complianceData.heroTitle}
          </Typography>
          <Typography variant="h5" sx={DoraHeroStyle.subtitle}>
            {complianceData.heroSubtitle}
          </Typography>

          <Box sx={DoraHeroStyle.listContainer}>
            {complianceData.heroDescription.map((desc, i) => (
              <Typography key={i} sx={DoraHeroStyle.listItem}>
                {desc}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={DoraHeroStyle.formBox}>
          <EnhancedComplianceForm
            title="Book Your DORA Demo Today!"
            subtitle="Get answers to all your questions about DORA compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.doraForm}
            formStyles={DoraHeroStyle}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
            complianceOptions={doraComplianceOptions}
            onSubmitCallback={handleSubmitCallback}
          />
        </Box>
      </Container>
    </Box>
  );
}
