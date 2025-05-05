'use client';
import React from 'react';
import { Box, Typography, List, ListItem, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import {iso20000Data} from '../constants/iso20000Data';
import iso20000Image from '../images/demo-iso20000.png';
import imageTextStyle from '../styles/imageRightStyle';

const Iso20000ImageTextSection: React.FC = () => {
    const sectionData = iso20000Data.sections.find((section) => section.Sno === '9')?.content;

    if (!sectionData) return null;

    return (
        <Box sx={imageTextStyle.outerContainer}>
            <Box sx={imageTextStyle.container}>
                <Box sx={imageTextStyle.imageContainer}>
                    <Image
                        src={iso20000Image}
                        alt="ISO 20000-1 Journey"
                        fill
                        style={{
                            objectFit: 'contain',
                        }}
                        priority
                    />
                </Box>
                <Box sx={imageTextStyle.textContainer}>
                    <Typography variant="h4" sx={imageTextStyle.title}>
                        {sectionData.title}
                    </Typography>

                    <List sx={imageTextStyle.list}>
                        {sectionData.bulletPoints && sectionData.bulletPoints.map((point, index) => (
                            <ListItem key={index} sx={imageTextStyle.listItem}>
                                {point}
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        sx={imageTextStyle.button}
                        href="/talk-to-an-expert"
                        endIcon={<ArrowForwardIcon />}
                    >
                        {sectionData.ctaText || 'Talk to an Expert'}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Iso20000ImageTextSection;