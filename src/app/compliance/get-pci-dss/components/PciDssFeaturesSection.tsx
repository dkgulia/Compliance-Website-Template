'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import pciDssData from '../constants/pciDssData';
import featuresSectionStyle from '../styles/featuresSectionStyle';

const PciDssFeaturesSection: React.FC = () => {
  return (
    <Box id="pci-dss-features" sx={featuresSectionStyle.box}>
      <Container sx={featuresSectionStyle.container}>
        <Box sx={featuresSectionStyle.containerBox}>
          <Typography component="h2" variant="h4" sx={featuresSectionStyle.heading}>
            Key Benefits of PCI DSS Compliance
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {pciDssData.features.map((feature) => (
            <Grid size={{xs:12,sm:6,md:6}}  key={feature.id} sx={featuresSectionStyle.gridItem}>
              <Card sx={featuresSectionStyle.card}>
                <CardContent sx={{ padding: 0 }}>
                  <Box sx={featuresSectionStyle.contentWrapper}>
                    <Box sx={featuresSectionStyle.iconContainer}>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        style={featuresSectionStyle.iconImage}
                      />
                    </Box>

                    <Box sx={featuresSectionStyle.typography.container}>
                      <Typography variant="h6" sx={featuresSectionStyle.typography.title}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={featuresSectionStyle.typography.body}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PciDssFeaturesSection;