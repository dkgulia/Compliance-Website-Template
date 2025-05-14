'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import pciDssBookADemoStyle from '../styles/pciDssBookADemoStyle';
import pciDssData from '../constants/pciDssData';
import bookDemoImage from '../images/pci-book-a-demo.png';

const PciDssBookADemo = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={pciDssBookADemoStyle.box}>
            <Container sx={pciDssBookADemoStyle.container}>
                <Box sx={pciDssBookADemoStyle.imageBox}>
                    <Image
                        src={bookDemoImage}
                        alt="PCI DSS Demo"
                        priority
                        width={500}
                        height={400}
                        style={pciDssBookADemoStyle.image}
                        sizes="(max-width: 700px) 90vw, 50vw"
                    />
                </Box>
                <Box sx={pciDssBookADemoStyle.textBox}>
                    <Grid>
                        <Typography sx={pciDssBookADemoStyle.tagline}>
                            {pciDssData.bookADemoTagline}
                        </Typography>
                    </Grid>

                    <Typography variant="h4" sx={pciDssBookADemoStyle.title}>
                        {pciDssData.bookADemoTitle}
                    </Typography>

                    <Box sx={pciDssBookADemoStyle.points}>
                        {pciDssData.bookADemoBullets.map((bullet, index) => (
                            <Box sx={pciDssBookADemoStyle.point} key={index}>
                                <CheckCircleIcon sx={pciDssBookADemoStyle.icon} />
                                <Typography component="span">{bullet}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={pciDssBookADemoStyle.buttonContainer}>
                        <Button
                            type="button"
                            sx={pciDssBookADemoStyle.button}
                            onClick={scrollToTop}
                        >
                            {pciDssData.bookADemoButtonLabel}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default PciDssBookADemo;