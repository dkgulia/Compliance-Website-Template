'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Card, Stack } from '@mui/material';
import howIgniPCHelpsStyle from '../styles/howIgniPCHelpsStyle';
import pciDssData from '../constants/pciDssData';

const PciDssHowIgniPCHelps = () => {
    return (
        <Box sx={howIgniPCHelpsStyle.box}>
            <Container sx={howIgniPCHelpsStyle.container}>
                <Typography component="h2" variant="h4" sx={howIgniPCHelpsStyle.title}>
                    {pciDssData.howIgniPCHelpsTitle}
                </Typography>

                <Typography variant="body1" sx={howIgniPCHelpsStyle.subtitle}>
                    {pciDssData.howIgniPCHelpsSubtitle}
                </Typography>

                <Grid container spacing={{ sm: 2, xs: 0.5 }} sx={howIgniPCHelpsStyle.grid}>
                    {pciDssData.howIgniPCHelpsSteps.map((step, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                            <Card variant="outlined" sx={howIgniPCHelpsStyle.card}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                    spacing={2}
                                    sx={howIgniPCHelpsStyle.cardContent}
                                >
                                    <Box sx={{ color: step.color, fontSize: '2rem', minWidth: '32px' }}>
                                        <step.icon />
                                    </Box>
                                    <Typography variant="body1" sx={howIgniPCHelpsStyle.cardText}>
                                        {step.text}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PciDssHowIgniPCHelps;