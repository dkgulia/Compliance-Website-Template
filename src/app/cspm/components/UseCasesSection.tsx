'use client';
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import useCasesSectionStyle from '../styles/useCasesSectionStyle';
import { cspmData } from '../constants/cspmData';
import Image from 'next/image';
import useCasesImage from '../images/risk.png'; // Import the image

const UseCasesSection: React.FC = () => {
  return (
    <Box sx={useCasesSectionStyle.box}>
      <Box sx={useCasesSectionStyle.container}>
        <Box sx={useCasesSectionStyle.containerBox}>
          <Typography variant="h2" sx={useCasesSectionStyle.heading}>
            {cspmData.useCases.title}
          </Typography>
          <Typography variant="body1" sx={useCasesSectionStyle.subheading}>
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
                    <Typography
                      variant="h6"
                      sx={useCasesSectionStyle.itemHeading}
                    >
                      {useCase.heading}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={useCasesSectionStyle.itemSubheading}
                    >
                      {useCase.subheading}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={useCasesSectionStyle.imageContainer}>
            {/* Actual image instead of placeholder */}
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
            }}>
              <Image
                src={useCasesImage}
                alt={cspmData.useCases.imagePrompt || "CSPM Use Cases Illustration"}
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCasesSection;