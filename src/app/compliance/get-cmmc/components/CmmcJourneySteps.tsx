'use client';
import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import journeyStepsStyle from '../styles/journeyStepsStyle';
import { cmmcData } from '../constants/cmmcData';
import * as Icons from '@mui/icons-material';

const CmmcJourneySteps: React.FC = () => {
  const stepsSection = cmmcData.sections.find(
    (section) => section.Sno === '4' && section.blockType === 'Steps/Process'
  );

  if (!stepsSection) return null;

  return (
    <Box sx={journeyStepsStyle.box}>
      <Container maxWidth="lg">
        <Box sx={journeyStepsStyle.containerBox}>
          <Typography
            variant="h4"
            component="h2"
            sx={journeyStepsStyle.heading}
          >
            {stepsSection.content.title}
          </Typography>

          <Typography variant="body1" sx={journeyStepsStyle.subHeading}>
            {stepsSection.content.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stepsSection.content.steps!.map((step: any, index: number) => {
            const IconComp = cmmcData.implementationSteps[index]?.icon
              ? cmmcData.iconMap[
                  cmmcData.implementationSteps[index]
                    .icon as keyof typeof cmmcData.iconMap
                ]
              : Icons.CheckCircle;

            return (
              <Grid size={{xs:12,sm:6,md:3}}  key={index}>
                <Box sx={journeyStepsStyle.card}>
                  <Box sx={journeyStepsStyle.iconContainer}>
                    <IconComp sx={{ fontSize: '2rem', color: '#FFFFFF' }} />
                  </Box>
                  <Box sx={journeyStepsStyle.textContainer}>
                    <Typography variant="h6" sx={journeyStepsStyle.cardTitle}>
                      {step.heading}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={journeyStepsStyle.cardDescription}
                    >
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

export default CmmcJourneySteps;