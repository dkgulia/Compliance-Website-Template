'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import pciDssBookADemoStyle from '../styles/pciDssBookADemoStyle';
//import { COMPLIANCE } from '../../../../constants/routes';
import pciDssData from '../constants/pciDssData';
import bookDemoImage from '../images/create-a-professional--high-quality-image-depictin.png';

const PciDssBookADemo = () => {
    return (
        <Box sx={pciDssBookADemoStyle.box}>
            <Container sx={pciDssBookADemoStyle.container}>
                <Box>
                    <Image
                        src={bookDemoImage}
                        alt="PCI DSS Demo"
                        priority
                        fill
                        sizes="(max-width: 700px) 90vwhvw, 50vw"
                    />
                </Box>
                <Box sx={pciDssBookADemoStyle.textBox}>
                    <Grid >
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
                            fullWidth
                            sx={pciDssBookADemoStyle.button}
                            // href={COMPLIANCE}
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