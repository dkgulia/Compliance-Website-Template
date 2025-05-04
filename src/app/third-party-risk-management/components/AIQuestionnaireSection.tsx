'use client';
import React from 'react';
import { Box, Typography, Container, Icon } from '@mui/material';
import infoSectionStyle from '../styles/infoSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';

const AIQuestionnaireSection: React.FC = () => {
  const { aiQuestionnaire } = thirdPartyRiskManagementData;

  return (
    <Box component="section" sx={infoSectionStyle.section}>
      <Container sx={infoSectionStyle.container}>
        <Box sx={infoSectionStyle.contentWrapper}>
          <Box sx={infoSectionStyle.textContainer}>
            <Typography variant="h2" sx={infoSectionStyle.title}>
              {aiQuestionnaire.title}
            </Typography>

            {aiQuestionnaire.description.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={infoSectionStyle.description}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          <Box sx={infoSectionStyle.imageContainer}>
            <Box sx={infoSectionStyle.imagePlaceholder as any}>
              <Icon sx={{ fontSize: '2rem', mr: 1 }}>smart_toy</Icon>
              {aiQuestionnaire.imagePrompt}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AIQuestionnaireSection;
