import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/serviceItemStyles';

interface ServiceItemProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	href: string;
	onClick?: () => void;
	isMobile?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon, href, onClick, isMobile = false }) => {
	if (isMobile) {
		return (
			<Link href={href} passHref style={{ textDecoration: 'none' }}>
				<Box component="a" sx={styles.mobileServiceItem} onClick={onClick}>
					<Box sx={styles.mobileIconBox}>{icon}</Box>
					<Box sx={styles.serviceContent}>
						<Typography sx={styles.mobileServiceTitle}>{title}</Typography>
						<Typography sx={styles.mobileServiceDescription}>{description}</Typography>
					</Box>
				</Box>
			</Link>
		);
	}
	return (
		<Link href={href} passHref style={{ textDecoration: 'none' }}>
			<Box component="a" sx={styles.serviceItem} onClick={onClick}>
				<Box sx={styles.iconBox}>{icon}</Box>
				<Box sx={styles.serviceContent}>
					<Typography sx={styles.serviceTitle}>{title}</Typography>
					<Typography sx={styles.serviceDescription}>{description}</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default ServiceItem;
