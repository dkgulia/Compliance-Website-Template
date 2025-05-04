'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';

const HeroSection: React.FC = () => {
  const { hero } = iso42001Data.sections;

  const handleFormSubmit = (values: any) => {
    console.log('Form submitted with values:', values);
    // Integration with backend API would go here
  };

  return (
    <Box sx={heroSectionStyle.container}>
      <Container maxWidth="lg">
        <Box sx={heroSectionStyle.containerBox}>
          {/* Left side content */}
          <Box sx={heroSectionStyle.contentBox}>
            <Typography sx={heroSectionStyle.tagline}>
              🤖 ISO / IEC 42001
            </Typography>
            <Typography variant="h2" sx={heroSectionStyle.title}>
              {hero.title}
            </Typography>
            <Typography variant="h5" sx={heroSectionStyle.subtitle}>
              {hero.subtitle}
            </Typography>
            {hero.description.map((desc, index) => (
              <Typography key={index} sx={heroSectionStyle.description}>
                {desc}
              </Typography>
            ))}
            <Button variant="contained" sx={heroSectionStyle.ctaButton} href="/compliance">
              {hero.buttonText}
            </Button>
          </Box>
          
          {/* Right side form */}
          <Box sx={heroSectionStyle.formBox}>
            <EnhancedHeroSectionForm 
              onSubmitCallback={handleFormSubmit} 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
