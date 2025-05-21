'use client'
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import bookDemoStyle from '../styles/bookDemoStyle';
import hexafortSecureData from '../constants/hexafortSecureData';
import { ArrowForward } from '@mui/icons-material';
import demoImage from '../images/bookDemo.png';

const BookDemo: React.FC = () => {
    const { bookDemo } = hexafortSecureData;

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={bookDemoStyle.box}>
            <Box sx={bookDemoStyle.bannerContainer}>
                <Grid container spacing={3} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid size={{ xs: 12 }} sx={bookDemoStyle.titleSection}>
                                {bookDemo.tagline && (
                                    <Typography sx={bookDemoStyle.tagline}>
                                        {bookDemo.tagline}
                                    </Typography>
                                )}
                                <Typography variant="h4" sx={bookDemoStyle.heading}>
                                    {bookDemo.title}
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12 }} sx={bookDemoStyle.descriptionSection}>
                                <Box sx={bookDemoStyle.points}>
                                    {bookDemo.points.map((point, index) => (
                                        <Box key={index} sx={bookDemoStyle.point}>
                                            <CheckCircleIcon sx={bookDemoStyle.icon} />
                                            <Typography component="span">{point}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12 }} sx={bookDemoStyle.buttonSection}>
                                <Button
                                    variant="contained"
                                    sx={bookDemoStyle.button}
                                    onClick={handleScrollToTop}
                                    endIcon={<ArrowForward />}
                                >
                                    {bookDemo.buttonText}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} sx={bookDemoStyle.imageContainer}>
                        <Box sx={bookDemoStyle.imageWrapper}>
                            <Image
                                src={demoImage}
                                alt="Book a Demo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                                priority
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default BookDemo;