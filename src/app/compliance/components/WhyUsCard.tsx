import React from 'react';
import { Card, Stack, Typography, Box } from '@mui/material';
import whyUsStyles from '../styles/whyUsStyle';
import { SvgIconComponent } from '@mui/icons-material';

export interface WhyUsItem {
	icon: React.ReactElement<SvgIconComponent>;
	title: string;
	description: string;
}

interface WhyUsCardProps {
	item: WhyUsItem;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ item }) => (
	<Card variant="outlined" sx={whyUsStyles.card}>
		<Stack direction="column" spacing={2} alignItems="center">
			<Box sx={whyUsStyles.iconContainer}>{item.icon}</Box>
			<Typography gutterBottom variant="h5" sx={whyUsStyles.typography.title}>
				{item.title}
			</Typography>
			<Typography variant="h6" sx={whyUsStyles.typography.body}>
				{item.description}
			</Typography>
		</Stack>
	</Card>
);

export default WhyUsCard;
