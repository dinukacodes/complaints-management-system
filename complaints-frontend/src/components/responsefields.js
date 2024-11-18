import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

      <div>
      <TextField
          id="filled-multiline-flexible"
          label="your email"
          multiline
          maxRows={4}
          variant="filled"
          />
        <TextField
          id="filled-multiline-flexible"
          label="Subject"
          multiline
          maxRows={4}
          variant="filled"
        />

        <TextField
          id="filled-multiline-static"
          label="Body"
          multiline
          rows={4}
          defaultValue="This matter is being resolved . thank you for responding!"
          variant="filled"
        />
      </div>
      <Button variant="outlined" type="submit">Submit your response</Button>

    </Box>
  );
}
