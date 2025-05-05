'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso22301Data } from '../constants/iso22301Data';
import { ShieldOutlined, VerifiedUser, SecurityOutlined } from '@mui/icons-material';

const ISO22301HeroSection: React.FC = () => {
	const heroBullets = [
		{
			icon: ShieldOutlined,
			title: 'Protected Operations',
			text: 'Safeguard business continuity'
		},
		{
			icon: VerifiedUser,
			title: 'Risk Management',
			text: 'Minimize operational disruptions'
		},
		{
			icon: SecurityOutlined,
			title: 'International Standard',
			text: 'Globally recognized compliance'
		}
	];

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Typography variant="body2" sx={heroSectionStyle.tagText}>
							{iso22301Data.heroTitle || 'ISO 22301 Compliance'}
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyle.mainTitle}>
						{iso22301Data.heroSubtitle || 'Business Continuity Management'}
						<Box component="span" display="block" sx={heroSectionStyle.highlightText}>
							{iso22301Data.highlightText || 'Safeguard Your Organization'}
						</Box>
					</Typography>

					<Typography sx={heroSectionStyle.description}>
						ISO 22301 is the international standard for Business Continuity Management Systems (BCMS), enabling
						organizations to prepare for, respond to, and recover from disruptive incidents.
					</Typography>

					<Box sx={heroSectionStyle.featuresContainer}>
						{heroBullets.map((item, index) => {
							const Icon = item.icon;
							return (
								<Box key={index} sx={heroSectionStyle.featureItem}>
									<Box sx={heroSectionStyle.iconWrapper}>
										<Icon sx={heroSectionStyle.featureIcon} />
									</Box>
									<Box sx={heroSectionStyle.featureTextWrapper}>
										<Typography sx={heroSectionStyle.featureTitle}>
											{item.title}
										</Typography>
										<Typography sx={heroSectionStyle.featureSubtitle}>
											{item.text}
										</Typography>
									</Box>
								</Box>
							);
						})}
					</Box>
				</Box>

				<Box sx={heroSectionStyle.formBox}>
					<EnhancedHeroSectionForm />
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301HeroSection;