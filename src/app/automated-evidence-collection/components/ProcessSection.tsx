'use client';

import React from 'react';
import { Box, Typography, Container, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import processSectionStyle from '../styles/processSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const ProcessSection: React.FC = () => {
  const theme = useTheme();
  const styles = processSectionStyle(theme);
  const { process } = evidenceCollectionData;

  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.headerBox}>
          <Typography variant="h2" sx={styles.title}>
            {process.title}
          </Typography>
          {process.subtitle && (
            <Typography sx={styles.subtitle}>{process.subtitle}</Typography>
          )}
        </Box>

        <Box sx={styles.stepsContainer}>
          {process.steps.map((step, index) => (
            <Card key={index} sx={styles.stepCard}>
              <Box sx={styles.stepNumber}>{index + 1}</Box>
              <Typography sx={styles.stepHeading}>{step.heading}</Typography>
              <Typography sx={styles.stepDescription}>
                {step.description}
              </Typography>

              {/* Placeholder for future images */}
              <Box sx={styles.placeholderBox}>
                <Typography sx={styles.placeholderText}>
                  {step.imageAlt}
                </Typography>
              </Box>

              {/* Connecting line between steps (except last) */}
              {index < process.steps.length - 1 && (
                <Box sx={styles.connectingLine} />
              )}
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSection;
