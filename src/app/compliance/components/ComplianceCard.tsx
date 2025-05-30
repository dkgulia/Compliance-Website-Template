'use client';
import { Card, Stack, Typography, Box, Link } from '@mui/material';
import NextLink from 'next/link';
import complianceStyles from '../styles/complianceStyle';
import { ComplianceFramework } from '../../constants/complianceData';
import Image from 'next/image';

const ComplianceCard = ({ item }: { item: ComplianceFramework }) => {
	return (
		<Card variant="outlined" sx={complianceStyles.card}>
			<Stack direction="column" justifyContent="flex-start" spacing={2.5} sx={complianceStyles.cardStack}>
				<Box sx={complianceStyles.logoImageWrapper}>
					<Image
						src={item.logo}
						alt={`${item.title} Logo`}
						width={60}
						height={45}
						style={complianceStyles.logoImage}
					/>
				</Box>

				<Box sx={complianceStyles.contentBox}>
					<Typography variant="h6" sx={complianceStyles.typography.title}>
						{item.title}
					</Typography>
					<Typography variant="body2" sx={complianceStyles.typography.body}>
						{item.description}
					</Typography>

					<Box sx={complianceStyles.linkBox}>
						<Link
							href={`${item.url}`}
							component={NextLink}
							sx={complianceStyles.navLink}
							underline="none"
						>
							<Typography variant="body2" sx={{ fontWeight: 600 }}>
								Learn more →
							</Typography>
						</Link>
					</Box>
				</Box>
			</Stack>
		</Card>
	);
};

export default ComplianceCard;