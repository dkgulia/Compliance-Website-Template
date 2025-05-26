'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import teamInfoSectionStyle from '../styles/teamInfoSectionStyle';
import { cspmData } from '../constants/cspmData';
import Image from 'next/image';
import securityTeamImage from '../images/teamsImage.png';

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
                            <Image
                                src={securityTeamImage}
                                alt={cspmData.teamInfo.imageIdea || "Security team collaboration"}
                                fill
                                style={teamInfoSectionStyle.teamImage}
                                priority
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamInfoSection;