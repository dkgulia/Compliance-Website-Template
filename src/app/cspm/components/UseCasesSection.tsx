'use client';
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import useCasesSectionStyle from '../styles/useCasesSectionStyle';
import { cspmData } from '../constants/cspmData';
import Image from 'next/image';
import useCasesImage from '../images/usecaseImage.png'

const UseCasesSection: React.FC = () => {
  return (
    <Box sx={useCasesSectionStyle.section}>
      <Box sx={useCasesSectionStyle.headerContainer}>
        <Typography sx={useCasesSectionStyle.title}>
          {cspmData.useCases.title}
        </Typography>
        <Typography sx={useCasesSectionStyle.subtitle}>
          {cspmData.useCases.subtitle}
        </Typography>
      </Box>

      <Box sx={useCasesSectionStyle.contentWrapper}>
        <Box sx={useCasesSectionStyle.textContent}>
          <List sx={useCasesSectionStyle.list}>
            {cspmData.useCases.list.map((useCase, index) => (
              <ListItem key={index} sx={useCasesSectionStyle.listItem}>
                <Box sx={useCasesSectionStyle.numberContainer}>
                  {index + 1}
                </Box>
                <Box sx={useCasesSectionStyle.itemContent}>
                  <Typography sx={useCasesSectionStyle.itemHeading}>
                    {useCase.heading}
                  </Typography>
                  <Typography sx={useCasesSectionStyle.itemSubheading}>
                    {useCase.subheading}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={useCasesSectionStyle.imageContainer}>
          <Box sx={useCasesSectionStyle.imageWrapper}>
            <Image
              src={useCasesImage}
              alt={cspmData.useCases.imagePrompt || "CSPM Use Cases Illustration"}
              fill
              style={useCasesSectionStyle.image}
              priority
              sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 500px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCasesSection;