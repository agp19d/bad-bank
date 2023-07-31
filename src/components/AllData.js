/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React from 'react';
import { Table, Container } from 'react-bootstrap';

function AllData() {
  // Filter only the keys that represent user data and then parse them
  const users = Object.keys(localStorage)
    .filter((key) => localStorage.getItem(key).includes('username'))
    .map((key) => JSON.parse(localStorage.getItem(key)));

  return (
    <Container>
      <h1>All Data in Store</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AllData;
