'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
	Tune as TuneIcon,
	Security as SecurityIcon,
	Insights as InsightsIcon,
	CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import keyCapabilitiesStyle from '../styles/keyCapabilitiesStyle';
import { riskManagementData } from '../constants/riskManagementData';

interface Benefit {
	title: string;
	muiIcon: string;
	description: string;
}

const KeyCapabilitiesLadder: React.FC = () => {
	const benefitsContent = riskManagementData.sections.find(
		(section) => section.Sno === '2' && section.blockType === 'Benefits'
	);
	if (!benefitsContent || !benefitsContent.content) return null;
	const capabilities: Benefit[] = benefitsContent.content.benefits || [];
	const iconMap: Record<string, React.ComponentType<any>> = {
		Tune: TuneIcon,
		Security: SecurityIcon,
		Insights: InsightsIcon,
		CheckCircle: CheckCircleIcon,
	};
	if (capabilities.length === 0) {
		return (
			<Box sx={keyCapabilitiesStyle.box}>
				<Container sx={keyCapabilitiesStyle.container}>
					<Typography>No capabilities found</Typography>
				</Container>
			</Box>
		);
	}

	return (
		<Box id="risk-management-capabilities" sx={keyCapabilitiesStyle.box}>
			<Container sx={keyCapabilitiesStyle.container}>
				<Box sx={keyCapabilitiesStyle.containerBox}>
					<Typography component="h2" variant="h4" sx={keyCapabilitiesStyle.heading}>
						{benefitsContent.content.title || 'Key Capabilities'}
					</Typography>

					<Typography variant="body1" sx={keyCapabilitiesStyle.subHeading}>
						{benefitsContent.content.subtitle ||
							'Powerful features that give you complete control over your risk landscape'}
					</Typography>
				</Box>

				<Grid container spacing={2}>
					{capabilities.map((item, index) => {
						const IconComp = iconMap[item.muiIcon] || CheckCircleIcon;
						return (
							<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
								<Box sx={keyCapabilitiesStyle.stepContainer}>
									<Box sx={keyCapabilitiesStyle.iconContainer}>
										<IconComp sx={keyCapabilitiesStyle.icon} />
									</Box>

									<Box sx={keyCapabilitiesStyle.textContainer}>
										<Typography variant="body1" sx={keyCapabilitiesStyle.title}>
											{item.title}
										</Typography>
										<Typography variant="body2" sx={keyCapabilitiesStyle.description}>
											{item.description}
										</Typography>
									</Box>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default KeyCapabilitiesLadder;
