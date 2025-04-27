"use client";
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraFivePillarsStyle from '../styles/doraFivePillarsStyle';
import Image from 'next/image';

export default function DoraFivePillars() {
  const pillarsSection = complianceData.sections.find(
    (section) => section.heading === "6 Core Pillars Under DORA"
  );

  if (!pillarsSection) return null;

  return (
    <Box sx={DoraFivePillarsStyle.container}>
      <Box sx={DoraFivePillarsStyle.innerBox}>
        <Typography variant="h4" sx={DoraFivePillarsStyle.heading}>
          {pillarsSection.heading}
        </Typography>

        <Grid container spacing={3} sx={DoraFivePillarsStyle.gridContainer}>
          {pillarsSection.subSections?.map((pillar, index) => (
            <Grid size ={{xs:12,sm:6,md:4}}
              key={index}
              sx={DoraFivePillarsStyle.gridItem}
            >
              <Box sx={DoraFivePillarsStyle.pillarCard}>
                <Box sx={DoraFivePillarsStyle.iconContainer}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={40}
                    height={40}
                  />
                </Box>
                <Box sx={DoraFivePillarsStyle.pillarContent}>
                  <Typography variant="h6" sx={DoraFivePillarsStyle.cardTitle}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" sx={DoraFivePillarsStyle.cardDescription}>
                    {pillar.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}