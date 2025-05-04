'use client';
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import {
  Tune as TuneIcon,
  Security as SecurityIcon,
  Insights as InsightsIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';

const BenefitsSection: React.FC = () => {
  const benefitsContent = riskManagementData.sections.find(
    (section) => section.Sno === '2' && section.blockType === 'Benefits'
  );

  if (!benefitsContent) return null;

  // Map for MUI icons
  const iconMap: Record<string, React.ReactNode> = {
    Tune: <TuneIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
    Security: <SecurityIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
    Insights: <InsightsIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
    CheckCircle: (
      <CheckCircleIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />
    ),
  };

  return (
    <Box sx={benefitsSectionStyle.container}>
      <Box sx={benefitsSectionStyle.innerBox}>
        <Typography variant="h2" sx={benefitsSectionStyle.heading}>
          {benefitsContent.content.title}
        </Typography>

        {benefitsContent.content.subtitle && (
          <Typography variant="subtitle1" sx={benefitsSectionStyle.subtitle}>
            {benefitsContent.content.subtitle}
          </Typography>
        )}

        <Grid container spacing={3} sx={benefitsSectionStyle.gridContainer}>
          {benefitsContent.content.benefits.map((benefit, index) => (
            <Grid xs={12} sm={6} md={3} key={index}>
              <Card variant="outlined" sx={benefitsSectionStyle.card}>
                <CardContent>
                  <Stack direction="column" alignItems="center" spacing={2}>
                    <Box sx={benefitsSectionStyle.iconWrapper}>
                      {iconMap[benefit.muiIcon] || null}
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={benefitsSectionStyle.cardTitle}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={benefitsSectionStyle.cardDescription}
                      >
                        {benefit.description}
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
};

export default BenefitsSection;
