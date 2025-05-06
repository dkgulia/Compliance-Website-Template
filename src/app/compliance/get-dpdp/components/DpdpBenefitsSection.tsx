'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import createBenefitsSectionStyle from '../styles/benefitsSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpBenefitsSection: React.FC = () => {
  const theme = useTheme();
  const styles = createBenefitsSectionStyle(theme);
  const { benefits } = dpdpData.sections;

  return (
    <Box id="dpdp-benefits" component="section" sx={styles.box}>
      <Container sx={styles.container}>
        <Box sx={styles.containerBox}>
          <Typography component="h2" variant="h4" sx={styles.heading}>
            {benefits.title}
          </Typography>
          {benefits.subtitle && (
            <Typography variant="body1" sx={styles.subheading}>
              {benefits.subtitle}
            </Typography>
          )}
        </Box>

        <Grid container spacing={3}>
          {benefits.items.map((benefit, index) => {
            const Icon = benefit.muiIcon;
            return (
              <Grid size={{xs:12,sm:6,md:3}} key={index}>
                <Card sx={styles.card} elevation={0}>
                  <CardContent sx={{ padding: 0 }}>
                    <Box sx={styles.contentWrapper}>
                      <Box sx={styles.iconContainer}>
                        <Icon sx={styles.icon} />
                      </Box>

                      <Box sx={styles.typography.container}>
                        <Typography variant="h6" sx={styles.typography.title}>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body2" sx={styles.typography.body}>
                          {benefit.description}
                        </Typography>
                      </Box>
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

export default DpdpBenefitsSection;