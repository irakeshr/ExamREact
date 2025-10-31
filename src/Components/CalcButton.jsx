import React from 'react';
import { Button } from '@mui/material';

const CalcButton = ({ children, onClick, color = 'secondary', variant = 'outlined' }) => {
  return (
    <Button
      fullWidth
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        height: 60,
        fontSize: '1.2rem',
      }}
    >
      {children}
    </Button>
  );
};

export default CalcButton;