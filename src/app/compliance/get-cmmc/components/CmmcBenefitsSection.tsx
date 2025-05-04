'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { cmmcData } from '../constants/cmmcData';
import * as Icons from '@mui/icons-material';

const CmmcBenefitsSection: React.FC = () => {
  const benefitsSection = cmmcData.sections.find(
    (section) => section.Sno === '2' && section.blockType === 'Benefits'
  );

  if (!benefitsSection) return null;

  return (
    <Box sx={featuresSectionStyle.box}>
      <Container sx={featuresSectionStyle.container}>
        <Box sx={featuresSectionStyle.containerBox}>
          <Typography
            component="h2"
            variant="h4"
            sx={featuresSectionStyle.heading}
          >
            {benefitsSection.content.title}
          </Typography>
          {benefitsSection.content.subtitle && (
            <Typography variant="body1" sx={featuresSectionStyle.subheading}>
              {benefitsSection.content.subtitle}
            </Typography>
          )}
        </Box>

        <Grid container spacing={3}>
          {benefitsSection.content.benefits &&
            benefitsSection.content.benefits.map(
              (benefit: any, index: number) => {
                const IconComp = (Icons as any)[benefit.muiIcon] || Icons.Stars;

                return (
                  <Grid size={{ xs: 6, md: 8 }} key={index}>
                    <Card variant="outlined" sx={featuresSectionStyle.card}>
                      <CardContent>
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={2}
                        >
                          <Box sx={featuresSectionStyle.iconContainer}>
                            <IconComp
                              sx={{ fontSize: '2rem', color: '#FFFFFF' }}
                            />
                          </Box>

                          <Box sx={featuresSectionStyle.typography.container}>
                            <Typography
                              variant="h6"
                              sx={featuresSectionStyle.typography.title}
                            >
                              {benefit.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={featuresSectionStyle.typography.body}
                            >
                              {benefit.description}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }
            )}
        </Grid>
      </Container>
    </Box>
  );
};

export default CmmcBenefitsSection;
