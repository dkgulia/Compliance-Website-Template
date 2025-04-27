'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import implementationMethodologyStyle from '../styles/implementationMethodologyStyle';
import hexafortData from '../constant/dataFile';

const ImplementationMethodology: React.FC = () => {
  const { implementationMethodology } = hexafortData;

  // Map icons to approach titles
  const getIcon = (title: string) => {
    switch (title) {
      case "Integrated Approach":
        return <IntegrationInstructionsIcon sx={implementationMethodologyStyle.methodologyIcon} />;
      case "Expert Team":
        return <PeopleIcon sx={implementationMethodologyStyle.methodologyIcon} />;
      case "Proven Tools":
        return <BuildIcon sx={implementationMethodologyStyle.methodologyIcon} />;
      case "Knowledge Transfer":
        return <SchoolIcon sx={implementationMethodologyStyle.methodologyIcon} />;
      default:
        return <IntegrationInstructionsIcon sx={implementationMethodologyStyle.methodologyIcon} />;
    }
  };

  return (
    <Box sx={implementationMethodologyStyle.container}>
      {/* Background elements */}
      <Box sx={implementationMethodologyStyle.backgroundElements}>
        <Box sx={implementationMethodologyStyle.gridPattern} />
        <Box sx={{...implementationMethodologyStyle.glowEffect, ...implementationMethodologyStyle.glowEffect1}} />
        <Box sx={{...implementationMethodologyStyle.glowEffect, ...implementationMethodologyStyle.glowEffect2}} />
      </Box>

      <Container maxWidth="xl" disableGutters>
        <Box sx={implementationMethodologyStyle.contentContainer}>
          <Box sx={implementationMethodologyStyle.header}>
            <Typography variant="h2" sx={implementationMethodologyStyle.title}>
              {implementationMethodology.title}
            </Typography>
            <Typography sx={implementationMethodologyStyle.subtitle}>
              Our approach ensures efficient implementation and long-term compliance success
            </Typography>
          </Box>

          <Box sx={implementationMethodologyStyle.methodologiesContainer}>
            <Box sx={implementationMethodologyStyle.methodologiesGrid}>
              {implementationMethodology.approaches.map((approach, index) => (
                <Box key={index} sx={implementationMethodologyStyle.methodologyCard}>
                  {getIcon(approach.title)}
                  <Typography sx={implementationMethodologyStyle.methodologyTitle}>
                    {approach.title}
                  </Typography>
                  <Typography sx={implementationMethodologyStyle.methodologyDescription}>
                    {approach.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={implementationMethodologyStyle.descriptionContainer}>
              <Typography sx={implementationMethodologyStyle.description}>
                {implementationMethodology.description.split(' ').map((word, index) => {
                  // Highlight key terms
                  if (['practical', 'sustainable', 'integrated', 'knowledge', 'capability', 'maintain'].includes(word.toLowerCase().replace(/[.,]/g, ''))) {
                    return <Box component="span" key={index} sx={implementationMethodologyStyle.highlightedText}> {word} </Box>;
                  }
                  return ` ${word} `;
                })}
              </Typography>
              <Button variant="contained" sx={implementationMethodologyStyle.ctaButton}>
                Learn About Our Process
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImplementationMethodology;