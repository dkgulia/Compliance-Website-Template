'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import bookDemoStyle from '../styles/bookDemoStyle';
import hexafortSecureData from '../constants/hexafortSecureData';
import demoImage from '../images/bookDemo.png';

const BookDemo: React.FC = () => {
  const { bookDemo } = hexafortSecureData;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={bookDemoStyle.box}>
      <Box sx={bookDemoStyle.bannerContainer}>
        {/* Content Section */}
        <Box sx={bookDemoStyle.bannerContent}>
          {bookDemo.tagline && (
            <Typography sx={bookDemoStyle.tagline}>
              {bookDemo.tagline}
            </Typography>
          )}
          
          <Typography variant="h4" sx={bookDemoStyle.heading}>
            {bookDemo.title}
          </Typography>

          <Box sx={bookDemoStyle.points}>
            {bookDemo.points.map((point, index) => (
              <Box key={index} sx={bookDemoStyle.point}>
                <CheckCircleIcon sx={bookDemoStyle.icon} />
                <Typography component="span">{point}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={bookDemoStyle.button}
            onClick={handleScrollToTop}
            endIcon={<ArrowForwardIcon />}
          >
            {bookDemo.buttonText}
          </Button>
        </Box>

        {/* Image Section */}
        <Box sx={bookDemoStyle.imageContainer}>
          <Image
            src={demoImage}
            alt="Book a Demo"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookDemo;
