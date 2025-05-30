'use client';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface HexaButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const HexaButton: React.FC<HexaButtonProps> = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#115e59',
        color: '#f9fafb',
        borderRadius: '0.5rem',
        padding: {
          xs: '4px 10px',
          sm: '0.625rem 1.25rem',
          md: '0.5rem 0.8rem',
        },
        textTransform: 'none',
        fontSize: {
          xs: '14px',
          sm: '14rem',
          md:'14px'
        },
        fontWeight: 600,
        border: '1px solid #0d9488',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: '#0f766e',
          transform: 'translateY(-2px)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default HexaButton;