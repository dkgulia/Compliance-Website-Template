"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraScopeStyle from '../styles/doraScopeStyle';

export default function DoraScope() {
  const scopeSection = complianceData.sections.find(
    (section) => section.heading === 'Who Falls Under DORA Scope?'
  );

  if (!scopeSection) return null;

  return (
    <Box sx={DoraScopeStyle.container}>
      <Box sx={DoraScopeStyle.innerBox}>
        <Typography variant="h4" sx={DoraScopeStyle.heading}>
          {scopeSection.heading}
        </Typography>
        <Typography variant="body1" sx={DoraScopeStyle.description}>
          {scopeSection.content}
        </Typography>
      </Box>
    </Box>
  );
}
