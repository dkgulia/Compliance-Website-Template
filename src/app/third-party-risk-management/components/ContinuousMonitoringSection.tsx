'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import infoSectionStyle from '../styles/infoSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import monitoringGraph from '../images/third-graph.png';

const ContinuousMonitoringSection: React.FC = () => {
	const { continuousMonitoring } = thirdPartyRiskManagementData;

	return (
		<Box
			component="section"
			sx={{
				...infoSectionStyle.section,
				...infoSectionStyle.alternateBackground,
			}}
		>
			<Container sx={infoSectionStyle.container}>
				<Box
					sx={{
						...infoSectionStyle.contentWrapper,
						...infoSectionStyle.contentWrapperReversed,
					}}
				>
					<Box sx={infoSectionStyle.textContainer}>
						<Typography variant="h2" sx={infoSectionStyle.title}>
							{continuousMonitoring.title}
						</Typography>

						{continuousMonitoring.subtitle && (
							<Typography variant="h5" sx={infoSectionStyle.subtitle}>
								{continuousMonitoring.subtitle}
							</Typography>
						)}

						<Typography variant="body1" sx={infoSectionStyle.description}>
							{continuousMonitoring.description}
						</Typography>

						{continuousMonitoring.subheading && (
							<Typography variant="subtitle1" sx={infoSectionStyle.subheading}>
								{continuousMonitoring.subheading}
							</Typography>
						)}
					</Box>

					<Box sx={infoSectionStyle.imageContainer}>
						<Box
							sx={{
								width: '100%',
								maxWidth: '500px',
								height: '350px',
								position: 'relative',
								borderRadius: '1rem',
								overflow: 'hidden',
							}}
						>
							<Image
								src={monitoringGraph}
								alt="Live graph with spikes and alert notifications"
								fill
								style={{
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
								priority
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ContinuousMonitoringSection;