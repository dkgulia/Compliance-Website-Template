import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import stepsData from '../../get-soc-2/constants/gettingStartedData';
import soc2StepsSectionStyle from '../styles/GettingStartedStyles';
import image1 from '../images/soc2Step1.png';
import image2 from '../images/soc2Step2.png';
import image3 from '../images/soc2Step3.png';
import image4 from '../images/soc2Step4.png';

const stepImages = [image1, image2, image3, image4];

const SOC2StepsSection = () => {
    const styles = soc2StepsSectionStyle;

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerBox}>
                <Typography variant="h1" sx={styles.title}>
                    Getting started with{' '}
                    <Box component="span" sx={styles.highlight}>
                        ComplianceHub
                    </Box>{' '}
                    is easy
                </Typography>
                <Typography variant="body1" sx={styles.subtitle}>
                    Follow these simple steps to implement your SOC2 framework
                </Typography>

                {stepsData.map((step, index) => (
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                        key={index}
                        sx={{
                            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                            marginBottom: '0rem',
                        }}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
                                <Box sx={styles.imageContainer}>
                                    <Image
                                        src={stepImages[index] || "/images/soc2/step-placeholder.png"}
                                        alt={`Step ${index + 1}`}
                                        width={300}
                                        height={300}
                                        layout="intrinsic"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={styles.textContainer}>
                                <Typography sx={styles.stepNumber}>
                                    Step {index + 1}
                                </Typography>
                                <Typography variant="h3" sx={styles.stepHeading}>
                                    {step.title}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    );
};

export default SOC2StepsSection;