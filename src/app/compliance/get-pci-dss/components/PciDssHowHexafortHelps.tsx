'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PciDssHowHexafortHelpsStyle from '../styles/PciDssHowHexafortHelpsStyle';
import pciDssData from '../constants/pciDssData';

const PciDssHowHexafortHelps = () => {
	return (
		<Box sx={PciDssHowHexafortHelpsStyle.box}>
			<Container sx={PciDssHowHexafortHelpsStyle.container}>
				<Typography component="h2" variant="h4" sx={PciDssHowHexafortHelpsStyle.title}>
					{pciDssData.PciDssHowHexafortHelps}
				</Typography>

				<Typography variant="body1" sx={PciDssHowHexafortHelpsStyle.subtitle}>
					{pciDssData.howHexafortHelpsSubtitle}
				</Typography>

				<Grid container spacing={{ sm: 2, xs: 0.5 }} sx={PciDssHowHexafortHelpsStyle.grid}>
					{pciDssData.howHexafortHelpsSteps.map((step, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
							<Card variant="outlined" sx={PciDssHowHexafortHelpsStyle.card}>
								<Box sx={PciDssHowHexafortHelpsStyle.cardContent}>
									<Box sx={PciDssHowHexafortHelpsStyle.iconContainer}>
										<step.icon sx={PciDssHowHexafortHelpsStyle.icon} />
									</Box>

									<Typography variant="body1" sx={PciDssHowHexafortHelpsStyle.cardText}>
										{step.text}
									</Typography>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default PciDssHowHexafortHelps;
