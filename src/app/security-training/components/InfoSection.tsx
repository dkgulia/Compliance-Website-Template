'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import infoSectionStyles from '../styles/infoSectionStyles';
import Image from 'next/image';
import securityTrainingLessons from '../images/security-cta.png';

const InfoSection = () => {
  const sectionContent = securityTrainingData.sections[1]?.content || {};
  const { title, description = [], imageIdea } = sectionContent;

  return (
    <Box sx={infoSectionStyles.root}>
      <Container sx={infoSectionStyles.container}>
        <Box sx={infoSectionStyles.imageBox}>
          <Image
            src={securityTrainingLessons}
            alt={imageIdea || "Security Training Lessons"}
            width={500}
            height={400}
            style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
            priority
          />
        </Box>
        <Box sx={infoSectionStyles.contentBox}>
          {title && (
            <Typography variant="h3" sx={infoSectionStyles.title}>
              {title}
            </Typography>
          )}
          {description && Array.isArray(description) && description.map((desc, index) => (
            <Typography key={index} variant="body1" sx={infoSectionStyles.description}>
              {desc}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default InfoSection;