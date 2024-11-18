import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Textforms({ refreshComplaints }) {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create complaint object
    const complaint = {
      email: email,
      subject: subject,
      body: body
    };
    
    // Send to backend via Axios
    await axios.post('http://localhost:8080/api/complaints', complaint);
    
    // Clear the form
    setEmail('');
    setSubject('');
    setBody('');
    
    // Optionally, refresh the complaint list after submission
    if (refreshComplaints) {
      refreshComplaints();
    }
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} // Form submission handler
    >
      <div>
        <TextField
          id="email"
          label="Your email address"
          multiline
          maxRows={4}
          value={email} // Bind input to state
          onChange={(e) => setEmail(e.target.value)} // Update state on input
          required
        />
        <TextField
          id="subject"
          label="Complaint subject"
          placeholder="Enter subject"
          multiline
          value={subject} // Bind input to state
          onChange={(e) => setSubject(e.target.value)} // Update state on input
          required
        />
        <TextField
          id="body"
          label="Enter your complaint here"
          multiline
          rows={4}
          value={body} // Bind input to state
          onChange={(e) => setBody(e.target.value)} // Update state on input
          required
        />
      </div>
      <Button variant="outlined" type="submit">Submit your complaint</Button>
    </Box>
  );
}
