/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {

  // State variables for form fields and error handling
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  // Navigation hook for redirecting
  const navigate = useNavigate();

  // Handle account creation submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password matching validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Create user object
    const user = {
      username: username,
      email: email,
      password: password,
      balance: 0,
    };

    // Store user in local storage
    localStorage.setItem(username, JSON.stringify(user));

    // Redirect to login page
    navigate('/login');
  };

  return (
    <Container>
      <h1>Create Account</h1>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Create Account</Button>
      </Form>
    </Container>
  );
}

export default CreateAccount;
