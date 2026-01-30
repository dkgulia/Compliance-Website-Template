'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsightsIcon from '@mui/icons-material/Insights';
import solutionsSectionStyle from '../styles/solutionsSectionStyle';

const SolutionsSection: React.FC = () => {
	const solutions = [
		{
			title: "Centralized Risk Management",
			description: "Identify, assess, and prioritize risks with our comprehensive risk register.",
			icon: ManageSearchIcon
		},
		{
			title: "Automated Compliance",
			description: "Streamline workflows and automate tasks to reduce manual effort and errors.",
			icon: AutoAwesomeIcon
		},
		{
			title: "Data-Driven Insights",
			description: "Gain real-time visibility into your compliance posture with customizable dashboards.",
			icon: InsightsIcon
		}
	];

	const chartData = [40, 55, 70, 65, 75, 90, 92];

	return (
		<Box sx={solutionsSectionStyle.section}>
			<Box sx={solutionsSectionStyle.headerContainer}>
				<Typography sx={solutionsSectionStyle.tagline}>
					THE SOLUTION
				</Typography>
				<Typography sx={solutionsSectionStyle.title}>
					A Unified GRC Platform
				</Typography>
				<Typography sx={solutionsSectionStyle.subtitle}>
					Comprehensive security management in one powerful platform
				</Typography>
			</Box>

			<Box sx={solutionsSectionStyle.content}>
				<Box sx={solutionsSectionStyle.dashboardContainer}>
					<Box sx={solutionsSectionStyle.dashboardWrapper}>
						<Box sx={solutionsSectionStyle.dashboardHeader}>
							<Typography variant="h6" sx={solutionsSectionStyle.dashboardTitle}>
								ComplianceHub Dashboard
							</Typography>
							<Box sx={solutionsSectionStyle.windowControls}>
								<Box sx={{...solutionsSectionStyle.windowControl, ...solutionsSectionStyle.windowControlRed}} />
								<Box sx={{...solutionsSectionStyle.windowControl, ...solutionsSectionStyle.windowControlYellow}} />
								<Box sx={{...solutionsSectionStyle.windowControl, ...solutionsSectionStyle.windowControlGreen}} />
							</Box>
						</Box>

						<Box sx={solutionsSectionStyle.dashboardContent}>
							<Box sx={solutionsSectionStyle.metricsRow}>
								<Box sx={solutionsSectionStyle.metricBox}>
									<Typography variant="body2" sx={solutionsSectionStyle.metricLabel}>
										Risk Score
									</Typography>
									<Typography variant="h5" sx={solutionsSectionStyle.riskScore}>
										76%
									</Typography>
								</Box>
								<Box sx={solutionsSectionStyle.metricBox}>
									<Typography variant="body2" sx={solutionsSectionStyle.metricLabel}>
										Compliance
									</Typography>
									<Typography variant="h5" sx={solutionsSectionStyle.complianceScore}>
										92%
									</Typography>
								</Box>
								<Box sx={solutionsSectionStyle.metricBox}>
									<Typography variant="body2" sx={solutionsSectionStyle.metricLabel}>
										Tasks
									</Typography>
									<Typography variant="h5" sx={solutionsSectionStyle.taskCount}>
										12
									</Typography>
								</Box>
							</Box>

							<Box sx={solutionsSectionStyle.chartSection}>
								<Typography variant="body2" sx={solutionsSectionStyle.chartTitle}>
									Compliance Trend
								</Typography>
								<Box sx={solutionsSectionStyle.chart}>
									{chartData.map((height, index) => (
										<Box
											key={index}
											sx={{
												...solutionsSectionStyle.chartBar,
												height: `${height}%`,
												opacity: index === chartData.length - 1 ? 1 : 0.7,
											}}
										/>
									))}
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={solutionsSectionStyle.featuresContainer}>
					<Box sx={solutionsSectionStyle.featuresList}>
						{solutions.map((solution, index) => (
							<Box key={index} sx={solutionsSectionStyle.featureItem}>
								<Box sx={solutionsSectionStyle.featureIconContainer}>
									<solution.icon sx={solutionsSectionStyle.featureIcon} />
								</Box>
								<Box sx={solutionsSectionStyle.featureContent}>
									<Typography sx={solutionsSectionStyle.featureTitle}>
										{solution.title}
									</Typography>
									<Typography sx={solutionsSectionStyle.featureDescription}>
										{solution.description}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SolutionsSection;