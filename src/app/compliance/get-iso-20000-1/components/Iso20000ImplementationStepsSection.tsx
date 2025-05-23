'use client';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { iso20000Data } from '../constants/iso20000Data';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import SettingsIcon from '@mui/icons-material/Settings';
import VerifiedIcon from '@mui/icons-material/Verified';

const Iso20000FeaturesSection: React.FC = () => {
    const featuresSection = iso20000Data.sections.find(
        (section) => section.blockType === 'Features/Benefits'
    )?.content;
    const benefits = [
        {
            icon: <PublicIcon />,
            title: 'Global Credibility',
            description: 'Gain recognition by demonstrating compliance with an internationally recognized ITSM standard.'
        },
        {
            icon: <ThumbUpIcon />,
            title: 'Customer Satisfaction',
            description: 'Boost customer trust and loyalty through consistent, quality-driven IT service delivery.'
        },
        {
            icon: <TrendingUpIcon />,
            title: 'Operational Efficiency',
            description: 'Streamline processes, reduce downtimes, and optimize resources with structured service frameworks.'
        },
        {
            icon: <ShieldIcon />,
            title: 'Risk Mitigation',
            description: 'Identify and address IT service vulnerabilities proactively, minimizing threats to business continuity.'
        },
        {
            icon: <SettingsIcon />,
            title: 'Process Integration',
            description: 'Align IT service management with business objectives, creating a cohesive operational environment.'
        },
        {
            icon: <VerifiedIcon />,
            title: 'Continuous Improvement',
            description: 'Establish methods for ongoing service refinement, ensuring you stay ahead of evolving IT demands.'
        }
    ];

    if (!featuresSection) return null;

    return (
        <Box sx={featuresSectionStyle.box} id="iso20000-benefits">
            <Container sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.containerBox}>
                    <Typography component="h2" variant="h4" sx={featuresSectionStyle.heading}>
                        Key Business Benefits of ISO 20000-1
                    </Typography>
                    <Typography variant="body1" sx={featuresSectionStyle.subheading}>
                        Transform Your Service Delivery with Internationally Recognized IT Service Management
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {benefits.map((benefit, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box sx={featuresSectionStyle.stepContainer}>
                                <Box sx={featuresSectionStyle.iconContainer}>
                                    {benefit.icon}
                                </Box>
                                <Box sx={featuresSectionStyle.textContainer}>
                                    <Typography variant="body1" sx={featuresSectionStyle.featureTitle}>
                                        {benefit.title}
                                    </Typography>
                                    <Typography variant="body2" sx={featuresSectionStyle.featureDesc}>
                                        {benefit.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Iso20000FeaturesSection;