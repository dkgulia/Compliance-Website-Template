'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import benefitsSectionStyles from '../styles/benefitsSectionStyles';
import EmailIcon from '@mui/icons-material/Email';
import InsightsIcon from '@mui/icons-material/Insights';
import RuleIcon from '@mui/icons-material/Rule';
import LanguageIcon from '@mui/icons-material/Language';

const BenefitsSection = () => {
  const { title, subtitle, features } = securityTrainingData.sections[2].content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Email':
        return <EmailIcon sx={benefitsSectionStyles.featureIcon} />;
      case 'Insights':
        return <InsightsIcon sx={benefitsSectionStyles.featureIcon} />;
      case 'Rule':
        return <RuleIcon sx={benefitsSectionStyles.featureIcon} />;
      case 'Language':
        return <LanguageIcon sx={benefitsSectionStyles.featureIcon} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={benefitsSectionStyles.root}>
      <Box sx={benefitsSectionStyles.innerBox}>
        <Typography variant="h4" sx={benefitsSectionStyles.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" sx={benefitsSectionStyles.subtitle}>
            {subtitle}
          </Typography>
        )}

        <Box sx={benefitsSectionStyles.gridContainer}>
          {features.map((feature, index) => (
            <Box key={index} sx={benefitsSectionStyles.featureCard}>
              <Box sx={benefitsSectionStyles.iconBox}>
                {getIcon(feature.muiIcon)}
              </Box>
              <Typography variant="h6" sx={benefitsSectionStyles.featureTitle}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={benefitsSectionStyles.featureDescription}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsSection;