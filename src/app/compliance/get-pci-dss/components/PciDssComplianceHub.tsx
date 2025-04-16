'use client';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import complianceHubStyle from '../styles/complianceHubStyle';
import pciDssData from '../constants/pciDssData';

const PciDssComplianceHub: React.FC = () => {
	return (
		<Box id="pci-dss-compliance-hub" sx={complianceHubStyle.box}>
			<Container sx={complianceHubStyle.container}>
				<Box sx={complianceHubStyle.containerBox}>
					<Typography component="h2" variant="h4" sx={complianceHubStyle.heading}>
						{pciDssData.complianceHubTitle}
					</Typography>
					<Typography variant="body1" sx={complianceHubStyle.subHeading}>
						{pciDssData.complianceHubSubtitle}
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{pciDssData.complianceHubItems.map((item, i) => {
						const IconComp = item.icon;
						return (
							<Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
								<Box sx={complianceHubStyle.stepContainer}>
									<Box sx={complianceHubStyle.iconContainer}>
										<IconComp sx={complianceHubStyle.icon} />
									</Box>
									<Box sx={complianceHubStyle.textContainer}>
										<Typography variant="body1" sx={complianceHubStyle.title}>
											{item.title}
										</Typography>
										<Typography variant="body2" sx={complianceHubStyle.description}>
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

export default PciDssComplianceHub;
