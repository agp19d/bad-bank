/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Form, Container, Alert, Card } from 'react-bootstrap';

function Account() {

  // State variables
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('deposit');
  const [error, setError] = useState(null);

  // Context variables
  const { balance, setBalance, username } = useAuth();

  // Transaction handler
  const handleTransaction = (e) => {
    e.preventDefault();

    // Validate amount is geater than zero
    if (amount <= 0) {
      setError('Amount must be greater than zero.');
      return;
    }

    let newBalance = balance;

    // Validate withdrawal amount
    if (transactionType === 'withdraw' && amount > balance) {
      setError('Insufficient funds for withdrawal.');
      return;
    }

    // Update balance based on transaction type
    if (transactionType === 'deposit') {
      newBalance += parseFloat(amount);
    } else if (transactionType === 'withdraw') {
      newBalance -= parseFloat(amount);
    }

    // Retrieve and update user's information in local storage
    const userData = JSON.parse(localStorage.getItem(username));
    userData.balance = newBalance;
    localStorage.setItem(username, JSON.stringify(userData));

    // Update state variables
    setBalance(newBalance);
    setError(null);
    setAmount(0);
  };

  return (
    <Container>
      <h1>Account</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Your Balance</Card.Title>
          <Card.Text className="display-4">${balance.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
      <Form onSubmit={handleTransaction}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Transaction Type</Form.Label>
          <Form.Control as="select" onChange={(e) => setTransactionType(e.target.value)}>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">{transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}</Button>
      </Form>
    </Container>
  );
}

export default Account;
