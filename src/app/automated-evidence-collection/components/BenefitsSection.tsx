'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const BenefitsSection: React.FC = () => {
  const { benefits } = evidenceCollectionData;

  return (
    <Box component="section" id="benefits" sx={benefitsSectionStyle.box}>
      <Container sx={benefitsSectionStyle.container}>
        <Box sx={benefitsSectionStyle.containerBox}>
          <Typography component="h2" variant="h4" sx={benefitsSectionStyle.heading}>
            {benefits.title}
          </Typography>
          {benefits.subtitle && (
            <Typography variant="body1" sx={benefitsSectionStyle.subHeading}>
              {benefits.subtitle}
            </Typography>
          )}
        </Box>

        <Grid container spacing={3}>
          {benefits.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid size={{xs:12,sm:6}}  key={index} sx={benefitsSectionStyle.gridItem}>
                <Box sx={benefitsSectionStyle.card}>
                  <Box sx={benefitsSectionStyle.contentWrapper}>
                    <Box sx={benefitsSectionStyle.iconContainer}>
                      <IconComponent sx={benefitsSectionStyle.icon} />
                    </Box>

                    <Box sx={benefitsSectionStyle.typography.container}>
                      <Typography variant="h6" sx={benefitsSectionStyle.typography.title}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={benefitsSectionStyle.typography.body}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;