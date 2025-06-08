'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import impactSectionStyle from '../styles/impactSectionStyle';

const ImpactSection: React.FC = () => {
	const impacts = [
		{
			title: 'Reduced Compliance Costs',
			description: 'Streamline processes and minimize manual effort, saving valuable time and resources.',
			icon: SavingsIcon,
		},
		{
			title: 'Improved Operational Efficiency',
			description: 'Increase productivity and agility by automating tasks and gaining real-time insights.',
			icon: SpeedIcon,
		},
		{
			title: 'Enhanced Data Security',
			description: 'Protect sensitive data and minimize the risk of breaches with robust security measures.',
			icon: SecurityIcon,
		},
	];

	return (
		<Box sx={impactSectionStyle.section}>
			<Box sx={impactSectionStyle.headerContainer}>
				<Typography sx={impactSectionStyle.tagline}>
					MEASURABLE IMPACT
				</Typography>
				<Typography sx={impactSectionStyle.title}>
					Value for Your Business
				</Typography>
				<Typography sx={impactSectionStyle.subtitle}>
					Deliver tangible results that drive organizational success
				</Typography>
			</Box>

			<Box sx={impactSectionStyle.impactGrid}>
				{impacts.map((impact, index) => (
					<Box key={index} sx={impactSectionStyle.impactItem}>
						<Box sx={impactSectionStyle.iconContainer}>
							<impact.icon sx={impactSectionStyle.icon} />
						</Box>
						<Box sx={impactSectionStyle.textContainer}>
							<Typography sx={impactSectionStyle.impactTitle}>
								{impact.title}
							</Typography>
							<Typography sx={impactSectionStyle.impactDescription}>
								{impact.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ImpactSection;