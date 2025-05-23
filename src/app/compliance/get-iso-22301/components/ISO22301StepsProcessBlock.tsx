'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import {iso22301Data} from '../constants/iso22301Data';
import iso22301ImplementationStyle from '../styles/stepsProcessBlockStyle';
import image1 from '../images/22301Step1.png';
import image2 from '../images/22301Step2.png';
import image3 from '../images/22301Step3.png';
import image4 from '../images/22301Step4.png'
import image5 from '../images/22301Step5.png';
import image6 from '../images/22301Step6.png';
import theme from '../../../../theme';

export default function ISO22301StepsSection() {
    const section = iso22301Data.sections.find((sec) => sec.Sno === '4');
    if (!section) return null;

    const { title, subtitle } = section;
    const rawSteps = section.content?.steps || [];
    const processedSteps = rawSteps.map(step => {
        const stepStr = typeof step === 'string' ? step : '';
        const hasSeparator = stepStr.includes(':');

        if (hasSeparator) {
            const [title, ...descParts] = stepStr.split(':');
            return {
                title: title.trim(),
                description: descParts.join(':').trim()
            };
        } else {
            return {
                title: stepStr,
                description: ''
            };
        }
    });

    const styles = iso22301ImplementationStyle;
    const stepImages = [image1, image2, image3, image4, image5, image6];

    return (
        <Box sx={styles.container}>
            <Box sx={styles.innerContainer}>
                <Typography variant="h2" component="h2" sx={styles.title}>
                    {title || "Implementing ISO 22301"}
                </Typography>

                <Typography variant="h6" component="p" sx={styles.subtitle}>
                    {subtitle || "A Step-by-Step Process"}
                </Typography>


                {processedSteps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Grid
                            container
                            key={index}
                            spacing={4}
                            sx={{
                                ...styles.stepContainer,
                                flexDirection: {
                                    xs: 'column-reverse',
                                    md: isEven ? 'row' : 'row-reverse'
                                }
                            }}
                        >

                            <Grid size={{ xs: 12, md: 6 }} sx={styles.textContent}>
                                <Typography variant="h5" component="h3" sx={styles.stepNumber}>
                                    Step {index + 1}
                                </Typography>

                                <Typography variant="h4" component="h4" sx={styles.stepTitle}>
                                    {step.title}
                                </Typography>

                                {step.description && (
                                    <Typography variant="body1" sx={styles.stepDescription}>
                                        {step.description}
                                    </Typography>
                                )}
                            </Grid>


                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={styles.imageContainer}>
                                    {index < stepImages.length && (
                                        <Image
                                            src={stepImages[index]}
                                            alt={`ISO 22301 Implementation Step ${index + 1}`}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    );
                })}
            </Box>
        </Box>
    );
}