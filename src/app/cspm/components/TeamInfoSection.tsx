'use client';
import React from 'react';
import { Box, Typography, Icon } from '@mui/material';
import teamInfoSectionStyle from '../styles/teamInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const TeamInfoSection: React.FC = () => {
    return (
        <Box sx={teamInfoSectionStyle.box}>
            <Box sx={teamInfoSectionStyle.container}>
                <Typography variant="h2" component="h2" sx={teamInfoSectionStyle.title}>
                    {cspmData.teamInfo.title}
                </Typography>
                
                <Box sx={teamInfoSectionStyle.contentWrapper}>
                    <Box sx={teamInfoSectionStyle.textContent}>
                        {cspmData.teamInfo.description.map((paragraph, index) => (
                            <Typography 
                                key={index} 
                                variant="body1" 
                                sx={teamInfoSectionStyle.descriptionCentered}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                    
                    <Box sx={teamInfoSectionStyle.imageContainer}>
                        {/* Placeholder for image */}
                        <Box sx={teamInfoSectionStyle.placeholderImage}>
                            <Icon sx={{ fontSize: '2rem', mr: 1 }}>groups</Icon>
                            {cspmData.teamInfo.imageIdea}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TeamInfoSection;