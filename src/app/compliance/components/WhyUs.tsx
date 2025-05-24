import React from 'react';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import whyUsStyles from '../styles/whyUsStyle';
import { whyUsItems } from '../../constants/whyUsData';

const WhyUs = () => {
	return (
		<Box id="why-us" sx={whyUsStyles.box}>
			<Container sx={whyUsStyles.container}>
				<Grid container spacing={3}>
					{whyUsItems.map((item, index) => (
						<Grid size ={{xs:12,sm:6,md:4}} key={index}>
							<Card sx={whyUsStyles.card}>
								<Box sx={whyUsStyles.iconContainer}>
									<Image
										src={item.logo}
										alt={item.title}
										width={34}
										height={34}
										style={{ objectFit: 'contain' }}
									/>
								</Box>
								<Typography sx={whyUsStyles.cardTitle}>{item.title}</Typography>
								<Typography variant="body1" sx={whyUsStyles.description}>{item.description}</Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default WhyUs;