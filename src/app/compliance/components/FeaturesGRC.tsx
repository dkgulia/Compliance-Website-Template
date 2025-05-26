import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FeaturesCard from './FeatureGRCCard';
import featuresStyles from '../styles/featureStyle';
import { featuresItems } from '../../constants/featureGRC';

const Features = () => {
	return (
		<>
			<Box id="features" sx={featuresStyles.box}>
				<Container sx={featuresStyles.container}>
					<Box sx={featuresStyles.containerBox}>
						<Typography component="h2" variant="h4" sx={featuresStyles.heading}>
							Core Features of our GRC Platform
						</Typography>
					</Box>
					<Grid container spacing={3}>
						{featuresItems.map((item) => (
							<Grid size={{xs:12,sm:6,md:4}} key={item.title}>
								<FeaturesCard item={item} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Features;