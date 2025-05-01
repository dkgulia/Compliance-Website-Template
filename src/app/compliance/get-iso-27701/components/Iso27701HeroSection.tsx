'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EnhancedIso27701HeroSectionForm from '../components/EnhancedIso27701HeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701HeroSection: React.FC = () => {
	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Typography variant="body2" sx={heroSectionStyle.tagText}>
							{iso27701Data.heroTitle}
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyle.mainTitle}>
						Extend Your ISMS for Cutting-Edge Data Security
						<Box component="span" display="block" sx={heroSectionStyle.highlightText}>
							and Privacy Compliance
						</Box>
					</Typography>

					<Typography sx={heroSectionStyle.description}>
						Use ISO 27701 to map risks to data privacy controls and run a fully-automated compliance checklist to ensure
						continuous compliance and a smooth audit report.
					</Typography>

					<Box sx={heroSectionStyle.featuresContainer}>
						{iso27701Data.heroBullets.map((item, index) => {
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
					<EnhancedIso27701HeroSectionForm />
				</Box>
			</Container>
		</Box>
	);
};

export default Iso27701HeroSection;