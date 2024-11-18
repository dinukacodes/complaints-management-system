import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Pastcomplaints() {
    const [complaints, setComplaints] = useState([]);

    // Fetch complaints from the backend
    const fetchComplaints = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/complaints');
            setComplaints(response.data); // Assuming response.data contains an array of complaints
        } catch (error) {
            console.error('Error fetching complaints:', error);
        }
    };

    useEffect(() => {
        fetchComplaints(); // Fetch complaints on component mount
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/complaints/${id}`); // Adjust the endpoint as needed
            setComplaints(complaints.filter((complaint) => complaint.id !== id));
        } catch (error) {
            console.error('Error deleting complaint:', error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="past complaints table">
                <caption>Past Complaints</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Subject</TableCell>
                        <TableCell align="right">Body</TableCell>
                        <TableCell align="right">Action</TableCell>
                        <TableCell align="right">Respond</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {complaints.map((complaint) => (
                        <TableRow key={complaint.id}>
                            <TableCell component="th" scope="row">
                                {complaint.id}
                            </TableCell>
                            <TableCell align="right">{complaint.email}</TableCell>
                            <TableCell align="right">{complaint.subject}</TableCell>
                            <TableCell align="right">{complaint.body}</TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDelete(complaint.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    component={Link}
                                    to={`/respond/${complaint.id}/${complaint.email}`} // Pass ID and email to the respond page
                                    variant="contained"
                                    color="primary"
                                >
                                    Respond
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Pastcomplaints;
