'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const ProcessSection: React.FC = () => {
  const { process } = iso42001Data.sections;

  return (
    <Box sx={processSectionStyle.container}>
      <Container maxWidth="lg">
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
        <Grid container spacing={3}>
          {process.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={processSectionStyle.stepCard}>
                  <Box sx={processSectionStyle.stepNumberContainer}>
                    <Typography sx={processSectionStyle.stepNumber}>{index + 1}</Typography>
                  </Box>
                  <Box sx={processSectionStyle.textContainer}>
                    <Typography variant="h6" sx={processSectionStyle.stepHeading}>
                      {step.heading}
                    </Typography>
                    <Typography sx={processSectionStyle.stepDescription}>
                      {step.description}
                    </Typography>
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

export default ProcessSection;