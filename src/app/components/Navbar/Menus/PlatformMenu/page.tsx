'use client';

import React from 'react';
import { Box } from '@mui/material';
import PlatformMenuContent from './components/PlatformMenuContent';
import styles from './styles/platformStyles';

interface PlatformMenuProps {
	onClose?: () => void;
}

const PlatformMenu: React.FC<PlatformMenuProps> = ({ onClose }) => {
	return (
		<Box sx={styles.menuBox}>
			<PlatformMenuContent onClose={onClose} />
		</Box>
	);
};

export default PlatformMenu;