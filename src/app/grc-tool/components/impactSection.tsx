'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import impactSectionStyle from '../styles/impactSectionStyle';

const ImpactSection: React.FC = () => {
	const impacts = [
		{
			title: "Reduced Compliance Costs",
			description: "Streamline processes and minimize manual effort, saving valuable time and resources.",
			icon: SavingsIcon
		},
		{
			title: "Improved Operational Efficiency",
			description: "Increase productivity and agility by automating tasks and gaining real-time insights.",
			icon: SpeedIcon
		},
		{
			title: "Enhanced Data Security",
			description: "Protect sensitive data and minimize the risk of breaches with robust security measures.",
			icon: SecurityIcon
		}
	];

	const metrics = [
		{
			value: "14",
			label: "Customers",
			description: "Satisfied clients across various industries"
		},
		{
			value: "$50,000",
			label: "ARR",
			description: "Current annual recurring revenue"
		},
		{
			value: "32",
			label: "Certifications",
			description: "Compliance standards supported"
		}
	];

	return (
		<Box sx={impactSectionStyle.section}>
			<Box sx={impactSectionStyle.backgroundGradient} />

			<Container sx={impactSectionStyle.container}>
				<Typography variant="h2" sx={impactSectionStyle.title}>
					HexaFort's Impact: Measurable Value for Businesses
				</Typography>

				<Box sx={impactSectionStyle.impactGrid}>
					{impacts.map((impact, index) => (
						<Box key={index} sx={impactSectionStyle.impactItem}>
							<Box sx={impactSectionStyle.iconContainer}>
								<impact.icon sx={impactSectionStyle.icon} />
							</Box>
							<Typography variant="h6" sx={impactSectionStyle.impactTitle}>
								{impact.title}
							</Typography>
							<Typography variant="body2" sx={impactSectionStyle.impactDescription}>
								{impact.description}
							</Typography>
						</Box>
					))}
				</Box>

				<Typography variant="h3" sx={impactSectionStyle.metricsTitle}>
					Our Traction
				</Typography>

				<Box sx={impactSectionStyle.metricsRow}>
					{metrics.map((metric, index) => (
						<Box key={index} sx={impactSectionStyle.metricItem}>
							<Typography variant="h3" sx={impactSectionStyle.metricValue}>
								{metric.value}
							</Typography>
							<Typography variant="h6" sx={impactSectionStyle.metricLabel}>
								{metric.label}
							</Typography>
							<Typography variant="body2" sx={impactSectionStyle.metricDescription}>
								{metric.description}
							</Typography>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default ImpactSection;