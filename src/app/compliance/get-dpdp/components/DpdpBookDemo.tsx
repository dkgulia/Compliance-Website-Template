'use client';
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import createBookDemoStyle from '../styles/bookDemoStyle';
import dpdpData from '../constants/dpdpData';
import dpdpDemoImg from '../images/bookAdemo.png';

const DpdpBookDemo: React.FC = () => {
  const theme = useTheme();
  const styles = createBookDemoStyle(theme);
  const { bookDemo } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.tagline}>{bookDemo.tagline}</Typography>
            <Typography variant="h2" sx={styles.title}>
              {bookDemo.title}
            </Typography>

            <Box sx={styles.bulletPoints}>
              {bookDemo.bullets.map((bullet, index) => (
                <Box key={index} sx={styles.bulletItem}>
                  <CheckCircleOutlineIcon sx={styles.bulletIcon} />
                  <Typography sx={styles.bulletText}>{bullet}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={styles.button}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {bookDemo.buttonLabel}
            </Button>
          </Box>

          <Box sx={styles.imageContainer}>
            <Image
              src={dpdpDemoImg}
              alt="DPDP Compliance Demo"
              width={400}
              height={300}
              style={{ borderRadius: '8px' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpBookDemo;