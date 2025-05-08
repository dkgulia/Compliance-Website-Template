'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const CTASection: React.FC = () => {
  const { cta } = evidenceCollectionData;

  return (
    <Box sx={ctaSectionStyle.box}>
      <Container maxWidth="lg">
        <Box sx={ctaSectionStyle.ctaContainer}>
          <Box sx={ctaSectionStyle.contentWrapper}>
            <Box sx={ctaSectionStyle.textContent}>
              <Typography variant="body1" sx={ctaSectionStyle.description}>
                {cta.description}
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={ctaSectionStyle.button}
              >
                {cta.ctaText}
              </Button>
            </Box>

            <Box sx={ctaSectionStyle.imageContainer}>
              {/* This would be replaced with an actual image in production */}
              <Box sx={ctaSectionStyle.illustrationPlaceholder}>
                <Typography sx={ctaSectionStyle.placeholderText}>
                  {cta.imageAlt || "Illustration of security and compliance"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;