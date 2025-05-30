'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import teamInfoSectionStyle from '../styles/teamInfoSectionStyle';
import { cspmData } from '../constants/cspmData';
import Image from 'next/image';
import securityTeamImage from '../images/teamsImage.png';

const TeamInfoSection: React.FC = () => {
    return (
        <Box sx={teamInfoSectionStyle.section}>
            <Box sx={teamInfoSectionStyle.headerContainer}>
                <Typography sx={teamInfoSectionStyle.tagline}>TEAM COLLABORATION</Typography>
                <Typography sx={teamInfoSectionStyle.title}>
                    {cspmData.teamInfo.title}
                </Typography>
            </Box>

            <Box sx={teamInfoSectionStyle.contentWrapper}>
                <Box sx={teamInfoSectionStyle.textContent}>
                    {cspmData.teamInfo.description.map((paragraph, index) => (
                        <Typography
                            key={index}
                            sx={teamInfoSectionStyle.description}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Box>

                <Box sx={teamInfoSectionStyle.imageContainer}>
                    <Box sx={teamInfoSectionStyle.imageWrapper}>
                        <Image
                            src={securityTeamImage}
                            alt={cspmData.teamInfo.imageIdea || "Security team collaboration"}
                            fill
                            style={teamInfoSectionStyle.teamImage}
                            priority
                            sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 500px"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TeamInfoSection;