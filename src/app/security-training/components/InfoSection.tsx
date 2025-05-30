'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import theme from '../../../theme';
import Image from 'next/image';
import securityTrainingLessons from '../images/security-cta.png';
import infoStyles from '../styles/infoSectionStyles';
const InfoSection = () => {
  const sectionContent = securityTrainingData.sections[1]?.content || {};
  const { title, description = [], imageIdea } = sectionContent;


  return (
    <Box sx={infoStyles.section}>
      <Box sx={infoStyles.contentWrapper}>
        <Box sx={infoStyles.imageBox}>
          <Box sx={infoStyles.imageWrapper}>
            <Image
              src={securityTrainingLessons}
              alt={imageIdea || "Security Training Lessons"}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
        <Box sx={infoStyles.contentBox}>
          <Typography sx={infoStyles.tagline}>BUILT FOR TEAMS</Typography>
          {title && (
            <Typography sx={infoStyles.title}>
              {title}
            </Typography>
          )}
          {description && Array.isArray(description) && description.map((desc, index) => (
            <Typography key={index} sx={infoStyles.description}>
              {desc}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection;