import React from 'react';
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import whyUsStyles from '../styles/whyUsStyle';
import { whyUsItems } from '../../constants/whyUsData';

const WhyUs = () => {
	return (
		<Box id="why-us" sx={whyUsStyles.box}>
			<Container sx={whyUsStyles.container}>
				<Grid container spacing={3}>
					{whyUsItems.map((item, index) => (
						<Grid  size={{ xs: 12, sm: 6,md:4}} key={index}>
							<Card sx={whyUsStyles.card}>
								<Stack direction="column" alignItems="center" spacing={2}>
									<Box sx={whyUsStyles.iconContainer}>
										<div style={{ position: 'relative', width: '100%', height: '100%' }}>
											<Image
												src={item.logo}
												alt={item.title}
												fill
												style={{ objectFit: 'contain' }}
											/>
										</div>
									</Box>
									<Typography sx={whyUsStyles.cardTitle}>{item.title}</Typography>
									<Typography variant="body1" sx={whyUsStyles.description}>{item.description}</Typography>
								</Stack>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default WhyUs;
