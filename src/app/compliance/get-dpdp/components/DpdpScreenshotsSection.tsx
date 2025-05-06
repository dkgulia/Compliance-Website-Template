'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import createScreenshotsSectionStyle from '../styles/screenshotsSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpScreenshotsSection: React.FC = () => {
  const theme = useTheme();
  const styles = createScreenshotsSectionStyle(theme);
  const { screenshots } = dpdpData.sections;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = screenshots.items.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box sx={styles.box}>
      <Container maxWidth="lg">
        <Box sx={styles.headerBox}>
          <Typography variant="h4" component="h2" sx={styles.heading}>
            {screenshots.title}
          </Typography>
          {screenshots.subtitle && (
            <Typography variant="body1" sx={styles.subheading}>
              {screenshots.subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={styles.carouselContainer}>
          <Box sx={styles.navigationArrows}>
            <IconButton onClick={handlePrev} sx={styles.navArrow}>
              <ArrowBackIosNewIcon />
            </IconButton>

            <Box sx={styles.slidePrevNext}>
              <Typography variant="body2" sx={styles.slideCountText}>
                {currentSlide + 1} / {slideCount}
              </Typography>
            </Box>

            <IconButton onClick={handleNext} sx={styles.navArrow}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          <Box sx={styles.slideContent}>
            {screenshots.items.map((screenshot, index) => (
              <Box
                key={index}
                sx={{
                  ...styles.slide,
                  display: currentSlide === index ? 'flex' : 'none'
                }}
              >
                <Box sx={styles.imagePlaceholder}>
                  <Typography variant="body2" color="textSecondary">
                    {screenshot.imagePrompt}
                  </Typography>
                </Box>

                <Box sx={styles.captionBox}>
                  <Typography variant="h6" sx={styles.caption}>
                    {screenshot.caption}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={styles.dotsContainer}>
            {screenshots.items.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  ...styles.dot,
                  ...(currentSlide === index && {
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    transform: 'scale(1.2)'
                  })
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpScreenshotsSection;