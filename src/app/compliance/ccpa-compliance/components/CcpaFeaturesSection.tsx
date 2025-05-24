'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { ccpaFeatures } from '../constants/ccpaData';

const CcpaFeaturesSection: React.FC = () => {
  return (
    <Box sx={featuresSectionStyle.outerBox}>
      <Container sx={featuresSectionStyle.container}>
        <Box sx={featuresSectionStyle.containerBox}>
          <Typography sx={featuresSectionStyle.heading}>Key CCPA Compliance Features</Typography>
        </Box>

        <Grid container spacing={3}>
          {ccpaFeatures.map((feature) => {
            const IconComp = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
                <Card variant="elevation" sx={featuresSectionStyle.card}>
                  <CardContent sx={{ padding: 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0.8rem' }}>
                      <Box sx={featuresSectionStyle.iconBox}>
                        <IconComp sx={featuresSectionStyle.icon} />
                      </Box>
                      <Typography variant="h6" sx={featuresSectionStyle.title}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={featuresSectionStyle.description}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default CcpaFeaturesSection;