'use client';

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const BenefitsSection: React.FC = () => {
  const data = trustCenterPageData.sections.benefits;
  const theme = useTheme();

  return (
    <Box sx={benefitsSectionStyle.container}>
      {/* Background elements */}
      <Box sx={benefitsSectionStyle.backgroundElements}>
        <Box sx={benefitsSectionStyle.gridPattern} />
        <Box sx={benefitsSectionStyle.glowEffect1} />
        <Box sx={benefitsSectionStyle.glowEffect2} />
      </Box>
      
      <Container maxWidth="xl">
        <Box sx={benefitsSectionStyle.innerBox}>
          <Typography variant="h2" sx={benefitsSectionStyle.title}>
            {data.title}
          </Typography>

          <Typography sx={benefitsSectionStyle.subtitle}>
            {data.subtitle}
          </Typography>

          <Box sx={benefitsSectionStyle.gridContainer}>
            {data.features.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Box key={index} sx={benefitsSectionStyle.benefitCard}>
                  <Box sx={{
                    ...benefitsSectionStyle.iconContainer,
                    backgroundColor: theme.palette.secondary.main,
                  }}>
                    <IconComponent sx={benefitsSectionStyle.icon} />
                  </Box>
                  <Typography sx={benefitsSectionStyle.benefitTitle}>
                    {benefit.title}
                  </Typography>
                  <Typography sx={benefitsSectionStyle.benefitDescription}>
                    {benefit.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;