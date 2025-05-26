import { Card, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import featuresStyles from '../styles/featureStyle';
import { FeatureGRC } from '../../constants/interfaces';

const FeaturesCard = ({ item }: { item: FeatureGRC }) => {
	return (
		<Box sx={featuresStyles.cardContainer}>
			<Card variant="outlined" sx={featuresStyles.card}>
				<Stack direction="column" alignItems="center" spacing={2} sx={{ textAlign: 'center' }}>
					<Box sx={featuresStyles.iconContainer}>{item.icon}</Box>
					<Typography variant="h5" sx={featuresStyles.typography.title}>
						{item.title}
					</Typography>
					<Typography variant="h6" sx={featuresStyles.typography.body}>
						{item.description}
					</Typography>
				</Stack>
			</Card>
		</Box>
	);
};

export default FeaturesCard;
