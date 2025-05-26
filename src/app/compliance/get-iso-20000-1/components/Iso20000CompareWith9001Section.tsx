'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import {iso20000Data} from '../constants/iso20000Data';
import compareStyle from '../styles/compareStyle';
import BalanceIcon from '@mui/icons-material/Balance';
import TuneIcon from '@mui/icons-material/Tune';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const Iso20000CompareWith9001Section: React.FC = () => {
    const compSection = iso20000Data.sections.find(
        (section) => section.blockType === 'Simple Info' && section.Sno === '5'
    )?.content;

    if (!compSection) return null;

    const icons = [
        <BalanceIcon key="balance" sx={compareStyle.icon} />,
        <TuneIcon key="tune" sx={compareStyle.icon} />,
        <IntegrationInstructionsIcon key="integration" sx={compareStyle.icon} />
    ];

    return (
        <Box sx={compareStyle.box}>
            <Box sx={compareStyle.innerBox}>
                <Typography variant="h3" sx={compareStyle.title}>
                    {compSection.title}
                </Typography>

                {compSection.steps?.map((step: string, index: number) => (
                    <Stack
                        key={index}
                        direction="row"
                        spacing={2}
                        sx={compareStyle.stepStack}
                    >
                        {icons[index] || <BalanceIcon sx={compareStyle.icon} />}
                        <Typography variant="body1" sx={compareStyle.text}>
                            {step}
                        </Typography>
                    </Stack>
                ))}
            </Box>
        </Box>
    );
};

export default Iso20000CompareWith9001Section;