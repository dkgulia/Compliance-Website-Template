"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import gdprBookNowStyle from '../styles/gdrpBookNowStyle';
import demoImage from '../images/gdpr-cta.png'

export default function GdprBookNowSection() {
    const bulletPoints = [
        'Real-time compliance tracking & gap analysis',
        'Automated workflows for data requests & privacy notices',
        'Comprehensive security to mitigate breach risk',
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={gdprBookNowStyle.container}>
            <Container maxWidth="lg">
                <Box sx={gdprBookNowStyle.innerContainer}>
                    <Box sx={gdprBookNowStyle.imageBox}>
                        <Box sx={gdprBookNowStyle.imageWrapper}>
                            <Image
                                src={demoImage}
                                alt="GDPR Demo"
                                width={420}
                                height={300}
                                style={gdprBookNowStyle.imageStyle}
                                priority
                            />
                        </Box>
                    </Box>

                    <Box sx={gdprBookNowStyle.textBox}>
                        <Typography variant="body1" sx={gdprBookNowStyle.tagline}>
                            Boost GDPR Compliance
                        </Typography>

                        <Typography variant="h4" sx={gdprBookNowStyle.title}>
                            Book a GDPR Demo
                        </Typography>

                        <Box sx={gdprBookNowStyle.points}>
                            {bulletPoints.map((point, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                    sx={gdprBookNowStyle.point}
                                >
                                    <CheckCircleIcon sx={gdprBookNowStyle.icon} />
                                    <Typography sx={gdprBookNowStyle.pointText}>{point}</Typography>
                                </Stack>
                            ))}
                        </Box>

                        <Box sx={gdprBookNowStyle.buttonContainer}>
                            <Button
                                variant="outlined"
                                sx={gdprBookNowStyle.button}
                                onClick={scrollToTop}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}