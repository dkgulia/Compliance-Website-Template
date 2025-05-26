'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
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
      <Container sx={aiFeaturesSectionStyle.container}>
        <Typography variant="h2" sx={aiFeaturesSectionStyle.title}>
          Beyond Traditional GRC: AI-Powered Innovation
        </Typography>

        <Box sx={aiFeaturesSectionStyle.content}>
          <Box sx={aiFeaturesSectionStyle.featuresList}>
            {aiFeatures.map((feature) => (
              <Box
                key={feature.id}
                sx={aiFeaturesSectionStyle.featureItem}
                className="feature-item"
              >
                <Box sx={aiFeaturesSectionStyle.featureNumberContainer}>
                  <Typography sx={aiFeaturesSectionStyle.featureNumber}>{feature.id}</Typography>
                </Box>
                <Box sx={aiFeaturesSectionStyle.featureContent}>
                  <Typography variant="h6" sx={aiFeaturesSectionStyle.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={aiFeaturesSectionStyle.featureDescription}>
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
      </Container>

      <style jsx global>{`
        .feature-item:hover {
          transform: translateY(-5px);
          border-color: #115e59;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </Box>
  );
};

export default AIFeaturesSection;