'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import aiFeaturesSectionStyle from '../styles/aiFeaturesSectionStyle';
import AIFeaturesHexagon from '../components/AIFeaturesHexagon';

const AIFeaturesSection: React.FC = () => {
  const aiFeatures = [
    {
      id: 1,
      title: 'AI-Powered Virtual CISO',
      description:
        'Leverage intelligent AI guidance to streamline compliance strategy and proactively mitigate potential risks.',
    },
    {
      id: 2,
      title: 'Intelligent Cloud Security Management',
      description:
        'Automatically detect, assess, and remediate cloud security vulnerabilities while ensuring continuous compliance with industry standards.',
    },
    {
      id: 3,
      title: 'AI-Powered Security Questionnaire Answering',
      description: 'Automate responses to security questionnaires with pre-built templates and AI assistance.',
    },
    {
      id: 4,
      title: 'Comprehensive Asset & Access Intelligence',
      description:
        'Dynamically manage and optimize asset lifecycles and access controls to create a robust, adaptive security ecosystem.',
    },
  ];

  return (
    <Box sx={aiFeaturesSectionStyle.section}>
      <Box sx={aiFeaturesSectionStyle.headerContainer}>
        <Typography sx={aiFeaturesSectionStyle.tagline}>
          AI-POWERED INNOVATION
        </Typography>
        <Typography sx={aiFeaturesSectionStyle.title}>
          Beyond Traditional GRC
        </Typography>
        <Typography sx={aiFeaturesSectionStyle.subtitle}>
          Harness the power of artificial intelligence for smarter security management
        </Typography>
      </Box>

      <Box sx={aiFeaturesSectionStyle.content}>
        <Box sx={aiFeaturesSectionStyle.featuresList}>
          {aiFeatures.map((feature) => (
            <Box
              key={feature.id}
              sx={aiFeaturesSectionStyle.featureItem}
            >
              <Box sx={aiFeaturesSectionStyle.featureNumberContainer}>
                <Typography sx={aiFeaturesSectionStyle.featureNumber}>{feature.id}</Typography>
              </Box>
              <Box sx={aiFeaturesSectionStyle.featureContent}>
                <Typography sx={aiFeaturesSectionStyle.featureTitle}>
                  {feature.title}
                </Typography>
                <Typography sx={aiFeaturesSectionStyle.featureDescription}>
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={aiFeaturesSectionStyle.logoColumn}>
          <AIFeaturesHexagon />
        </Box>
      </Box>
    </Box>
  );
};

export default AIFeaturesSection;