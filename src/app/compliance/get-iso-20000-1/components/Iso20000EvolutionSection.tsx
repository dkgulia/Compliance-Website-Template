/* <ai_context>
   Renders the "Evolution and Background of ISO 20000-1" from iso20000Data.sections[3].content
</ai_context> */

'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import {iso20000Data} from '../constants/iso20000Data';
import evolutionSectionStyle from '../styles/evolutionSectionStyle';

const Iso20000EvolutionSection: React.FC = () => {
    const evoSection = iso20000Data.sections.find(
        (section) => section.blockType === 'Simple Info' && section.Sno === '4'
    )?.content;

    if (!evoSection) return null;

    return (
        <Box sx={evolutionSectionStyle.box}>
            <Box sx={evolutionSectionStyle.innerBox}>
                <Typography variant="h3" sx={evolutionSectionStyle.title}>
                    {evoSection.title}
                </Typography>

                <Typography variant="h5" sx={evolutionSectionStyle.subtitle}>
                    {evoSection.subtitle}
                </Typography>

                <Typography variant="body1" sx={evolutionSectionStyle.subheading}>
                    {evoSection.subheading}
                </Typography>
                <Typography variant="body2" sx={evolutionSectionStyle.imageNote}>
                    <em>Image Idea: {evoSection.imageIdea}</em>
                </Typography>
            </Box>
        </Box>
    );
};

export default Iso20000EvolutionSection;