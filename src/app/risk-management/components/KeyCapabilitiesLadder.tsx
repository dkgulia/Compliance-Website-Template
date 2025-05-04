'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
    Tune as TuneIcon,
    Security as SecurityIcon,
    Insights as InsightsIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import keyCapabilitiesStyle from '../styles/keyCapabilitiesStyle';
import { riskManagementData } from '../constants/riskManagementData';
import theme from '../../../theme';

const KeyCapabilitiesLadder: React.FC = () => {
    const benefitsContent = riskManagementData.sections.find(
        (section) => section.Sno === '2' && section.blockType === 'Benefits'
    );

    if (!benefitsContent) return null;

    const capabilities = benefitsContent.content.benefits;

    const iconMap = {
        Tune: TuneIcon,
        Security: SecurityIcon,
        Insights: InsightsIcon,
        CheckCircle: CheckCircleIcon,
    };

    return (
        <Box id="risk-management-capabilities" sx={keyCapabilitiesStyle.box}>
            <Container sx={keyCapabilitiesStyle.container}>
                <Box sx={keyCapabilitiesStyle.containerBox}>
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={keyCapabilitiesStyle.heading}
                    >
                        {benefitsContent.content.title}
                    </Typography>

                    <Typography variant="body1" sx={keyCapabilitiesStyle.subHeading}>
                        {benefitsContent.content.subtitle ||
                            'Powerful features that give you complete control over your risk landscape'}
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    {capabilities.map((item, index) => {
                        const IconComp = iconMap[item.muiIcon];
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Box sx={keyCapabilitiesStyle.stepContainer}>
                                    <Box sx={keyCapabilitiesStyle.iconContainer}>
                                        <IconComp sx={keyCapabilitiesStyle.icon} />
                                    </Box>

                                    <Box sx={keyCapabilitiesStyle.textContainer}>
                                        <Typography variant="body1" sx={keyCapabilitiesStyle.title}>
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={keyCapabilitiesStyle.description}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default KeyCapabilitiesLadder;