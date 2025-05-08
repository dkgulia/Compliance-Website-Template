'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import teamInfoSectionStyle from '../styles/teamInfoSectionStyle';
import { cspmData } from '../constants/cspmData';

const TeamInfoSection: React.FC = () => {
    return (
        <Box component="section" sx={teamInfoSectionStyle.box}>
            <Container maxWidth="lg" sx={teamInfoSectionStyle.container}>
                <Box sx={teamInfoSectionStyle.containerBox}>
                    <Typography variant="h2" sx={teamInfoSectionStyle.heading}>
                        {cspmData.teamInfo.title}
                    </Typography>
                </Box>

                <Box sx={teamInfoSectionStyle.contentBox}>
                    <Box sx={teamInfoSectionStyle.textContent}>
                        {cspmData.teamInfo.description.map((paragraph, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={teamInfoSectionStyle.description}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={teamInfoSectionStyle.imageContainer}>
                        <Box sx={teamInfoSectionStyle.imageCard}>
                            <GroupsIcon sx={teamInfoSectionStyle.teamIcon} />
                            <Typography sx={teamInfoSectionStyle.imagePlaceholder}>
                                {cspmData.teamInfo.imageIdea}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamInfoSection;