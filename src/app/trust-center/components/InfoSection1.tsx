'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import infoSectionStyle from '../styles/infoSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const InfoSection1: React.FC = () => {
  const data = trustCenterPageData.sections.infoSection1;

  return (
    <Box sx={infoSectionStyle.container}>
      <Box sx={infoSectionStyle.innerBox}>
        <Box sx={infoSectionStyle.contentLeft}>
          <Typography variant="h4" sx={infoSectionStyle.title}>
            {data.title}
          </Typography>

          {data.description.map((desc, index) => (
            <Typography key={index} variant="body1" sx={infoSectionStyle.description}>
              {desc}
            </Typography>
          ))}
        </Box>

        <Box sx={infoSectionStyle.imageRight}>
          <Box sx={infoSectionStyle.imageContainer}>
            <Image
              src="/images/dual-hex-white.png" // Fallback to a default image
              alt="Security showcase"
              width={450}
              height={350}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection1;