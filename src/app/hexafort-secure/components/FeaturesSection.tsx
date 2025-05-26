'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';
import Image from 'next/image';
import step1Image from '../images/Dashboard Interface with Security Icons.png';
import step2Image from '../images/AI Automation and Suggestions Icon.png';
import step3Image from '../images/Cybersecurity Awareness Illustration.png';
import step4Image from '../images/Grid and Protection in Teal.png';

const stepImages = [step1Image, step2Image, step3Image, step4Image];

const FeaturesSection: React.FC = () => {
  const { features } = hexafortSecureData;

  return (
    <Box component="section" sx={featuresSectionStyle.box}>
      <Container maxWidth="lg" sx={featuresSectionStyle.container}>
        <Box sx={featuresSectionStyle.containerBox}>
          <Typography variant="h2" sx={featuresSectionStyle.heading}>
            {features.title}
          </Typography>
        </Box>

        {features.steps.map((step, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <Box
              key={index}
              sx={{
                ...featuresSectionStyle.featureStep,
                ...(imageFirst ? {} : featuresSectionStyle.featureStepReverse),
              }}
            >
              {/* On mobile: always image first */}
              <Box sx={featuresSectionStyle.imageContainer}>
                <Image
                  src={stepImages[index]}
                  alt={step.heading}
                  width={350}
                  height={220}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Box>

              <Box sx={featuresSectionStyle.textContainer}>
                <Typography variant="subtitle1" sx={featuresSectionStyle.stepNumber}>
                  Step {index + 1}
                </Typography>
                <Typography variant="h3" sx={featuresSectionStyle.stepTitle}>
                  {step.heading}
                </Typography>
                <Typography variant="body1" sx={featuresSectionStyle.stepDescription}>
                  {step.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default FeaturesSection;
