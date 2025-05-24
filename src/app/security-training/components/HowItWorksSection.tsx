'use client';

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import howItWorksSectionStyles from '../styles/howItWorksSectionStyles';
import Image from 'next/image';

const HowItWorksSection = () => {
  const { title, subtitle, steps } = securityTrainingData.sections[3].content;

  return (
    <Box sx={howItWorksSectionStyles.container}>
      <Box sx={howItWorksSectionStyles.innerBox}>
        <Typography variant="h4" sx={howItWorksSectionStyles.heading}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" sx={howItWorksSectionStyles.subtitle}>
            {subtitle}
          </Typography>
        )}

        <Box sx={howItWorksSectionStyles.gridContainer}>
          {steps?.map((step, index) => (
            <Card key={index} sx={howItWorksSectionStyles.card}>
              <CardContent>
                <Typography variant="h5" sx={howItWorksSectionStyles.stepNumber}>
                  {index + 1}
                </Typography>
                <Typography variant="h6" sx={howItWorksSectionStyles.stepHeading}>
                  {step.heading}
                </Typography>
                <Typography variant="body2" sx={howItWorksSectionStyles.stepDescription}>
                  {step.description}
                </Typography>
                {step.image && (
                  <Box sx={{ position: 'relative', width: '100%', height: '80px' }}>
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={howItWorksSectionStyles.stepsConnector} />
      </Box>
    </Box>
  );
};

export default HowItWorksSection;