'use client'
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import bookDemoStyle from '../styles/bookDemoStyle';
import hexafortSecureData from '../constants/hexafortSecureData';

// Using the shield image from the public folder
const demoImage = '/images/compliances/a-shield-icon-with-subtle-digital-circuit-pattern-.png';

const BookDemo = () => {
    const { bookDemo } = hexafortSecureData;
    
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={bookDemoStyle.box}>
            <Container sx={bookDemoStyle.container}>
                <Box sx={bookDemoStyle.textBox}>
                    <Typography sx={bookDemoStyle.tagline}>{bookDemo.tagline}</Typography>
                    <Typography variant="h4" sx={bookDemoStyle.title}>
                        {bookDemo.title}
                    </Typography>
                    <Box sx={bookDemoStyle.points}>
                        {bookDemo.points.map((point, index) => (
                            <Box key={index} sx={bookDemoStyle.point}>
                                <CheckCircleIcon sx={bookDemoStyle.icon} />
                                <Typography component="span">{point}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        type="button"
                        fullWidth
                        sx={bookDemoStyle.button}
                        onClick={handleScrollToTop}
                    >
                        {bookDemo.buttonText}
                    </Button>
                </Box>
                <Box sx={bookDemoStyle.imageBox}>
                    <Image
                        src={demoImage}
                        alt="Book a Demo"
                        width={500}
                        height={320}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        }}
                        priority
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default BookDemo;