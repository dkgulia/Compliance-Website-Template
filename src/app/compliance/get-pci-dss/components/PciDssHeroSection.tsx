'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import pciDssData from '../constants/pciDssData';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const PciDssHeroSection: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'PCI DSS'
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
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.contentBox}>
          <Box sx={heroSectionStyle.tag}>
            <Typography variant="body2" sx={heroSectionStyle.tagText}>
              {pciDssData.heroTitle}
            </Typography>
          </Box>

          <Typography variant="h3" sx={heroSectionStyle.mainTitle}>
            {pciDssData.heroSubtitle}
            <Box component="span" display="block" sx={heroSectionStyle.highlightText}>
              {pciDssData.highlightText}
            </Box>
          </Typography>

          <Typography sx={heroSectionStyle.description}>
            {pciDssData.heroDescription[0]}
          </Typography>

          <Box sx={heroSectionStyle.featuresContainer}>
            {pciDssData.heroBullets.map((item, index) => {
              const Icon = item.icon;
              return (
                <Box key={index} sx={heroSectionStyle.featureItem}>
                  <Box sx={heroSectionStyle.iconWrapper}>
                    <Icon sx={heroSectionStyle.featureIcon} />
                  </Box>
                  <Box sx={heroSectionStyle.featureTextWrapper}>
                    <Typography sx={heroSectionStyle.featureTitle}>
                      {item.title}
                    </Typography>
                    <Typography sx={heroSectionStyle.featureSubtitle}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={heroSectionStyle.formBox}>
          <EnhancedComplianceForm
            title="Book Your PCI DSS Demo Today!"
            subtitle="Get answers to all your questions about PCI DSS compliance."
            buttonText="Book Your Demo"
            sheetName={sheetNameTypes.pcidssForm}
            formStyles={heroSectionStyle}
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

export default PciDssHeroSection;