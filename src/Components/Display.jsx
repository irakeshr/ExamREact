import React from 'react';
import { Box, Typography } from '@mui/material';

const Display = ({ expression, result }) => {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: 'right',
        backgroundColor: 'grey.200',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        overflow: 'hidden',
        wordWrap: 'break-word',
      }}
    >
      <Typography variant="h6" color="textSecondary" noWrap>
        {expression || ' '}
      </Typography>
      <Typography variant="h4" color="textPrimary">
        {result}
      </Typography>
    </Box>
  );
};

export default Display;