'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import bookADemoStyle from '../styles/bookADemoStyle';

const BookADemo = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={bookADemoStyle.box}>
            <Container sx={bookADemoStyle.container}>
                <Box sx={bookADemoStyle.imagePlaceholder}>
                    <Typography variant="body2" color="textSecondary">
                        Risk Management Dashboard Preview
                    </Typography>
                </Box>
                <Box sx={bookADemoStyle.textBox}>
                    <Typography sx={bookADemoStyle.tagline}>HexaFort Risk Management</Typography>
                    <Typography variant="h4" sx={bookADemoStyle.title}>
                        Transform Your Risk Management Approach
                    </Typography>
                    <Box sx={bookADemoStyle.points}>
                        <Box sx={bookADemoStyle.point}>
                            <CheckCircleIcon sx={bookADemoStyle.icon} />
                            <Typography component="span">Customize scoring with your unique risk factors and weights</Typography>
                        </Box>
                        <Box sx={bookADemoStyle.point}>
                            <CheckCircleIcon sx={bookADemoStyle.icon} />
                            <Typography component="span">Identify and address critical risks through CIA evaluation</Typography>
                        </Box>
                        <Box sx={bookADemoStyle.point}>
                            <CheckCircleIcon sx={bookADemoStyle.icon} />
                            <Typography component="span">Generate audit-ready documentation in one click</Typography>
                        </Box>
                    </Box>
                    <Box sx={bookADemoStyle.buttonContainer}>
                        <Button
                            variant="contained"
                            type="button"
                            fullWidth
                            sx={bookADemoStyle.button}
                            onClick={handleScrollToTop}
                        >
                            Book Your Demo
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BookADemo;