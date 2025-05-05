'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EnhancedHeroSectionForm from '../components/EnhancedNistHeroSectionForm';
import heroSectionStyles from '../styles/heroSectionStyle';
import theme from '../../../../theme';

const HeroSection: React.FC = () => {
	return (
		<Box sx={heroSectionStyles.container}>
			<Container sx={heroSectionStyles.containerBox}>
				<Box sx={heroSectionStyles.leftContentBox}>
					<Box sx={heroSectionStyles.tag}>
						<Typography variant="body2" sx={heroSectionStyles.tagText}>
							🔒 Your Framework Compliance
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyles.mainTitle}>
						Main Framework Title
						<Box component="span" display="block" sx={heroSectionStyles.highlightText}>
							Framework Subtitle Highlight
						</Box>
					</Typography>

					<Typography sx={heroSectionStyles.description}>
						This is the description paragraph that explains the key benefits of this framework compliance and how your
						platform helps customers achieve and maintain compliance.
					</Typography>

					<Box sx={heroSectionStyles.featuresContainer}>
						<Box sx={heroSectionStyles.featureItem}>
							<Box sx={heroSectionStyles.iconWrapper}>
								<VerifiedUserIcon sx={heroSectionStyles.featureIcon} />
							</Box>
							<Box sx={heroSectionStyles.featureTextWrapper}>
								<Typography sx={heroSectionStyles.featureTitle}>Automated Assessment</Typography>
								<Typography sx={heroSectionStyles.featureSubtitle}>Instantly map controls</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyles.featureItem}>
							<Box sx={heroSectionStyles.iconWrapper}>
								<SecurityIcon sx={heroSectionStyles.featureIcon} />
							</Box>
							<Box sx={heroSectionStyles.featureTextWrapper}>
								<Typography sx={heroSectionStyles.featureTitle}>Continuous Monitoring</Typography>
								<Typography sx={heroSectionStyles.featureSubtitle}>Real-time alerts</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyles.featureItem}>
							<Box sx={heroSectionStyles.iconWrapper}>
								<CheckCircleOutlineIcon sx={heroSectionStyles.featureIcon} />
							</Box>
							<Box sx={heroSectionStyles.featureTextWrapper}>
								<Typography sx={heroSectionStyles.featureTitle}>Comprehensive Reporting</Typography>
								<Typography sx={heroSectionStyles.featureSubtitle}>Audit-ready</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={heroSectionStyles.formBox}>
					<EnhancedHeroSectionForm />
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
