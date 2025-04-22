'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EnhancedSoc2HeroSectionForm from './EnhancedHeroSectionForm';
import soc2HeroSectionStyles from '../styles/HeroSectionStyles';

const Soc2HeroSection = () => {
	return (
		<Box sx={soc2HeroSectionStyles.container}>
			<Container sx={soc2HeroSectionStyles.containerBox}>
				<Box sx={soc2HeroSectionStyles.leftContentBox}>
					<Box sx={soc2HeroSectionStyles.tag}>
						<Typography variant="body2" sx={soc2HeroSectionStyles.tagText}>
							🚀 SOC 2 Compliance, Made Easy
						</Typography>
					</Box>

					<Typography variant="h3" sx={soc2HeroSectionStyles.mainTitle}>
						SOC 2 Compliance Ready in Weeks: <br />
						<Box component="span" sx={soc2HeroSectionStyles.highlightText}>
							Secure Compliance Without the Stress
						</Box>
					</Typography>

					<Typography sx={soc2HeroSectionStyles.description}>
						Use HexaFort to map risks to the SOC 2 controls and run a fully-automated SOC 2 compliance checklist to ensure
						continuous compliance and a smooth SOC 2 audit report.
					</Typography>

					<Box sx={soc2HeroSectionStyles.featuresContainer}>
						<Box sx={soc2HeroSectionStyles.featureItem}>
							<Box sx={soc2HeroSectionStyles.iconWrapper}>
								<VideoCallIcon sx={soc2HeroSectionStyles.featureIcon} />
							</Box>
							<Box sx={soc2HeroSectionStyles.featureTextWrapper}>
								<Typography sx={soc2HeroSectionStyles.featureTitle}>1:1 session</Typography>
								<Typography sx={soc2HeroSectionStyles.featureSubtitle}>Platform Implementation</Typography>
							</Box>
						</Box>

						<Box sx={soc2HeroSectionStyles.featureItem}>
							<Box sx={soc2HeroSectionStyles.iconWrapper}>
								<AccessTimeIcon sx={soc2HeroSectionStyles.featureIcon} />
							</Box>
							<Box sx={soc2HeroSectionStyles.featureTextWrapper}>
								<Typography sx={soc2HeroSectionStyles.featureTitle}>10X</Typography>
								<Typography sx={soc2HeroSectionStyles.featureSubtitle}>Fast Audits</Typography>
							</Box>
						</Box>

						<Box sx={soc2HeroSectionStyles.featureItem}>
							<Box sx={soc2HeroSectionStyles.iconWrapper}>
								<CheckCircleOutlineIcon sx={soc2HeroSectionStyles.featureIcon} />
							</Box>
							<Box sx={soc2HeroSectionStyles.featureTextWrapper}>
								<Typography sx={soc2HeroSectionStyles.featureTitle}>100%</Typography>
								<Typography sx={soc2HeroSectionStyles.featureSubtitle}>Audit Success</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={soc2HeroSectionStyles.formBox}>
					<EnhancedSoc2HeroSectionForm />
				</Box>
			</Container>
		</Box>
	);
};

export default Soc2HeroSection;
