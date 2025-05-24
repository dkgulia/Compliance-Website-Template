'use client';
import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import packageOverviewStyle from '../styles/packageOverviewStyle';
import hexafortData from '../constant/dataFile';

const iconMap: Record<string, React.ReactElement> = {
  "Comprehensive Standards": <SecurityIcon sx={packageOverviewStyle.icon} />,
  "Accelerated Timeline": <SpeedIcon sx={packageOverviewStyle.icon} />,
  "Cost-Effective Solution": <PriceCheckIcon sx={packageOverviewStyle.icon} />
};

const PackageOverview: React.FC = () => {
  const { title, description, highlights } = hexafortData.packageOverview;

  return (
    <Box sx={packageOverviewStyle.container}>
      <Box sx={packageOverviewStyle.gridPattern} />

      <Container maxWidth="xl" disableGutters>
        <Box sx={packageOverviewStyle.contentContainer}>
          <Box sx={packageOverviewStyle.sectionHeader}>
            <Typography variant="h2" sx={packageOverviewStyle.title}>
              Package Overview
            </Typography>
            <Typography sx={packageOverviewStyle.subtitle}>
              Our integrated approach to security, privacy, and compliance provides everything your startup needs
            </Typography>
          </Box>

          <Box sx={packageOverviewStyle.highlightsContainer}>
            {highlights.map((highlight, index) => (
              <Paper elevation={0} key={index} sx={packageOverviewStyle.highlightCard}>
                <Box sx={packageOverviewStyle.cardContent}>
                  <Box sx={packageOverviewStyle.cardIcon}>
                    {iconMap[highlight.title] || <SecurityIcon sx={packageOverviewStyle.icon} />}
                  </Box>
                  <Typography variant="h3" sx={packageOverviewStyle.cardTitle}>
                    {highlight.title}
                  </Typography>
                  <Typography sx={packageOverviewStyle.cardDescription}>
                    {highlight.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>

          <Box sx={packageOverviewStyle.descriptionContainer}>
            <Typography sx={packageOverviewStyle.description}>
              {description.split(' ').map((word, index) => {
                if (['confidence', 'international', 'efficiency', 'standards'].includes(word.toLowerCase().replace(/[.,]/g, ''))) {
                  return <Box component="span" key={index} sx={packageOverviewStyle.accentText}> {word} </Box>;
                }
                return ` ${word} `;
              })}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PackageOverview;