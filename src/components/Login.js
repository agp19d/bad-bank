/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() { 

  // State for managing form input and errors 
  const [usernameInput, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Navigation and Auth context  
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserIcon, setUsername, setBalance } = useAuth();

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the user data from local storage
    const storedUser = JSON.parse(localStorage.getItem(usernameInput));

    // Validate the user credentials
    if (storedUser && password === storedUser.password) {
      setIsLoggedIn(true);
      setUserIcon(<FontAwesomeIcon icon={faUser} />);
      setUsername(storedUser.username);
      setBalance(storedUser.balance);
      navigate('/account'); // Redirect to account page on successful login
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
            onChange={(e) => setUsernameInput(e.target.value)}
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
