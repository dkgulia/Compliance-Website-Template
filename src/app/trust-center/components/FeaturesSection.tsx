'use client';

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const FeaturesSection: React.FC = () => {
  const data = trustCenterPageData.sections.features;
  const theme = useTheme();

  return (
    <Box sx={featuresSectionStyle.container}>
      {/* Background elements */}
      <Box sx={featuresSectionStyle.backgroundElements}>
        <Box sx={featuresSectionStyle.gridPattern} />
        <Box sx={featuresSectionStyle.glowEffect1} />
        <Box sx={featuresSectionStyle.glowEffect2} />
      </Box>
      
      <Container maxWidth="xl">
        <Box sx={featuresSectionStyle.innerBox}>
          <Box sx={featuresSectionStyle.header}>
            <Typography variant="h2" sx={featuresSectionStyle.title}>
              {data.title}
            </Typography>
            <Typography sx={featuresSectionStyle.subtitle}>
              {data.subtitle}
            </Typography>
          </Box>

          <Box sx={featuresSectionStyle.gridContainer}>
            {data.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Box key={index} sx={featuresSectionStyle.featureCard}>
                  <Box sx={{
                    ...featuresSectionStyle.iconContainer,
                    backgroundColor: theme.palette.secondary.main,
                  }}>
                    <IconComponent sx={featuresSectionStyle.icon} />
                  </Box>
                  <Typography sx={featuresSectionStyle.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography sx={featuresSectionStyle.featureDescription}>
                    {feature.description}
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

export default FeaturesSection;