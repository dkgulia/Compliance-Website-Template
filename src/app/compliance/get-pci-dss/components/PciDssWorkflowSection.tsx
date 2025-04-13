'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import pciDssData from '../constants/pciDssData';
import workflowSectionStyle from '../styles/workflowSectionStyle';

const PciDssWorkflowSection: React.FC = () => {
    return (
        <Box sx={workflowSectionStyle.box}>
            <Box sx={workflowSectionStyle.workflowOuterContainer}>
                <Box sx={workflowSectionStyle.workflowContainer}>
                    <Grid container spacing={2} sx={workflowSectionStyle.gridWrapper}>
                        <Grid size={{ xs: 12, md: 5 }} sx={workflowSectionStyle.leftSection}>
                            <Box sx={workflowSectionStyle.chip}>
                                {pciDssData.workflowChip}
                            </Box>
                            <Typography variant="h4" sx={workflowSectionStyle.title}>
                                {pciDssData.workflowTitle}
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }} sx={workflowSectionStyle.rightSection}>
                            <Typography variant="body1" sx={workflowSectionStyle.description}>
                                {pciDssData.workflowDescription}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={workflowSectionStyle.gridContainer}>
                        {pciDssData.workflow.map((item, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={i}>
                                <Box sx={workflowSectionStyle.card}>
                                    <Box sx={workflowSectionStyle.cardContent}>
                                        <Box sx={workflowSectionStyle.iconContainer}>
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </Box>
                                        <Typography variant="body1" sx={workflowSectionStyle.cardTitle}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default PciDssWorkflowSection;