import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import NextLink from 'next/link';
import optionCardStyles from '../styles/optionCardStyles';
import Image, { StaticImageData } from 'next/image';
import { COMPLIANCE } from '../../constants/routes';

interface ComplianceFramework {
	title: string;
	description: string;
	logo: string | StaticImageData;
	url: string;
}

const ComplianceOptionCard: React.FC<{ option: ComplianceFramework; left?: boolean }> = ({ option, left = false }) => {
	return (
		<Card sx={optionCardStyles.cardHorizontal}>
			<CardContent sx={optionCardStyles.cardContent}>
				<Link href={`${COMPLIANCE}${option.url}`} sx={optionCardStyles.cta} component={NextLink}>
					{left ? '← Previous' : 'Up Next →'}
				</Link>
				<Box sx={optionCardStyles.textContainerHorizontal}>
					<Typography variant="h6" sx={optionCardStyles.titleHorizontal}>
						{option.title}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							...optionCardStyles.descriptionHorizontal,
							typography: { xs: 'body2', sm: 'body1' },
						}}
					>
						{option.description}
					</Typography>
				</Box>
				{/* <Box sx={optionCardStyles.iconContainerBottomRight}>
					<Image src={option.logo} alt={option.title} style={optionCardStyles.imageBottomRight} />
				</Box> */}
			</CardContent>
		</Card>
	);
};

export default ComplianceOptionCard;
