// import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#2B3947",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#00c289' : '#00c289',
  },
}));


export default BorderLinearProgress;

// backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],  (in line no. 10)

