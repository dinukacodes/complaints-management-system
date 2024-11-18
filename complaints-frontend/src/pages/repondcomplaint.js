import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook to get route parameters
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios'; // Import axios for HTTP requests

function Respond() {
    const { id, email } = useParams(); // Get the ID and email from the URL
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSendEmail = () => {
        // Send email using axios
        axios.post('http://localhost:8080/api/sendEmail', {
            email: email,
            subject: subject,
            body: body
        })
        .then(response => {
            alert('Email sent successfully');
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Failed to send email');
        });
    };

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <h3>Respond to Complaint ID: {id}</h3>
            <p>Email: {email}</p>
            <TextField
                id="outlined-subject"
                label="Reply Subject"
                placeholder="Enter subject"
                multiline
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
                id="outlined-body"
                label="Reply Body"
                placeholder="Enter your response"
                multiline
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendEmail}
            >
                Send Reply
            </Button>
        </Box>
    );
}

export default Respond;
