'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PciDssHowComplianceHubHelpsStyle from '../styles/PciDssHowComplianceHubHelpsStyle';
import pciDssData from '../constants/pciDssData';

const PciDssHowComplianceHubHelps = () => {
  return (
    <Box sx={PciDssHowComplianceHubHelpsStyle.box}>
      <Container sx={PciDssHowComplianceHubHelpsStyle.container}>
        <Typography
          component="h2"
          variant="h4"
          sx={PciDssHowComplianceHubHelpsStyle.title}
        >
          {pciDssData.PciDssHowComplianceHubHelps}
        </Typography>

        <Typography variant="body1" sx={PciDssHowComplianceHubHelpsStyle.subtitle}>
          {pciDssData.howComplianceHubHelpsSubtitle}
        </Typography>

        <Grid
          container
          spacing={{ sm: 2, xs: 0.5 }}
          sx={PciDssHowComplianceHubHelpsStyle.grid}
        >
          {pciDssData.howComplianceHubHelpsSteps.map((step, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Card variant="outlined" sx={PciDssHowComplianceHubHelpsStyle.card}>
                <Box sx={PciDssHowComplianceHubHelpsStyle.cardContent}>
                  <Box sx={PciDssHowComplianceHubHelpsStyle.iconContainer}>
                    <step.icon sx={PciDssHowComplianceHubHelpsStyle.icon} />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={PciDssHowComplianceHubHelpsStyle.cardText}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PciDssHowComplianceHubHelps;
