'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import { useRouter } from 'next/navigation';
import dualHexImage from '../images/bookDemo.png';

const CtaSection: React.FC = () => {
  const data = trustCenterPageData.sections.cta;
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/hexafort-secure');
  };

  return (
    <Box sx={ctaSectionStyle.box}>
      <Box sx={ctaSectionStyle.container}>
        <Box sx={ctaSectionStyle.content}>
          <Typography variant="h4" sx={ctaSectionStyle.heading}>
            {data.title}
          </Typography>

          <Typography variant="subtitle1" sx={ctaSectionStyle.subtitle}>
            {data.subtitle}
          </Typography>

          <Typography sx={ctaSectionStyle.description}>
            {data.description}
          </Typography>

          <Button
            variant="contained"
            sx={ctaSectionStyle.button}
            onClick={handleRedirect}
          >
            {data.ctaText} <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>

        <Box sx={ctaSectionStyle.imageWrapper}>
          <Image
            src={dualHexImage}
            alt="Trust Center Live Demo"
            width={300}
            height={250}
            style={{
              borderRadius: '8px',
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;