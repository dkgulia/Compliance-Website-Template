'use client';

import React from 'react';
import { Box } from '@mui/material';
import ComplianceMenu from './components/complianceMenu';
import styles from './styles/complianceStyles';

export default function CompliancePage() {
	const handleClose = () => {};

	return (
		<Box sx={styles.menuBox}>
			<ComplianceMenu onClose={handleClose} />
		</Box>
	);
}
