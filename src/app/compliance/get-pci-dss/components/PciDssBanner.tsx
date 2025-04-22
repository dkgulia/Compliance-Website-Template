'use client';
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import bannerStyle from '../styles/bannerStyle';
import { ArrowForward } from '@mui/icons-material';
import pciDssData from '../constants/pciDssData';
import pciDssLockIcon from '../images/p99b2sofk5nhbo4hemr5.webp';
import Image from 'next/image';

const PciDssBanner: React.FC = () => {
	return (
		<Box sx={bannerStyle.box}>
			<Box sx={bannerStyle.bannerContainer}>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, md: 9 }}>
						<Grid container direction="column" spacing={2}>
							<Grid size={{ xs: 12 }} sx={bannerStyle.titleSection}>
								<Typography variant="h4" sx={bannerStyle.heading}>
									{pciDssData.bannerTitle.split('\n').map((line, index) => (
										<React.Fragment key={index}>
											{line}
											<br />
										</React.Fragment>
									))}
								</Typography>
							</Grid>

							<Grid size={{ xs: 12 }} sx={bannerStyle.descriptionSection}>
								<Typography variant="body1" sx={bannerStyle.description}>
									{pciDssData.bannerDescription.split('\n').map((line, index) => (
										<React.Fragment key={index}>
											{line}
											<br />
										</React.Fragment>
									))}
								</Typography>
							</Grid>

							<Grid size={{ xs: 12 }} sx={bannerStyle.buttonSection}>
								<Button sx={bannerStyle.button} href="/compliance" variant="contained" endIcon={<ArrowForward />}>
									{pciDssData.bannerButtonLabel}
								</Button>
							</Grid>
						</Grid>
					</Grid>

					<Grid size={{ xs: 12, md: 3 }} sx={bannerStyle.imageContainer}>
						<Box sx={bannerStyle.iconWrapper}>
							<Image
								src={pciDssLockIcon}
								alt="PCI DSS Lock"
								width={450}
								height={400}
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default PciDssBanner;