'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import createScreenshotsSectionStyle from '../styles/screenshotsSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpScreenshotsSection: React.FC = () => {
  const theme = useTheme();
  const styles = createScreenshotsSectionStyle(theme);
  const { screenshots } = dpdpData.sections;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? screenshots.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === screenshots.items.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            {screenshots.title}
          </Typography>
          {screenshots.subtitle && (
            <Typography variant="body1" sx={styles.subtitle}>
              {screenshots.subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={styles.carouselContainer}>
          <Box sx={styles.carouselItem}>
            <Box sx={styles.carouselContent}>
              <Box sx={styles.imageContainer}>
                <Typography sx={styles.imagePlaceholder}>
                  {screenshots.items[activeIndex].imagePrompt}
                </Typography>
              </Box>
              <Box sx={styles.textContainer}>
                <Typography variant="h6" sx={styles.caption}>
                  Screenshot {activeIndex + 1}: {screenshots.items[activeIndex].caption.split(':')[0]}
                </Typography>
                <Typography variant="body2" sx={styles.description}>
                  {screenshots.items[activeIndex].caption}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.carouselNav}>
            <Button variant="outlined" onClick={handlePrev} sx={styles.navButton}>
              <ArrowBackIosNewIcon fontSize="small" />
            </Button>
            <Button variant="outlined" onClick={handleNext} sx={styles.navButton}>
              <ArrowForwardIosIcon fontSize="small" />
            </Button>
          </Box>

          <Box sx={styles.navDots}>
            {screenshots.items.map((_, index) => (
              <Box
                key={index}
                sx={{
                  ...styles.dot,
                  ...(index === activeIndex ? { '&.active': styles.dot['&.active'] } : {}),
                }}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpScreenshotsSection;