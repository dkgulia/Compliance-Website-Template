import React from 'react';
import { Box, Container, Grid, Typography, Card, Stack } from '@mui/material';
import nistFeaturesSectionStyles from '../styles/featureSectionStyle';
import { nistFeatures } from '../constants/nistComplianceData';
import theme from '../../../../theme';

const NistFeaturesSection = () => {
  return (
    <Box id="nist-features" sx={nistFeaturesSectionStyles.box}>
      <Container sx={nistFeaturesSectionStyles.container}>
        <Box sx={nistFeaturesSectionStyles.containerBox}>
          <Typography component="h2" variant="h4" sx={nistFeaturesSectionStyles.heading}>
            Key Features of NIST Implementation
          </Typography>
        </Box>

        <Grid container columnSpacing={3} rowSpacing={2} sx={{ marginTop: '2rem' }}>
          {nistFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
                <Box sx={nistFeaturesSectionStyles.cardContainer}>
                  <Card variant="outlined" sx={nistFeaturesSectionStyles.card}>
                    <Stack direction="column" alignItems="center" spacing={2} sx={nistFeaturesSectionStyles.stack}>
                      <Box sx={nistFeaturesSectionStyles.iconContainer}>
                        <IconComponent sx={nistFeaturesSectionStyles.icon} />
                      </Box>
                      <Typography variant="h6" sx={nistFeaturesSectionStyles.typography.title}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={nistFeaturesSectionStyles.typography.body}>
                        {feature.description}
                      </Typography>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default NistFeaturesSection;