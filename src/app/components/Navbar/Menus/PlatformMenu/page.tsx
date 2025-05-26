'use client';

import React from 'react';
import { Box } from '@mui/material';
import PlatformMenuContent from './components/PlatformMenuContent';
import styles from './styles/platformStyles';

const PlatformMenu = () => {
  const handleClose = () => {};

  return (
    <Box sx={styles.menuBox}>
      <PlatformMenuContent onClose={handleClose} />
    </Box>
  );
};

export default PlatformMenu;