import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {  
  const [usernameInput, setUsernameInput] = useState(''); // Renamed to avoid conflict
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserIcon, setUsername } = useAuth(); // Added setUsername

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (usernameInput === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setUserIcon(<FontAwesomeIcon icon={faUser} />);
      setUsername(storedUsername); // Set the username in AuthContext
      navigate('/account'); // Redirect to home page or any other page
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)} // Updated to use renamed state
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
