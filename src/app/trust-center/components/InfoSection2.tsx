'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import infoSectionStyle from '../styles/infoSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import CircleIcon from '@mui/icons-material/FiberManualRecord';

const InfoSection2: React.FC = () => {
  const data = trustCenterPageData.sections.infoSection2;

  // Formatting description items as bullet points by detecting the em dash
  const formattedDescriptions = data.description.map(desc => {
    const parts = desc.split('—');
    if (parts.length === 2) {
      return {
        heading: parts[0].trim(),
        content: parts[1].trim()
      };
    }
    return { heading: '', content: desc };
  });

  return (
    <Box sx={infoSectionStyle.section}>
      <Box sx={infoSectionStyle.innerBox}>
        <Box sx={infoSectionStyle.imageLeft}>
          <Box sx={infoSectionStyle.imageContainer}>
            <Image
              src="/images/dual-hex-white.png" // Fallback to a default image
              alt="Trust Center on tablet"
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

        <Box sx={infoSectionStyle.contentRight}>
          <Typography variant="h4" sx={infoSectionStyle.title}>
            {data.title}
          </Typography>

          {formattedDescriptions.map((item, index) => (
            <Box key={index} sx={infoSectionStyle.bulletPoint}>
              {item.heading ? (
                <>
                  <CircleIcon sx={infoSectionStyle.bulletIcon} fontSize="small" />
                  <Box>
                    <Typography component="span" sx={infoSectionStyle.highlightText}>
                      {item.heading}
                    </Typography>
                    <Typography component="span" sx={infoSectionStyle.description}>
                      {' — ' + item.content}
                    </Typography>
                  </Box>
                </>
              ) : (
                <Typography variant="body1" sx={infoSectionStyle.description}>
                  {item.content}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection2;