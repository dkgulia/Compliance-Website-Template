'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const ProcessSection: React.FC = () => {
  const { process } = iso42001Data.sections;

  return (
    <Box sx={processSectionStyle.container}>
      <Container maxWidth="lg">
        <Box sx={processSectionStyle.innerContainer}>
          <Box sx={processSectionStyle.titleContainer}>
            <Typography variant="h2" sx={processSectionStyle.title}>
              {process.title}
            </Typography>
            {process.subtitle && (
              <Typography variant="h6" sx={processSectionStyle.subtitle}>
                {process.subtitle}
              </Typography>
            )}
          </Box>
          <Box sx={processSectionStyle.stepsContainer}>
            {process.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Box key={index} sx={processSectionStyle.stepCard as any}>
                  <Box sx={processSectionStyle.stepNumber}>{index + 1}</Box>
                  <Box sx={processSectionStyle.iconContainer}>
                    <Icon sx={processSectionStyle.icon} />
                  </Box>
                  <Typography variant="h6" sx={processSectionStyle.stepHeading}>
                    {step.heading}
                  </Typography>
                  <Typography sx={processSectionStyle.stepDescription}>
                    {step.description}
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

export default ProcessSection;
