import React from 'react';
import { Box, Typography } from '@mui/material';
import hipaaFeaturesSectionStyles from '../styles/featureSectionStyle';

interface FeatureCardProps {
  feature: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const HipaaFeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Box sx={hipaaFeaturesSectionStyles.card}>
      <Box sx={hipaaFeaturesSectionStyles.iconContainer}>
        {feature.icon}
      </Box>
      <Box sx={hipaaFeaturesSectionStyles.textContainer}>
        <Typography variant="h6" sx={hipaaFeaturesSectionStyles.title}>
          {feature.title}
        </Typography>
        <Typography variant="body2" sx={hipaaFeaturesSectionStyles.description}>
          {feature.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HipaaFeatureCard;