'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import pitfallsSectionStyle from '../styles/pitfallsSectionStyle';
import { vendorManagementData } from '../constants/vendorManagementData';

const PitfallsSection: React.FC = () => {
    const { pitfalls } = vendorManagementData;

    return (
        <Box component="section" sx={pitfallsSectionStyle.section}>
            <Container sx={pitfallsSectionStyle.container}>
                <Box sx={pitfallsSectionStyle.contentBox}>
                    <Box sx={pitfallsSectionStyle.textContent}>
                        <Typography variant="h2" sx={pitfallsSectionStyle.title}>
                            {pitfalls.title}
                        </Typography>
                        
                        <Typography sx={pitfallsSectionStyle.subtitle}>
                            {pitfalls.subtitle}
                        </Typography>
                        
                        <Typography sx={pitfallsSectionStyle.highlightText}>
                            <DashboardIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.1rem' }} />
                            Common pitfalls to avoid in your vendor management program
                        </Typography>
                        
                        <Typography sx={pitfallsSectionStyle.description}>
                            Proactive risk management helps you identify and address vulnerabilities before they impact your organization.
                        </Typography>
                    </Box>
                    
                    <Box sx={pitfallsSectionStyle.pitfallsContainer}>
                        <Box sx={pitfallsSectionStyle.pitfallList}>
                            {pitfalls.list.map((pitfall, index) => (
                                <Box key={index} sx={pitfallsSectionStyle.pitfallItem}>
                                    <Box sx={pitfallsSectionStyle.numberBox}>
                                        {index + 1}
                                    </Box>
                                    <Box sx={pitfallsSectionStyle.pitfallContent}>
                                        <Typography variant="h6" sx={pitfallsSectionStyle.pitfallHeading}>
                                            {pitfall.heading}
                                        </Typography>
                                        <Typography variant="body2" sx={pitfallsSectionStyle.pitfallSubheading}>
                                            {pitfall.subheading}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default PitfallsSection;