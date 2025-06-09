"use client";
import React from 'react';
import { Box } from '@mui/material';
import PlatformMenuContent from './components/PlatformMenuContent';
import styles from './styles/platformStyles';

interface PlatformMenuContentProps {
  onClose?: () => void;
}

const PlatformMenuContentWrapper: React.FC<PlatformMenuContentProps> = ({ onClose }) => {
  return (
    <Box sx={styles.menuBox}>
      <PlatformMenuContent onClose={onClose} />
    </Box>
  );
};

const PlatformMenuPage = () => {
  const handleClose = () => {};

  return (
    <PlatformMenuContentWrapper onClose={handleClose} />
  );
};

export default PlatformMenuPage;