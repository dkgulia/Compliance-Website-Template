'use client';

import React from 'react';
import { Box } from '@mui/material';
import ComplianceMenu from './components/complianceMenu';
import styles from './styles/complianceStyles';

interface CompliancePageProps {
	onClose?: () => void;
}

export default function CompliancePage({ onClose }: CompliancePageProps = {}) {
	return (
		<Box sx={styles.menuBox}>
			<ComplianceMenu onClose={onClose} />
		</Box>
	);
}