'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
	Shield,
	VideoCall as VideoCallIcon,
	AccessTime as AccessTimeIcon,
	VerifiedUser as VerifiedUserIcon,
} from '@mui/icons-material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';

const HeroSection: React.FC = () => {
	const heroContent = riskManagementData.sections.find(
		(section) => section.Sno === '1' && section.blockType === 'Hero'
	);

	if (!heroContent) return null;

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Shield sx={heroSectionStyle.taglineIcon} />
							<Typography sx={heroSectionStyle.tagText}>Risk Management Made Easy</Typography>
						</Box>
					</Box>

					<Typography variant="h1" sx={heroSectionStyle.mainTitle}>
						{heroContent.content.heroTitle}
					</Typography>

					<Typography sx={heroSectionStyle.subtitle}>Protect Your Business Assets</Typography>

					<Typography sx={heroSectionStyle.description}>
						Define likelihood-and-impact maths, see instant dashboards, assign fixes, and export audit packs with one
						click.
					</Typography>

					<Box sx={heroSectionStyle.featuresContainer}>
						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconWrapper}>
								<VideoCallIcon sx={heroSectionStyle.featureIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>1:1 Session</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Risk Framework Setup</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconWrapper}>
								<AccessTimeIcon sx={heroSectionStyle.featureIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>60%</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Time Saved</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconWrapper}>
								<VerifiedUserIcon sx={heroSectionStyle.featureIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>100%</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Audit Ready</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				{/* Right form section */}
				<Box sx={heroSectionStyle.formBox}>
					<EnhancedHeroSectionForm />
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
