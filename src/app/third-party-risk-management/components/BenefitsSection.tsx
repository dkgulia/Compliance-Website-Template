'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

const BenefitsSection: React.FC = () => {
  const { benefits } = thirdPartyRiskManagementData;

  return (
    <Box component="section" sx={benefitsSectionStyle.section}>
      <Container sx={benefitsSectionStyle.container}>
        <Box sx={benefitsSectionStyle.header}>
          <Typography variant="h2" sx={benefitsSectionStyle.title}>
            {benefits.title}
          </Typography>
          <Typography variant="body1" sx={benefitsSectionStyle.subtitle}>
            {benefits.subtitle}
          </Typography>
        </Box>

        <Box sx={benefitsSectionStyle.grid}>
          {benefits.features.map((benefit, index) => (
            <Box key={index} sx={benefitsSectionStyle.card as any}>
              <Box sx={benefitsSectionStyle.iconContainer}>
                <benefit.muiIcon sx={benefitsSectionStyle.icon} />
              </Box>
              <Typography variant="h6" sx={benefitsSectionStyle.cardTitle}>
                {benefit.title}
              </Typography>
              <Typography
                variant="body2"
                sx={benefitsSectionStyle.cardDescription}
              >
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
