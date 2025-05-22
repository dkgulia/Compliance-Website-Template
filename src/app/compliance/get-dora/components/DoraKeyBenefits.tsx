/* <ai_context>
   This component renders the "Key Benefits of Embracing DORA" from the JSON data.
   Now, we want to copy the style from PainPoints to have a bullet item approach on a dark background.
</ai_context> */

"use client";
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { complianceData } from '../constants/doraData';
import DoraKeyBenefitsStyle from '../styles/doraKeyBenefitsStyle';

export default function DoraKeyBenefits() {
    const benefitsSection = complianceData.sections.find(
        (section) => section.heading === 'Key Benefits of Embracing DORA'
    );

    if (!benefitsSection) return null;

    return (
        <Box sx={DoraKeyBenefitsStyle.outerContainer}>
            <Box sx={DoraKeyBenefitsStyle.contentBox}>
                <Typography variant="h4" sx={DoraKeyBenefitsStyle.headline}>
                    {benefitsSection.heading}
                </Typography>

                <Stack spacing={2} sx={DoraKeyBenefitsStyle.bulletList}>
                    {benefitsSection.bulletedList?.map((benefit, i) => {
                        // Let's separate the label from the description if there's a colon
                        const [boldPart, ...rest] = benefit.split(':');
                        const description = rest.join(':').trim();
                        return (
                            <Box key={i} sx={DoraKeyBenefitsStyle.bulletItem}>
                                <VerifiedIcon sx={DoraKeyBenefitsStyle.checkIcon} />
                                <Typography sx={DoraKeyBenefitsStyle.bulletText}>
                                    <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                        {boldPart}:
                                    </Typography>{' '}
                                    {description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
        </Box>
    );
}