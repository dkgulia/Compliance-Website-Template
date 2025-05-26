'use client';

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import workflowSectionStyle from '../styles/workflowSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const WorkflowSection: React.FC = () => {
  const data = trustCenterPageData.sections.workflow;
  const theme = useTheme();

  return (
    <Box sx={workflowSectionStyle.container}>
      <Container maxWidth="lg">
        <Box sx={workflowSectionStyle.innerContainer}>
          <Box sx={workflowSectionStyle.titleContainer}>
            <Typography variant="h2" sx={workflowSectionStyle.title}>
              {data.title}
            </Typography>
            <Typography variant="h6" sx={workflowSectionStyle.subtitle}>
              {data.subtitle}
            </Typography>
          </Box>

          <Box sx={workflowSectionStyle.stepsContainer}>
            {data.steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Box key={index} sx={workflowSectionStyle.stepCard}>
                 
                  <Box sx={{
                    ...workflowSectionStyle.iconContainer,
                    backgroundColor: theme.palette.secondary.main,
                  }}>
                    <IconComponent sx={workflowSectionStyle.icon} />
                  </Box>
                  <Typography variant="h6" sx={workflowSectionStyle.stepTitle}>
                    {step.heading}
                  </Typography>
                  <Typography sx={workflowSectionStyle.stepDescription}>
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

export default WorkflowSection;