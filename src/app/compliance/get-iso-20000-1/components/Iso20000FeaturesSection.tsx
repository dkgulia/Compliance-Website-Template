'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import {iso20000Data} from '../constants/iso20000Data';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';

const iconMap: any = {
    Public: <PublicIcon sx={{ fontSize: '2rem', color: '#ffffff' }} />,
    ThumbUp: <ThumbUpIcon sx={{ fontSize: '2rem', color: '#ffffff' }} />,
    TrendingUp: <TrendingUpIcon sx={{ fontSize: '2rem', color: '#ffffff' }} />,
    Security: <SecurityIcon sx={{ fontSize: '2rem', color: '#ffffff' }} />
};

const Iso20000FeaturesSection: React.FC = () => {
    const featuresSection = iso20000Data.sections.find(
        (section) => section.blockType === 'Features/Benefits'
    )?.content;

    if (!featuresSection) return null;

    return (
        <Box sx={featuresSectionStyle.box}>
            <Container sx={featuresSectionStyle.container}>
                <Box sx={featuresSectionStyle.containerBox}>
                    <Typography variant="h3" sx={featuresSectionStyle.heading}>
                        {featuresSection.title}
                    </Typography>
                    {featuresSection.subtitle && (
                        <Typography sx={featuresSectionStyle.subheading}>
                            {featuresSection.subtitle}
                        </Typography>
                    )}
                </Box>

                <Grid container spacing={2}>
                    {featuresSection.features?.map((feature: any, index: number) => {
                        const IconComp = iconMap[feature.muiIcon] || null;
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Card variant="outlined" sx={featuresSectionStyle.card}>
                                    <CardContent sx={featuresSectionStyle.cardContent}>
                                        <Box sx={featuresSectionStyle.iconContainer}>
                                            {IconComp}
                                        </Box>
                                        <Typography variant="h6" sx={featuresSectionStyle.featureTitle}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" sx={featuresSectionStyle.featureDesc}>
                                            {feature.description}
                                        </Typography>
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

export default Iso20000FeaturesSection;