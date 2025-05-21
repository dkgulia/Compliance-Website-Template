'use client';
import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ShieldOutlined, VerifiedUser, SecurityOutlined } from '@mui/icons-material';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso22301Data } from '../constants/iso22301Data';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const ISO22301HeroSection: React.FC = () => {
	const heroBullets = [
		{
			icon: ShieldOutlined,
			title: 'Protected',
			text: 'Operations'
		},
		{
			icon: VerifiedUser,
			title: 'Risk',
			text: 'Management'
		},
		{
			icon: SecurityOutlined,
			title: 'Global',
			text: 'Standard'
		}
	];

	const [selectedOptions, setSelectedOptions] = useState<string[]>([
		'ISO 27001',
		'ISO 42001',
		'ISO 22301'
	]);

	const handleOptionsChange = (newOptions: string[]) => {
		setSelectedOptions(newOptions);
	};

	const handleSubmitCallback = (values: ComplianceFormValues) => {
		console.log('Submitted with Values and Options:', { ...values, selectedOptions });
	};

    const complianceOptions = [
        'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
        'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
        'ISO 27701', 'DORA', 'CMMC', 'PDPA'
    ];

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Typography variant="body2" sx={heroSectionStyle.tagText}>
							🔒 ISO 22301 Compliance Made Simple
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyle.mainTitle}>
						Business Continuity Management
						<Box component="span" display="block" sx={heroSectionStyle.highlightText}>
							Safeguard Your Organization
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
					<EnhancedComplianceForm
						title="Book Your ISO 22301 Demo Today!"
						subtitle="Get answers to all your questions about ISO 22301 compliance."
						buttonText="Book Your Demo"
						sheetName={sheetNameTypes.iso22301Form}
						formStyles={heroSectionStyle}
						selectedOptions={selectedOptions}
						onOptionsChange={handleOptionsChange}
						complianceOptions={complianceOptions}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301HeroSection;