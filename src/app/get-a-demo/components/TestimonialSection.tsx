// src/app/demo-page/components/TestimonialSection.tsx
'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { testimonialData } from '../constant/testimonialData';
import testimonialSectionStyle from '../styles/testimonialSectionStyle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonialData[activeIndex];

  return (
    <Box sx={testimonialSectionStyle.box}>
      <Box sx={testimonialSectionStyle.section}>
        <Box sx={testimonialSectionStyle.testimonialContainer}>
          <Box sx={testimonialSectionStyle.testimonialContent}>
            <Box sx={testimonialSectionStyle.imageColumn}>
              <Box sx={testimonialSectionStyle.imageContainer}>
                <Image
                  src={activeTestimonial.image}
                  alt={`${activeTestimonial.name || ''} ${activeTestimonial.company || ''}`}
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Box>
            </Box>

            <Box sx={testimonialSectionStyle.contentColumn}>
              <Typography variant="body1" sx={testimonialSectionStyle.quoteText}>
                "{activeTestimonial.quote}"
              </Typography>

              <Box sx={testimonialSectionStyle.authorInfo}>
                {activeTestimonial.name && (
                  <Typography variant="h6" sx={testimonialSectionStyle.authorName}>
                    {activeTestimonial.name}
                  </Typography>
                )}
                <Typography variant="body2" sx={testimonialSectionStyle.authorPosition}>
                  {activeTestimonial.position && `${activeTestimonial.position}, `}
                  {activeTestimonial.company}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={testimonialSectionStyle.navigationContainer}>
          <Box sx={testimonialSectionStyle.navGroup}>
            <IconButton onClick={handlePrev} sx={testimonialSectionStyle.navButton}>
              <ChevronLeftIcon fontSize="small" />
            </IconButton>

            <Box sx={testimonialSectionStyle.dotsContainer}>
              {testimonialData.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    ...testimonialSectionStyle.dot,
                    ...(index === activeIndex ? testimonialSectionStyle.activeDot : {}),
                  }}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </Box>

            <IconButton onClick={handleNext} sx={testimonialSectionStyle.navButton}>
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSection;