import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Buttons() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button component={Link} to="/jam">Technical Issue</Button>  
        <Button component={Link} to="/jam">Customer Service</Button>
        <Button component={Link} to="/jam">Other Issues</Button>
        <Button component={Link} to="/ban">Click to see previous Complaints </Button>

      </ButtonGroup>
    </Box>
  );
}
