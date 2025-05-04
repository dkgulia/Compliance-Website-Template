'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroSectionStyle from '../styles/heroSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const HeroSection: React.FC = () => {
  const data = trustCenterPageData.sections.hero;

  return (
    <Box sx={heroSectionStyle.container}>
      <Container sx={heroSectionStyle.containerBox}>
        <Box sx={heroSectionStyle.contentBox}>
          <Typography
            variant="h2"
            sx={heroSectionStyle.title}
          >
            {data.title}
          </Typography>
          
          <Typography
            variant="h5"
            sx={heroSectionStyle.subtitle}
          >
            {data.subtitle}
          </Typography>

          {data.description.map((desc, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={heroSectionStyle.description}
            >
              {desc}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={heroSectionStyle.ctaButton}
            href="/contact"
          >
            {data.ctaText} <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>

        <Box sx={heroSectionStyle.imageBox}>
          <Box sx={heroSectionStyle.imageContainer}>
            <Image
              src={data.image}
              alt="Trust Center Dashboard"
              width={500}
              height={350}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                filter: 'drop-shadow(0 8px 16px rgba(94, 234, 212, 0.2))',
              }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;