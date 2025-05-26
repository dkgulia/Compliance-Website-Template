'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import coreElementsStyle from '../styles/coreElementsStyle';
import {iso22301Data} from '../constants/iso22301Data';
import {
    AssignmentTurnedIn,
    Visibility,
    BarChart,
    SecurityOutlined,
    DescriptionOutlined,
    School,
    LoopOutlined
} from '@mui/icons-material';
import theme from '../../../../theme';

const ISO22301CoreElements: React.FC = () => {
    const sectionData = iso22301Data.sections.find((sec) => sec.Sno === '3' && sec.blockType === 'List Block');
    if (!sectionData) return null;

    const listItems = sectionData.list || [];
    const colorPalette = ['#FF453A', '#FF9F0A', '#32D74B', '#64D2FF', '#0A84FF', '#BF5AF2', '#FF375F'];


    const elementDetails = [
        {
            icon: AssignmentTurnedIn,
            title: "Leadership Commitment",
            color: colorPalette[0]
        },
        {
            icon: Visibility,
            title: "Context Review",
            color: colorPalette[1]
        },
        {
            icon: BarChart,
            title: "Business Impact Analysis",
            color: colorPalette[2]
        },
        {
            icon: SecurityOutlined,
            title: "Risk Assessment",
            color: colorPalette[3]
        },
        {
            icon: DescriptionOutlined,
            title: "Documented Plans",
            color: colorPalette[4]
        },
        {
            icon: School,
            title: "Training & Awareness",
            color: colorPalette[5]
        },
        {
            icon: LoopOutlined,
            title: "Continuous Improvement",
            color: colorPalette[6]
        }
    ];

    return (
        <Box sx={coreElementsStyle.box}>
            <Container sx={coreElementsStyle.container}>
                <Typography sx={coreElementsStyle.heading}>{sectionData.title}</Typography>
                <Typography sx={coreElementsStyle.subtitle}>{sectionData.subtitle}</Typography>

                <Grid container spacing={3} sx={coreElementsStyle.grid}>
                    {listItems.map((item, index) => {
                        const elementDetail = elementDetails[index % elementDetails.length];
                        const IconComp = elementDetail.icon;
                        return (
                            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                <Card elevation={0} sx={coreElementsStyle.card}>
                                    <Box sx={coreElementsStyle.cardInner}>
                                        <Box sx={coreElementsStyle.iconBox}>
                                            <IconComp sx={{ ...coreElementsStyle.icon }} />
                                        </Box>
                                        <Box sx={coreElementsStyle.cardContent}>
                                            <Typography sx={coreElementsStyle.cardTitle}>
                                                {elementDetail.title}
                                            </Typography>
                                            <Typography sx={coreElementsStyle.text}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ISO22301CoreElements;