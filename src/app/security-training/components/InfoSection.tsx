'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import infoSectionStyles from '../styles/infoSectionStyles';
import Image from 'next/image';

const InfoSection = () => {
  const { title, description, imageIdea } = securityTrainingData.sections[1].content;

  return (
    <Box sx={infoSectionStyles.root}>
      <Container sx={infoSectionStyles.container}>
        <Box sx={infoSectionStyles.imageBox}>
          <Image
            src="/images/security-training-lessons.png"
            alt={imageIdea}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box sx={infoSectionStyles.contentBox}>
          <Typography variant="h3" sx={infoSectionStyles.title}>
            {title}
          </Typography>
          {description.map((desc, index) => (
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