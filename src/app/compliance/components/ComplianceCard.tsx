'use client';
import { Card, Stack, Typography, Box, Link } from '@mui/material';
import NextLink from 'next/link';
import complianceStyles from '../styles/complianceStyle';
import { ComplianceFramework } from '../../constants/complianceData';
import Image from 'next/image';
import { COMPLIANCE } from '../../constants/routes';

const ComplianceCard = ({ item }: { item: ComplianceFramework }) => {
	return (
		<Card variant="outlined" sx={complianceStyles.card}>
			<Stack direction="column" justifyContent="center" spacing={2}>
				<Box sx={complianceStyles.logoImageWrapper}>
					<Image src={item.logo} alt={`${item.title} Logo`} fill />
				</Box>

				<Box>
					<Typography variant="h6" sx={complianceStyles.typography.title}>
						{item.title}
					</Typography>
					<Typography variant="body2" sx={complianceStyles.typography.body}>
						{item.description}
					</Typography>
					<br />
					<Link color="primary" href={`${COMPLIANCE}${item.url}`} component={NextLink} sx={complianceStyles.navLink}>
						<Typography variant="body2">{'Learn more ->'}</Typography>
					</Link>
				</Box>
			</Stack>
		</Card>
	);
};

export default ComplianceCard;
