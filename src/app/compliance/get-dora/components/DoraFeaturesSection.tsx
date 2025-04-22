'use client';
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraFeaturesSectionStyle from '../styles/doraFeaturesSectionStyle';
import PolicyIcon from '@mui/icons-material/Policy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const iconMap: Record<string, React.ReactNode> = {
  PolicyIcon: <PolicyIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
  CheckCircleIcon: <CheckCircleIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
  SecurityIcon: <SecurityIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
  VerifiedUserIcon: <VerifiedUserIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
};

export default function DoraFeaturesSection() {
  return (
    <Box sx={DoraFeaturesSectionStyle.container}>
      <Box sx={DoraFeaturesSectionStyle.innerBox}>
        <Typography variant="h4" sx={DoraFeaturesSectionStyle.heading}>
          DORA Compliance Features
        </Typography>

        <Grid container spacing={3} sx={DoraFeaturesSectionStyle.gridContainer}>
          {complianceData.features.map((feature) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.id}>
              <Card variant="outlined" sx={DoraFeaturesSectionStyle.card}>
                <CardContent>
                  <Stack direction="column" alignItems="center" spacing={2}>
                    <Box sx={DoraFeaturesSectionStyle.iconWrapper}>{iconMap[feature.icon] || null}</Box>

                    <Box sx={DoraFeaturesSectionStyle.cardContainer}>
                      <Typography variant="h6" sx={DoraFeaturesSectionStyle.cardTitle}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={DoraFeaturesSectionStyle.cardDescription}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
