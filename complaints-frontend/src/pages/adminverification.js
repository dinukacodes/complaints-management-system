import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adminverification = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue.toLowerCase() === 'ooad') {
            navigate('/sam'); // Change this to the desired route
        } else {
            alert('Entered text is not correct');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Enter the secret admin key</h2>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                style={styles.input} 
            />
            <button onClick={handleClick} style={styles.button}>
                Submit
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
        marginBottom: '10px',
        color: '#333',
    },
    input: {
        width: '250px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 15px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: 'orange', // Accent color changed to orange
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default Adminverification;
