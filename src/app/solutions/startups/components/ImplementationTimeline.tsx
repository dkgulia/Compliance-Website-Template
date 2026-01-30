'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import implementationTimelineStyle from '../styles/implementationTimelineStyle';
import complianceData from '../constant/dataFile';

const ImplementationTimeline: React.FC = () => {
  const { implementationTimeline } = complianceData;

  return (
    <Box sx={implementationTimelineStyle.container}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={implementationTimelineStyle.contentContainer}>
          <Box sx={implementationTimelineStyle.sectionHeader}>
            <Typography variant="h2" sx={implementationTimelineStyle.title}>
              Implementation Timeline
            </Typography>
            <Typography sx={implementationTimelineStyle.subtitle}>
              Our structured approach ensures efficient progress toward certification and attestation readiness within a{' '}
              <Box component="span" sx={implementationTimelineStyle.highlightedText}>
                7-8 week
              </Box>{' '}
              timeframe.
            </Typography>
          </Box>

          <Typography variant="h3" sx={implementationTimelineStyle.phaseTitle}>
            Phase 1: Initial Implementation
          </Typography>

          <Box sx={implementationTimelineStyle.timelineContainer}>
            <Box sx={implementationTimelineStyle.timelineLine} />
            <Box sx={implementationTimelineStyle.stepsContainer}>
              {implementationTimeline.phase1.map((step) => (
                <Box key={step.step} sx={implementationTimelineStyle.stepItem}>
                  <Box sx={implementationTimelineStyle.stepNumber}>
                    {step.step}
                  </Box>
                  <Box sx={implementationTimelineStyle.stepContent}>
                    <Typography sx={implementationTimelineStyle.stepPeriod}>
                      {step.period}
                    </Typography>
                    <Typography sx={implementationTimelineStyle.stepDescription}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Typography variant="h3" sx={implementationTimelineStyle.phaseTitle}>
            Phase 2 & 3: Ongoing Support and Certification
          </Typography>

          <Box sx={implementationTimelineStyle.phase2Container}>
            {implementationTimeline.phase2And3.map((phase, index) => (
              <Box key={index} sx={implementationTimelineStyle.phaseCard}>
                {index === 0 && <AutorenewIcon sx={implementationTimelineStyle.phaseCardIcon} />}
                {index === 1 && <SpeedIcon sx={implementationTimelineStyle.phaseCardIcon} />}
                {index === 2 && <CheckCircleIcon sx={implementationTimelineStyle.phaseCardIcon} />}
                <Typography sx={implementationTimelineStyle.phaseCardTitle}>
                  {phase.title}
                </Typography>
                <Typography sx={implementationTimelineStyle.phaseCardDescription}>
                  {phase.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImplementationTimeline;