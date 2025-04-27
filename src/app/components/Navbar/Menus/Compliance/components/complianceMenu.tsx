'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { complianceItems } from '../../../../../constants/complianceData';
import styles from '../styles/complianceStyles';

interface ComplianceMenuProps {
	onClose?: () => void;
}

const ComplianceMenu: React.FC<ComplianceMenuProps> = ({ onClose }) => {
	const router = useRouter();

	const handleNavigate = (url: string) => {
		let formattedUrl = url;
		if (url.startsWith('/')) {
			formattedUrl = url.substring(1);
		}
		if (!formattedUrl.startsWith('compliance/')) {
			formattedUrl = `compliance/${formattedUrl}`;
		}
		formattedUrl = `/${formattedUrl}`;

		router.push(formattedUrl);
		if (onClose) onClose();
	};
	return (
		<>
			<Typography variant="h5" sx={styles.sectionTitle}>
				Compliance
			</Typography>

			<Typography sx={styles.sectionDescription}>
				Trust and security are foundational to our business. We maintain compliance with major security frameworks and
				regulations to ensure your data is protected to the highest standards.
			</Typography>

			<Grid container spacing={2} sx={styles.itemsGrid}>
				{complianceItems.map((item, index) => (
					<Grid size={{xs:6,sm:4,md:3}}key={index}>
						<Box sx={styles.complianceItem} onClick={() => handleNavigate(item.url)}>
							<Box sx={styles.iconContainer}>
								<Image
									src={item.logo}
									alt={item.title}
									width={45}
									height={45}
									style={{
										maxWidth: '100%',
										height: 'auto',
										filter: 'brightness(0) invert(1)' 
									}}
								/>
							</Box>
							<Typography sx={styles.itemTitle}>{item.title}</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ComplianceMenu;