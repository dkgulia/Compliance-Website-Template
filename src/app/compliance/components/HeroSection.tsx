'use client';
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyles from '../styles/heroSectionStyle';
import { ComplianceOptions } from '../../constants/complianceData';
import logo from '../../compliance/get-pci-dss/images/dual-hex-white.png'

const HeroSection = () => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([
		ComplianceOptions.ISO27001,
		ComplianceOptions.ISO27018,
	]);

	const handleOptionsChange = (newOptions: string[]) => {
		setSelectedOptions(newOptions);
	};

	const handleSubmitCallback = (values: { fullName: string; email: string }) => {
		console.log('Submitted with Options:', { ...values, selectedOptions });
	};

	return (
		<Box sx={heroSectionStyles.container}>
			<Container sx={heroSectionStyles.containerBox}>
				<Box sx={heroSectionStyles.contentBox}>
					<Typography sx={heroSectionStyles.tagline}>#1 Rated compliance automation platform</Typography>
					<Typography variant="h3" sx={heroSectionStyles.title}>
						Automate Compliance and Simplify Security with{' '}
						<Box sx={heroSectionStyles.highlightWrapper}>
							<Box component="span" sx={heroSectionStyles.highlight}>
								HexaFort
							</Box>
							<Box sx={heroSectionStyles.logoWrapper}>
								<Image
									src={logo}
									alt="HexaFort Logo"
									width={40}
									height={40}
									priority
								/>
							</Box>
						</Box>
					</Typography>
					<Typography sx={heroSectionStyles.description}>
						HexaFort is your trusted compliance partner. Our GRC platform automates compliance, risk management, and
						incident response to simplify security for growing businesses.
					</Typography>
				</Box>
				<Box sx={heroSectionStyles.formBox}>
					<EnhancedHeroSectionForm
						selectedOptions={selectedOptions}
						onOptionsChange={handleOptionsChange}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;