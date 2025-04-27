'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import costBreakdownStyle from '../styles/costBreakdownStyle';
import hexafortData from '../constant/dataFile';

const CostBreakdown: React.FC = () => {
	const { costBreakdown } = hexafortData;
	const { totalCost, breakdown } = costBreakdown;
	const colors = ['#5EEAD4', '#38B2AC', '#2C7A7B', '#234E52'];
	const total = breakdown.reduce((sum, item) => sum + item.amount, 0);
	const percentages = breakdown.map((item) => (item.amount / total) * 100);
	const radius = 40;
	const circumference = 2 * Math.PI * radius;
	let cumulativePercentage = 0;
	const segments = percentages.map((percentage, index) => {
		const segmentLength = (circumference * percentage) / 100;
		const dashArray = `${segmentLength} ${circumference - segmentLength}`;
		const dashOffset = -circumference * (cumulativePercentage / 100);
		cumulativePercentage += percentage;

		return {
			dashArray,
			dashOffset,
			color: colors[index],
		};
	});

	return (
		<Box sx={costBreakdownStyle.container}>
			<Container maxWidth="xl" disableGutters>
				<Box sx={costBreakdownStyle.contentContainer}>
					<Box sx={costBreakdownStyle.header}>
						<Typography variant="h2" sx={costBreakdownStyle.title}>
							{costBreakdown.title}
						</Typography>
						<Typography sx={costBreakdownStyle.subtitle}>
							Our cost-effective pricing provides maximum value for startups
						</Typography>
					</Box>

					<Box sx={costBreakdownStyle.mainContainer}>
						<Box sx={costBreakdownStyle.chartContainer}>
							<svg viewBox="0 0 100 100" sx={costBreakdownStyle.donutChart}>
								{segments.map((segment, index) => (
									<circle
										key={index}
										cx="50"
										cy="50"
										r={radius}
										fill="transparent"
										stroke={segment.color}
										strokeWidth="12"
										strokeDasharray={segment.dashArray}
										strokeDashoffset={segment.dashOffset}
										style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
										sx={costBreakdownStyle.donutSegment}
									/>
								))}
								<g sx={costBreakdownStyle.centerText}>
									<text
										x="50"
										y="45"
										textAnchor="middle"
										dominantBaseline="middle"
										fill="white"
										fontSize="12"
										fontWeight="bold"
									>
										${totalCost}
									</text>
									{/* <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="3">
										TOTAL COST
									</text> */}
								</g>
							</svg>

							<Box sx={costBreakdownStyle.centerText}>
								{/* <Typography sx={costBreakdownStyle.totalPrice}>${totalCost}</Typography> */}
								{/* <Typography sx={costBreakdownStyle.totalLabel}>TOTAL INVESTMENT</Typography> */}
							</Box>
						</Box>

						<Box sx={costBreakdownStyle.breakdownContainer}>
							<Typography sx={costBreakdownStyle.description}>{costBreakdown.description}</Typography>

							<Box sx={costBreakdownStyle.frameworksList}>
								{breakdown.map((item, index) => (
									<Box key={index} sx={costBreakdownStyle.frameworkItem}>
										<Box sx={costBreakdownStyle.frameworkDetails}>
											<Box
												sx={{
													...costBreakdownStyle.colorIndicator,
													bgcolor: colors[index],
												}}
											/>
											<Typography sx={costBreakdownStyle.frameworkName}>{item.framework}</Typography>
										</Box>
										<Typography sx={costBreakdownStyle.frameworkPrice}>${item.amount}</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Box>

					
				</Box>
			</Container>
		</Box>
	);
};

export default CostBreakdown;
