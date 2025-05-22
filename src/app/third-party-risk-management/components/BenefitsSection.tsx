'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
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

        <Grid container spacing={3}>
          {benefits.features.map((benefit, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box sx={benefitsSectionStyle.card as any}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;