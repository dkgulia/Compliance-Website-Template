'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import implementationStepsStyle from '../styles/implementationStepsStyle';
import theme from '../../../../theme';

const implementationSteps = [
  {
    step: 1,
    title: 'Context & Leadership',
    description: 'Establish leadership commitment, define organizational context, and determine the scope of your Business Continuity Management System (BCMS).'
  },
  {
    step: 2,
    title: 'Business Impact Analysis',
    description: 'Identify critical functions, determine recovery time objectives, and assess potential impacts of disruptions on your organization.'
  },
  {
    step: 3,
    title: 'Risk Assessment',
    description: 'Identify and evaluate potential risks and threats that could cause business disruptions, including their likelihood and potential severity.'
  },
  {
    step: 4,
    title: 'Strategy Development',
    description: 'Develop and document business continuity strategies and solutions for protecting critical functions and mitigating identified risks.'
  },
  {
    step: 5,
    title: 'Plan Documentation',
    description: 'Create detailed business continuity plans, including incident response procedures, recovery processes, and communication protocols.'
  },
  {
    step: 6,
    title: 'Testing & Improvement',
    description: 'Regularly test and exercise your plans through simulations, document results, and implement continuous improvements to your BCMS.'
  }
];

const ISO22301ImplementationSteps: React.FC = () => {
  return (
    <Box sx={implementationStepsStyle.container}>
      <Container>
        <Box sx={implementationStepsStyle.headingContainer}>
          <Typography variant="h4" sx={implementationStepsStyle.sectionTitle}>
            ISO 27018 Implementation Steps
          </Typography>
          <Typography variant="body1" sx={implementationStepsStyle.sectionSubtitle}>
            Follow these key steps to implement an effective Business Continuity Management System
          </Typography>
        </Box>

        <Box sx={implementationStepsStyle.stepsContainer}>
          <Grid container spacing={3}>
            {implementationSteps.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.step}>
                <Paper elevation={0} sx={implementationStepsStyle.stepCard}>
                  <Box sx={implementationStepsStyle.stepNumberCircle}>
                    <Typography sx={implementationStepsStyle.stepNumber}>{item.step}</Typography>
                  </Box>
                  <Typography variant="h5" sx={implementationStepsStyle.stepTitle}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={implementationStepsStyle.stepDescription}>
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ISO22301ImplementationSteps;