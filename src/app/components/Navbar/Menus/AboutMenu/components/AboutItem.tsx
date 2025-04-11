

import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutItemStyles from '../styles/aboutItemStyles';

interface AboutItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const AboutItem: React.FC<AboutItemProps> = ({ icon, title, onClick }) => {
  return (
    <Box
      sx={aboutItemStyles.aboutItem}
      onClick={onClick}
    >
      <Box sx={aboutItemStyles.itemIcon}>
        {icon}
      </Box>
      <Typography sx={aboutItemStyles.itemText}>
        {title}
      </Typography>
    </Box>
  );
};

export default AboutItem;