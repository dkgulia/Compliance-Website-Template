'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import theme from '../../../theme';
import Image from 'next/image';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import Button from '../../Button/ComplianceHubButton';
import securityTrainingSetup from '../images/bookDemo.png';
import ctaStyles from '../styles/callToActionSectionStyles'
const CallToActionSection = () => {
  const sectionContent = securityTrainingData.sections[4]?.content || {};
  const { title, subtitle, description, ctaText, benefits } = sectionContent;



  return (
    <Box sx={ctaStyles.section}>
      <Box sx={ctaStyles.headerContainer}>
        <Typography sx={ctaStyles.tagline}>GET STARTED</Typography>
        <Typography sx={ctaStyles.title}>
          Ready to Transform Your Security Training?
        </Typography>
        <Typography sx={ctaStyles.subtitle}>
          Experience the difference with automated security awareness
        </Typography>
      </Box>

      <Box sx={ctaStyles.ctaWrapper}>
        <Box sx={ctaStyles.textContent}>
          {title && (
            <Typography sx={ctaStyles.ctaTitle}>
              {title}
            </Typography>
          )}

          {subtitle && title !== subtitle && (
            <Typography sx={ctaStyles.ctaTitle}>
              {subtitle}
            </Typography>
          )}

          {description && (
            <Typography sx={ctaStyles.description}>
              {description}
            </Typography>
          )}

          {benefits && Array.isArray(benefits) && (
            <Box sx={ctaStyles.benefitsList}>
              {benefits.map((benefit, index) => (
                <Box key={index} sx={ctaStyles.benefitItem}>
                  <CheckCircle sx={ctaStyles.benefitIcon} />
                  <Typography sx={ctaStyles.benefitText}>{benefit}</Typography>
                </Box>
              ))}
            </Box>
          )}

          <Button
            endIcon={<ArrowForward />}
          >
            {ctaText || "Book My Demo"}
          </Button>
        </Box>

        <Box sx={ctaStyles.imageContainer}>
          <Box sx={ctaStyles.imageWrapper}>
            <Image
              src={securityTrainingSetup}
              alt="Quick Setup Wizard"
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
  );
};

export default CallToActionSection;