'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import metricsSectionStyle from '../styles/metricsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const MetricsSection: React.FC = () => {
    const { metrics } = iso42001Data.sections;
    
    return (
        <Box sx={metricsSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={metricsSectionStyle.innerContainer}>
                    <Typography variant="h2" align="center" sx={metricsSectionStyle.title}>
                        Streamlined ISO 42001 Compliance
                    </Typography>
                    <Typography variant="h6" align="center" sx={metricsSectionStyle.subtitle}>
                        HexaFort delivers unmatched efficiency for AI Management System certification
                    </Typography>
                    <Box sx={metricsSectionStyle.metricsContainer}>
                        {metrics.items.map((metric, index) => (
                            <Box key={index} sx={metricsSectionStyle.metricCard}>
                                <Typography sx={metricsSectionStyle.metricValue}>
                                    {metric.value}
                                </Typography>
                                <Typography sx={metricsSectionStyle.metricLabel}>
                                    {metric.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MetricsSection;