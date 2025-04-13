'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import pciDssData from '../constants/pciDssData';

const PciDssHeroSection: React.FC = () => {
	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Typography variant="body2" sx={heroSectionStyle.tagText}>
							{pciDssData.heroTitle}
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyle.mainTitle}>
						{pciDssData.heroSubtitle}
						<Box component="span" display="block" sx={heroSectionStyle.highlightText}>
							{pciDssData.highlightText}
						</Box>
					</Typography>

					<Typography sx={heroSectionStyle.description}>
						{pciDssData.heroDescription[0]}
					</Typography>

					<Box sx={heroSectionStyle.featuresContainer}>
						{pciDssData.heroBullets.map((item, index) => {
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

export default PciDssHeroSection;