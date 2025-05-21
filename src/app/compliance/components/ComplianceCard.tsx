'use client';
import { Card, Stack, Typography, Box, Link } from '@mui/material';
import NextLink from 'next/link';
import complianceStyles from '../styles/complianceStyle';
import { ComplianceFramework } from '../../constants/complianceData';
import Image from 'next/image';
import { COMPLIANCE } from '../../constants/routes';

const ComplianceCard = ({ item }: { item: ComplianceFramework }) => {
	// Explicitly check for ISO 27017 to apply consistent styling
	const isISO27017 = item.title === "ISO 27017";

	return (
		<Card
			variant="outlined"
			sx={{
				...complianceStyles.card,
				// Ensure consistent padding for all cards
				padding: '1.5rem',
				// Ensure consistent height
				minHeight: '280px',
				display: 'flex',
			}}
		>
			{/* Force consistent layout for all cards */}
			<Stack
				direction="column"
				justifyContent="flex-start"
				spacing={2.5}
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				<Box sx={{
					...complianceStyles.logoImageWrapper,
					width: '4rem',
					height: '4rem',
					padding: '0.5rem',
					marginBottom: '0.5rem', // Consistent margin
				}}>
					<Image
						src={item.logo}
						alt={`${item.title} Logo`}
						fill
						style={complianceStyles.logoImage}
					/>
				</Box>

				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6" sx={{
						...complianceStyles.typography.title,
						marginBottom: '0.75rem', // Consistent spacing after title
					}}>
						{item.title}
					</Typography>
					<Typography variant="body2" sx={{
						...complianceStyles.typography.body,
						marginBottom: '1rem', // Consistent spacing after description
					}}>
						{item.description}
					</Typography>

					{/* Position link at bottom of card for consistent layout */}
					<Box sx={{ marginTop: 'auto' }}>
						<Link
							color="primary"
							href={`${COMPLIANCE}${item.url}`}
							component={NextLink}
							sx={complianceStyles.navLink}
						>
							<Typography variant="body2">{'Learn more ->'}</Typography>
						</Link>
					</Box>
				</Box>
			</Stack>
		</Card>
	);
};

export default ComplianceCard;