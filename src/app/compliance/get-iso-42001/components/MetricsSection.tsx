'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import metricsSectionStyle from '../styles/metricsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const MetricsSection: React.FC = () => {
    const { metrics } = iso42001Data.sections;

    return (
        <Box sx={metricsSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={metricsSectionStyle.titleContainer}>
                    <Typography variant="h2" sx={metricsSectionStyle.title}>
                        Streamlined ISO 42001 Compliance
                    </Typography>
                    <Typography variant="h6" sx={metricsSectionStyle.subtitle}>
                        HexaFort delivers unmatched efficiency for AI Management System certification
                    </Typography>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {metrics.items.map((metric, index) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={index}>
                            <Box sx={metricsSectionStyle.metricCard}>
                                <Typography sx={metricsSectionStyle.metricValue}>
                                    {metric.value}
                                </Typography>
                                <Typography sx={metricsSectionStyle.metricLabel}>
                                    {metric.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MetricsSection;